#!/usr/bin/env zx
import {pnpm, RunOptions} from './lib/pnpm'
import {debug, die, error, info, title, warn} from './lib/output'
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
	releaseCI: {
		description: 'Run multi-semantic-release',
		script: 'release:ci'
	},
	quick: {
		description: 'Run all CI tasks [quick]',
		actions: [
			'index',
			'lintFix',
			'build',
			'docs'
		]
	},
	pr: {
		description: 'Run all CI tasks [pre-release/pull request]',
		actions: [
			'quick',
			'check',
			'test'
		]
	},
	ci: {
		description: 'Run only necessary CI tasks',
		actions: [
			'lintFix',
			'build',
			'docs'
		]
	},
	release: {
		description: 'Run only necessary CI tasks and then publish',
		actions: ['ci', 'releaseCI']
	}
}

const hasRun = new Set<string>()
export default void async function main() {
	title`Starting snickbit.js CI Script`

	const actions = argv._?.length ? argv._ : ['ci']
	for (const commandAction of actions) {
		await handleCommandAction(commandAction)
	}
}()

async function handleCommandAction(commandAction: string) {
	if (hasRun.has(commandAction)) {
		warn`Skipping duplicate action: ${commandAction}`
		return
	}

	if (fs.existsSync(commandAction)) {
		return
	}

	if (!(commandAction in actionMap)) {
		error`Unknown action: ${commandAction}. Available actions: ${Object.keys(actionMap).join(', ')}`
		return
	}

	const actionDef = actionMap[commandAction]
	if (!actionDef || (!actionDef.script && !actionDef.actions)) {
		error`No script or actions specified for ${commandAction}`
		return
	}

	if (actionDef.actions) {
		debug`Running group actions for ${commandAction}`
		for (const actionName of actionDef.actions) {
			await (actionMap[actionName] ? handleCommandAction(actionName) : runAction(actionName))
		}
	} else {
		debug`Running action ${commandAction}`
		await runAction(commandAction)
	}
}

async function runAction(commandAction: string) {
	if (!actionMap[commandAction]) {
		die`No action found for ${commandAction}. Available actions: ${Object.keys(actionMap).join(', ')}`
	}

	console.log('')
	title`Command: ${chalk.cyan(commandAction)}`

	hasRun.add(commandAction)
	const {
		description,
		parallel,
		recursive,
		'if-present': ifPresent,
		stream,
		script
	} = actionMap[commandAction]

	if (description) {
		info`${description}`
	}

	const options: RunOptions = {
		parallel,
		recursive,
		stream,
		'if-present': ifPresent
	}

	debug`${JSON.stringify({script, ...options})}`

	await pnpm('run', script, options)
	console.log('')
}
