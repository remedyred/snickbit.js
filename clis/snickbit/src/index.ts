#!/usr/bin/env node

import {cli} from '@snickbit/node-cli'
import {ask} from '@snickbit/node-utilities'
import {Out} from '@snickbit/out'
import {template} from 'ansi-styles-template'
import figlet from 'figlet'
import banner from 'figlet/importable-fonts/Banner.js'
import open from 'open'

figlet.parseFont('Banner', banner)

const goodbyes = [
	'Thank you for using Snickbit!',
	'Have a nice day!',
	'See you next time!',
	'So long, and thanks for all the fish!'
]

type Data = Record<string, string>

const $out = new Out()

cli()
.name(figlet.textSync('Nick Lowe', {
	font: 'Banner',
	horizontalLayout: 'default',
	verticalLayout: 'default',
	width: 80,
	whitespaceBreak: true
}))
.run()
.then(async (/* argv */) => {
	const data: Data = {
		name: 'Nick Lowe',
		handle: '@snickbit',
		website: 'https://snickbit.com',
		github: 'https://github.com/snickbit',
		linkedin: 'https://www.linkedin.com/in/snickbit',
		npx: 'npx snickbit (<-- you are here)',
	}

	const keys = Object.keys(data)

	const longest = keys.reduce((a, b) => a.length > b.length ? a : b)
	const shortest = keys.reduce((a, b) => a.length < b.length ? a : b)
	const padding = longest.length - shortest.length + 5

	let message: string[] = []

	for(let [key, value] of Object.entries(data)) {
		const itemPadding = ' '.repeat(Math.max(2, padding - key.length))
		message.push(`${key}:${itemPadding}${value}`)
	}

	message.push('', '', `I'm actively looking for new opportunities,`, `so please don't hesitate to get in contact!`)

	$out.block.noExit.fatal.label('').write(template(message.join('\n')))

	const answer = await ask('What next?', {
		type: 'select',
		choices: [
			{
				title: 'Check out my Website',
				value: 'website'
			},
			{
				title: 'Check out my GitHub',
				value: 'github'
			},
			{
				title: 'Check out my LinkedIn',
				value: 'linkedin'
			},
			{
				title: 'Send me an email',
				value: 'email'
			},
			{
				title: 'Exit',
				value: 'exit'
			}
		]
	})

	switch (answer) {
		case 'website':
			await open(data.website, {wait: true})
			break
		case 'github':
			await open(data.github, {wait: true})
			break
		case 'linkedin':
			await open(data.linkedin, {wait: true})
			break
		case 'email':
			await open(`mailto:${data.email}`, {wait: true})
			break
	}

	// noinspection TypeScriptValidateJSTypes
	$out.exit.success(goodbyes[Math.floor(Math.random() * goodbyes.length)])
})
.catch(err => $out.error(err))
