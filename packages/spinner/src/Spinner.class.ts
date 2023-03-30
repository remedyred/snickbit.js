import {EventEmitter} from 'events'
import {performance} from 'perf_hooks'
import {ansiRegex, stripAnsi} from '@snickbit/ansi'
import {useSymbols} from './styling'
import {objectOnly} from '@snickbit/utilities'
import * as TTY from 'tty'
import readline from 'readline'
import cliSpinners from 'cli-spinners'
import kleur from 'kleur'

// VARS
let internalSpinnerCount = 0

// CONSTANTS
const kDefaultSpinnerName = 'dots' satisfies cliSpinners.SpinnerName
const kLogSymbols = useSymbols()

export interface ISpinnerOptions {

	/**
	 * Spinner name (from cli-spinners lib)
	 *
	 * @default "dots"
	 */
	name?: cliSpinners.SpinnerName

	/**
	 * Spinner frame color
	 *
	 * @default "white"
	 */
	color?: string

	/**
	 * Do not log anything when disabled
	 *
	 * @default true
	 */
	verbose?: boolean

	/**
	 * Show this prefix before all text
	 */
	textPrefix?: string
}

export interface IStartOptions {
	withPrefix?: string
}

export interface IAddOptions extends IStartOptions, ISpinnerOptions {
}

export function spinner(options: ISpinnerOptions = {}) {
	return new Spinner(options)
}

export class Spinner extends EventEmitter {
	private static spinners: Spinner[] = []
	public stream: TTY.WriteStream = process.stdout
	readonly verbose: boolean = true
	protected readonly spinner: cliSpinners.Spinner
	protected linePrefix = ''
	protected textPrefix = ''
	protected color: (stdout: string) => string
	protected interval: NodeJS.Timer | null = null
	protected frameIndex = 0
	protected spinnerPos = 0

	protected _text = ''
	protected _startTime: number
	protected _started = false
	constructor(options: ISpinnerOptions = {}) {
		super()
		this.verbose = options.verbose ?? true
		if (!this.verbose) {
			return
		}

		const {name = kDefaultSpinnerName, color = null, textPrefix = ''} = options

		this.spinner = name in cliSpinners ? cliSpinners[name] : cliSpinners[kDefaultSpinnerName]
		if (color === null) {
			this.color = (str: string) => str
		} else {
			this.color = color in kleur ? kleur[color] : kleur.white
		}

		this.textPrefix = textPrefix
	}

	get text() {
		return this._text
	}

	set text(value: string | undefined) {
		const texts = []
		if (this.textPrefix) {
			texts.push(this.textPrefix)
		}
		if (typeof value === 'string') {
			texts.push(value.replaceAll(/\r?\n|\r/gm, ''))
		}
		if (texts.length > 0) {
			this._text = texts.join(' : ')
		}
	}

	get startTime() {
		return this._startTime
	}

	get started() {
		return this._started
	}

	get elapsedTime() {
		return performance.now() - this._startTime
	}

	/**
	 * Stop all spinners and remove them from the list
	 */
	static reset() {
		internalSpinnerCount = 0
		for (const spinner of Spinner.spinners) {
			spinner.stop()
		}
		Spinner.spinners = []
	}

	/**
	 * Add text to the spinner after the existing text
	 * @param text
	 */
	next(text: string): this {
		if (!this._started) {
			return this.start(text)
		}

		this.textPrefix ||= this.text
		this.text = text

		return this
	}

	/**
	 * Start the spinner
	 * @param text
	 * @param options
	 */
	start(text?: string, options: IStartOptions = {}) {
		this._started = true
		this.text = text
		if (typeof options.withPrefix === 'string') {
			this.linePrefix = options.withPrefix
		}

		this.emit('start')
		this.spinnerPos = internalSpinnerCount++
		this._startTime = performance.now()

		if (!this.verbose) {
			return this
		}

		this.frameIndex = 0
		this.stream.write(`${this.#lineToRender()}\n`)
		this.interval = setInterval(() => this.#renderLine(), this.spinner.interval)

		return this
	}

	/**
	 * Add a new spinner
	 * @param text
	 * @param options
	 */
	add(text?: string, options: IAddOptions = {}) {
		const spinnerOptions = objectOnly(options, ['name', 'color', 'verbose'])
		const startOptions = objectOnly(options, ['withPrefix'])
		const spinner = new Spinner(spinnerOptions).start(text, startOptions)
		Spinner.spinners.push(spinner)
		return spinner
	}

	/**
	 * Stop the spinner with a success state
	 * @param text
	 */
	finish(text?: string) {
		this.#stop(text)
		this.#renderLine(kLogSymbols.success)
		this.emit('finished')

		return this
	}

	/**
	 * Stop the spinner with a failure state
	 * @param text
	 */
	fail(text?: string) {
		this.#stop(text)
		this.#renderLine(kLogSymbols.error)
		this.emit('failed')

		return this
	}

	/**
	 * Stop the spinner with a stop state
	 * @param text
	 */
	stop(text?: string) {
		this.#stop(text)
		this.#renderLine(kLogSymbols.stop)
		this.emit('stopped')

		return this
	}

	/**
	 * Stop all spinners
	 */
	stopAll() {
		for (const spinner of Spinner.spinners) {
			spinner.stop()
		}
	}

	/**
	 * Remove the spinner
	 */
	remove() {
		this.stop()
		Spinner.spinners = Spinner.spinners.filter(s => s !== this)
		internalSpinnerCount--
	}

	/**
	 * Stop the spinner with a warning state
	 * @param text
	 */
	warn(text?: string) {
		this.#stop(text)
		this.#renderLine(kLogSymbols.warning)
		this.emit('warned')

		return this
	}

	#getSpinnerFrame(spinnerSymbol?: string) {
		if (typeof spinnerSymbol === 'string') {
			return spinnerSymbol
		}

		const {frames} = this.spinner
		const frame = frames[this.frameIndex]
		this.frameIndex = ++this.frameIndex < frames.length ? this.frameIndex : 0

		return this.color(frame)
	}

	#lineToRender(spinnerSymbol?: string) {
		const terminalCol = this.stream.columns
		const defaultRaw = `${this.#getSpinnerFrame(spinnerSymbol)} ${this.linePrefix}${this.text}`

		let regexArray: any[] = []
		let count = -1 // -1 because of the first iteration
		while (regexArray.length !== count) {
			count = regexArray.length
			regexArray = defaultRaw
				.slice(0, terminalCol + count)
				.match(ansiRegex()) ?? []
		}
		count += regexArray.reduce((prev, curr) => prev + curr.length, 0)

		return stripAnsi(defaultRaw).length > terminalCol
			? `${defaultRaw.slice(0, terminalCol + count)}\u001B[0m`
			: defaultRaw
	}

	#renderLine(spinnerSymbol?: string) {
		if (!this.verbose) {
			return
		}

		const moveCursorPos = internalSpinnerCount - this.spinnerPos
		readline.moveCursor(this.stream, 0, -moveCursorPos)

		const line = this.#lineToRender(spinnerSymbol)
		readline.clearLine(this.stream, 0)
		this.stream.write(line)
		readline.moveCursor(this.stream, -line.length, moveCursorPos)
	}

	#stop(text?: string) {
		this.text = text
		this._started = false

		if (this.interval !== null) {
			clearInterval(this.interval)
		}
	}
}
