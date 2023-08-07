import {SimpleState} from '../src'

describe('SimpleState', () => {
	it('should get and set state properties', () => {
		const state = new SimpleState({foo: 'bar'})
		expect(state.foo).toBe('bar')
		state.foo = 'baz'
		expect(state.foo).toBe('baz')
	})

	it('should get and set proxy properties', () => {
		const state = new SimpleState({foo: 'bar'})
		state.baz = 'qux'
		expect(state.baz).toBe('qux')
	})

	it('should return undefined for non-existent properties', () => {
		const state = new SimpleState()
		expect(state.foo).toBeUndefined()
	})
})
