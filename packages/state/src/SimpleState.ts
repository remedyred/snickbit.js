import {uuid} from '@snickbit/utilities'
import {makeStateProxy} from './lib/make-state-proxy'

export interface SimpleState {
	[key: string | symbol]: any
}

export class SimpleState<T extends object = any> {
	protected proxy: SimpleState<T> & T
	protected state = {} as T
	protected id?: string

	constructor(data?: Partial<T>) {
		this.id = uuid()
		this.state = {...data} as T

		this.proxy = makeStateProxy.apply(this)

		console.log(`SimpleState ${this.id} constructor`, {data, state: this.state})

		return this.proxy
	}
}
