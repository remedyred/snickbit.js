# Class: QueueException

**`No Inherit Doc`**

## Hierarchy

- [`QueueError`](QueueError.md)

  ↳ **`QueueException`**

## Table of contents

### Constructors

- [constructor](QueueException.md#constructor)

### Properties

- [cause](QueueException.md#cause)
- [data](QueueException.md#data)
- [errors](QueueException.md#errors)
- [message](QueueException.md#message)
- [name](QueueException.md#name)
- [spread](QueueException.md#spread)
- [stack](QueueException.md#stack)
- [type](QueueException.md#type)

### Methods

- [toJSON](QueueException.md#tojson)

## Constructors

### constructor

• **new QueueException**(`message?`, `data?`)

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

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Inherited from

[QueueError](QueueError.md).[toJSON](QueueError.md#tojson)
