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

## Properties

### abortOnError

• **abortOnError**: `boolean`

Stop the queue if a task fails.

___

### autoStart

• **autoStart**: `boolean`

`true` to the queue immediately, or `false` to wait for `run()` to be called. Default is `true`

___

### concurrency

• **concurrency**: `number`

The maximum number of concurrent tasks to run.

___

### interval

• **interval**: `number`

The timespan for limit in milliseconds.

___

### limit

• **limit**: `number`

The maximum number of calls within an interval

___

### strategy

• **strategy**: ``"chunked"`` \| ``"dynamic"``

Queueing strategy to be used based on the lite-fifo package. The default strategy is "dynamic" or "DynamicCyclicQueue". \
You can switch to "chunked" or "ChunkedQueue" for a slightly reduced memory footprint, but with a slightly slower performance.

**`See`**

https://github.com/kleinron/lite-fifo

___

### strict

• **strict**: `boolean`

Use a strict, more resource intensive, throttling algorithm. \
The default algorithm uses a windowed approach that will work correctly in most cases, \
limiting the total number of calls at the specified limit per interval window. \
The strict algorithm throttles each call individually, ensuring the limit is not exceeded for any interval.

**`See`**

https://github.com/sindresorhus/p-throttle
