[@snickbit/model](../README.md) / [Exports](../modules.md) / Model

# Class: Model<T, D\>

Create a simple object model

**`Description`**

@snickbit/model

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |
| `D` | `Partial`<`T`\> |

## Table of contents

### Constructors

- [constructor](Model.md#constructor)

### Properties

- [append](Model.md#append)
- [data](Model.md#data)
- [defaults](Model.md#defaults)
- [errors](Model.md#errors)
- [is\_new](Model.md#is_new)
- [options](Model.md#options)
- [out](Model.md#out)
- [schema](Model.md#schema)

### Accessors

- [id](Model.md#id)

### Methods

- [applyTimestamps](Model.md#applytimestamps)
- [checkKey](Model.md#checkkey)
- [coalesce](Model.md#coalesce)
- [count](Model.md#count)
- [decrement](Model.md#decrement)
- [empty](Model.md#empty)
- [ensureExists](Model.md#ensureexists)
- [find](Model.md#find)
- [findKey](Model.md#findkey)
- [first](Model.md#first)
- [get](Model.md#get)
- [getError](Model.md#geterror)
- [has](Model.md#has)
- [hasError](Model.md#haserror)
- [increment](Model.md#increment)
- [insert](Model.md#insert)
- [keys](Model.md#keys)
- [last](Model.md#last)
- [patch](Model.md#patch)
- [prepareData](Model.md#preparedata)
- [pull](Model.md#pull)
- [push](Model.md#push)
- [remove](Model.md#remove)
- [resetOut](Model.md#resetout)
- [set](Model.md#set)
- [toJSON](Model.md#tojson)
- [toString](Model.md#tostring)
- [validate](Model.md#validate)

## Constructors

### constructor

• **new Model**<`T`, `D`\>(`data?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |
| `D` | `Partial`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |
| `options?` | `Partial`<[`ModelOptions`](../interfaces/ModelOptions.md)\> |

#### Defined in

[index.ts:111](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L111)

## Properties

### append

• **append**: `string`[] = `[]`

#### Defined in

[index.ts:109](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L109)

___

### data

• **data**: `ObjectPathBound`<`T`\>

#### Defined in

[index.ts:107](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L107)

___

### defaults

• `Protected` `Readonly` **defaults**: `Object`

#### Index signature

▪ [key: `string`]: [`ModelValue`](../modules.md#modelvalue)

#### Defined in

[index.ts:97](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L97)

___

### errors

• `Protected` **errors**: [`ModelErrors`](../modules.md#modelerrors) = `{}`

#### Defined in

[index.ts:105](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L105)

___

### is\_new

• `Protected` **is\_new**: `boolean`

#### Defined in

[index.ts:99](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L99)

___

### options

• `Protected` **options**: [`ModelOptions`](../interfaces/ModelOptions.md) = `{}`

#### Defined in

[index.ts:95](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L95)

___

### out

• `Protected` **out**: `Out`

#### Defined in

[index.ts:101](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L101)

___

### schema

• `Protected` **schema**: `Partial`<[`ModelSchema`](../interfaces/ModelSchema.md)\>

#### Defined in

[index.ts:103](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L103)

## Accessors

### id

• `get` **id**(): [`ModelId`](../modules.md#modelid)

Get the model's id

#### Returns

[`ModelId`](../modules.md#modelid)

#### Defined in

[index.ts:138](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L138)

## Methods

### applyTimestamps

▸ `Protected` **applyTimestamps**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:174](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L174)

___

### checkKey

▸ `Protected` **checkKey**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`string`

#### Defined in

[index.ts:152](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L152)

___

### coalesce

▸ **coalesce**(): `any`

Get the first non-undefined property of a set

#### Returns

`any`

#### Defined in

[index.ts:430](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L430)

▸ **coalesce**(`key`, `defaultValue?`): `any`

Get the first non-undefined property of a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Defined in

[index.ts:435](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L435)

___

### count

▸ **count**(): `number`

Count the items in a set

#### Returns

`number`

#### Defined in

[index.ts:397](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L397)

▸ **count**(`key`): `number`

Count the items in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

`number`

#### Defined in

[index.ts:402](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L402)

___

### decrement

▸ **decrement**(`key`, `value?`): [`Model`](Model.md)<`T`, `D`\>

Decrement a number path

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) | `undefined` |
| `value` | `number` | `1` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:527](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L527)

___

### empty

▸ **empty**(): [`Model`](Model.md)<`T`, `D`\>

Remove all the items in a set

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:416](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L416)

▸ **empty**(`key`): [`Model`](Model.md)<`T`, `D`\>

Remove all the items in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:421](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L421)

___

### ensureExists

▸ **ensureExists**(`key`, `value`): [`Model`](Model.md)<`T`, `D`\>

Set a value if it doesn't exist, do nothing if it does

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `value` | `any` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:538](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L538)

___

### find

▸ **find**(`predicate`): `any`

Find specific data in the model

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Defined in

[index.ts:225](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L225)

▸ **find**(`key`, `predicate`): `any`

Find specific data in the model

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Defined in

[index.ts:230](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L230)

___

### findKey

▸ **findKey**(`predicate`): `any`

Find a key/index matching a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Defined in

[index.ts:257](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L257)

▸ **findKey**(`key`, `predicate`): `any`

Find a key/index matching a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `predicate` | `ObjectPredicate`<`any`\> |

#### Returns

`any`

#### Defined in

[index.ts:262](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L262)

___

### first

▸ **first**(): `any`

Get the first value in a set

#### Returns

`any`

#### Defined in

[index.ts:290](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L290)

▸ **first**(`key?`): `any`

Get the first value in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

`any`

#### Defined in

[index.ts:295](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L295)

___

### get

▸ **get**(): `any`

Get the entire model's data

#### Returns

`any`

#### Defined in

[index.ts:198](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L198)

▸ **get**(`key`): `any`

Get a path from an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

`any`

#### Defined in

[index.ts:203](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L203)

___

### getError

▸ **getError**(`key`): `string`

Get the error for a key, if there is one

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[index.ts:184](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L184)

___

### has

▸ **has**(`key`): `boolean`

Tests path existence

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

`boolean`

#### Defined in

[index.ts:377](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L377)

___

### hasError

▸ **hasError**(`key`): `boolean`

Check if a key has an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[index.ts:191](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L191)

___

### increment

▸ **increment**(`key`, `value?`): [`Model`](Model.md)<`T`, `D`\>

Increment a number path

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) | `undefined` |
| `value` | `number` | `1` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:516](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L516)

___

### insert

▸ **insert**(`key`, `value`, `at?`): [`Model`](Model.md)<`T`, `D`\>

Insert an item in an array path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `value` | `any` |
| `at?` | `number` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:443](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L443)

___

### keys

▸ **keys**(): `string`[]

Get the keys of the data

#### Returns

`string`[]

#### Defined in

[index.ts:384](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L384)

___

### last

▸ **last**(): `any`

Get the last value in a set

#### Returns

`any`

#### Defined in

[index.ts:311](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L311)

▸ **last**(`key`): `any`

Get the last value in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

`any`

#### Defined in

[index.ts:316](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L316)

___

### patch

▸ **patch**(`data`): [`Model`](Model.md)<`T`, `D`\>

Patch/merge the value of a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:468](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L468)

▸ **patch**(`key`, `value`): [`Model`](Model.md)<`T`, `D`\>

Patch/merge the value of a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `value` | `any` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:473](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L473)

___

### prepareData

▸ `Protected` **prepareData**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:565](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L565)

___

### pull

▸ **pull**(`key`, `defaultValue?`): `any`

Get the value of a path and remove it

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Defined in

[index.ts:459](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L459)

___

### push

▸ **push**(`key`, ...`values`): [`Model`](Model.md)<`T`, `D`\>

Push a value to an array path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `...values` | `any`[] |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:451](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L451)

___

### remove

▸ **remove**(`key`): [`Model`](Model.md)<`T`, `D`\>

Remove a value from a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:546](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L546)

___

### resetOut

▸ `Protected` **resetOut**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:148](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L148)

___

### set

▸ **set**(`data`): [`Model`](Model.md)<`T`, `D`\>

Overwrite the entire object

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` \| `D` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:332](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L332)

▸ **set**(`key`, `value`, `overwrite?`): [`Model`](Model.md)<`T`, `D`\>

Set the value of a key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../modules.md#modelkey) |
| `value` | `any` |
| `overwrite?` | `boolean` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

#### Defined in

[index.ts:337](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L337)

___

### toJSON

▸ **toJSON**(): `any`

Convert the model to a JSON object. This is the same as calling `.get()

#### Returns

`any`

#### Defined in

[index.ts:561](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L561)

___

### toString

▸ **toString**(): `string`

Convert the model to a JSON string

#### Returns

`string`

#### Defined in

[index.ts:554](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L554)

___

### validate

▸ **validate**(): `Promise`<``true`` \| [`ModelErrors`](../modules.md#modelerrors)\>

Validate the model against the schema

**`Throws`**

If the model is invalid and strict mode is enabled

#### Returns

`Promise`<``true`` \| [`ModelErrors`](../modules.md#modelerrors)\>

#### Defined in

[index.ts:583](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/model/src/index.ts#L583)
