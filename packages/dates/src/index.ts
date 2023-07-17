import duration, {DatesDuration} from './duration'
import limitedRelativeTime, {LimitedRelativeOptions} from './limited-relative-time'
import dayjs, {Dayjs, OpUnitType, PluginFunc} from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import quick from './quick'
import timeago from './timeago'

export type DateInput = ConfigType | Date | Dates | dayjs.Dayjs | number | string

export type ConfigType = dayjs.ConfigType
export type OptionType = dayjs.OptionType

export interface Dates extends dayjs.Dayjs {
	(input?: DateInput): Dates

	isToday(): boolean

	datestamp(): string

	timestamp(): string

	safeTimestamp(): string

	time(): string

	shorttime(): string

	shortdate(): string

	shortdatetime(): string

	duration(input: DateInput, unit?: OpUnitType): DatesDuration

	toLimited(input: DateInput, options: Partial<LimitedRelativeOptions>): string

	fromLimited(input: DateInput, options: Partial<LimitedRelativeOptions>): string

	toNowLimited(options: Partial<LimitedRelativeOptions>): string

	fromNowLimited(options: Partial<LimitedRelativeOptions>): string

	relativeToday(fallbackFormat: string): string

	extend<T = unknown>(plugin: PluginFunc<T>, option?: T): Dayjs
}

dayjs.extend(isYesterday)
dayjs.extend(isTomorrow)
dayjs.extend(relativeTime)
dayjs.extend(limitedRelativeTime)
dayjs.extend(duration)
dayjs.extend(customParseFormat)
dayjs.extend(updateLocale)
dayjs.extend(quick)
dayjs.extend(timeago)

export const dates: Dates = dayjs as unknown as Dates

export {DatesDuration, DurationObject, ToWordsOptions} from './duration'
export {LimitedRelativeOptions} from './limited-relative-time'
