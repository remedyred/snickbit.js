# Class: Controller<T, D\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |
| `D` | `Partial`<`T`\> |

## Table of contents

### Constructors

- [constructor](Controller.md#constructor)

### Properties

- [$state](Controller.md#$state)
- [persistable](Controller.md#persistable)

### Accessors

- [$name](Controller.md#$name)

### Methods

- [$emit](Controller.md#$emit)
- [$get](Controller.md#$get)
- [$has](Controller.md#$has)
- [$keys](Controller.md#$keys)
- [$off](Controller.md#$off)
- [$on](Controller.md#$on)
- [$patch](Controller.md#$patch)
- [$reset](Controller.md#$reset)
- [$set](Controller.md#$set)
- [$watch](Controller.md#$watch)

## Constructors

### constructor

• **new Controller**<`T`, `D`\>(`data?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |
| `D` | `Partial`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

## Properties

### $state

• **$state**: `ProxyHandler`<[`Controller`](Controller.md)<`T`, `Partial`<`T`\>\>\> & `T`

___

### persistable

• **persistable**: `string`[] = `[]`

## Accessors

### $name

• `get` **$name**(): `string`

#### Returns

`string`

## Methods

### $emit

▸ **$emit**(`event`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `data` | `any` |

#### Returns

`void`

___

### $get

▸ **$get**(`key`): `T`[keyof `T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` |

#### Returns

`T`[keyof `T`]

___

### $has

▸ **$has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

___

### $keys

▸ **$keys**(): `string`[]

#### Returns

`string`[]

___

### $off

▸ **$off**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Handler`<`unknown`\> |

#### Returns

`void`

___

### $on

▸ **$on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Handler`<`unknown`\> |

#### Returns

`void`

___

### $patch

▸ **$patch**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` |

#### Returns

`void`

___

### $reset

▸ **$reset**(): `void`

#### Returns

`void`

___

### $set

▸ **$set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| keyof `D` |
| `value` | `any` |

#### Returns

`void`

___

### $watch

▸ **$watch**(`key`, `callback`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` |
| `callback` | [`WatchCallback`](../README.md#watchcallback) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`
