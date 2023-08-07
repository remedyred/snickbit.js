import {uuid} from '@snickbit/utilities'
import {State} from './State'
import {makeStateProxy} from './lib/make-state-proxy'
import mitt, {Handler} from 'mitt'

export type WatchCallback = (value: any) => any
export type WatchStop = () => void
export type Watchers = Record<string, WatchCallback>

export class ReactiveState<T extends object = any> extends State<T> {
	declare protected proxy: ReactiveState<T> & T

	protected emitter = mitt()
	protected watchers = {} as Record<keyof T, Watchers>

	constructor(data: Partial<T> = {}) {
		super(data)

		if (!this.proxy) {
			throw new Error('No ReactiveState proxy')
		}

		this.proxy = makeStateProxy.apply(this)
		return this.proxy
	}

	$set(key: keyof T, value: any) {
		super.$set(key, value)
		this.callWatchers(key, value)
	}

	$on(event: string, callback: Handler) {
		this.emitter.on(this.makeId(event), callback)
	}

	$off(event: string, callback: Handler) {
		this.emitter.off(this.makeId(event), callback)
	}

	$emit(event: string, data: any) {
		this.emitter.emit(this.makeId(event), data)
	}

	$watch(key: keyof T, callback: WatchCallback) {
		const watchers: Watchers = this.watchers[key] || {}

		const id = uuid() as string
		watchers[id] = callback

		this.watchers[key] = watchers

		return () => {
			delete this.watchers[key][id]
		}
	}

	private callWatchers(key: keyof T, value: any) {
		if (this.watchers[key]) {
			for (const id in this.watchers[key]) {
				this.watchers[key][id](value)
			}
		}
	}
}
