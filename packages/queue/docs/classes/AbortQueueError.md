[@snickbit/queue](../README.md) / [Exports](../modules.md) / AbortQueueError

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

### Methods

- [toJSON](AbortQueueError.md#tojson)

## Constructors

### constructor

• **new AbortQueueError**(`message?`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`ErrorMessage`](../modules.md#errormessage) |
| `data?` | `any` |

#### Overrides

[QueueError](QueueError.md).[constructor](QueueError.md#constructor)

#### Defined in

[packages/queue/src/errors.ts:86](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L86)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[QueueError](QueueError.md).[cause](QueueError.md#cause)

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### data

• `Readonly` **data**: `any`

#### Inherited from

[QueueError](QueueError.md).[data](QueueError.md#data)

#### Defined in

[packages/queue/src/errors.ts:21](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L21)

___

### errors

• `Readonly` **errors**: `any`

#### Inherited from

[QueueError](QueueError.md).[errors](QueueError.md#errors)

#### Defined in

[packages/queue/src/errors.ts:23](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L23)

___

### message

• **message**: `string`

#### Inherited from

[QueueError](QueueError.md).[message](QueueError.md#message)

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

[QueueError](QueueError.md).[name](QueueError.md#name)

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es5.d.ts:1040

___

### spread

• `Readonly` **spread**: ``false``

#### Inherited from

[QueueError](QueueError.md).[spread](QueueError.md#spread)

#### Defined in

[packages/queue/src/errors.ts:25](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L25)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[QueueError](QueueError.md).[stack](QueueError.md#stack)

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es5.d.ts:1042

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[QueueError](QueueError.md).[type](QueueError.md#type)

#### Defined in

[packages/queue/src/errors.ts:19](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L19)

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Inherited from

[QueueError](QueueError.md).[toJSON](QueueError.md#tojson)

#### Defined in

[packages/queue/src/errors.ts:48](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L48)
