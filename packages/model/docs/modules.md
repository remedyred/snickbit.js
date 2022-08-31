[@snickbit/model](README.md) / Exports

# @snickbit/model

## Table of contents

### Classes

- [Model](classes/Model.md)

### Interfaces

- [ModelOptions](interfaces/ModelOptions.md)
- [ModelSchema](interfaces/ModelSchema.md)
- [ModelSchemaRecord](interfaces/ModelSchemaRecord.md)

### Type Aliases

- [ModelErrors](modules.md#modelerrors)
- [ModelId](modules.md#modelid)
- [ModelKey](modules.md#modelkey)
- [ModelPath](modules.md#modelpath)
- [ModelValidationMethod](modules.md#modelvalidationmethod)
- [ModelValue](modules.md#modelvalue)

### Functions

- [model](modules.md#model)

## Type Aliases

### ModelErrors

Ƭ **ModelErrors**: `Record`<`string`, `string`\>

#### Defined in

[index.ts:13](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L13)

___

### ModelId

Ƭ **ModelId**: `number` \| `string` \| `undefined`

#### Defined in

[index.ts:5](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L5)

___

### ModelKey

Ƭ **ModelKey**: [`ModelPath`](modules.md#modelpath)[] \| [`ModelPath`](modules.md#modelpath)

#### Defined in

[index.ts:7](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L7)

___

### ModelPath

Ƭ **ModelPath**: `number` \| `string` \| `symbol`

#### Defined in

[index.ts:9](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L9)

___

### ModelValidationMethod

Ƭ **ModelValidationMethod**: (`key`: `string`, `value`: [`ModelValue`](modules.md#modelvalue)) => `boolean`

#### Type declaration

▸ (`key`, `value`): `boolean`

Model Validation Method

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the property being validated |
| `value` | [`ModelValue`](modules.md#modelvalue) | The value of the property being validated |

##### Returns

`boolean`

#### Defined in

[index.ts:28](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L28)

___

### ModelValue

Ƭ **ModelValue**: `any`

#### Defined in

[index.ts:11](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L11)

## Functions

### model

▸ **model**<`T`\>(`data`, `options?`): [`Model`](classes/Model.md)<`T`, `Partial`<`T`\>\>

Create a simple object model

**`Description`**

@snickbit/model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `options?` | `Partial`<[`ModelOptions`](interfaces/ModelOptions.md)\> |

#### Returns

[`Model`](classes/Model.md)<`T`, `Partial`<`T`\>\>

#### Defined in

[index.ts:86](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L86)
