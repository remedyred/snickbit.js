import {createStore, Store, UseStore} from '../src'

describe('createStore', () => {
	let instance: Store
	let useStoreInstance: UseStore
	beforeEach(() => {
		useStoreInstance = createStore()
		instance = useStoreInstance()
	})

	it('should return a function', () => {
		expect(useStoreInstance).toBeInstanceOf(Function)
	})

	it('should return a store instance', () => {
		expect(instance).toBeInstanceOf(Store)
	})

	it('should return the same store instance', () => {
		expect(useStoreInstance()).toBe(instance)
	})

	it('should return a different store instance', () => {
		expect(createStore()()).not.toBe(instance)
	})
})

