# Class: Controller<State\>

## Type parameters

| Name |
| :------ |
| `State` |

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

## Constructors

### constructor

• **new Controller**<`State`\>(`data?`)

#### Type parameters

| Name |
| :------ |
| `State` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`State`\> |

## Properties

### $state

• **$state**: `ProxyHandler`<[`Controller`](Controller.md)<`State`\>\> & `State`

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

▸ **$get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ControllerKey`](../README.md#controllerkey) |

#### Returns

`any`

___

### $has

▸ **$has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ControllerKey`](../README.md#controllerkey) |

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
| `data` | `State` |

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
| `key` | [`ControllerKey`](../README.md#controllerkey) |
| `value` | `any` |

#### Returns

`void`
