[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / InvisibleQuestion

# Interface: InvisibleQuestion

## Hierarchy

- `BaseQuestion`

  ↳ **`InvisibleQuestion`**

## Table of contents

### Properties

- [format](InvisibleQuestion.md#format)
- [initial](InvisibleQuestion.md#initial)
- [message](InvisibleQuestion.md#message)
- [name](InvisibleQuestion.md#name)
- [stdin](InvisibleQuestion.md#stdin)
- [stdout](InvisibleQuestion.md#stdout)
- [type](InvisibleQuestion.md#type)

### Methods

- [onRender](InvisibleQuestion.md#onrender)
- [onState](InvisibleQuestion.md#onstate)

## Properties

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L27)

___

### initial

• **initial**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

#### Defined in

[prompt.ts:26](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L26)

___

### message

• **message**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.message

#### Defined in

[prompt.ts:25](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L25)

___

### name

• **name**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.name

#### Defined in

[prompt.ts:24](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L24)

___

### stdin

• **stdin**: `internal`

#### Inherited from

BaseQuestion.stdin

#### Defined in

[prompt.ts:33](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L33)

___

### stdout

• **stdout**: `internal`

#### Inherited from

BaseQuestion.stdout

#### Defined in

[prompt.ts:34](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L34)

___

### type

• **type**: ``"invisible"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"invisible"``\>

#### Defined in

[prompt.ts:87](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L87)

## Methods

### onRender

▸ **onRender**(`this`, `kluer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `prompts` |
| `kluer` | `any` |

#### Returns

`void`

#### Inherited from

BaseQuestion.onRender

#### Defined in

[prompt.ts:29](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L29)

___

### onState

▸ **onState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`PromptState`](PromptState.md) |

#### Returns

`void`

#### Inherited from

BaseQuestion.onState

#### Defined in

[prompt.ts:31](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L31)
