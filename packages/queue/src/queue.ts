import {sleep} from '@snickbit/utilities'
import {ChunkedQueue, DynamicCyclicQueue} from 'lite-fifo'
import {
	CatchCallback,
	FinallyCallback,
	QueueConfiguration,
	QueueOption,
	QueueOptions,
	QueueOptionsValue,
	QueueTask,
	ThenCallback
} from './definitions'
import {AbortQueueError, QueueException} from './errors'
import {QueuePromise} from './queue.promise'

interface QueueTaskDefinition {
	task: QueueTask
	thisArg?: any
	args?: any[]
}

interface QueueTicks {
	current: number
	active: number
	strict: number[]
}

type Waiting = {
	resolve(value: unknown): void
	reject(error: unknown): void
	promise: Promise<unknown>
}

interface QueueHandlers {
	then?: ThenCallback
	thenEach?: ThenCallback
	finally?: FinallyCallback
	finallyEach?: FinallyCallback
	catch?: CatchCallback
	catchEach?: CatchCallback
}

const defaultOptions: QueueConfiguration = {
	concurrency: 4,
	limit: 0,
	interval: 0,
	strict: false,
	abortOnError: false,
	strategy: 'dynamic',
	throttle: false,
	autoStart: true
}

const defaultQueueTicks: QueueTicks = {
	current: 0,
	active: 0,
	strict: []
}

export class Queue {
	static readonly defaultOptions: QueueConfiguration = {...defaultOptions}
	readonly options: QueueConfiguration
	private tasks = 0
	private results: any[] = []
	private queue: ChunkedQueue | DynamicCyclicQueue
	private aborted = false
	private processes = 0
	private process: QueuePromise<any> | null = null
	private handlers: QueueHandlers = {}
	private ticks: QueueTicks = {...defaultQueueTicks}
	private waiting: Waiting | null = null
	private reject: ((error: QueueException) => void) | ((reason?: any) => void) | undefined

	constructor(options?: QueueOptions) {
		this.options = {...Queue.defaultOptions, ...options}
		this.options.throttle = !!this.options.limit && !!this.options.interval
		this.reset()
	}

	get length(): number {
		return this.tasks
	}

	get active(): number {
		return this.processes
	}

	get pending(): number {
		return this.queue.size()
	}

	static config(optionOrOptions: QueueOption | QueueOptions, value?: QueueOptionsValue): void {
		const options: any = typeof optionOrOptions === 'string' ? {[optionOrOptions]: value} : optionOrOptions
		for (const option in options) {
			if (option in Queue.defaultOptions) {
				Queue.defaultOptions[option] = options[option]
			} else {
				throw new QueueException(`Invalid configuration option: ${option}. Valid options are: ${Object.keys(Queue.defaultOptions).join(', ')}`)
			}
		}
	}

	wait() {
		if (this.waiting?.promise) {
			return this.waiting.promise
		}

		const waiting: Partial<Waiting> = {}
		waiting.promise = new Promise((resolve, reject) => {
			waiting.resolve = resolve
			waiting.reject = reject
		})

		this.waiting = waiting as Waiting
		return this.waiting.promise
	}

	push(...tasks: QueueTask[]): this {
		for (const task of tasks) {
			this.tasks++
			this.queue.enqueue({task})
		}

		if (this.options.autoStart) {
			this.run()
		}

		return this
	}

	add(task: QueueTask, thisArgOrArgs?: any[] | any, args?: any[]): this {
		if (!task) {
			throw new QueueException('Task must be a function or object')
		}

		const taskDefinition: QueueTaskDefinition = {
			task,
			thisArg: Array.isArray(thisArgOrArgs) ? undefined : thisArgOrArgs,
			args: Array.isArray(thisArgOrArgs) ? thisArgOrArgs : args
		}
		this.tasks++
		this.queue.enqueue(taskDefinition)

		if (this.options.autoStart) {
			this.run()
		}

		return this
	}

	clear(): void {
		this.queue.clear()
	}

	abort(reason?: string): void {
		this.aborted = true
		this.ticks.strict.splice(0)
		this.queue.clear()

		if (this.reject) {
			this.reject(new AbortQueueError(reason))
		}
	}

	abortOnError(abortOnError: boolean): this {
		this.options.abortOnError = abortOnError
		return this
	}

	concurrency(concurrency: number): this {
		this.options.concurrency = concurrency
		return this
	}

	throttle(limit: number, interval: number, strict?: boolean): this {
		this.options.limit = limit
		this.options.interval = interval
		this.options.throttle = !!this.options.limit && !!this.options.interval
		if (strict !== undefined) {
			this.options.strict = strict
		}
		return this
	}

	strategy(strategy: 'chunked' | 'dynamic'): this {
		this.options.strategy = strategy
		return this
	}

	run(): QueuePromise<any> {
		this.process ||= new QueuePromise(async (resolve, reject) => {
			this.reject = reject
			this.processes = 0
			const promises: Promise<any>[] = []

			while (this.queue.size() > 0) {
				const task = this.queue.dequeue()
				if (this.aborted || !task) {
					break
				}

				if (this.options.concurrency >= 0 && this.processes >= this.options.concurrency) {
					await this.wait()
				}

				this.processes++
				promises.push(this.executeTask(task))

				while (this.queue.size() === 0 && this.processes > 0) {
					await this.wait()
				}
			}

			await Promise.all(promises)
			resolve(this.results)
			this.reset()
		}, this)

		return this.process
	}

	thenEach(callback: ThenCallback): this {
		this.handlers.thenEach = callback
		return this
	}

	catchEach(callback: CatchCallback): this {
		this.handlers.catchEach = callback
		return this
	}

	finallyEach(callback: FinallyCallback): this {
		this.handlers.finallyEach = callback
		return this
	}

	private reset() {
		this.processes = 0
		this.process = null
		this.tasks = 0
		this.waiting = null
		this.handlers = {}
		this.ticks = {...defaultQueueTicks}
		this.aborted = false
		this.queue = this.options.strategy === 'dynamic' ? new DynamicCyclicQueue() : new ChunkedQueue()
	}

	private windowedDelay(): number {
		const now = Date.now()
		if (now - this.ticks.current > this.options.interval) {
			this.ticks.active = 1
			this.ticks.current = now
			return 0
		}
		if (this.ticks.active < this.options.limit) {
			this.ticks.active++
		} else {
			this.ticks.current += this.options.interval
			this.ticks.active = 1
		}
		return this.ticks.current - now
	}

	private strictDelay(): number {
		const now = Date.now()
		if (this.ticks.strict.length < this.options.limit) {
			this.ticks.strict.push(now)
			return 0
		}

		const earliestTime = (this.ticks.strict.shift() ?? 0) + this.options.interval
		if (now >= earliestTime) {
			this.ticks.strict.push(now)
			return 0
		}

		this.ticks.strict.push(earliestTime)
		return earliestTime - now
	}

	private abortTask(error?: any): void {
		if (this.waiting) {
			this.waiting.reject(new QueueException('Queue has been aborted'))
		}
		throw new AbortQueueError(error)
	}

	async next(force = false): Promise<any> {
		if (this.queue.size() > 0) {
			const task = this.queue.dequeue()
			if (this.aborted || !task) {
				return
			}

			if (force || (this.options.concurrency >= 0 && this.processes >= this.options.concurrency)) {
				await this.wait()
			}

			this.processes++
			return this.executeTask(task)
		}
	}

	private async executeTask(taskDefinition: QueueTaskDefinition): Promise<void> {
		let result: any
		if (!taskDefinition) {
			throw new QueueException('Task definition is undefined')
		}

		if (this.options.throttle) {
			await sleep(this.options.strict ? this.strictDelay() : this.windowedDelay())
		}

		if (this.aborted) {
			this.abortTask()
		}

		try {
			result = await (typeof taskDefinition.task === 'function'
				? Promise.resolve(taskDefinition.task.apply(taskDefinition.thisArg, taskDefinition.args))
				: Promise.resolve(taskDefinition.task))

			this.processes--
			this.handlers.thenEach && await Promise.resolve(this.handlers.thenEach(result))
			this.handlers.finallyEach && await this.handlers.finallyEach()
		} catch (error) {
			this.handlers.catchEach && await Promise.resolve(this.handlers.catchEach(new QueueException(error)))
			this.handlers.finallyEach && await this.handlers.finallyEach()
			this.options.abortOnError && this.abortTask(error)
		}

		if (this.waiting?.promise) {
			await Promise.resolve(this.waiting.promise)
			this.waiting.resolve(result)
			this.waiting = null
		}

		this.results.push(result)
	}
}

export function queue(options?: QueueOptions): Queue {
	return new Queue(options)
}
