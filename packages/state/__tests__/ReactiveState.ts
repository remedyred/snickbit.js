import {ReactiveState} from '../src'

describe('ReactiveState', () => {
	it('should get and set state properties', () => {
		const state = new ReactiveState({foo: 'bar'})
		expect(state.foo).toBe('bar')
		state.foo = 'baz'
		expect(state.foo).toBe('baz')
	})

	it('should get and set proxy properties', () => {
		const state = new ReactiveState({foo: 'bar'})
		state.baz = 'qux'
		expect(state.baz).toBe('qux')
	})

	it('should return undefined for non-existent properties', () => {
		const state = new ReactiveState()
		expect(state.foo).toBeUndefined()
	})

	it('should call watchers when state properties change', () => {
		const state = new ReactiveState({foo: 'bar'})
		const callback = jest.fn()
		state.$watch('foo', callback)
		state.foo = 'baz'
		expect(callback).toHaveBeenCalledWith('baz')
	})

	it('should emit events when $emit is called', () => {
		const state = new ReactiveState()
		const callback = jest.fn()
		state.$on('test', callback)
		state.$emit('test', 'data')
		expect(callback).toHaveBeenCalledWith('data')
	})
})
