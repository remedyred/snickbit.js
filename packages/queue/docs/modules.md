[@snickbit/queue](README.md) / Exports

# @snickbit/queue

## Table of contents

### Classes

- [AbortQueueError](classes/AbortQueueError.md)
- [Queue](classes/Queue.md)
- [QueueError](classes/QueueError.md)
- [QueueException](classes/QueueException.md)
- [QueuePromise](classes/QueuePromise.md)

### Interfaces

- [QueueConfiguration](interfaces/QueueConfiguration.md)
- [QueueErrorJSON](interfaces/QueueErrorJSON.md)

### Type Aliases

- [CatchCallback](modules.md#catchcallback)
- [DynamicError](modules.md#dynamicerror)
- [ErrorMessage](modules.md#errormessage)
- [FinallyCallback](modules.md#finallycallback)
- [QueueConfigurationValue](modules.md#queueconfigurationvalue)
- [QueueOption](modules.md#queueoption)
- [QueueOptions](modules.md#queueoptions)
- [QueueOptionsValue](modules.md#queueoptionsvalue)
- [QueueTask](modules.md#queuetask)
- [QueueTaskFunction](modules.md#queuetaskfunction)
- [QueueTaskPromise](modules.md#queuetaskpromise)
- [ThenCallback](modules.md#thencallback)

### Functions

- [queue](modules.md#queue)

## Type Aliases

### CatchCallback

Ƭ **CatchCallback**: (`error`: [`QueueException`](classes/QueueException.md)) => `Promise`<`any`\> \| `any`

#### Type declaration

▸ (`error`): `Promise`<`any`\> \| `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`QueueException`](classes/QueueException.md) |

##### Returns

`Promise`<`any`\> \| `any`

#### Defined in

[packages/queue/src/definitions.ts:50](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L50)

___

### DynamicError

Ƭ **DynamicError**: `Error` & `Record`<`string`, `any`\>

#### Defined in

[packages/queue/src/errors.ts:8](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L8)

___

### ErrorMessage

Ƭ **ErrorMessage**: `any`[] \| [`DynamicError`](modules.md#dynamicerror) \| `Record`<`string`, `any`\> \| `string`

#### Defined in

[packages/queue/src/errors.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L9)

___

### FinallyCallback

Ƭ **FinallyCallback**: () => `Promise`<`any`\> \| `any`

#### Type declaration

▸ (): `Promise`<`any`\> \| `any`

##### Returns

`Promise`<`any`\> \| `any`

#### Defined in

[packages/queue/src/definitions.ts:49](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L49)

___

### QueueConfigurationValue

Ƭ **QueueConfigurationValue**: [`QueueConfiguration`](interfaces/QueueConfiguration.md)[keyof [`QueueConfiguration`](interfaces/QueueConfiguration.md)]

#### Defined in

[packages/queue/src/definitions.ts:39](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L39)

___

### QueueOption

Ƭ **QueueOption**: keyof [`QueueConfiguration`](interfaces/QueueConfiguration.md)

#### Defined in

[packages/queue/src/definitions.ts:41](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L41)

___

### QueueOptions

Ƭ **QueueOptions**: `Partial`<[`QueueConfiguration`](interfaces/QueueConfiguration.md)\>

#### Defined in

[packages/queue/src/definitions.ts:40](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L40)

___

### QueueOptionsValue

Ƭ **QueueOptionsValue**: [`QueueOptions`](modules.md#queueoptions)[keyof [`QueueOptions`](modules.md#queueoptions)]

#### Defined in

[packages/queue/src/definitions.ts:42](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L42)

___

### QueueTask

Ƭ **QueueTask**: [`QueueTaskFunction`](modules.md#queuetaskfunction) \| [`QueueTaskPromise`](modules.md#queuetaskpromise)

#### Defined in

[packages/queue/src/definitions.ts:46](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L46)

___

### QueueTaskFunction

Ƭ **QueueTaskFunction**: (...`args`: `any`[]) => [`QueueTaskPromise`](modules.md#queuetaskpromise) \| `any`

#### Type declaration

▸ (...`args`): [`QueueTaskPromise`](modules.md#queuetaskpromise) \| `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`QueueTaskPromise`](modules.md#queuetaskpromise) \| `any`

#### Defined in

[packages/queue/src/definitions.ts:45](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L45)

___

### QueueTaskPromise

Ƭ **QueueTaskPromise**: `Promise`<`any`\>

#### Defined in

[packages/queue/src/definitions.ts:44](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L44)

___

### ThenCallback

Ƭ **ThenCallback**: (`result`: `any`) => `Promise`<`any`\> \| `any`

#### Type declaration

▸ (`result`): `Promise`<`any`\> \| `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

##### Returns

`Promise`<`any`\> \| `any`

#### Defined in

[packages/queue/src/definitions.ts:48](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L48)

## Functions

### queue

▸ **queue**(`options?`): [`Queue`](classes/Queue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`QueueConfiguration`](interfaces/QueueConfiguration.md)\> |

#### Returns

[`Queue`](classes/Queue.md)

#### Defined in

[packages/queue/src/queue.ts:435](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L435)
