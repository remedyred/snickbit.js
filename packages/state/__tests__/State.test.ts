import {State} from '../src'

describe('State', () => {
	it('should get and set state properties', () => {
		const state = new State({foo: 'bar'})
		expect(state.foo).toBe('bar')
		state.foo = 'baz'
		expect(state.foo).toBe('baz')
	})

	it('should get and set proxy properties', () => {
		const state = new State({foo: 'bar'})
		state.baz = 'qux'
		expect(state.baz).toBe('qux')
	})

	it('should return undefined for non-existent properties', () => {
		const state = new State()
		expect(state.foo).toBeUndefined()
	})

	it('should have a unique ID', () => {
		const state1 = new State()
		const state2 = new State()
		expect(state1.$id).not.toBe(state2.$id)
	})

	it('should have a name if provided', () => {
		const state = new State('test')
		expect(state.$name).toBe('State.test')
	})

	it('should get state properties with $get', () => {
		const state = new State({foo: 'bar'})
		expect(state.$get('foo')).toBe('bar')
	})

	it('should set state properties with $set', () => {
		const state = new State({foo: 'bar'})
		state.$set('foo', 'baz')
		expect(state.foo).toBe('baz')
	})
})
