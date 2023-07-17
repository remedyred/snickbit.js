# Class: QueueError

**`No Inherit Doc`**

## Hierarchy

- `Error`

  ↳ **`QueueError`**

  ↳↳ [`QueueException`](QueueException.md)

  ↳↳ [`AbortQueueError`](AbortQueueError.md)

## Table of contents

### Constructors

- [constructor](QueueError.md#constructor)

### Properties

- [cause](QueueError.md#cause)
- [data](QueueError.md#data)
- [errors](QueueError.md#errors)
- [message](QueueError.md#message)
- [name](QueueError.md#name)
- [spread](QueueError.md#spread)
- [stack](QueueError.md#stack)
- [type](QueueError.md#type)
- [prepareStackTrace](QueueError.md#preparestacktrace)
- [stackTraceLimit](QueueError.md#stacktracelimit)

### Methods

- [toJSON](QueueError.md#tojson)
- [captureStackTrace](QueueError.md#capturestacktrace)

## Constructors

### constructor

• **new QueueError**(`error`, `name`, `_data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`ErrorMessage`](../README.md#errormessage) |
| `name` | `string` |
| `_data` | `any` |

#### Overrides

Error.constructor

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

___

### data

• `Readonly` **data**: `any`

___

### errors

• `Readonly` **errors**: `any`

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### spread

• `Readonly` **spread**: ``false``

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### type

• `Readonly` **type**: `string`

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

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

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

Error.captureStackTrace
