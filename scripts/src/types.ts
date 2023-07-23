export enum PnpmCommand {
	add = 'add',
	install = 'install',
	update = 'update',
	remove = 'remove',
	link = 'link',
	unlink = 'unlink',
	import = 'import',
	rebuild = 'rebuild',
	prune = 'prune',
	fetch = 'fetch',
	installTest = 'install-test',
	dedupe = 'dedupe',
	patch = 'patch',
	patchCommit = 'patch-commit',
	patchRemove = 'patch-remove',
	audit = 'audit',
	list = 'list',
	outdated = 'outdated',
	why = 'why',
	licenses = 'licenses',
	run = 'run',
	test = 'test',
	exec = 'exec',
	dlx = 'dlx',
	create = 'create',
	start = 'start',
	env = 'env',
	publish = 'publish',
	pack = 'pack',
	server = 'server',
	store = 'store',
	root = 'root',
	bin = 'bin',
	setup = 'setup',
	init = 'init',
	deploy = 'deploy',
	doctor = 'doctor',
	config = 'config'
}

export enum PnpmGlobalFlag {

	/**
	 * Run the command in the specified directory
	 */
	dir = '--dir',

	/**
	 * @alias dir
	 */
	C = '-C',

	/**
	 * Run as if pnpm was started in the root of the workspace instead of the current working directory.
	 */
	workspaceRoot = '--workspace-root',

	/**
	 * @alias workspaceRoot
	 */
	w = '-w',

	/**
	 * Force color output even when stdout is not a TTY.
	 */
	color = '--color',

	/**
	 * Disable color output.
	 */
	noColor = '--no-color',

	/**
	 * Set the log level. Choices: silent, error, warn, info, debug, trace
	 */
	loglevel = '--loglevel'
}
export const PnpmGlobalFlagSet = [...new Set(Object.values(PnpmGlobalFlag))]

export enum PnpmRunFlag {

	/**
	 * This runs an arbitrary command from each package's "scripts" object. If a package doesn't have the command, it is skipped.
	 * If none of the packages have the command, the command fails.
	 */
	recursive = '--recursive',

	/**
	 * @alias recursive
	 */
	r = '-r',

	/**
	 * You can use the --if-present flag to avoid exiting with a non-zero exit code when the script is undefined.
	 * This lets you run potentially undefined scripts without breaking the execution chain.
	 */
	ifPresent = '--if-present',

	/**
	 * Completely disregard concurrency and topological sorting, running a given script immediately in all matching
	 * packages with prefixed streaming output.This is the preferred flag for long-running processes over many packages,
	 * for instance, a lengthy build process.
	 */
	parallel = '--parallel',

	/**
	 * Stream output from child processes immediately, prefixed with the originating package directory.
	 * This allows output from different packages to be interleaved.
	 */
	stream = '--stream',

	/**
	 * Aggregate output from child processes that are run in parallel, and only print output when the child process
	 * is finished. It makes reading large logs after running pnpm -r <command> with --parallel or with
	 * --workspace-concurrency=<number> much easier (especially on CI). Only --reporter=append-only is supported.
	 */
	aggregateOutput = '--aggregate-output',

	/**
	 * Resume execution from a particular project. This can be useful if you are working with a large
	 * workspace and you want to restart a build at a particular project without running through all of the projects
	 * that precede it in the build order.
	 */
	resumeFrom = '--resume-from',

	/**
	 * Record the result of the scripts executions into a pnpm-exec-summary.json file.
	 */
	reportSummary = '--report-summary',

	/**
	 * Filter packages to run the command on.
	 * @see https://pnpm.io/filtering
	 */
	filter = '--filter',

	/**
	 * @alias filter
	 */
	F = '-F'
}

// merge all command flags into a single array
export const PnpmCommandFlagSet = [...new Set(Object.values(PnpmRunFlag))]

export enum PnpmAllFlag {
	PnpmGlobalFlags,
	PnpmRunFlags
}
export type PnpmFlag = PnpmGlobalFlag | PnpmRunFlag
