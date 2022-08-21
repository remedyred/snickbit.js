import words from './words'

const default_options = {fast: false}

function convertCase(word, i) {
	const manualWord = words.find(w => String(w).toLowerCase() === String(word).toLowerCase())
	if (manualWord) {
		return i === 0 && !manualWord.match(/[^a-z]/) ? upperFirst(manualWord) : manualWord
	}
	return upperFirst(word)
}

function upperFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

const stripPseudoSpaces = string => string.replace(/[_-]+$/, ' ').replace(/^[_-]+/, ' ')
	.replace(/(\s)+/g, '$1')

const upwords = function(text, options = {fast: false}) {
	options = {...default_options, ...options || {}}

	if (text && typeof text === 'string') {
		const regex = /[\d&A-Za-z]+/g
		let m
		let match_index = 0
		while ((m = regex.exec(text)) !== null) {
			if (m.index === regex.lastIndex) {
				regex.lastIndex++
			}

			const match = [...m].shift()
			const index = m.index
			const converted = options.fast ? upperFirst(match) : convertCase(match, match_index)
			const prefix = text.slice(0, Math.max(0, index))
			const suffix = text.slice(Math.max(0, index + match.length))
			text = stripPseudoSpaces(prefix) + stripPseudoSpaces(converted) + stripPseudoSpaces(suffix)
			match_index++
		}

		return text
	}
	return text
}

export default upwords
