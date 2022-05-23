# Class: Controller<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends [`DefaultState`](../interfaces/DefaultState.md) |

## Table of contents

### Constructors

- [constructor](Controller.md#constructor)

### Properties

- [$state](Controller.md#$state)
- [options](Controller.md#options)

### Accessors

- [$id](Controller.md#$id)
- [$ready](Controller.md#$ready)

### Methods

- [$config](Controller.md#$config)
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

• **new Controller**<`State`\>(`name`, `options?`, `hydration?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends [`DefaultState`](../interfaces/DefaultState.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `Partial`<[`ControllerOptions`](../interfaces/ControllerOptions.md)\> |
| `hydration?` | [`ControllerState`](../interfaces/ControllerState.md) |

## Properties

### $state

• **$state**: `ProxyHandler`<[`Controller`](Controller.md)<`State`\>\>

___

### options

• **options**: [`ControllerOptions`](../interfaces/ControllerOptions.md)

## Accessors

### $id

• `get` **$id**(): `string`

#### Returns

`string`

___

### $ready

• `get` **$ready**(): `boolean`

#### Returns

`boolean`

## Methods

### $config

▸ **$config**(`name`, `options?`, `hydration?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `Partial`<[`ControllerOptions`](../interfaces/ControllerOptions.md)\> |
| `hydration?` | [`ControllerState`](../interfaces/ControllerState.md) |

#### Returns

`void`

___

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
| `key` | `string` |

#### Returns

`any`

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
| `data` | [`ControllerState`](../interfaces/ControllerState.md) |

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
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`
