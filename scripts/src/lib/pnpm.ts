#!/usr/bin/env zx

import {arrayPull, arrayUnique, arrayWrap, isString, slugify} from './helpers'
import {debug, die, error} from './output'
import {ProcessOutput} from 'zx'

export interface RunOptions {
	parallel?: boolean
	'if-present'?: boolean
	stream?: boolean
	recursive?: boolean
}

function makeParams(command: string, args?: string[] | string, options?: RunOptions) {
	const optionParams = options
		? arrayUnique(Object.entries(options)
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
			}).filter(Boolean))
		: []

	args = arrayWrap(args || [])

	const pnpmOptions: string[] = []
	const availablePnpmOptions = [
		'--recursive',
		'--aggregate-output',
		'--stream',
		'--report-summary',
		'-C',
		'--dir',
		'-w',
		'--workspace-root',
		'--color',
		'--no-color',
		'--loglevel'
	]

	for (const pnpmOption of availablePnpmOptions) {
		if (optionParams.includes(pnpmOption)) {
			pnpmOptions.push(arrayPull(optionParams, pnpmOption))
		}
	}

	if (!pnpmOptions.includes('--no-color')) {
		pnpmOptions.push('--color')
	}

	debug`${JSON.stringify({pnpmOptions, optionParams, args})}`

	return [
		command,
		...pnpmOptions,
		...optionParams,
		...args
	].filter(param => !!param || typeof param === 'string')
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

export async function pnpm(command: string, args: string[] | string, options?: RunOptions): Promise<void> {
	const params = makeParams(command, args, options)
	try {
		await $`pnpm ${params}`.pipe(process.stdout)
	} catch (error_) {
		if (error_ instanceof ProcessOutput) {
			error`PNPM ERROR while running command: pnpm ${params}`
			console.log(error_.stderr || error_.stdout)
			process.exit(1)
		}
	}
}
