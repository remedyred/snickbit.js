# @snickbit/state

## Table of contents

### Classes

- [ReactiveState](classes/ReactiveState.md)
- [SimpleState](classes/SimpleState.md)
- [State](classes/State.md)
- [Store](classes/Store.md)

### Interfaces

- [StoreOptions](interfaces/StoreOptions.md)

### Type Aliases

- [StoreAction](README.md#storeaction)
- [StoreActions](README.md#storeactions)
- [StoreGetter](README.md#storegetter)
- [StoreGetters](README.md#storegetters)
- [WatchCallback](README.md#watchcallback)
- [WatchStop](README.md#watchstop)
- [Watchers](README.md#watchers)

### Functions

- [createReactiveState](README.md#createreactivestate)
- [createState](README.md#createstate)
- [createStore](README.md#createstore)

## Type Aliases

### StoreAction

Ƭ **StoreAction**: (`this`: [`Store`](classes/Store.md), ...`args`: `any`[]) => `any`

#### Type declaration

▸ (`this`, `...args`): `any`

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

### WatchCallback

Ƭ **WatchCallback**: (`value`: `any`) => `any`

#### Type declaration

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`any`

___

### WatchStop

Ƭ **WatchStop**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

___

### Watchers

Ƭ **Watchers**: `Record`<`string`, [`WatchCallback`](README.md#watchcallback)\>

## Functions

### createReactiveState

▸ **createReactiveState**<`T`\>(`hydration?`): () => [`ReactiveState`](classes/ReactiveState.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hydration` | `Partial`<`T`\> |

#### Returns

`fn`

▸ (): [`ReactiveState`](classes/ReactiveState.md)<`T`\>

##### Returns

[`ReactiveState`](classes/ReactiveState.md)<`T`\>

___

### createState

▸ **createState**<`T`\>(`hydration?`): () => [`State`](classes/State.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hydration` | `Partial`<`T`\> |

#### Returns

`fn`

▸ (): [`State`](classes/State.md)<`T`\>

##### Returns

[`State`](classes/State.md)<`T`\>

___

### createStore

▸ **createStore**<`T`\>(`hydration?`, `options?`): () => [`Store`](classes/Store.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hydration` | `T` |
| `options?` | `Partial`<[`StoreOptions`](interfaces/StoreOptions.md)\> |

#### Returns

`fn`

▸ (): [`Store`](classes/Store.md)<`T`\>

##### Returns

[`Store`](classes/Store.md)<`T`\>
