import mitt, {Handler} from 'mitt'
import {objectClone} from '@snickbit/utilities'

export type ControllerKey = string | symbol
export type ControllerValue = any

export type WatchStop = () => void
export type Watchers = Record<string, WatchStop>

export interface ControllerState {
	[key: ControllerKey]: ControllerValue
}

export class Controller<State = ControllerState> {
	protected state = {} as State
	protected originalState = {} as State
	protected proxy: Controller<State>
	protected emitter = mitt()
	public $state: ProxyHandler<Controller<State>>

	persistable: string[] = []

	protected id = (...keys: string[]) => ['controller', this.$name, ...keys].join('.')

	constructor(data: Partial<State> = {}) {

		this.originalState = objectClone(data) as State
		for (let key in data) {
			this.state[key] = data[key]
		}

		this.proxy = new Proxy(this, {
			get(target: Controller<State>, prop: string, receiver?: any): any {
				if (prop in target) {
					return target[prop]
				}

				if (target.$has(prop)) {
					return target.$get(prop)
				}

				return Reflect.get(target, prop, receiver)
			},
			set: function (target: Controller<State>, prop: string, value?: any) {
				target.$set(prop, value)
				return true
			}
		})

		this.$state = new Proxy(this.state as ControllerState, {
			get: (target: Controller<State>, prop: string) => {
				if (this.$has(prop)) {
					return this.$get(prop)
				}
				return undefined
			},
			set: (target: Controller<State>, prop: string, value: any) => {
				this.$set(prop, value)
				return true
			}
		})

		return this.proxy
	}

	get $name() {
		return this.constructor.name
	}

	$get(key: ControllerKey) {
		return this.state[key]
	}

	$set(key: ControllerKey, value: ControllerValue) {
		this.state[key] = value
	}

	$has(key: ControllerKey) {
		return key in this.state
	}

	$keys() {
		return Object.keys(this.state)
	}

	$patch(data: State) {
		for (let key in data) {
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
}
