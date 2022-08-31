[@snickbit/cycle](../README.md) / [Exports](../modules.md) / Cycle

# Class: Cycle

## Table of contents

### Constructors

- [constructor](Cycle.md#constructor)

### Properties

- [#started](Cycle.md##started)
- [index](Cycle.md#index)
- [items](Cycle.md#items)

### Accessors

- [currentIndex](Cycle.md#currentindex)
- [firstIndex](Cycle.md#firstindex)
- [lastIndex](Cycle.md#lastindex)
- [nextIndex](Cycle.md#nextindex)
- [prevIndex](Cycle.md#previndex)

### Methods

- [current](Cycle.md#current)
- [first](Cycle.md#first)
- [get](Cycle.md#get)
- [getIndex](Cycle.md#getindex)
- [last](Cycle.md#last)
- [next](Cycle.md#next)
- [prev](Cycle.md#prev)
- [push](Cycle.md#push)
- [remove](Cycle.md#remove)
- [set](Cycle.md#set)
- [shuffle](Cycle.md#shuffle)

## Constructors

### constructor

• **new Cycle**(`items?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items?` | `any`[] |

#### Defined in

[index.ts:11](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L11)

• **new Cycle**(`preset?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preset?` | `string` |

#### Defined in

[index.ts:12](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L12)

• **new Cycle**(`itemsOrPreset?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemsOrPreset?` | `string` \| `any`[] |

#### Defined in

[index.ts:13](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L13)

## Properties

### #started

• `Private` **#started**: `boolean`

#### Defined in

[index.ts:5](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L5)

___

### index

• **index**: `number`

#### Defined in

[index.ts:9](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L9)

___

### items

• **items**: `any`[] = `[]`

#### Defined in

[index.ts:7](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L7)

## Accessors

### currentIndex

• `get` **currentIndex**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:35](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L35)

___

### firstIndex

• `get` **firstIndex**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:39](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L39)

___

### lastIndex

• `get` **lastIndex**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:43](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L43)

___

### nextIndex

• `get` **nextIndex**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:31](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L31)

___

### prevIndex

• `get` **prevIndex**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:27](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L27)

## Methods

### current

▸ **current**(): `any`

#### Returns

`any`

#### Defined in

[index.ts:71](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L71)

___

### first

▸ **first**(`save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `save` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[index.ts:63](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L63)

___

### get

▸ **get**(`index`, `save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `save` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[index.ts:75](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L75)

___

### getIndex

▸ **getIndex**(`index`, `save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `save` | `boolean` | `true` |

#### Returns

`any`

#### Defined in

[index.ts:47](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L47)

___

### last

▸ **last**(`save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `save` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[index.ts:67](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L67)

___

### next

▸ **next**(`save?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save?` | `boolean` |

#### Returns

`any`

#### Defined in

[index.ts:55](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L55)

___

### prev

▸ **prev**(`save?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save?` | `boolean` |

#### Returns

`any`

#### Defined in

[index.ts:59](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L59)

___

### push

▸ **push**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:83](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L83)

___

### remove

▸ **remove**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:87](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L87)

___

### set

▸ **set**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:79](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L79)

___

### shuffle

▸ **shuffle**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:91](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/cycle/src/index.ts#L91)
