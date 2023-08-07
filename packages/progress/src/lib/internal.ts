import {template} from 'ansi-styles-template'
import {ProgressConfig} from '../Progress.class'

export interface CLIProgressOptions {
	format: any
	etaBuffer: number
	fps: number
	barCompleteChar: string
	barIncompleteChar: string
	hideCursor: boolean
	linewrap: string

	formatValue?(v, options, type): any
}

export const defaultCliProgressConfig = {
	format: undefined,
	etaBuffer: 10,
	fps: 10,
	barCompleteChar: '\u2588',
	barIncompleteChar: '\u2591',
	hideCursor: true
} as CLIProgressOptions

/**
 * @internal
 */
export const default_progress_options: ProgressConfig = {
	message: 'Working...',
	autoStart: true,
	total: 100,
	current: 0,
	valueFormat: 'number',
	config: {...defaultCliProgressConfig}
}

/**
 * @internal
 */
export function makeProgressFormat(options) {
	let _format = '[{{white}}{bar}{{/white}}]{{reset}} {{magenta}}{percentage}%{{/magenta}} | {{yellow}}ETA: {eta}s{{/yellow}} | {{green}}{value}{{/green}}/{total} | {message}'
	if (options.config.format) {
		_format = options.config.format
	} else if (options.label) {
		_format = `${options.label} | ${_format}`
	}
	return template(_format, {
		leftBrace: '{{',
		rightBrace: '}}'
	})
}

/**
 * @internal
 */
export function makeProgressConfig(options) {
	return {
		...defaultCliProgressConfig,
		...options.config,
		format: makeProgressFormat(options)
	}
}
