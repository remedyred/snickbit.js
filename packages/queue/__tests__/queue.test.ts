/* eslint-disable @typescript-eslint/no-empty-function */
import {sleep} from '@snickbit/utilities'
import {Queue} from '../src'

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
	})

	it('should be instantiable', () => expect(new Queue()).toBeInstanceOf(Queue))
	it('should have property options', () => expect(new Queue()).toHaveProperty('options'))
	it('should have default concurrency of 4', () => expect(new Queue().options.concurrency).toBe(4))

	it('should have a length property', () => expect(new Queue()).toHaveProperty('length'))
	it('should have a active property', () => expect(new Queue()).toHaveProperty('active'))
	it('should have a pending property', () => expect(new Queue()).toHaveProperty('pending'))

	it('should have a push method', () => expect(new Queue().push).toBeInstanceOf(Function))
	it('should have a run method', () => expect(new Queue().run).toBeInstanceOf(Function))
	it('should have a clear method', () => expect(new Queue().clear).toBeInstanceOf(Function))
	it('should have a clear method', () => expect(new Queue().clear).toBeInstanceOf(Function))

	it('should be able to accept a task', () => {
		const queue = new Queue()
		queue.add(() => {
		})
		expect(queue.length).toBe(1)
	})

	it('should be able to accept multiple tasks', () => {
		const queue = new Queue()
		queue.push(() => {
		})
		queue.push(() => {
		})
		expect(queue.length).toBe(2)
	})

	it('should be able to accept multiple tasks', () => {
		const queue = new Queue()
		queue.push(() => {
		},
		() => {
		})
		expect(queue.length).toBe(2)
	})

	it('should be able to run a task', () => {
		const queue = new Queue()
		queue.push(() => {
		})
		queue.run().then(() => expect(queue.active).toBe(0)).catch(() => {
			throw new Error('Queue run failed')
		})
	})

	it('should be able to run multiple tasks', () => {
		const queue = new Queue()
		queue.add(() => {
		})
		queue.add(() => {
		})
		queue.run().then(() => expect(queue.active).toBe(0)).catch(() => {
			throw new Error('Queue run failed')
		})
	})

	it('should be able to run a hook after each task using thenEach', async () => {
		const queue = new Queue()
		let count = 0
		queue.push(() => {
		})
		queue.push(() => {
		})
		queue.run().thenEach(() => {
			count++
		}).then(() => expect(count).toBe(2)).catch(() => {
			throw new Error('Queue run failed')
		})
	})

	it('should be able to run promises out of order', async () => {
		const queue = new Queue()
		const results: number[] = []
		queue.push(async () => {
			await sleep(400)
			results.push(1)
		},
		async () => {
			await sleep(100)
			results.push(2)
		})
		queue.push(async () => {
			await sleep(100)
			results.push(3)
		})
		await queue.run()
		expect(results).toStrictEqual([2, 3, 1])
	})

	it('should work through queue, fifo', async () => {
		const queue = new Queue({autoStart: false})
		const results: number[] = []
		const expected: number[] = []
		const tests = 4

		queue.push(async () => {
			await sleep(300)
			results.push(1)
		})

		for (let i = 2; i < tests; i++) {
			queue.push(async () => {
				await sleep(100)
				results.push(i)
			})
			expected.push(i)
		}
		expected.push(1)

		await queue.run()
		expect(results).toStrictEqual(expected)
	})
})
