import {Store, StoreOptions} from './Store'
import {State} from './State'
import {ReactiveState} from './ReactiveState'

const _stores: Record<string, Store> = {}
const _states: Record<string, State> = {}
const _reactive_states: Record<string, ReactiveState> = {}

export function createStore<T extends object = any>(hydration: T = {} as T, options?: Partial<StoreOptions>): () => Store<T> {
	const store = new Store<T>(hydration, options)
	_stores[store.$id] = store
	return () => _stores[store.$id]
}

export function createState<T extends object = any>(hydration: Partial<T> = {}): () => State<T> {
	const state = new State<T>(hydration)
	_states[state.$id] = state
	return () => _states[state.$id]
}

export function createReactiveState<T extends object = any>(hydration: Partial<T> = {}): () => ReactiveState<T> {
	const reactive_state = new ReactiveState<T>(hydration)
	_reactive_states[reactive_state.$id] = reactive_state
	return () => _reactive_states[reactive_state.$id]
}
