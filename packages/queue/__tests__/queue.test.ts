/* eslint-disable @typescript-eslint/no-empty-function */
import {sleep} from '@snickbit/utilities'
import {Queue, QueueConfiguration} from '../src'
import {ChunkedQueue, DynamicCyclicQueue} from 'lite-fifo'

describe('Queue', () => {
	it('should be a class', () => expect(typeof Queue).toBe('function'))

	it('should have a static config defaultOptions', () => expect(Queue.defaultOptions).toBeDefined())
	it('should have a static config method', () => expect(Queue.config).toBeInstanceOf(Function))

	describe('Queue.config', () => {
		afterEach(() => Queue.config({
			concurrency: 4,
			limit: 0,
			interval: 0,
			strict: false,
			abortOnError: false,
			strategy: 'dynamic',
			throttle: false
		}))

		it('should allow setting default options with config method', () => {
			expect(Queue.defaultOptions.concurrency).toBe(4)
			Queue.config('concurrency', 1)
			expect(Queue.defaultOptions.concurrency).toBe(1)
		})

		it('should allow setting multiple options with config method', () => {
			expect(Queue.defaultOptions.concurrency).toBe(4)
			expect(Queue.defaultOptions.interval).toBe(0)
			Queue.config({concurrency: 1, interval: 1000})
			expect(Queue.defaultOptions.concurrency).toBe(1)
			expect(Queue.defaultOptions.interval).toBe(1000)
		})

		it('should throw an error for invalid options', () => {
			expect(() => Queue.config('invalidOption' as keyof QueueConfiguration, true)).toThrowError('Invalid configuration option')
		})
	})

	it('should be instantiable', () => expect(new Queue()).toBeInstanceOf(Queue))
	it('should have property options', () => expect(new Queue()).toHaveProperty('options'))
	it('should have default concurrency of 4', () => expect(new Queue().options.concurrency).toBe(4))

	it('should have a length property', () => expect(new Queue()).toHaveProperty('length'))
	it('should have an active property', () => expect(new Queue()).toHaveProperty('active'))
	it('should have a pending property', () => expect(new Queue()).toHaveProperty('pending'))

	it('should have a push method', () => expect(new Queue().push).toBeInstanceOf(Function))
	it('should have a run method', () => expect(new Queue().run).toBeInstanceOf(Function))
	it('should have a clear method', () => expect(new Queue().clear).toBeInstanceOf(Function))

	it('should be able to accept a task', () => {
		const queue = new Queue()
		queue.add(() => {})
		expect(queue.length).toBe(1)
	})

	it('should be able to accept multiple tasks', () => {
		const queue = new Queue()
		queue.push(() => {}, () => {})
		expect(queue.length).toBe(2)
	})

	it('should run tasks sequentially', async () => {
		const queue = new Queue()
		const results: number[] = []
		queue.push(() => results.push(1), () => results.push(2))
		await queue.run()
		expect(results).toStrictEqual([1, 2])
	})

	it('should respect concurrency limits', async () => {
		const queue = new Queue({concurrency: 1})
		const results: number[] = []
		queue.push(async () => {
			await sleep(100)
			results.push(1)
		}, async () => {
			await sleep(100)
			results.push(2)
		})
		await queue.run()
		expect(results).toStrictEqual([1, 2])
	})

	it('should handle throttling correctly', async () => {
		const queue = new Queue({limit: 1, interval: 200})
		const results: number[] = []
		const start = Date.now()
		queue.push(async () => {
			await sleep(100)
			results.push(1)
		}, async () => {
			await sleep(100)
			results.push(2)
		})
		await queue.run()
		const duration = Date.now() - start
		expect(results).toStrictEqual([1, 2])
		expect(duration).toBeGreaterThanOrEqual(200)
	})

	it('should abort the queue', () => {
		const queue = new Queue()
		queue.push(() => {})
		try {
			queue.abort('Test abort')
		} catch {
			// do nothing
		}
		expect(queue.pending).toBe(0)
	})

	it('should handle errors in tasks gracefully', async () => {
		const queue = new Queue({abortOnError: false})
		const error = new Error('Test error')
		queue.push(() => {
			throw error
		}, () => {})
		await expect(queue.run()).resolves.not.toThrow()
	})

	it('should fail fast with abortOnError', async () => {
		const queue = new Queue({abortOnError: true})
		queue.push(() => {
			throw new Error('Test error')
		}, () => {})
		await expect(() => queue.run()).rejects.toThrow()
	})

	it('should execute thenEach callback', async () => {
		const queue = new Queue()
		let count = 0
		queue.push(() => {}, () => {})
		queue.thenEach(() => {
			count++
		})
		await queue.run()
		expect(count).toBe(2)
	})

	it('should execute catchEach callback', async () => {
		const queue = new Queue({abortOnError: false})
		let errorCaught = false
		queue.push(() => {
			throw new Error('Test error')
		})
		queue.catchEach(() => {
			errorCaught = true
		})
		await queue.run()
		expect(errorCaught).toBe(true)
	})

	it('should execute finallyEach callback', async () => {
		const queue = new Queue()
		let finalCount = 0
		queue.push(() => {}, () => {})
		queue.finallyEach(() => {
			finalCount++
		})
		await queue.run()
		expect(finalCount).toBe(2)
	})

	it('should be able to run promises out of order', async () => {
		const queue = new Queue()
		const results: number[] = []
		queue.push(async () => {
			await sleep(400)
			results.push(1)
		}, async () => {
			await sleep(100)
			results.push(2)
		}, async () => {
			await sleep(100)
			results.push(3)
		})
		await queue.run()
		expect(results).toStrictEqual([
			2,
			3,
			1
		])
	})

	it('should work through queue, FIFO', async () => {
		const queue = new Queue({autoStart: false})
		const results: number[] = []
		const expected: number[] = []
		const tests = 4

		queue.push(async () => {
			await sleep(300)
			results.push(1)
		})

		for (let index = 2; index < tests; index++) {
			queue.push(async () => {
				await sleep(100)
				results.push(index)
			})
			expected.push(index)
		}
		expected.push(1)

		await queue.run()
		expect(results).toStrictEqual(expected)
	})

	it('should be able to start a new queue when the previous one is finished', async () => {
		const queue = new Queue({autoStart: false})
		const results: string[] = []
		const expected: string[] = []
		const testGroups = 2
		const tests = 4

		for (let tg = 0; tg < testGroups; tg++) {
			for (let t = 0; t < tests; t++) {
				queue.push(async () => {
					await sleep(100)
					results.push(`${tg}-${t}`)
				})
				expected.push(`${tg}-${t}`)
			}
			await queue.run()
		}

		expect(results).toStrictEqual(expected)
	})

	it('should handle strict throttling correctly', async () => {
		const queue = new Queue({limit: 1, interval: 200, strict: true})
		const results: number[] = []
		const start = Date.now()
		queue.push(async () => {
			await sleep(100)
			results.push(1)
		}, async () => {
			await sleep(100)
			results.push(2)
		})
		await queue.run()
		const duration = Date.now() - start
		expect(results).toStrictEqual([1, 2])
		expect(duration).toBeGreaterThanOrEqual(400)
	})

	it('should allow dynamic strategy switching', async () => {
		const queue = new Queue({strategy: 'chunked'})
		expect(queue['queue']).toBeInstanceOf(ChunkedQueue)
		queue.strategy('dynamic')
		expect(queue['queue']).toBeInstanceOf(DynamicCyclicQueue)
	})

	it('should handle promises correctly in add method', async () => {
		const queue = new Queue()
		let result = false
		queue.add(Promise.resolve().then(() => result = true))
		await queue.run()
		expect(result).toBe(true)
	})

	it('should call the waiting resolve method after tasks', async () => {
		const queue = new Queue()
		let resolved = false
		queue.wait().then(() => resolved = true)
		queue.push(sleep(100))
		await queue.run()
		expect(resolved).toBe(true)
	})

	it('should throw error for invalid task', () => {
		const queue = new Queue()
		expect(() => queue.add(null as any)).toThrow('Task must be a function or object')
	})
})
