import {isString, objectClone} from '@snickbit/utilities'
import {SimpleState} from './SimpleState'
import {makeStateProxy} from './lib/make-state-proxy'

export class State<T extends object = any> extends SimpleState<T> {
	declare protected proxy: State<T> & T
	protected original: T
	protected name?: string

	constructor(name?: string)
	constructor(data?: Partial<T>)
	constructor(name: string, data?: Partial<T>)
	constructor(nameOrData: Partial<T> | string, optionalData?: Partial<T>) {
		let name: string
		let data: Partial<T>
		if (isString(nameOrData)) {
			name = nameOrData
			data = optionalData
		} else {
			data = nameOrData
		}

		super(data)

		this.proxy = makeStateProxy.apply(this)

		this.name = this.constructor.name + (name ? `.${name}` : '')
		this.original = objectClone(this.state)
		return this.proxy
	}

	get $id() {
		return this.id
	}

	get $name() {
		return this.name || this.constructor.name
	}

	get $state() {
		return this.state
	}

	$get(key: keyof T) {
		return this.state[key]
	}

	$set(key: keyof T, value: any) {
		this.state[key as keyof T] = value
	}

	$has(key: string) {
		return key in this.state
	}

	$keys() {
		return Object.keys(this.state)
	}

	$patch(data: Partial<T>) {
		for (const key in data) {
			this.$set(key, data[key])
		}
	}

	$reset() {
		this.state = objectClone(this.original)
	}

	protected makeId(...keys: string[]) {
		return [this.$name, ...keys].join('.')
	}
}
