[@snickbit/model](../README.md) / [Exports](../modules.md) / ModelOptions

# Interface: ModelOptions

Model Options

**`Property`**

The id of the model. Stored separately from the model itself.

**`Property`**

The name of the model (class). Intended for extending the Model class, but can be used to identify the model.

**`Property`**

Automatically generate an id for the model.

**`Property`**

The schema of the model. Used to validate the model.

**`Property`**

The schema of the model. Used to validate the model.

**`Property`**

Automatically generate timestamps _created and _updated for the model. Stored with the model.

**`Property`**

Define a root path for the model. All paths/keys will be prefixed with this path unless they are prefixed with a dot ".".

## Table of contents

### Properties

- [autoId](ModelOptions.md#autoid)
- [id](ModelOptions.md#id)
- [name](ModelOptions.md#name)
- [root](ModelOptions.md#root)
- [schema](ModelOptions.md#schema)
- [strict](ModelOptions.md#strict)
- [timestamps](ModelOptions.md#timestamps)

## Properties

### autoId

• `Optional` **autoId**: `boolean`

#### Defined in

[index.ts:59](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L59)

___

### id

• `Optional` **id**: [`ModelId`](../modules.md#modelid)

#### Defined in

[index.ts:57](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L57)

___

### name

• `Optional` **name**: `string`

#### Defined in

[index.ts:58](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L58)

___

### root

• `Optional` **root**: `string`

#### Defined in

[index.ts:63](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L63)

___

### schema

• `Optional` **schema**: `Partial`<[`ModelSchema`](ModelSchema.md)\>

#### Defined in

[index.ts:60](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L60)

___

### strict

• `Optional` **strict**: `boolean`

#### Defined in

[index.ts:61](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L61)

___

### timestamps

• `Optional` **timestamps**: `boolean`

#### Defined in

[index.ts:62](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/model/src/index.ts#L62)
