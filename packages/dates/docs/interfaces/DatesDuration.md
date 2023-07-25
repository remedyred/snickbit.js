# Interface: DatesDuration

## Hierarchy

- [`Dates`](Dates.md)

  ↳ **`DatesDuration`**

## Callable

### DatesDuration

▸ **DatesDuration**(`input?`): [`Dates`](Dates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`DateInput`](../README.md#dateinput) |

#### Returns

[`Dates`](Dates.md)

## Table of contents

### Properties

- [toWords](DatesDuration.md#towords)

### Methods

- [add](DatesDuration.md#add)
- [clone](DatesDuration.md#clone)
- [date](DatesDuration.md#date)
- [datestamp](DatesDuration.md#datestamp)
- [day](DatesDuration.md#day)
- [daysInMonth](DatesDuration.md#daysinmonth)
- [diff](DatesDuration.md#diff)
- [duration](DatesDuration.md#duration)
- [endOf](DatesDuration.md#endof)
- [extend](DatesDuration.md#extend)
- [format](DatesDuration.md#format)
- [from](DatesDuration.md#from)
- [fromLimited](DatesDuration.md#fromlimited)
- [fromNow](DatesDuration.md#fromnow)
- [fromNowLimited](DatesDuration.md#fromnowlimited)
- [get](DatesDuration.md#get)
- [hour](DatesDuration.md#hour)
- [humanize](DatesDuration.md#humanize)
- [isAfter](DatesDuration.md#isafter)
- [isBefore](DatesDuration.md#isbefore)
- [isSame](DatesDuration.md#issame)
- [isToday](DatesDuration.md#istoday)
- [isTomorrow](DatesDuration.md#istomorrow)
- [isUTC](DatesDuration.md#isutc)
- [isValid](DatesDuration.md#isvalid)
- [isYesterday](DatesDuration.md#isyesterday)
- [local](DatesDuration.md#local)
- [locale](DatesDuration.md#locale)
- [millisecond](DatesDuration.md#millisecond)
- [minute](DatesDuration.md#minute)
- [month](DatesDuration.md#month)
- [relativeToday](DatesDuration.md#relativetoday)
- [safeTimestamp](DatesDuration.md#safetimestamp)
- [second](DatesDuration.md#second)
- [set](DatesDuration.md#set)
- [shortdate](DatesDuration.md#shortdate)
- [shortdatetime](DatesDuration.md#shortdatetime)
- [shorttime](DatesDuration.md#shorttime)
- [startOf](DatesDuration.md#startof)
- [subtract](DatesDuration.md#subtract)
- [time](DatesDuration.md#time)
- [timestamp](DatesDuration.md#timestamp)
- [to](DatesDuration.md#to)
- [toDate](DatesDuration.md#todate)
- [toISOString](DatesDuration.md#toisostring)
- [toJSON](DatesDuration.md#tojson)
- [toLimited](DatesDuration.md#tolimited)
- [toNow](DatesDuration.md#tonow)
- [toNowLimited](DatesDuration.md#tonowlimited)
- [toObject](DatesDuration.md#toobject)
- [toString](DatesDuration.md#tostring)
- [unix](DatesDuration.md#unix)
- [utc](DatesDuration.md#utc)
- [utcOffset](DatesDuration.md#utcoffset)
- [valueOf](DatesDuration.md#valueof)
- [year](DatesDuration.md#year)

## Properties

### toWords

• **toWords**: () => `string` & (`long`: `boolean`) => `string` & (`options`: [`ToWordsOptions`](ToWordsOptions.md)) => `string`

## Methods

### add

▸ **add**(`value`, `unit?`): `Dayjs`

Returns a cloned Day.js object with a specified amount of time added.
```
dayjs().add(7, 'day')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/add

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit?` | `ManipulateType` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[add](Dates.md#add)

▸ **add**(`duration`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `Duration` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[add](Dates.md#add)

___

### clone

▸ **clone**(): `Dayjs`

All Day.js objects are immutable. Still, `dayjs#clone` can create a clone of the current object if you need one.
```
dayjs().clone()// => Dayjs
dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
```
Docs: https://day.js.org/docs/en/parse/dayjs-clone

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[clone](Dates.md#clone)

___

### date

▸ **date**(): `number`

Get the date of the month.
```
dayjs().date()// => 1-31
```
Docs: https://day.js.org/docs/en/get-set/date

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[date](Dates.md#date)

▸ **date**(`value`): `Dayjs`

Set the date of the month.

Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the next months.
```
dayjs().date(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[date](Dates.md#date)

___

### datestamp

▸ **datestamp**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[datestamp](Dates.md#datestamp)

___

### day

▸ **day**(): `number`

Get the day of the week.

Returns numbers from 0 (Sunday) to 6 (Saturday).
```
dayjs().day()// 0-6
```
Docs: https://day.js.org/docs/en/get-set/day

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[day](Dates.md#day)

▸ **day**(`value`): `Dayjs`

Set the day of the week.

Accepts numbers from 0 (Sunday) to 6 (Saturday). If the range is exceeded, it will bubble up to next weeks.
```
dayjs().day(0)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/day

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[day](Dates.md#day)

___

### daysInMonth

▸ **daysInMonth**(): `number`

Get the number of days in the current month.
```
dayjs('2019-01-25').daysInMonth() // 31
```
Docs: https://day.js.org/docs/en/display/days-in-month

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[daysInMonth](Dates.md#daysinmonth)

___

### diff

▸ **diff**(`date?`, `unit?`, `float?`): `number`

This indicates the difference between two date-time in the specified unit.

To get the difference in milliseconds, use `dayjs#diff`
```
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
date1.diff() // milliseconds to current time
```

To get the difference in another unit of measurement, pass that measurement as the second argument.
```
const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month') // 7
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/display/difference

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `string` \| `number` \| `Dayjs` \| `Date` |
| `unit?` | ``"millisecond"`` \| ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"month"`` \| ``"year"`` \| ``"date"`` \| ``"milliseconds"`` \| ``"seconds"`` \| ``"minutes"`` \| ``"hours"`` \| ``"days"`` \| ``"months"`` \| ``"years"`` \| ``"dates"`` \| ``"d"`` \| ``"D"`` \| ``"M"`` \| ``"y"`` \| ``"h"`` \| ``"m"`` \| ``"s"`` \| ``"ms"`` \| ``"week"`` \| ``"weeks"`` \| ``"w"`` \| ``"quarter"`` \| ``"quarters"`` \| ``"Q"`` |
| `float?` | `boolean` |

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[diff](Dates.md#diff)

___

### duration

▸ **duration**(`input`, `unit?`): [`DatesDuration`](DatesDuration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DateInput`](../README.md#dateinput) |
| `unit?` | `OpUnitType` |

#### Returns

[`DatesDuration`](DatesDuration.md)

#### Inherited from

[Dates](Dates.md).[duration](Dates.md#duration)

___

### endOf

▸ **endOf**(`unit`): `Dayjs`

Returns a cloned Day.js object and set it to the end of a unit of time.
```
dayjs().endOf('month')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/end-of

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `OpUnitType` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[endOf](Dates.md#endof)

___

### extend

▸ **extend**<`T`\>(`plugin`, `option?`): `Dayjs`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | `PluginFunc`<`T`\> |
| `option?` | `T` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[extend](Dates.md#extend)

___

### format

▸ **format**(`formatString?`): `string`

Get the formatted date according to the string of tokens passed in.

To escape characters, wrap them in square brackets (e.g. [MM]).
```
dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```
Docs: https://day.js.org/docs/en/display/format

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatString?` | `string` |

#### Returns

`string`

#### Overrides

[Dates](Dates.md).[format](Dates.md#format)

___

### from

▸ **from**(`compared`, `withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compared` | `string` \| `number` \| `Dayjs` \| `Date` |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[from](Dates.md#from)

___

### fromLimited

▸ **fromLimited**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DateInput`](../README.md#dateinput) |
| `options` | `Partial`<[`LimitedRelativeOptions`](LimitedRelativeOptions.md)\> |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[fromLimited](Dates.md#fromlimited)

___

### fromNow

▸ **fromNow**(`withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[fromNow](Dates.md#fromnow)

___

### fromNowLimited

▸ **fromNowLimited**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`LimitedRelativeOptions`](LimitedRelativeOptions.md)\> |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[fromNowLimited](Dates.md#fromnowlimited)

___

### get

▸ **get**(`unit`): `number`

String getter, returns the corresponding information getting from Day.js object.

In general:
```
dayjs().get(unit) === dayjs()[unit]()
```
Units are case insensitive, and support plural and short forms.
```
dayjs().get('year')
dayjs().get('month') // start 0
dayjs().get('date')
```
Docs: https://day.js.org/docs/en/get-set/get

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `UnitType` |

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[get](Dates.md#get)

___

### hour

▸ **hour**(): `number`

Get the hour.
```
dayjs().hour()// => 0-23
```
Docs: https://day.js.org/docs/en/get-set/hour

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[hour](Dates.md#hour)

▸ **hour**(`value`): `Dayjs`

Set the hour.

Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the next day.
```
dayjs().hour(12)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/hour

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[hour](Dates.md#hour)

___

### humanize

▸ **humanize**(`withSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `withSuffix?` | `boolean` |

#### Returns

`string`

___

### isAfter

▸ **isAfter**(`date?`, `unit?`): `boolean`

This indicates whether the Day.js object is after the other supplied date-time.
```
dayjs().isAfter(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isAfter('2011-01-01', 'year')// => boolean
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/query/is-after

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `string` \| `number` \| `Dayjs` \| `Date` |
| `unit?` | `OpUnitType` |

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isAfter](Dates.md#isafter)

___

### isBefore

▸ **isBefore**(`date?`, `unit?`): `boolean`

This indicates whether the Day.js object is before the other supplied date-time.
```
dayjs().isBefore(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isBefore('2011-01-01', 'year')// => boolean
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/query/is-before

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `string` \| `number` \| `Dayjs` \| `Date` |
| `unit?` | `OpUnitType` |

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isBefore](Dates.md#isbefore)

___

### isSame

▸ **isSame**(`date?`, `unit?`): `boolean`

This indicates whether the Day.js object is the same as the other supplied date-time.
```
dayjs().isSame(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isSame('2011-01-01', 'year')// => boolean
```
Docs: https://day.js.org/docs/en/query/is-same

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `string` \| `number` \| `Dayjs` \| `Date` |
| `unit?` | `OpUnitType` |

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isSame](Dates.md#issame)

___

### isToday

▸ **isToday**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isToday](Dates.md#istoday)

___

### isTomorrow

▸ **isTomorrow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isTomorrow](Dates.md#istomorrow)

___

### isUTC

▸ **isUTC**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isUTC](Dates.md#isutc)

___

### isValid

▸ **isValid**(): `boolean`

This returns a `boolean` indicating whether the Day.js object contains a valid date or not.
```
dayjs().isValid()// => boolean
```
Docs: https://day.js.org/docs/en/parse/is-valid

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isValid](Dates.md#isvalid)

___

### isYesterday

▸ **isYesterday**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Dates](Dates.md).[isYesterday](Dates.md#isyesterday)

___

### local

▸ **local**(): `Dayjs`

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[local](Dates.md#local)

___

### locale

▸ **locale**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[locale](Dates.md#locale)

▸ **locale**(`preset`, `object?`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preset` | `string` \| `ILocale` |
| `object?` | `Partial`<`ILocale`\> |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[locale](Dates.md#locale)

___

### millisecond

▸ **millisecond**(): `number`

Get the milliseconds.
```
dayjs().millisecond()// => 0-999
```
Docs: https://day.js.org/docs/en/get-set/millisecond

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[millisecond](Dates.md#millisecond)

▸ **millisecond**(`value`): `Dayjs`

Set the milliseconds.

Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the next seconds.
```
dayjs().millisecond(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/millisecond

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[millisecond](Dates.md#millisecond)

___

### minute

▸ **minute**(): `number`

Get the minutes.
```
dayjs().minute()// => 0-59
```
Docs: https://day.js.org/docs/en/get-set/minute

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[minute](Dates.md#minute)

▸ **minute**(`value`): `Dayjs`

Set the minutes.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next hour.
```
dayjs().minute(59)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/minute

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[minute](Dates.md#minute)

___

### month

▸ **month**(): `number`

Get the month.

Months are zero indexed, so January is month 0.
```
dayjs().month()// => 0-11
```
Docs: https://day.js.org/docs/en/get-set/month

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[month](Dates.md#month)

▸ **month**(`value`): `Dayjs`

Set the month.

Months are zero indexed, so January is month 0.

Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the next year.
```
dayjs().month(0)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/month

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[month](Dates.md#month)

___

### relativeToday

▸ **relativeToday**(`fallbackFormat`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallbackFormat` | `string` |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[relativeToday](Dates.md#relativetoday)

___

### safeTimestamp

▸ **safeTimestamp**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[safeTimestamp](Dates.md#safetimestamp)

___

### second

▸ **second**(): `number`

Get the seconds.
```
dayjs().second()// => 0-59
```
Docs: https://day.js.org/docs/en/get-set/second

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[second](Dates.md#second)

▸ **second**(`value`): `Dayjs`

Set the seconds.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next minutes.
```
dayjs().second(1)// Dayjs
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[second](Dates.md#second)

___

### set

▸ **set**(`unit`, `value`): `Dayjs`

Generic setter, accepting unit as first argument, and value as second, returns a new instance with the applied changes.

In general:
```
dayjs().set(unit, value) === dayjs()[unit](value)
```
Units are case insensitive, and support plural and short forms.
```
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```
Docs: https://day.js.org/docs/en/get-set/set

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `UnitType` |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[set](Dates.md#set)

___

### shortdate

▸ **shortdate**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[shortdate](Dates.md#shortdate)

___

### shortdatetime

▸ **shortdatetime**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[shortdatetime](Dates.md#shortdatetime)

___

### shorttime

▸ **shorttime**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[shorttime](Dates.md#shorttime)

___

### startOf

▸ **startOf**(`unit`): `Dayjs`

Returns a cloned Day.js object and set it to the start of a unit of time.
```
dayjs().startOf('year')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/start-of

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `OpUnitType` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[startOf](Dates.md#startof)

___

### subtract

▸ **subtract**(`value`, `unit?`): `Dayjs`

Returns a cloned Day.js object with a specified amount of time subtracted.
```
dayjs().subtract(7, 'year')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/subtract

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit?` | `ManipulateType` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[subtract](Dates.md#subtract)

▸ **subtract**(`duration`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `Duration` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[subtract](Dates.md#subtract)

___

### time

▸ **time**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[time](Dates.md#time)

___

### timestamp

▸ **timestamp**(): `string`

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[timestamp](Dates.md#timestamp)

___

### to

▸ **to**(`compared`, `withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compared` | `string` \| `number` \| `Dayjs` \| `Date` |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[to](Dates.md#to)

___

### toDate

▸ **toDate**(): `Date`

To get a copy of the native `Date` object parsed from the Day.js object use `dayjs#toDate`.
```
dayjs('2019-01-25').toDate()// => Date
```

#### Returns

`Date`

#### Inherited from

[Dates](Dates.md).[toDate](Dates.md#todate)

___

### toISOString

▸ **toISOString**(): `string`

To format as an ISO 8601 string.
```
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```
Docs: https://day.js.org/docs/en/display/as-iso-string

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[toISOString](Dates.md#toisostring)

___

### toJSON

▸ **toJSON**(): `string`

To serialize as an ISO 8601 string.
```
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```
Docs: https://day.js.org/docs/en/display/as-json

#### Returns

`string`

#### Overrides

[Dates](Dates.md).[toJSON](Dates.md#tojson)

___

### toLimited

▸ **toLimited**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DateInput`](../README.md#dateinput) |
| `options` | `Partial`<[`LimitedRelativeOptions`](LimitedRelativeOptions.md)\> |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[toLimited](Dates.md#tolimited)

___

### toNow

▸ **toNow**(`withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[toNow](Dates.md#tonow)

___

### toNowLimited

▸ **toNowLimited**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`LimitedRelativeOptions`](LimitedRelativeOptions.md)\> |

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[toNowLimited](Dates.md#tonowlimited)

___

### toObject

▸ **toObject**(): [`DurationObject`](DurationObject.md)

#### Returns

[`DurationObject`](DurationObject.md)

___

### toString

▸ **toString**(): `string`

Returns a string representation of the date.
```
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```
Docs: https://day.js.org/docs/en/display/as-string

#### Returns

`string`

#### Inherited from

[Dates](Dates.md).[toString](Dates.md#tostring)

___

### unix

▸ **unix**(): `number`

This returns the Unix timestamp (the number of **seconds** since the Unix Epoch) of the Day.js object.
```
dayjs('2019-01-25').unix() // 1548381600
```
This value is floored to the nearest second, and does not include a milliseconds component.

Docs: https://day.js.org/docs/en/display/unix-timestamp

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[unix](Dates.md#unix)

___

### utc

▸ **utc**(`keepLocalTime?`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keepLocalTime?` | `boolean` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[utc](Dates.md#utc)

___

### utcOffset

▸ **utcOffset**(): `number`

Get the UTC offset in minutes.
```
dayjs().utcOffset()
```
Docs: https://day.js.org/docs/en/manipulate/utc-offset

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[utcOffset](Dates.md#utcoffset)

▸ **utcOffset**(`offset`, `keepLocalTime?`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `string` \| `number` |
| `keepLocalTime?` | `boolean` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[utcOffset](Dates.md#utcoffset)

___

### valueOf

▸ **valueOf**(): `number`

This returns the number of **milliseconds** since the Unix Epoch of the Day.js object.
```
dayjs('2019-01-25').valueOf() // 1548381600000
+dayjs(1548381600000) // 1548381600000
```
To get a Unix timestamp (the number of seconds since the epoch) from a Day.js object, you should use Unix Timestamp `dayjs#unix()`.

Docs: https://day.js.org/docs/en/display/unix-timestamp-milliseconds

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[valueOf](Dates.md#valueof)

___

### year

▸ **year**(): `number`

Get the year.
```
dayjs().year()// => 2020
```
Docs: https://day.js.org/docs/en/get-set/year

#### Returns

`number`

#### Inherited from

[Dates](Dates.md).[year](Dates.md#year)

▸ **year**(`value`): `Dayjs`

Set the year.
```
dayjs().year(2000)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/year

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

[Dates](Dates.md).[year](Dates.md#year)
