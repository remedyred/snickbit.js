[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / DateQuestion

# Interface: DateQuestion

## Hierarchy

- `BaseQuestion`<`Date`\>

- `QuestionMinMax`

  ↳ **`DateQuestion`**

## Table of contents

### Properties

- [format](DateQuestion.md#format)
- [initial](DateQuestion.md#initial)
- [locales](DateQuestion.md#locales)
- [mask](DateQuestion.md#mask)
- [max](DateQuestion.md#max)
- [message](DateQuestion.md#message)
- [min](DateQuestion.md#min)
- [name](DateQuestion.md#name)
- [stdin](DateQuestion.md#stdin)
- [stdout](DateQuestion.md#stdout)
- [type](DateQuestion.md#type)

### Methods

- [onRender](DateQuestion.md#onrender)
- [onState](DateQuestion.md#onstate)

## Properties

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L27)

___

### initial

• **initial**: `Date` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

#### Defined in

[prompt.ts:26](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L26)

___

### locales

• **locales**: [`PromptsLocales`](PromptsLocales.md)

#### Defined in

[prompt.ts:81](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L81)

___

### mask

• **mask**: `string`

#### Defined in

[prompt.ts:82](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L82)

___

### max

• **max**: `number`

#### Inherited from

QuestionMinMax.max

#### Defined in

[prompt.ts:41](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L41)

___

### message

• **message**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.message

#### Defined in

[prompt.ts:25](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L25)

___

### min

• **min**: `number`

#### Inherited from

QuestionMinMax.min

#### Defined in

[prompt.ts:40](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L40)

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

• **type**: ``"date"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"date"``\>

#### Defined in

[prompt.ts:80](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L80)

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
