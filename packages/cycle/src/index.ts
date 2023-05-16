import {arrayShuffle, isString} from '@snickbit/utilities'
import * as presets from './presets'

export type Preset = keyof typeof presets

export class Cycle<T = any> {
	protected started: boolean

	protected items: T[] = []

	protected index = 0

	constructor(items?: T[])
	constructor(preset?: Preset)
	constructor(itemsOrPreset?: Preset | T[])
	constructor(itemsOrPreset?: Preset | T[]) {
		if (!itemsOrPreset) {
			this.items = []
		} else if (Array.isArray(itemsOrPreset)) {
			this.items = [...itemsOrPreset]
		} else if (isString(itemsOrPreset)) {
			this.items = presets[itemsOrPreset] as T[]
		} else {
			throw new TypeError('Invalid type for items, expected array or string')
		}
	}

	get prevIndex() {
		return (this.index - 1 + this.items.length) % this.items.length
	}

	get nextIndex() {
		return (this.index + 1) % this.items.length
	}

	get currentIndex() {
		return this.index
	}

	get firstIndex() {
		return 0
	}

	get lastIndex() {
		return this.items.length - 1
	}

	getIndex(index: number, save = true) {
		if (save) {
			this.index = index
		}
		this.started = true
		return this.items[index]
	}

	next(save?: boolean) {
		return this.getIndex(this.started ? this.nextIndex : this.currentIndex, save)
	}

	prev(save?: boolean) {
		return this.getIndex(this.prevIndex, save)
	}

	first(save = false) {
		return this.getIndex(this.firstIndex, save)
	}

	last(save = false) {
		return this.getIndex(this.lastIndex, save)
	}

	current() {
		return this.items[this.currentIndex]
	}

	get(index: number, save = false) {
		return this.getIndex(index % this.items.length, save)
	}

	set(index: number, value: T) {
		this.items[index] = value
	}

	push(value: T) {
		this.items.push(value)
	}

	remove(value: T) {
		this.items.splice(this.items.indexOf(value), 1)
	}

	shuffle() {
		this.items = arrayShuffle(this.items)
	}
}

export function cycle<T = any>(items?: T[]): Cycle
export function cycle(prefix?: Preset): Cycle
export function cycle<T = any>(itemsOrPreset?: T[] | string): Cycle<T> {
	return new Cycle<T>(itemsOrPreset as any)
}
