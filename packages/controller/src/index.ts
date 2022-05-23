import {objectClone} from '@snickbit/utilities'
import mitt, {Handler} from 'mitt'

export type ControllerKey = string
export type ControllerValue = any

export interface ControllerOptions {
	name: string
	persist?: boolean | string[]

	[key: string]: any
}

export interface ControllerState {
	[key: ControllerKey]: ControllerValue
}

export type WatchStop = () => void
export type Watchers = Record<string, WatchStop>

export interface DefaultState {
	[key: string | symbol]: any
}

export class Controller<State extends DefaultState> {
	protected state: ControllerState = {}
	protected originalState: ControllerState = {}
	protected proxy: Controller<State>
	protected ready = false
	protected emitter = mitt()
	public $state: ProxyHandler<Controller<State>>

	options: ControllerOptions = {
		name: 'default',
		persist: []
	}

	protected id = (...keys: string[]) => ['controller', this.$id, ...keys].join('.')

	constructor(name: string, options?: Partial<ControllerOptions>, hydration?: ControllerState) {
		this.$config(name, options, hydration)

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

		this.$state = new Proxy(this.state, {
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

	get $id() {
		return this.options.name
	}

	get $ready() {
		return this.ready
	}

	$config(name: string, options?: Partial<ControllerOptions>, hydration?: ControllerState) {
		let isPending = (!options && !hydration)
		if (!options) {
			options = {}
		}
		if (!hydration) {
			hydration = {}
		}
		this.options = {
			...this.options,
			...options,
			name: name || this.options.name || 'default'
		}

		if (!isPending) {
			this.originalState = objectClone(hydration)
			for (let key in hydration) {
				this.state[key] = hydration[key]
			}
		}

		this.ready = !isPending
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

	$patch(data: ControllerState) {
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
