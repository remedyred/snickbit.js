[@snickbit/queue](../README.md) / [Exports](../modules.md) / QueueConfiguration

# Interface: QueueConfiguration

## Table of contents

### Properties

- [abortOnError](QueueConfiguration.md#abortonerror)
- [autoStart](QueueConfiguration.md#autostart)
- [concurrency](QueueConfiguration.md#concurrency)
- [interval](QueueConfiguration.md#interval)
- [limit](QueueConfiguration.md#limit)
- [strategy](QueueConfiguration.md#strategy)
- [strict](QueueConfiguration.md#strict)
- [throttle](QueueConfiguration.md#throttle)

## Properties

### abortOnError

• **abortOnError**: `boolean`

Stop the queue if a task fails.

#### Defined in

[packages/queue/src/definitions.ts:23](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L23)

___

### autoStart

• **autoStart**: `boolean`

`true` to the queue immediately, or `false` to wait for `run()` to be called. Default is `true`

#### Defined in

[packages/queue/src/definitions.ts:33](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L33)

___

### concurrency

• **concurrency**: `number`

The maximum number of concurrent tasks to run.

#### Defined in

[packages/queue/src/definitions.ts:6](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L6)

___

### interval

• **interval**: `number`

The timespan for limit in milliseconds.

#### Defined in

[packages/queue/src/definitions.ts:12](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L12)

___

### limit

• **limit**: `number`

The maximum number of calls within an interval

#### Defined in

[packages/queue/src/definitions.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L9)

___

### strategy

• **strategy**: ``"chunked"`` \| ``"dynamic"``

Queueing strategy to be used based on the lite-fifo package. The default strategy is "dynamic" or "DynamicCyclicQueue". \
You can switch to "chunked" or "ChunkedQueue" for a slightly reduced memory footprint, but with a slightly slower performance.

**`See`**

https://github.com/kleinron/lite-fifo

#### Defined in

[packages/queue/src/definitions.ts:30](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L30)

___

### strict

• **strict**: `boolean`

Use a strict, more resource intensive, throttling algorithm. \
The default algorithm uses a windowed approach that will work correctly in most cases, limiting the total number of calls at the specified limit per interval window. \
The strict algorithm throttles each call individually, ensuring the limit is not exceeded for any interval.

**`See`**

https://github.com/sindresorhus/p-throttle

#### Defined in

[packages/queue/src/definitions.ts:20](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L20)

___

### throttle

• **throttle**: `boolean`

#### Defined in

[packages/queue/src/definitions.ts:36](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/definitions.ts#L36)
