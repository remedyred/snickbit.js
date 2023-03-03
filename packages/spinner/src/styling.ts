
let is_unicode_supported: boolean | undefined

/**
 * Check if unicode is supported
 */
export function isUnicodeSupported(): boolean {
	if (is_unicode_supported === undefined) {
		const tests = {
			is_not_windows_and_not_term_linux: process.platform !== 'win32' && process.env.TERM !== 'linux',
			is_ci: Boolean(process.env.CI),
			is_wt: Boolean(process.env.WT_SESSION),
			is_conemu: process.env.ConEmuTask === '{cmd::Cmder}',
			is_vscode: process.env.TERM_PROGRAM === 'vscode',
			is_terminal_emulator: Boolean(process.env.TERMINAL_EMULATOR),
			is_xterm: process.env.TERM === 'xterm-256color',
			is_alacritty: process.env.TERM === 'alacritty'
		}

		is_unicode_supported = Object.values(tests).some(Boolean)
	}

	return is_unicode_supported
}

interface Symbols {
	error: string
	warning: string
	success: string
	stop: string
}

const symbols: Symbols = {
	// Symbols
	error: '×',
	warning: '⚠',
	success: '✔',
	stop: '⏹'
}

const symbolsUnicode: Symbols = {
	error: '✖',
	warning: '⚠',
	success: '✔',
	stop: '⏹'
}

export function useSymbols(): Symbols {
	if (isUnicodeSupported()) {
		return {
			...symbols,
			...symbolsUnicode
		}
	}
	return symbols
}
