[@snickbit/queue](../README.md) / [Exports](../modules.md) / Queue

# Class: Queue

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [#reject](Queue.md##reject)
- [#results](Queue.md##results)
- [aborted](Queue.md#aborted)
- [handlers](Queue.md#handlers)
- [options](Queue.md#options)
- [process](Queue.md#process)
- [processes](Queue.md#processes)
- [queue](Queue.md#queue)
- [stopped](Queue.md#stopped)
- [tasks](Queue.md#tasks)
- [ticks](Queue.md#ticks)
- [waiting](Queue.md#waiting)
- [defaultOptions](Queue.md#defaultoptions)

### Accessors

- [active](Queue.md#active)
- [length](Queue.md#length)
- [pending](Queue.md#pending)

### Methods

- [abort](Queue.md#abort)
- [abortOnError](Queue.md#abortonerror)
- [abortTask](Queue.md#aborttask)
- [add](Queue.md#add)
- [catchEach](Queue.md#catcheach)
- [clear](Queue.md#clear)
- [concurrency](Queue.md#concurrency)
- [executeTask](Queue.md#executetask)
- [finallyEach](Queue.md#finallyeach)
- [makeQueue](Queue.md#makequeue)
- [push](Queue.md#push)
- [run](Queue.md#run)
- [strategy](Queue.md#strategy)
- [strictDelay](Queue.md#strictdelay)
- [thenEach](Queue.md#theneach)
- [throttle](Queue.md#throttle)
- [wait](Queue.md#wait)
- [windowedDelay](Queue.md#windoweddelay)
- [config](Queue.md#config)

## Constructors

### constructor

• **new Queue**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`QueueConfiguration`](../interfaces/QueueConfiguration.md)\> |

#### Defined in

[packages/queue/src/queue.ts:75](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L75)

## Properties

### #reject

• `Private` **#reject**: (`error`: [`QueueException`](QueueException.md)) => `void` \| (`reason?`: `any`) => `void`

#### Defined in

[packages/queue/src/queue.ts:71](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L71)

___

### #results

• `Private` **#results**: `any`[] = `[]`

#### Defined in

[packages/queue/src/queue.ts:51](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L51)

___

### aborted

• `Private` **aborted**: `boolean` = `false`

#### Defined in

[packages/queue/src/queue.ts:55](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L55)

___

### handlers

• `Private` **handlers**: `QueueHandlers`

#### Defined in

[packages/queue/src/queue.ts:61](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L61)

___

### options

• `Readonly` **options**: [`QueueConfiguration`](../interfaces/QueueConfiguration.md)

#### Defined in

[packages/queue/src/queue.ts:73](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L73)

___

### process

• `Private` **process**: [`QueuePromise`](QueuePromise.md)<`any`\>

#### Defined in

[packages/queue/src/queue.ts:59](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L59)

___

### processes

• `Private` **processes**: `number` = `0`

#### Defined in

[packages/queue/src/queue.ts:57](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L57)

___

### queue

• `Private` **queue**: `ChunkedQueue` \| `DynamicCyclicQueue`

#### Defined in

[packages/queue/src/queue.ts:53](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L53)

___

### stopped

• `Private` **stopped**: `boolean`

#### Defined in

[packages/queue/src/queue.ts:47](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L47)

___

### tasks

• `Private` **tasks**: `number` = `0`

#### Defined in

[packages/queue/src/queue.ts:49](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L49)

___

### ticks

• `Private` **ticks**: `QueueTicks`

#### Defined in

[packages/queue/src/queue.ts:63](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L63)

___

### waiting

• `Private` **waiting**: `Waiting`

#### Defined in

[packages/queue/src/queue.ts:69](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L69)

___

### defaultOptions

▪ `Static` `Readonly` **defaultOptions**: [`QueueConfiguration`](../interfaces/QueueConfiguration.md)

#### Defined in

[packages/queue/src/queue.ts:45](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L45)

## Accessors

### active

• `get` **active**(): `number`

#### Returns

`number`

#### Defined in

[packages/queue/src/queue.ts:111](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L111)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[packages/queue/src/queue.ts:107](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L107)

___

### pending

• `get` **pending**(): `number`

#### Returns

`number`

#### Defined in

[packages/queue/src/queue.ts:115](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L115)

## Methods

### abort

▸ **abort**(`reason?`): `void`

Abort the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

`void`

#### Defined in

[packages/queue/src/queue.ts:257](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L257)

___

### abortOnError

▸ **abortOnError**(`abortOnError?`): [`Queue`](Queue.md)

Enable (or disable) the queue's abortOnError option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `abortOnError?` | `boolean` |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:271](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L271)

___

### abortTask

▸ `Private` **abortTask**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `any` |

#### Returns

`void`

#### Defined in

[packages/queue/src/queue.ts:379](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L379)

___

### add

▸ **add**(`task`): [`Queue`](Queue.md)

Add a task to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTask`](../modules.md#queuetask) |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:200](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L200)

▸ **add**(`task`): [`Queue`](Queue.md)

Add a promise to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTaskPromise`](../modules.md#queuetaskpromise) |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:206](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L206)

▸ **add**(`task`, `args`): [`Queue`](Queue.md)

Add a Function to the queue, along with its arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTaskFunction`](../modules.md#queuetaskfunction) |
| `args` | `any`[] |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:213](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L213)

▸ **add**(`task`, `thisArg`, `args`): [`Queue`](Queue.md)

Add a Function to the queue, with its "this" context and arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTaskFunction`](../modules.md#queuetaskfunction) |
| `thisArg` | `any` |
| `args` | `any`[] |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:221](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L221)

___

### catchEach

▸ **catchEach**(`callback`): [`Queue`](Queue.md)

Callback called for each task that throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`CatchCallback`](../modules.md#catchcallback) |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:365](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L365)

___

### clear

▸ **clear**(): `void`

Clear the queue.

#### Returns

`void`

#### Defined in

[packages/queue/src/queue.ts:249](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L249)

___

### concurrency

▸ **concurrency**(`concurrency`): [`Queue`](Queue.md)

Set the queue's concurrency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `concurrency` | `number` | The maximum number of tasks to run at the same time. |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:280](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L280)

___

### executeTask

▸ `Private` **executeTask**(`taskDefinition`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskDefinition` | `QueueTaskDefinition` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/queue/src/queue.ts:387](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L387)

___

### finallyEach

▸ **finallyEach**(`callback`): [`Queue`](Queue.md)

Callback called for each task that when it is finished.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FinallyCallback`](../modules.md#finallycallback) |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:374](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L374)

___

### makeQueue

▸ `Private` **makeQueue**(): `void`

#### Returns

`void`

#### Defined in

[packages/queue/src/queue.ts:119](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L119)

___

### push

▸ **push**(...`tasks`): [`Queue`](Queue.md)

Push a task or set of tasks to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tasks` | [`QueueTask`](../modules.md#queuetask)[] |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:182](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L182)

___

### run

▸ **run**(): [`QueuePromise`](QueuePromise.md)<`any`\>

Run your queue.

#### Returns

[`QueuePromise`](QueuePromise.md)<`any`\>

#### Defined in

[packages/queue/src/queue.ts:318](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L318)

___

### strategy

▸ **strategy**(`strategy`): [`Queue`](Queue.md)

Set the queueing strategy. Dynamic uses slightly more resources but tends to be faster, chunked uses slightly less resources but tends to be slower. Dynamic is the default.

**`See`**

https://github.com/kleinron/lite-fifo lite-fifo for benchmarks

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | ``"chunked"`` \| ``"dynamic"`` |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:310](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L310)

___

### strictDelay

▸ `Private` **strictDelay**(): `number`

#### Returns

`number`

#### Defined in

[packages/queue/src/queue.ts:152](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L152)

___

### thenEach

▸ **thenEach**(`callback`): [`Queue`](Queue.md)

Callback called for each task that successfully completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`ThenCallback`](../modules.md#thencallback) |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:356](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L356)

___

### throttle

▸ **throttle**(`limit`, `interval`, `strict?`): [`Queue`](Queue.md)

Set the queue's throttling

**`Example`**

```ts
// 1 task per second
myQueue.throttle(1, 1000)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | The maximum number of tasks to run per interval |
| `interval` | `number` | The interval in milliseconds |
| `strict?` | `boolean` | Use strict throttling (more accurate, but could be more resource intensive) |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[packages/queue/src/queue.ts:295](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L295)

___

### wait

▸ **wait**(): `Promise`<`any`\>

Wait for the next task to complete.

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/queue/src/queue.ts:174](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L174)

___

### windowedDelay

▸ `Private` **windowedDelay**(): `number`

#### Returns

`number`

#### Defined in

[packages/queue/src/queue.ts:133](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L133)

___

### config

▸ `Static` **config**(`options`): `void`

Set the default options for the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`QueueConfiguration`](../interfaces/QueueConfiguration.md)\> |

#### Returns

`void`

#### Defined in

[packages/queue/src/queue.ts:88](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L88)

▸ `Static` **config**(`option`, `value`): `void`

Set a default option for the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | keyof [`QueueConfiguration`](../interfaces/QueueConfiguration.md) |
| `value` | [`QueueOptionsValue`](../modules.md#queueoptionsvalue) |

#### Returns

`void`

#### Defined in

[packages/queue/src/queue.ts:95](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/queue.ts#L95)
