#!/usr/bin/env node
import {MultiProgress, Progress} from '../src'
import {sleep} from '@snickbit/utilities'

const progressDelay = 1000
const multiProgress = new MultiProgress()

async function firstExample() {
	const prog = new Progress({
		message: 'Test Progress',
		total: 3
	})

	await sleep(progressDelay)

	prog.tick('Test Next')

	await sleep(progressDelay)

	prog.tick('Test Next 2')

	await sleep(progressDelay)

	prog.tick('Test Next 3')

	await sleep(progressDelay)

	prog.tick('Test Next 4')
	prog.finish()
}

async function secondExample() {
	const prog = multiProgress.create({total: 4})

	await sleep(progressDelay)

	prog.tick('Test Next')

	await sleep(progressDelay)

	prog.tick('Test Next 2')

	await sleep(progressDelay)

	prog.tick('Test Next 3')

	await sleep(progressDelay)

	prog.tick('Test Next 4')
	prog.finish('Test Finish')
}

async function thirdExample() {
	multiProgress.reset()
	await Promise.all([
		loopProgress({id: 1}),
		loopProgress({id: 2, endStatus: 'finish', delay: progressDelay * 1.25}),
		loopProgress({id: 3, endStatus: 'stop', delay: progressDelay * 0.25}),
		loopProgress({id: 4, endStatus: 'fail', delay: progressDelay * 0.5}),
		loopProgress({id: 5, endStatus: 'warn', delay: progressDelay * 0.75})
	])
}

async function loopProgress({
	id,
	endStatus,
	delay = 1000
}: {
	id: number
	endStatus?: 'fail' | 'finish' | 'stop' | 'warn'
	delay?: number
}) {
	const prog = multiProgress.create({message: `Test ${id}`, total: 10})
	for (let i = 0; i < 10; i++) {
		await sleep(delay)
		prog.tick(`Test Next ${i}`)
	}

	switch (endStatus) {
		case 'finish': {
			prog.finish('Test Finish')
			break
		}
		case 'stop': {
			prog.stop('Test Stop')
			break
		}
		case 'fail': {
			prog.fail('Test Fail')
			break
		}
		default: {
			prog.finish()
		}
	}
}

async function fourthExample() {
	// don't autostart
	console.log('Fourth Example')

	const progOne = {
		message: 'Multi Test - Prog One',
		current: 0,
		total: 10
	}
	const one = multiProgress.create(progOne)
	console.log('Progress added')

	const progTwo = {
		message: 'Multi Test - Prog Two',
		current: 0,
		total: 10
	}
	const two = multiProgress.create(progTwo)

	await sleep(progressDelay)
	two.tick()

	await sleep(progressDelay)

	const goal = Math.max(progOne.total, progTwo.total)
	for (let i = 0; i < goal; i++) {
		await sleep(progressDelay)
		if (progOne.current < progOne.total) {
			one.tick(`${progOne.message} ${i}`)
		}

		if (progTwo.current < progTwo.total) {
			two.tick(`${progTwo.message} ${i}`)
		}

		if (progOne.current >= progOne.total && progTwo.current >= progTwo.total) {
			break
		}
	}
	await sleep(progressDelay)

	one.finish()
	two.finish()
}

async function main() {
	await firstExample()
	await secondExample()
	await thirdExample()
	await fourthExample()
}

main().then(() => process.exit(0)).catch(console.error)
