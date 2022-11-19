import {Store, StoreOptions} from './Store'

const _states: Record<string, any> = {}
export type UseStore<T extends object = any> = () => Store<T> & T

export function createStore<State extends object = any>(hydration: State = {} as State, options?: Partial<StoreOptions>): UseStore<State> {
	const state = new Store<State>(hydration, options)
	_states[state.$id] = state
	return () => _states[state.$id]
}
