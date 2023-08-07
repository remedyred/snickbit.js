# Class: ReactiveState<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

## Hierarchy

- [`State`](State.md)<`T`\>

  ↳ **`ReactiveState`**

  ↳↳ [`Store`](Store.md)

## Table of contents

### Constructors

- [constructor](ReactiveState.md#constructor)

### Accessors

- [$id](ReactiveState.md#$id)
- [$name](ReactiveState.md#$name)
- [$state](ReactiveState.md#$state)

### Methods

- [$emit](ReactiveState.md#$emit)
- [$get](ReactiveState.md#$get)
- [$has](ReactiveState.md#$has)
- [$keys](ReactiveState.md#$keys)
- [$off](ReactiveState.md#$off)
- [$on](ReactiveState.md#$on)
- [$patch](ReactiveState.md#$patch)
- [$reset](ReactiveState.md#$reset)
- [$set](ReactiveState.md#$set)
- [$watch](ReactiveState.md#$watch)

## Constructors

### constructor

• **new ReactiveState**<`T`\>(`data?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`T`\> |

#### Overrides

[State](State.md).[constructor](State.md#constructor)

## Accessors

### $id

• `get` **$id**(): `string`

#### Returns

`string`

#### Inherited from

State.$id

___

### $name

• `get` **$name**(): `string`

#### Returns

`string`

#### Inherited from

State.$name

___

### $state

• `get` **$state**(): `T`

#### Returns

`T`

#### Inherited from

State.$state

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

#### Inherited from

[State](State.md).[$get](State.md#$get)

___

### $has

▸ **$has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[State](State.md).[$has](State.md#$has)

___

### $keys

▸ **$keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[State](State.md).[$keys](State.md#$keys)

___

### $off

▸ **$off**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Handler` |

#### Returns

`void`

___

### $on

▸ **$on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Handler` |

#### Returns

`void`

___

### $patch

▸ **$patch**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`T`\> |

#### Returns

`void`

#### Inherited from

[State](State.md).[$patch](State.md#$patch)

___

### $reset

▸ **$reset**(): `void`

#### Returns

`void`

#### Inherited from

[State](State.md).[$reset](State.md#$reset)

___

### $set

▸ **$set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` |
| `value` | `any` |

#### Returns

`void`

#### Overrides

[State](State.md).[$set](State.md#$set)

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
