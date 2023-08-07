import {objectClone, uuid} from '@snickbit/utilities'
import {ReactiveState} from './ReactiveState'
import {makeStateProxy} from './lib/make-state-proxy'

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

export class Store<T extends object = any> extends ReactiveState<T> {
	declare protected proxy: Store<T> & T
	options: StoreOptions = {
		name: 'default',
		persist: []
	}

	persistable: string[] = []

	protected actions: StoreActions = {}
	protected getters: StoreGetters = {}
	protected ready = false
	private readonly $actions: ProxyHandler<StoreActions>
	private readonly $getters: ProxyHandler<StoreGetters>

	constructor(data?: T, options?: Partial<StoreOptions>) {
		super(data)
		this.$config(options, data)

		this.proxy = makeStateProxy.apply(this, (target: Store<T>, prop) => {
			if (prop in target.actions) {
				return target.callAction.bind(target, prop)
			}

			if (prop in target.getters) {
				return target.callGetter.call(target, prop)
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

	get $ready() {
		return this.ready
	}

	$config(options?: Partial<StoreOptions>, data?: T) {
		const isPending = !options && !data
		options ||= {}
		data ||= {} as T
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
			this.$hydrate(data)
		}

		this.actions = actions || {}

		for (const key in getters) {
			this.getters[key] = getters[key].bind(this, this.$state)
		}

		this.ready = !isPending
	}

	$hydrate(hydration: T) {
		this.original = objectClone(hydration)
		for (const key in hydration) {
			this.state[key] = hydration[key]
		}
	}

	protected callAction(name: string, ...args: any[]) {
		return this.actions[name].call(this, ...args)
	}

	protected callGetter(name: string) {
		return this.getters[name]
	}
}
