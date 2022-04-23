import prompts from 'prompts'

/** @category Prompt */
export interface PromptSchema {
	[key: string]: Partial<PromptSchemaRecord>
}

/** @category Prompt */
export interface ChoiceCollection {
	[key: string]: ChoiceOption
}

/** @category Prompt */
export interface ChoiceDefinition {
	title: string
	value: string
}

/** @category Prompt */
export type ChoiceOption = string | ChoiceDefinition

/** @category Prompt */
export type Question = prompts.PromptObject<string>

/** @category Prompt */
export type Answers = prompts.Answers<string>

/** @category Prompt */
export interface PromptSchemaRecord extends Omit<Question, 'name' | 'validate'> {
	name: string;
	validate: ((input: any, answers?: Answers) => string | boolean | Promise<string | boolean>) | string;
	required: boolean;
	error: string;
	choices?: ChoiceCollection
}

/** @category Prompt */
export interface QuestionOptions extends Omit<PromptSchemaRecord, 'name'> {
	message?: string;
	name?: string;

	filter?(input: any): any;
}

/** @internal */
type IObject = { [key: string]: any }

/**
 * Prompt the user for confirmation using Inquirer.
 * @category Prompt
 */
export async function confirm(question: string, options: Partial<QuestionOptions> = {}): Promise<boolean> {
	if (typeof options === 'boolean') {
		options = {
			default: options
		}
	} else {
		options = {
			default: false, ...options
		}
	}

	return (await prompts({
		type: 'confirm',
		name: 'value',
		message: question,
		initial: options.default
	}))?.value ?? false
}

/**
 * Prompt the user for input using Inquirer.
 * @category Prompt
 */
export async function ask(question: string, options?: Partial<QuestionOptions>): Promise<string | any> {
	if (typeof options === 'string') {
		options = {
			type: options as string
		}
	} else if (!options) {
		options = {}
	}

	options = Object.assign({
		type: 'input',
		name: 'value',
		message: question
	}, options)

	if (!options.name) {
		options.name = 'value'
	}

	return (await prompts(options))?.value ?? ''
}