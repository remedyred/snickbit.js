# @snickbit/state

## Table of contents

### Classes

- [Store](classes/Store.md)

### Interfaces

- [StoreOptions](interfaces/StoreOptions.md)

### Type Aliases

- [StoreAction](README.md#storeaction)
- [StoreActions](README.md#storeactions)
- [StoreGetter](README.md#storegetter)
- [StoreGetters](README.md#storegetters)
- [UseStore](README.md#usestore)

### Functions

- [createStore](README.md#createstore)

## Type Aliases

### StoreAction

Ƭ **StoreAction**: (`this`: [`Store`](classes/Store.md), ...`args`: `any`[]) => `any`

#### Type declaration

▸ (`this`, ...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Store`](classes/Store.md) |
| `...args` | `any`[] |

##### Returns

`any`

___

### StoreActions

Ƭ **StoreActions**: `Record`<`string`, [`StoreAction`](README.md#storeaction)\>

___

### StoreGetter

Ƭ **StoreGetter**: (`this`: [`Store`](classes/Store.md)) => `any`

#### Type declaration

▸ (`this`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Store`](classes/Store.md) |

##### Returns

`any`

___

### StoreGetters

Ƭ **StoreGetters**: `Record`<`string`, [`StoreGetter`](README.md#storegetter)\>

___

### UseStore

Ƭ **UseStore**<`T`\>: () => [`Store`](classes/Store.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Type declaration

▸ (): [`Store`](classes/Store.md)<`T`\>

##### Returns

[`Store`](classes/Store.md)<`T`\>

## Functions

### createStore

▸ **createStore**<`State`\>(`hydration?`, `options?`): [`UseStore`](README.md#usestore)<`State`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hydration` | `State` |
| `options?` | `Partial`<[`StoreOptions`](interfaces/StoreOptions.md)\> |

#### Returns

[`UseStore`](README.md#usestore)<`State`\>
