# @snickbit/dates

## Table of contents

### Interfaces

- [Dates](interfaces/Dates.md)
- [DatesDuration](interfaces/DatesDuration.md)
- [DurationObject](interfaces/DurationObject.md)
- [LimitedRelativeOptions](interfaces/LimitedRelativeOptions.md)
- [ToWordsOptions](interfaces/ToWordsOptions.md)

### Type Aliases

- [ConfigType](README.md#configtype)
- [DateInput](README.md#dateinput)
- [OptionType](README.md#optiontype)

### Functions

- [dates](README.md#dates)

## Type Aliases

### ConfigType

Ƭ **ConfigType**: `dayjs.ConfigType`

___

### DateInput

Ƭ **DateInput**: [`ConfigType`](README.md#configtype) \| `Date` \| [`Dates`](interfaces/Dates.md) \| `dayjs.Dayjs` \| `number` \| `string`

___

### OptionType

Ƭ **OptionType**: `dayjs.OptionType`

## Functions

### dates

▸ **dates**(`input?`): [`Dates`](interfaces/Dates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`DateInput`](README.md#dateinput) |

#### Returns

[`Dates`](interfaces/Dates.md)
