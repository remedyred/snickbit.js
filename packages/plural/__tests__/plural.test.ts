import {isPlural, isSingular, plural, singular} from '../src'
import BASIC_TESTS from '../__fixtures__/basic'
import PLURAL_TESTS from '../__fixtures__/plural'
import SINGULAR_TESTS from '../__fixtures__/singular'

const PLURALS = [...BASIC_TESTS, ...PLURAL_TESTS]
const SINGULARS = [...BASIC_TESTS, ...SINGULAR_TESTS]

const JUST_PLURALS = PLURALS.map(([, output]) => output)

const JUST_SINGULARS = [...BASIC_TESTS, ...SINGULAR_TESTS].map(([input]) => input)

describe('plural', () => {
	describe('methods', () => {
		describe('plural', () => {
			it.each(PLURALS)('%s -> %s', (input, output) => {
				expect(plural(input)).toBe(output)
			})
		})

		describe('isPlural', () => {
			it.each(JUST_PLURALS)('isPlural(%s)', input => {
				expect(isPlural(input)).toBe(true)
			})
		})

		describe('singular', () => {
			it.each([...BASIC_TESTS, ...SINGULAR_TESTS])('%s <-- %s', (output, input) => {
				expect(singular(input)).toBe(output)
			})
		})

		describe('isSingular', () => {
			it.each(JUST_SINGULARS)('isSingular(%s)', input => {
				expect(isSingular(input)).toBe(true)
			})
		})
	})

	describe('automatically convert', () => {
		describe.each(PLURALS)('plural', (input, output) => {
			// Make sure the word stays plural.
			it(`5 ${output} -> ${output}`, () => {
				expect(plural(output, 5)).toBe(output)
			})

			// Make sure the word becomes a plural.
			if (input !== output) {
				it(`5 ${input} -> ${output}`, () => {
					expect(plural(input, 5)).toBe(output)
				})
			}
		})

		describe.each(SINGULARS)('singular', (output, input) => {
			// Make sure the word stays singular.
			it(`1 ${output} -> ${output}`, () => {
				expect(plural(output, 1)).toBe(output)
			})

			// Make sure the word becomes singular.
			if (output !== input) {
				it(`1 ${input} -> ${output}`, () => {
					expect(plural(input, 1)).toBe(output)
				})
			}
		})
	})

	describe('spescials', () => {
		it(`Alumni -> Alumni`, () => {
			expect(plural('Alumni')).toBe('Alumni')
		})

		it(`randomWord -> randomWords`, () => {
			expect(plural('randomWord')).toBe('randomWords')
		})

		it(`Werewolf -> Werewolves`, () => {
			expect(plural('Werewolf')).toBe('Werewolves')
		})
	})
})
