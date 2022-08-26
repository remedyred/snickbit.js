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

### Methods

- [toJSON](QueueError.md#tojson)

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

• `Optional` **cause**: `Error`

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

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)
