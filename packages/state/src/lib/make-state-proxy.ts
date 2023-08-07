import {SimpleState} from '../SimpleState'

export function makeStateProxy<C extends SimpleState = SimpleState, T extends object = any>(this: C,
	getHook?: (target: C, prop: string | symbol, receiver: any) => any,
	setHook?: (target: C, prop: string | symbol, value: any, receiver: any) => any) {
	return new Proxy(this, {
		get: (target, prop, receiver) => {
			if (prop in target) {
				return target[prop]
			}

			if (prop in this.state) {
				if ('$get' in this) {
					return this.$get(prop as keyof T)
				}
				return this.state[prop]
			}

			if (getHook) {
				const result = getHook(target, prop, receiver)
				if (result) {
					return result
				}
			}

			return Reflect.get(target, prop, receiver)
		},
		set: (target, prop, value, receiver) => {
			if (prop in target) {
				target[prop as keyof typeof target] = value
				return true
			}

			if (prop in this.state) {
				if ('$set' in this) {
					this.$set(prop as keyof T, value)
				} else {
					this.state[prop] = value
				}
				return true
			}

			if (setHook) {
				const result = setHook(target, prop, value, receiver)
				if (result) {
					return result
				}
			}

			return Reflect.set(target, prop, value, receiver)
		}
	}) as C & T
}
