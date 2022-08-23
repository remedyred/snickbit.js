import {defineConfig, Options} from 'tsup'
import {execa} from 'execa'

const defaultConfig = defineConfig((options: Options) => ({
	entry: ['src/index.ts'],
	clean: true,
	format: ['esm', 'cjs'],
	async onSuccess() {
		if (options.minify) {
			const tscArgs = [
				'--emitDeclarationOnly',
				'--declaration',
				'--declarationDir',
				'dist'
			]

			console.log('Generating declaration files...')

			await execa('tsc', tscArgs)
		}
	}
}))

export default defaultConfig
