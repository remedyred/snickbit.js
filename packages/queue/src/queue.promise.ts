import {CatchCallback, FinallyCallback, ThenCallback} from './definitions'
import {Queue} from './queue'

type PromiseCallback<TValue, TResult> = (value: TValue) => (PromiseLike<TResult> | TResult)
type PromiseCallbackValue<TValue, TResult> = PromiseCallback<TValue, TResult> | null | undefined

/**
 * @noInheritDoc
 */
export class QueuePromise<T> extends Promise<T> {
	private queue: Queue

	constructor(executor: (resolve: (value: PromiseLike<T> | T) => void, reject: (reason?: any) => void) => void, queue: Queue) {
		super(executor)
		this.queue = queue
	}

	/**
	 * Attaches callbacks for the resolution and/or rejection of the Queue as a whole.
	 * @param onfulfilled
	 * @param onrejected
	 */
	// eslint-disable-next-line unicorn/no-thenable
	then<TResult1 = T, TResult2 = never>(onfulfilled?: PromiseCallbackValue<T, TResult1>, onrejected?: PromiseCallbackValue<T, TResult2>): Promise<TResult1 | TResult2> {
		return super.then(onfulfilled, onrejected)
	}

	/**
	 * Attaches a callback for only the rejection of the Queue as a whole.
	 * @param onrejected
	 */
	catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | null | undefined): Promise<T | TResult> {
		return super.catch(onrejected)
	}

	/**
	 * Attaches a callback that is invoked when the Queue as a whole is settled (fulfilled or rejected).
	 * The resolved value cannot be modified from the callback.
	 * @param onfulfilled
	 */
	finally(onfulfilled?: (() => void) | null | undefined): Promise<T> {
		return super.finally(onfulfilled)
	}

	/**
	 * Attaches a callback for the resolution of each Promise or Function in the queue.
	 * @param {ThenCallback} callback
	 */
	thenEach(callback: ThenCallback) {
		this.queue.thenEach(callback)
		return this
	}

	/**
	 * Attaches a callback for the rejection of each Promise or Function in the queue.
	 * @param {CatchCallback} callback
	 */
	catchEach(callback: CatchCallback) {
		this.queue.catchEach(callback)
		return this
	}

	/**
	 * Attaches a callback that is invoked when each Promise or Function in the queue is settled (fulfilled or rejected).
	 * The resolved value cannot be modified from the callback.
	 * @param {FinallyCallback} callback
	 */
	finallyEach(callback: FinallyCallback) {
		this.queue.finallyEach(callback)
		return this
	}
}
