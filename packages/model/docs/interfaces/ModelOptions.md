# Interface: ModelOptions

Model Options

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

Automatically generate an id for the model.

___

### id

• `Optional` **id**: [`ModelId`](../README.md#modelid)

The id of the model. Stored separately from the model itself.

___

### name

• `Optional` **name**: `string`

The name of the model (class). Intended for extending the Model class, but can be used to identify the model.

___

### root

• `Optional` **root**: `string`

Define a root path for the model.
 All paths/keys will be prefixed with this path unless they are prefixed with a dot ".".

___

### schema

• `Optional` **schema**: `Partial`<[`ModelSchema`](ModelSchema.md)\>

The schema of the model. Used to validate the model.

___

### strict

• `Optional` **strict**: `boolean`

The schema of the model. Used to validate the model.

___

### timestamps

• `Optional` **timestamps**: `boolean`

Automatically generate timestamps _created and _updated for the model. Stored with the model.
