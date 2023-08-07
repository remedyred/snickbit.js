import {parseOptions, uuid} from '@snickbit/utilities'
import {Progress, ProgressOptions} from './Progress.class'
import {MultiProgressChild} from './MultiProgressChild.class'
import {makeProgressConfig} from './lib/internal'
import cliProgress, {MultiBar} from 'cli-progress'
import out from '@snickbit/out'

export type MultiProgressBars = Record<string, MultiProgressChild>

/**
 * Multi-Progress bar. Uses cli-progress to create multiple progress bars.
 * @see https://github.com/npkgz/cli-progress
 */
export function multiProgress(options?: ProgressOptions): MultiProgress {
	return new MultiProgress(options)
}

/**
 * Multi-Progress bar. Uses cli-progress to create multiple progress bars.
 * @see https://github.com/npkgz/cli-progress
 */
export class MultiProgress extends Progress {
	id: string
	bars: MultiProgressBars
	multibar: MultiBar

	constructor(options?: ProgressOptions) {
		super(options)
		this.id = uuid()
		this.bars = {}
		this.out = this.options.out || out.prefix(this.options.name || 'multi-progress', 1)
		this.setup()
	}

	/**
	 * Create a child progress bar
	 */
	create(options?: ProgressOptions): MultiProgressChild {
		options = parseOptions(options, this.options)
		const id = uuid()
		this.bars[id] = new MultiProgressChild({
			...options,
			parent: this,
			id
		})

		this.bars[id].start()
		return this.bars[id]
	}

	/**
	 * Stop all child progress bars
	 */
	stop(...messages: any[]): this {
		this.multibar.stop()
		if (messages.length) {
			this.out.info(...messages)
		}
		return this
	}

	/**
	 * Remove a child progress bar
	 */
	remove(instance: MultiProgressChild): this {
		this.multibar.remove(instance.bar)
		delete this.bars[instance.id]
		return this
	}

	reset() {
		for (const instance of Object.values(this.bars)) {
			instance.stop()
			this.remove(instance)
		}
		this.bars = {}
	}

	protected setup(): this {
		if (!this.out.isVerbose() && this.id) {
			this.multibar = new cliProgress.MultiBar(makeProgressConfig(this.options), cliProgress.Presets.shades_classic)
		}
		return this
	}
}
