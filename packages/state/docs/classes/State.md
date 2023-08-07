# Class: State<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

## Hierarchy

- [`SimpleState`](SimpleState.md)<`T`\>

  ↳ **`State`**

  ↳↳ [`ReactiveState`](ReactiveState.md)

## Table of contents

### Constructors

- [constructor](State.md#constructor)

### Accessors

- [$id](State.md#$id)
- [$name](State.md#$name)
- [$state](State.md#$state)

### Methods

- [$get](State.md#$get)
- [$has](State.md#$has)
- [$keys](State.md#$keys)
- [$patch](State.md#$patch)
- [$reset](State.md#$reset)
- [$set](State.md#$set)

## Constructors

### constructor

• **new State**<`T`\>(`name?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Overrides

[SimpleState](SimpleState.md).[constructor](SimpleState.md#constructor)

• **new State**<`T`\>(`data?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `Partial`<`T`\> |

#### Overrides

SimpleState&lt;T\&gt;.constructor

• **new State**<`T`\>(`name`, `data?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data?` | `Partial`<`T`\> |

#### Overrides

SimpleState&lt;T\&gt;.constructor

## Accessors

### $id

• `get` **$id**(): `string`

#### Returns

`string`

___

### $name

• `get` **$name**(): `string`

#### Returns

`string`

___

### $state

• `get` **$state**(): `T`

#### Returns

`T`

## Methods

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

### $patch

▸ **$patch**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<`T`\> |

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
| `key` | keyof `T` |
| `value` | `any` |

#### Returns

`void`
