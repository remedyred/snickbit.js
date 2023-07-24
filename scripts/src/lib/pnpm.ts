#!/usr/bin/env zx

import {arrayWrap, isString, slugify} from './helpers'
import {debug, error, info} from './output'
import {ProcessOutput} from 'zx'
import {PnpmCommandFlagSet, PnpmFlag, PnpmGlobalFlag, PnpmGlobalFlagSet, PnpmRunFlag} from '../types'

export interface RunOptions {
	parallel?: boolean
	'if-present'?: boolean
	stream?: boolean
	recursive?: boolean
}

function makeParams(command: string, args?: string[] | string, options?: RunOptions): Set<string> {
	const flags = new Set<PnpmFlag | string>(options
		? Object.entries(options)
			.map(([key, value]) => {
				if (isString(value)) {
					value = slugify(value)
				}

				let parsedValue: any = false

				if (value === false) {
					key = `no-${key}`
					parsedValue = true
				} else if (value === true) {
					parsedValue = true
				} else if (value) {
					parsedValue = `=${value}`
				}

				return parsedValue ? `--${key}${parsedValue === true ? '' : parsedValue}` : ''
			}).filter(Boolean)
		: [])

	args = arrayWrap(args || [])

	if (!flags.has('--no-color')) {
		flags.add('--color')
	}

	if (flags.has('--recursive')) {
		flags.add('--filter=!./scripts')
	}

	const pnpmGlobalFlags = new Set<PnpmGlobalFlag | string>()
	const pnpmCommandFlags = new Set<PnpmRunFlag | string>()
	const pnpmSubCommandFlags = new Set<string>()

	for (const flag of flags) {
		if (PnpmGlobalFlagSet.some(globalFlag => flag.startsWith(globalFlag))) {
			pnpmGlobalFlags.add(flag)
		} else if (PnpmCommandFlagSet.some(commandFlag => flag.startsWith(commandFlag))) {
			pnpmCommandFlags.add(flag)
		} else {
			pnpmSubCommandFlags.add(flag)
		}
	}

	debug`${JSON.stringify({pnpmGlobalFlags, pnpmCommandFlags, pnpmSubCommandFlags, args})}`

	return new Set([
		...pnpmGlobalFlags,
		command,
		...pnpmCommandFlags,
		...args,
		...pnpmSubCommandFlags
	].filter(param => !!param || typeof param === 'string'))
}

export async function pnpmRun(args: string[] | string, options?: RunOptions): Promise<void> {
	return pnpm('run', args, options)
}

export async function pnpmRecursive(command: string, args: string[] | string, options?: RunOptions & {
	stream: true
	'if-present': true
	recursive: true
}): Promise<void> {
	options = {
		...options,
		stream: true,
		'if-present': true,
		recursive: true
	}

	return pnpm(command, args, options)
}

const notDisplayed = new Set(['--color', '--filter=!./scripts'])

export async function pnpm(command: string, args: string[] | string, options?: RunOptions): Promise<void> {
	const params = makeParams(command, args, options)
	if (params.has('--stream')) {
		params.delete('--stream')
	}
	const stringParams = [...params].filter(p => !notDisplayed.has(p)).join(' ')
	try {
		if (!$.verbose) {
			info`pnpm ${stringParams}`
		}
		await $`pnpm ${[...params]}`.pipe(process.stdout)
	} catch (error_) {
		if (error_ instanceof ProcessOutput) {
			error`PNPM ERROR while running command: pnpm ${stringParams}`
			console.log(error_.stderr || error_.stdout)
			console.trace()
			process.exit(1)
		}
	}
}
