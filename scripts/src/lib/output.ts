#!/usr/bin/env zx

import {arrayWrap, isString, JSONStringify} from './helpers'

export type Pieces = string[] | TemplateStringsArray | string

export const stringify = (pieces: TemplateStringsArray, ...args: any[]) => [pieces, ...args]
	.filter(Boolean)
	.map(piece => (isString(piece) ? piece : JSONStringify(piece)).trim()).join(' ')

const piecesToString = (pieces: Pieces, ...args: any[]) => {
	const piecesArray = arrayWrap(pieces)
	const lastIdx = piecesArray.length - 1
	return Array.isArray(piecesArray) &&
	piecesArray.every(piece => isString(piece)) && lastIdx === args.length
		? args.map((a, i) => piecesArray[i] + stringify(a)).join('') + piecesArray[lastIdx]
		: [piecesArray, ...args].map(p => stringify(p)).join(' ')
}

const out = (color: string, pieces: Pieces, ...args: any[]) => {
	console.log(chalk[color]('#>'), piecesToString(pieces, ...args))
}

const terminalWidth = process.stdout.columns || 80
const titlePaddingLength = (terminalWidth - 2) / 2
const titlePadding = `  ${'#'.repeat(Math.min(8, titlePaddingLength))}  `

export const title = (pieces: Pieces, ...args: any[]) => {
	console.log('\n', titlePadding, piecesToString(pieces, ...args), titlePadding, '\n')
}

export const warn = (pieces: Pieces, ...args: any[]) => {
	out('yellow', pieces, ...args)
}

export const info = (pieces: Pieces, ...args: any[]) => {
	out('cyan', pieces, ...args)
}

export const error = (pieces: Pieces, ...args: any[]) => {
	out('red', pieces, ...args)
}

export const raise = (pieces: Pieces, ...args: any[]) => {
	throw new Error(piecesToString(pieces, ...args))
}

export const debug = (pieces: Pieces, ...args: any[]) => {
	if ($.verbose) {
		out('yellow', pieces, ...args)
	}
}

export const verbose = (pieces: Pieces, ...args: any[]) => {
	out('gray', pieces, ...args)
}

export const success = (pieces: Pieces, ...args: any[]) => {
	out('green', pieces, ...args)
}

export const die = (pieces: Pieces, ...args: any[]) => {
	error(pieces, ...args)
	process.exit(1)
}

export const fatal = (pieces: Pieces, ...args: any[]) => {
	die(pieces, ...args)
}

export const finish = (pieces: Pieces, ...args: any[]) => {
	success(pieces, ...args)
	process.exit(0)
}
