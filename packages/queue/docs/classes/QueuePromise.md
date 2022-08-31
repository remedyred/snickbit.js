[@snickbit/queue](../README.md) / [Exports](../modules.md) / QueuePromise

# Class: QueuePromise<T\>

**`No Inherit Doc`**

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`<`T`\>

  ↳ **`QueuePromise`**

## Table of contents

### Constructors

- [constructor](QueuePromise.md#constructor)

### Properties

- [[toStringTag]](QueuePromise.md#[tostringtag])
- [queue](QueuePromise.md#queue)
- [[species]](QueuePromise.md#[species])

### Methods

- [catch](QueuePromise.md#catch)
- [catchEach](QueuePromise.md#catcheach)
- [finally](QueuePromise.md#finally)
- [finallyEach](QueuePromise.md#finallyeach)
- [then](QueuePromise.md#then)
- [thenEach](QueuePromise.md#theneach)
- [all](QueuePromise.md#all)
- [allSettled](QueuePromise.md#allsettled)
- [any](QueuePromise.md#any)
- [race](QueuePromise.md#race)
- [reject](QueuePromise.md#reject)
- [resolve](QueuePromise.md#resolve)

## Constructors

### constructor

• **new QueuePromise**<`T`\>(`executor`, `queue`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` |
| `queue` | [`Queue`](Queue.md) |

#### Overrides

Promise&lt;T\&gt;.constructor

#### Defined in

[packages/queue/src/queue.promise.ts:10](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L10)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@183

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

___

### queue

• `Private` **queue**: [`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.promise.ts:8](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L8)

___

### [species]

▪ `Static` `Readonly` **[species]**: `PromiseConstructor`

#### Inherited from

Promise.\_\_@species@82

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:178

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Queue as a whole.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onrejected?` | (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> |

#### Returns

`Promise`<`T` \| `TResult`\>

#### Overrides

Promise.catch

#### Defined in

[packages/queue/src/queue.promise.ts:29](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L29)

___

### catchEach

▸ **catchEach**(`callback`): [`QueuePromise`](QueuePromise.md)<`T`\>

Attaches a callback for the rejection of each Promise or Function in the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`CatchCallback`](../modules.md#catchcallback) |

#### Returns

[`QueuePromise`](QueuePromise.md)<`T`\>

#### Defined in

[packages/queue/src/queue.promise.ts:54](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L54)

___

### finally

▸ **finally**(`onfulfilled?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Queue as a whole is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | () => `void` |

#### Returns

`Promise`<`T`\>

#### Overrides

Promise.finally

#### Defined in

[packages/queue/src/queue.promise.ts:37](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L37)

___

### finallyEach

▸ **finallyEach**(`callback`): [`QueuePromise`](QueuePromise.md)<`T`\>

Attaches a callback that is invoked when each Promise or Function in the queue is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FinallyCallback`](../modules.md#finallycallback) |

#### Returns

[`QueuePromise`](QueuePromise.md)<`T`\>

#### Defined in

[packages/queue/src/queue.promise.ts:63](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L63)

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Queue as a whole.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

#### Overrides

Promise.then

#### Defined in

[packages/queue/src/queue.promise.ts:21](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L21)

___

### thenEach

▸ **thenEach**(`callback`): [`QueuePromise`](QueuePromise.md)<`T`\>

Attaches a callback for the resolution of each Promise or Function in the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`ThenCallback`](../modules.md#thencallback) |

#### Returns

[`QueuePromise`](QueuePromise.md)<`T`\>

#### Defined in

[packages/queue/src/queue.promise.ts:45](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/queue/src/queue.promise.ts#L45)

___

### all

▸ `Static` **all**<`T`\>(`values`): `Promise`<`Awaited`<`T`\>[]\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>[]\>

A new Promise.

#### Inherited from

Promise.all

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:227

▸ `Static` **all**<`T`\>(`values`): `Promise`<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

`Promise`<{ -readonly [P in string \| number \| symbol]: Awaited<T[P]\> }\>

A new Promise.

#### Inherited from

Promise.all

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:41

___

### allSettled

▸ `Static` **allSettled**<`T`\>(`values`): `Promise`<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

`Promise`<{ -readonly [P in string \| number \| symbol]: PromiseSettledResult<Awaited<T[P]\>\> }\>

A new Promise.

#### Inherited from

Promise.allSettled

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2020.promise.d.ts:40

▸ `Static` **allSettled**<`T`\>(`values`): `Promise`<`PromiseSettledResult`<`Awaited`<`T`\>\>[]\>

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An array of Promises. |

#### Returns

`Promise`<`PromiseSettledResult`<`Awaited`<`T`\>\>[]\>

A new Promise.

#### Inherited from

Promise.allSettled

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2020.promise.d.ts:48

___

### any

▸ `Static` **any**<`T`\>(`values`): `Promise`<`Awaited`<`T`[`number`]\>\>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array or iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`[`number`]\>\>

A new Promise.

#### Inherited from

Promise.any

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2021.promise.d.ts:42

▸ `Static` **any**<`T`\>(`values`): `Promise`<`Awaited`<`T`\>\>

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An array or iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A new Promise.

#### Inherited from

Promise.any

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2021.promise.d.ts:49

___

### race

▸ `Static` **race**<`T`\>(`values`): `Promise`<`Awaited`<`T`\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> | An iterable of Promises. |

#### Returns

`Promise`<`Awaited`<`T`\>\>

A new Promise.

#### Inherited from

Promise.race

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:235

▸ `Static` **race**<`T`\>(`values`): `Promise`<`Awaited`<`T`[`number`]\>\>

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] \| [] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T` | An array of Promises. |

#### Returns

`Promise`<`Awaited`<`T`[`number`]\>\>

A new Promise.

#### Inherited from

Promise.race

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:52

___

### reject

▸ `Static` **reject**<`T`\>(`reason?`): `Promise`<`T`\>

Creates a new rejected promise for the provided reason.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason?` | `any` | The reason the promise was rejected. |

#### Returns

`Promise`<`T`\>

A new rejected Promise.

#### Inherited from

Promise.reject

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:62

___

### resolve

▸ `Static` **resolve**(): `Promise`<`void`\>

Creates a new resolved promise.

#### Returns

`Promise`<`void`\>

A resolved promise.

#### Inherited from

Promise.resolve

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:68

▸ `Static` **resolve**<`T`\>(`value`): `Promise`<`T`\>

Creates a new resolved promise for the provided value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` \| `PromiseLike`<`T`\> | A promise. |

#### Returns

`Promise`<`T`\>

A promise whose internal state matches the provided promise.

#### Inherited from

Promise.resolve

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2015.promise.d.ts:75
