import {Spinner} from '../src'
import {sleep} from '@snickbit/utilities'

const spinnerDelay = 1000
const spinner = new Spinner()
async function firstExample() {
	const spin = spinner.add('Test Spinner')

	await sleep(spinnerDelay)

	spin.next('Test Next')

	await sleep(spinnerDelay)

	spin.next('Test Next 2')

	await sleep(spinnerDelay)

	spin.next('Test Next 3')

	await sleep(spinnerDelay)

	spin.finish()
}

async function secondExample() {
	const spin = spinner.add('Test Spinner 2')

	await sleep(spinnerDelay)

	spin.next('Test Next')

	await sleep(spinnerDelay)

	spin.next('Test Next 2')

	await sleep(spinnerDelay)

	spin.next('Test Next 3')

	await sleep(spinnerDelay)

	spin.finish('Test Finish')
}

async function thirdExample() {
	await Promise.all([
		loopSpinner({id: 1}),
		loopSpinner({id: 2, endStatus: 'finish', delay: spinnerDelay * 1.25}),
		loopSpinner({id: 3, endStatus: 'stop', delay: spinnerDelay * 0.25}),
		loopSpinner({id: 4, endStatus: 'fail', delay: spinnerDelay * 0.5}),
		loopSpinner({id: 5, endStatus: 'warn', delay: spinnerDelay * 0.75})
	])
}

async function loopSpinner({
	id,
	endStatus,
	delay = 1000
}: {
	id: number
	endStatus?: 'fail' | 'finish' | 'stop' | 'warn'
	delay?: number
}) {
	const spin = spinner.add(`Test ${id}`)
	for (let i = 0; i < 10; i++) {
		await sleep(delay)
		spin.next(`Test Next ${i}`)
	}

	switch (endStatus) {
		case 'finish': {
			spin.finish('Test Finish')
			break
		}
		case 'stop': {
			spin.stop('Test Stop')
			break
		}
		case 'fail': {
			spin.fail('Test Fail')
			break
		}
		case 'warn': {
			spin.warn('Test Warn')
			break
		}
		default: {
			spin.finish()
		}
	}
}

async function fourthExample() {
	// don't autostart
	console.log('Fourth Example')

	const spin = spinner.add('Test Spinner 4', {autostart: false})
	console.log('Spinner added')

	const spinTwo = spinner.add('Test Spinner 4 two (autostarted)')

	await sleep(spinnerDelay)

	spin.start('Test Start 4')
	spinTwo.next('Test Next 4 two 2')

	await sleep(spinnerDelay)

	spin.next('Test Next 4')
	spinTwo.next('Test Next 4 two 3')

	await sleep(spinnerDelay)

	spin.next('Test Next 4 2')
	spinTwo.next('Test Next 4 two 4')

	await sleep(spinnerDelay)

	spin.finish()
	spinTwo.finish()
}

async function main() {
	await firstExample()
	await secondExample()
	await thirdExample()
	await fourthExample()
}

main().catch(console.error)
