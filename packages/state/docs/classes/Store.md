# Class: Store<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

## Hierarchy

- [`ReactiveState`](ReactiveState.md)<`T`\>

  ↳ **`Store`**

## Table of contents

### Constructors

- [constructor](Store.md#constructor)

### Properties

- [options](Store.md#options)
- [persistable](Store.md#persistable)

### Accessors

- [$id](Store.md#$id)
- [$name](Store.md#$name)
- [$ready](Store.md#$ready)
- [$state](Store.md#$state)

### Methods

- [$config](Store.md#$config)
- [$emit](Store.md#$emit)
- [$get](Store.md#$get)
- [$has](Store.md#$has)
- [$hydrate](Store.md#$hydrate)
- [$keys](Store.md#$keys)
- [$off](Store.md#$off)
- [$on](Store.md#$on)
- [$patch](Store.md#$patch)
- [$reset](Store.md#$reset)
- [$set](Store.md#$set)
- [$watch](Store.md#$watch)

## Constructors

### constructor

• **new Store**<`T`\>(`data?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |
| `options?` | `Partial`<[`StoreOptions`](../interfaces/StoreOptions.md)\> |

#### Overrides

[ReactiveState](ReactiveState.md).[constructor](ReactiveState.md#constructor)

## Properties

### options

• **options**: [`StoreOptions`](../interfaces/StoreOptions.md)

___

### persistable

• **persistable**: `string`[] = `[]`

## Accessors

### $id

• `get` **$id**(): `string`

#### Returns

`string`

#### Inherited from

ReactiveState.$id

___

### $name

• `get` **$name**(): `string`

#### Returns

`string`

#### Inherited from

ReactiveState.$name

___

### $ready

• `get` **$ready**(): `boolean`

#### Returns

`boolean`

___

### $state

• `get` **$state**(): `T`

#### Returns

`T`

#### Inherited from

ReactiveState.$state

## Methods

### $config

▸ **$config**(`options?`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`StoreOptions`](../interfaces/StoreOptions.md)\> |
| `data?` | `T` |

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

#### Inherited from

[ReactiveState](ReactiveState.md).[$emit](ReactiveState.md#$emit)

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

[ReactiveState](ReactiveState.md).[$get](ReactiveState.md#$get)

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

[ReactiveState](ReactiveState.md).[$has](ReactiveState.md#$has)

___

### $hydrate

▸ **$hydrate**(`hydration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hydration` | `T` |

#### Returns

`void`

___

### $keys

▸ **$keys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[ReactiveState](ReactiveState.md).[$keys](ReactiveState.md#$keys)

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

#### Inherited from

[ReactiveState](ReactiveState.md).[$off](ReactiveState.md#$off)

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

#### Inherited from

[ReactiveState](ReactiveState.md).[$on](ReactiveState.md#$on)

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

[ReactiveState](ReactiveState.md).[$patch](ReactiveState.md#$patch)

___

### $reset

▸ **$reset**(): `void`

#### Returns

`void`

#### Inherited from

[ReactiveState](ReactiveState.md).[$reset](ReactiveState.md#$reset)

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

#### Inherited from

[ReactiveState](ReactiveState.md).[$set](ReactiveState.md#$set)

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

#### Inherited from

[ReactiveState](ReactiveState.md).[$watch](ReactiveState.md#$watch)
