export const isString = (value: any): value is string => typeof value === 'string'

export function JSONStringify<T = any>(data: T, pretty?: boolean | number): string {
	if (!data) {
		return ''
	}

	pretty = !pretty || pretty === true ? 2 : pretty

	try {
		return JSON.stringify(data, null, pretty)
	} catch {
		return ''
	}
}

export function arrayUnique<T = any>(array: T[], key?: string): T[] {
	return [...new Set(array.map(item => key ? item[key] : item))]
}

export const arrayWrap = <T = any>(values: T | T[]): T[] => Array.isArray(values) ? values : [values]
export const capital_plus_lower = /[A-Z\u00C0-Ý][a-zà-ÿ]/g
export const capitals = /[A-Z\u00C0-Ý]+/g

export function spaceCase(text: string): string {
	// force the variable to be a string
	text = String(text)
	// treat cap + lower as the start of new word
	text = text.replaceAll(capital_plus_lower, match => ` ${match[0].toLowerCase() || match[0]}${match[1]}`) // the match is one cap followed by one non-cap
	// treat all remaining capitals as words
	text = text.replaceAll(capitals, match => ` ${match.toLowerCase()}`) // match is a series of caps
	return text.trim() // trim leading and trailing spaces
}

export function slugify(text: string, replace = '-'): string {
	return spaceCase(text)
		.toLowerCase()
		.replaceAll(/\s+/g, replace) // Replace spaces with -
		.replaceAll(/[^\w-]+/g, replace) // Remove all non-word chars
		.replaceAll(new RegExp(`${replace}${replace}+`, 'g'), replace) // Replace - with a single -
		.replace(new RegExp(`^${replace}+`), '') // Trim - from start of text
		.replace(new RegExp(`${replace}+$`), '') // Trim - from end of text
}

export const arrayPull = (pieces, key) => {
	if (Array.isArray(pieces) && pieces.includes(key)) {
		return pieces.splice(pieces.indexOf(key), 1)[0]
	}
}
