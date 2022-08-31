[@snickbit/queue](../README.md) / [Exports](../modules.md) / QueueError

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
| `error` | [`ErrorMessage`](../modules.md#errormessage) |
| `name` | `string` |
| `_data` | `any` |

#### Overrides

Error.constructor

#### Defined in

[packages/queue/src/errors.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L27)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### data

• `Readonly` **data**: `any`

#### Defined in

[packages/queue/src/errors.ts:21](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L21)

___

### errors

• `Readonly` **errors**: `any`

#### Defined in

[packages/queue/src/errors.ts:23](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L23)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es5.d.ts:1040

___

### spread

• `Readonly` **spread**: ``false``

#### Defined in

[packages/queue/src/errors.ts:25](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L25)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.8.2/node_modules/typescript/lib/lib.es5.d.ts:1042

___

### type

• `Readonly` **type**: `string`

#### Defined in

[packages/queue/src/errors.ts:19](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L19)

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Defined in

[packages/queue/src/errors.ts:48](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/queue/src/errors.ts#L48)
