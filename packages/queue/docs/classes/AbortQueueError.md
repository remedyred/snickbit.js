# Class: AbortQueueError

**`No Inherit Doc`**

## Hierarchy

- [`QueueError`](QueueError.md)

  ↳ **`AbortQueueError`**

## Table of contents

### Constructors

- [constructor](AbortQueueError.md#constructor)

### Properties

- [cause](AbortQueueError.md#cause)
- [data](AbortQueueError.md#data)
- [errors](AbortQueueError.md#errors)
- [message](AbortQueueError.md#message)
- [name](AbortQueueError.md#name)
- [spread](AbortQueueError.md#spread)
- [stack](AbortQueueError.md#stack)
- [type](AbortQueueError.md#type)
- [prepareStackTrace](AbortQueueError.md#preparestacktrace)
- [stackTraceLimit](AbortQueueError.md#stacktracelimit)

### Methods

- [toJSON](AbortQueueError.md#tojson)
- [captureStackTrace](AbortQueueError.md#capturestacktrace)

## Constructors

### constructor

• **new AbortQueueError**(`message?`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`ErrorMessage`](../README.md#errormessage) |
| `data?` | `any` |

#### Overrides

[QueueError](QueueError.md).[constructor](QueueError.md#constructor)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[QueueError](QueueError.md).[cause](QueueError.md#cause)

___

### data

• `Readonly` **data**: `any`

#### Inherited from

[QueueError](QueueError.md).[data](QueueError.md#data)

___

### errors

• `Readonly` **errors**: `any`

#### Inherited from

[QueueError](QueueError.md).[errors](QueueError.md#errors)

___

### message

• **message**: `string`

#### Inherited from

[QueueError](QueueError.md).[message](QueueError.md#message)

___

### name

• **name**: `string`

#### Inherited from

[QueueError](QueueError.md).[name](QueueError.md#name)

___

### spread

• `Readonly` **spread**: ``false``

#### Inherited from

[QueueError](QueueError.md).[spread](QueueError.md#spread)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[QueueError](QueueError.md).[stack](QueueError.md#stack)

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[QueueError](QueueError.md).[type](QueueError.md#type)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[QueueError](QueueError.md).[prepareStackTrace](QueueError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[QueueError](QueueError.md).[stackTraceLimit](QueueError.md#stacktracelimit)

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Inherited from

[QueueError](QueueError.md).[toJSON](QueueError.md#tojson)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[QueueError](QueueError.md).[captureStackTrace](QueueError.md#capturestacktrace)
