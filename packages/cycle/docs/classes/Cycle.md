# Class: Cycle<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Constructors

- [constructor](Cycle.md#constructor)

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
- [indexes](Cycle.md#indexes)
- [last](Cycle.md#last)
- [next](Cycle.md#next)
- [prev](Cycle.md#prev)
- [push](Cycle.md#push)
- [remove](Cycle.md#remove)
- [set](Cycle.md#set)
- [shuffle](Cycle.md#shuffle)
- [toJSON](Cycle.md#tojson)
- [toString](Cycle.md#tostring)
- [values](Cycle.md#values)

## Constructors

### constructor

• **new Cycle**<`T`\>(`items?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items?` | `T`[] |

• **new Cycle**<`T`\>(`preset?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `preset?` | [`Preset`](../README.md#preset) |

• **new Cycle**<`T`\>(`itemsOrPreset?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemsOrPreset?` | [`Preset`](../README.md#preset) \| `T`[] |

## Accessors

### currentIndex

• `get` **currentIndex**(): `number`

#### Returns

`number`

___

### firstIndex

• `get` **firstIndex**(): `number`

#### Returns

`number`

___

### lastIndex

• `get` **lastIndex**(): `number`

#### Returns

`number`

___

### nextIndex

• `get` **nextIndex**(): `number`

#### Returns

`number`

___

### prevIndex

• `get` **prevIndex**(): `number`

#### Returns

`number`

## Methods

### current

▸ **current**(): `T`

#### Returns

`T`

___

### first

▸ **first**(`save?`): `T`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `save` | `boolean` | `false` |

#### Returns

`T`

___

### get

▸ **get**(`index`, `save?`): `T`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `save` | `boolean` | `false` |

#### Returns

`T`

___

### getIndex

▸ **getIndex**(`index`, `save?`): `T`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `save` | `boolean` | `true` |

#### Returns

`T`

___

### indexes

▸ **indexes**(): `number`[]

#### Returns

`number`[]

___

### last

▸ **last**(`save?`): `T`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `save` | `boolean` | `false` |

#### Returns

`T`

___

### next

▸ **next**(`save?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save?` | `boolean` |

#### Returns

`T`

___

### prev

▸ **prev**(`save?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save?` | `boolean` |

#### Returns

`T`

___

### push

▸ **push**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

___

### remove

▸ **remove**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

___

### set

▸ **set**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `T` |

#### Returns

`void`

___

### shuffle

▸ **shuffle**(): `void`

#### Returns

`void`

___

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

___

### values

▸ **values**(): `T`[]

#### Returns

`T`[]
