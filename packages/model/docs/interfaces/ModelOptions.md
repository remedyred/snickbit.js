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

___

### id

• `Optional` **id**: [`ModelId`](../README.md#modelid)

___

### name

• `Optional` **name**: `string`

___

### root

• `Optional` **root**: `string`

___

### schema

• `Optional` **schema**: `Partial`<[`ModelSchema`](ModelSchema.md)\>

___

### strict

• `Optional` **strict**: `boolean`

___

### timestamps

• `Optional` **timestamps**: `boolean`
