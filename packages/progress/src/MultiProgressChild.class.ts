import {Progress, ProgressConfig} from './Progress.class'
import {uuid} from '@snickbit/utilities'
import {MultiProgress} from './MultiProgress.class'

export interface MultiProgressChildConfig extends ProgressConfig {
	parent: MultiProgress
	id: string
}

export type MultiProgressChildOptions = Partial<MultiProgressChildConfig>

/**
 * Multi-progress child bar
 */
export class MultiProgressChild extends Progress {
	id: string

	declare options: MultiProgressChildConfig

	/**
	 * @param options
	 * @internal
	 */
	constructor(options?: MultiProgressChildOptions) {
		super(options)
		this.id = options?.id || uuid()
	}

	/**
	 * Remove this child progress bar
	 */
	remove() {
		if (this.options.parent) {
			this.options.parent.remove(this)
		}
	}

	/**
	 * @private
	 * @internal
	 */
	protected setup() {
		if (!this.isDebug) {
			this.bar = this.options.parent.multibar.create()
		}
		return this
	}
}
