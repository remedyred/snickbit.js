import {objectClone, uuid} from '@snickbit/utilities'
import mitt, {Handler} from 'mitt'

export interface StoreOptions {
	name: string
	persist?: string[] | boolean
	getters?: StoreGetters
	actions?: StoreActions
}

export type StoreAction = (this: Store, ...args: any[]) => any
export type StoreGetter = (this: Store) => any

export type StoreActions = Record<string, StoreAction>
export type StoreGetters = Record<string, StoreGetter>

export class Store<State extends object = any> {
	protected state: State = {} as State
	private readonly $state: ProxyHandler<State>

	protected originalState: State = {} as State

	protected proxy: Store

	protected actions: StoreActions = {}
	private readonly $actions: ProxyHandler<StoreActions>

	protected getters: StoreGetters = {}
	private readonly $getters: ProxyHandler<StoreGetters>

	protected ready = false

	private emitter = mitt()

	options: StoreOptions = {
		name: 'default',
		persist: []
	}

	protected id = (...keys: string[]) => [
		'state-store',
		this.$id,
		...keys
	].join('.')

	constructor(hydration?: State, options?: Partial<StoreOptions>) {
		this.$config(options, hydration)

		this.proxy = new Proxy(this, {
			get(target: Store<State>, prop: string, receiver?: any): any {
				if (prop in target) {
					return target[prop]
				}

				if (target.$has(prop)) {
					return target.$get(prop)
				}

				if (prop in target.actions) {
					return target.callAction.bind(target, prop)
				}

				if (prop in target.getters) {
					return target.callGetter.call(target, prop)
				}

				return Reflect.get(target, prop, receiver)
			},
			set(target: Store<State>, prop: string, value?: any) {
				target.$set(prop, value)
				return true
			}
		})

		this.$state = new Proxy(this.state, {
			get: (target: State, prop: string) => {
				if (this.$has(prop)) {
					return this.$get(prop)
				}
			},
			set: (target: State, prop: string, value: any) => {
				this.$set(prop, value)
				return true
			}
		})

		this.$getters = new Proxy(this.getters, {
			get: (target: StoreGetters, key: string) => {
				if (key in target) {
					return this.callGetter(key)
				}
			}
		})

		this.$actions = new Proxy(this.actions, {
			get: (target: StoreActions, key: string) => {
				if (key in target) {
					return this.callAction.bind(this, key)
				}

				throw new Error(`Call to undefined action ${key}`)
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

	protected callAction(name: string, ...args: any[]) {
		return this.actions[name].call(this, ...args)
	}

	protected callGetter(name: string) {
		return this.getters[name]
	}

	$config(options?: Partial<StoreOptions>, hydration?: State) {
		const isPending = !options && !hydration
		options ||= {}
		hydration ||= {} as State
		const {
			actions,
			getters,
			...rest
		} = options
		this.options = {
			...this.options,
			...rest,
			name: options.name || this.options.name || uuid()
		}

		if (!isPending) {
			this.$hydrate(hydration)
		}

		this.actions = actions || {}

		for (const key in getters) {
			this.getters[key] = getters[key].bind(this, this.$state)
		}

		this.ready = !isPending
	}

	$hydrate(hydration: State) {
		this.originalState = objectClone(hydration)
		for (const key in hydration) {
			this.state[key] = hydration[key]
		}
	}

	$get(key: string) {
		return this.state[key]
	}

	$set(key: string, value: any) {
		this.state[key] = value
	}

	$has(key: string) {
		return key in this.state
	}

	$keys() {
		return Object.keys(this.state)
	}

	$patch(data: Partial<State>) {
		for (const key in data) {
			this.$set(key, data[key])
		}
	}

	$reset() {
		this.state = this.originalState
	}

	private on(...args: any[]): void {
		const callback = args.pop()
		this.emitter.on(args.join('.'), callback)
	}

	private off(...args: any[]): void {
		const callback = args.pop()
		this.emitter.off(args.join('.'), callback)
	}

	private emit(...args: any[]): void {
		const data = args.pop()
		this.emitter.emit(args.join('.'), data)
	}

	$on(event: string, callback: Handler) {
		this.on(this.id(event), callback)
	}

	$off(event: string, callback: Handler) {
		this.off(this.id(event), callback)
	}

	$emit(event: string, data: any) {
		this.emit(this.id(event), data)
	}
}
