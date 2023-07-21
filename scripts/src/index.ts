#!/usr/bin/env zx
import {pnpmRun, RunOptions} from './lib/pnpm'
import {debug, error, info, title} from './lib/output'
import 'zx/globals'

$.verbose = argv.verbose || argv.v

export interface ActionDefinition {
	description?: string
	recursive?: boolean
	parallel?: boolean
	'if-present'?: boolean
	stream?: boolean
	script?: string[] | string
	actions?: string[]
}

const actionMap: Record<string, ActionDefinition> = {
	index: {
		description: 'Generate index file(s)',
		parallel: true,
		recursive: true,
		script: 'index'
	},
	lint: {
		description: 'Run linter',
		script: 'lint'
	},
	lintFix: {
		description: 'Run linter and fix issues',
		script: 'lint:fix'
	},
	build: {
		description: 'Build projects',
		recursive: true,
		script: 'build'
	},
	check: {
		description: 'Perform type checking',
		recursive: true,
		parallel: true,
		script: 'typecheck'
	},
	test: {
		description: 'Run tests',
		script: 'test'
	},
	docs: {
		description: 'Generate docs',
		parallel: true,
		recursive: true,
		script: 'docs'
	},
	ci: {
		description: 'Run all CI tasks',
		actions: [
			'lint',
			'build',
			'check',
			'test',
			'docs'
		]
	}
}

export default void async function main() {
	title`Starting snickbit.js CI Script`
	argv._?.splice(0, 1) // remove script name from args
	const actions = argv._?.length ? argv._ : ['ci']

	for (const commandAction of actions) {
		if (fs.existsSync(commandAction)) {
			continue
		}

		if (!(commandAction in actionMap)) {
			error`Unknown action: ${commandAction}`
			continue
		}

		const actionDef = actionMap[commandAction]
		if (!actionDef || (!actionDef.script && !actionDef.actions)) {
			error`No script or actions specified for ${commandAction}`
			continue
		}

		if (actionDef.actions) {
			debug`Running group actions for ${commandAction}`
			for (const actionName of actionDef.actions) {
				await runAction(actionName)
			}
		} else {
			debug`Running action ${commandAction}`
			await runAction(commandAction)
		}
	}
}()

async function runAction(commandAction: string) {
	const {
		description,
		parallel,
		recursive,
		'if-present': ifPresent,
		stream,
		script
	} = actionMap[commandAction]

	title`Command: ${chalk.cyan(commandAction)}`
	if (description) {
		info`${description}`
	}

	const options: RunOptions = {
		parallel,
		recursive,
		stream,
		'if-present': ifPresent
	}

	debug`${JSON.stringify(options)}`

	await pnpmRun(script, options)
}
