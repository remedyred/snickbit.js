import {Dates, dates} from '../src'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dates.extend(utc)

const test_date = '2022-01-15'

describe('dates', () => {
	it('dates should be a Function', () => expect(dates).toBeInstanceOf(Function))
	it('dates should be a dates', () => expect(dates.constructor).toBeInstanceOf(dayjs.constructor))

	let instance: Dates

	beforeEach(() => {
		instance = dates(dayjs.utc(test_date, 'YYYY-MM-DD'))
	})

	describe(test_date, () => {
		describe('.utc()', () => {
			it('should be a function', () => expect(instance.utc).toBeInstanceOf(Function))
			it(`should return utc seconds`, () => expect(instance.utc().second()).toStrictEqual(expect.any(Number)))
		})

		describe('.format()', () => {
			it('should return a string', () => expect(instance.format()).toEqual(expect.any(String)))
			it(`should return Sat, 15 Jan 2022 00:00:00 GMT`, () => expect(instance.utc().format()).toEqual('2022-01-15T00:00:00Z'))
		})

		describe('.toString()', () => {
			it('should return a string', () => expect(instance.toString()).toEqual(expect.any(String)))
			it(`should return Sat, 15 Jan 2022 00:00:00 GMT`, () => expect(instance.toString()).toEqual('Sat, 15 Jan 2022 00:00:00 GMT'))
		})

		describe('.datestamp()', () => {
			it('should be a Function', () => expect(instance.datestamp).toBeInstanceOf(Function))
			it(`should return 2022-01-15`, () => expect(instance.datestamp()).toEqual('2022-01-15'))
		})

		describe('.timestamp()', () => {
			it('should be a Function', () => expect(instance.timestamp).toBeInstanceOf(Function))
			it(`should return 2022-01-15 00:00:00`, () => expect(instance.timestamp()).toEqual('2022-01-15 00:00:00'))
		})

		describe('.time()', () => {
			it('should be a Function', () => expect(instance.time).toBeInstanceOf(Function))
			it(`should return 00:00:00`, () => expect(instance.time()).toEqual('00:00:00'))
		})

		describe('.shortdate()', () => {
			it('should be a Function', () => expect(instance.shortdate).toBeInstanceOf(Function))
			it(`should return 01/15/2022`, () => expect(instance.shortdate()).toEqual('01/15/2022'))
		})

		describe('.shorttime()', () => {
			it('should be a Function', () => expect(instance.shorttime).toBeInstanceOf(Function))
			it(`should return 12:00 am`, () => expect(instance.shorttime()).toEqual('12:00 am'))
		})

		describe('.shortdatetime()', () => {
			it('should be a Function', () => expect(instance.shortdatetime).toBeInstanceOf(Function))
			it(`should return 01/15/2022 12:00 am`, () => expect(instance.shortdatetime()).toEqual('01/15/2022 12:00 am'))
		})
	})
})
