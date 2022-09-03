import {objectClone, uuid} from '@snickbit/utilities'
import mitt, {Handler} from 'mitt'

export type WatchCallback = (value: any) => any
export type WatchStop = () => void
export type Watchers = Record<string, WatchCallback>

export class Controller<T extends object = any, D = Partial<T>> {
	protected state: T

	protected originalState: T

	protected proxy: Controller<T>

	protected emitter = mitt()

	protected watchers: Record<keyof T, Watchers>

	public $state: ProxyHandler<Controller<T>> & T

	persistable: string[] = []

	protected id = (...keys: string[]) => ['controller', this.$name, ...keys].join('.')

	constructor(data: T = {} as T) {
		this.originalState = objectClone(data) as T
		this.state = {} as T
		this.$patch(data as unknown as D)

		this.proxy = new Proxy(this, {
			get(target: Controller<T>, prop: string, receiver?: any): any {
				if (prop in target) {
					return target[prop]
				}

				if (target.$has(prop)) {
					return target.$get(prop as keyof T)
				}

				return Reflect.get(target, prop, receiver)
			},
			set(target: Controller<T>, prop: string, value?: any) {
				target.$set(prop as keyof T, value)
				return true
			}
		})

		this.$state = new Proxy(this.state as any, {
			get: (target: Controller<T>, prop: string) => {
				if (this.$has(prop)) {
					return this.$get(prop as keyof T)
				}
			},
			set: (target: Controller<T>, prop: string, value: any) => {
				this.$set(prop as keyof T, value)
				return true
			}
		})

		return this.proxy
	}

	private callWatchers(key: keyof T, value: any) {
		if (this.watchers[key]) {
			for (const id in this.watchers[key]) {
				this.watchers[key][id](value)
			}
		}
	}

	get $name() {
		return this.constructor.name
	}

	$get(key: keyof T) {
		return this.state[key]
	}

	$set(key: keyof D | keyof T, value: any) {
		this.state[key as keyof T] = value
		this.callWatchers(key as keyof T, value)
	}

	$has(key: string) {
		return key in this.state
	}

	$keys() {
		return Object.keys(this.state)
	}

	$patch(data: D) {
		for (const key in data) {
			this.$set(key, data[key])
		}
	}

	$reset() {
		Object.assign(this.state, this.originalState)
	}

	$on(event: string, callback: Handler) {
		this.emitter.on(this.id(event), callback)
	}

	$off(event: string, callback: Handler) {
		this.emitter.off(this.id(event), callback)
	}

	$emit(event: string, data: any) {
		this.emitter.emit(this.id(event), data)
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
}
