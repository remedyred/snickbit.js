[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / MultiSelectQuestion

# Interface: MultiSelectQuestion

## Hierarchy

- `Omit`<`BaseQuestion`, ``"initial"``\>

- `QuestionMinMax`

- `QuestionHints`

- `QuestionChoices`

  ↳ **`MultiSelectQuestion`**

## Table of contents

### Properties

- [choices](MultiSelectQuestion.md#choices)
- [format](MultiSelectQuestion.md#format)
- [hint](MultiSelectQuestion.md#hint)
- [instructions](MultiSelectQuestion.md#instructions)
- [max](MultiSelectQuestion.md#max)
- [message](MultiSelectQuestion.md#message)
- [min](MultiSelectQuestion.md#min)
- [name](MultiSelectQuestion.md#name)
- [optionsPerPage](MultiSelectQuestion.md#optionsperpage)
- [stdin](MultiSelectQuestion.md#stdin)
- [stdout](MultiSelectQuestion.md#stdout)
- [type](MultiSelectQuestion.md#type)
- [warn](MultiSelectQuestion.md#warn)

### Methods

- [onRender](MultiSelectQuestion.md#onrender)
- [onState](MultiSelectQuestion.md#onstate)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../modules.md#choiceoption)[]

#### Inherited from

QuestionChoices.choices

#### Defined in

[prompt.ts:52](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L52)

___

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

Omit.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L27)

___

### hint

• **hint**: `string`

#### Inherited from

QuestionHints.hint

#### Defined in

[prompt.ts:46](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L46)

___

### instructions

• **instructions**: `string` \| `boolean`

#### Defined in

[prompt.ts:101](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L101)

___

### max

• **max**: `number`

#### Inherited from

QuestionMinMax.max

#### Defined in

[prompt.ts:41](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L41)

___

### message

• **message**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

Omit.message

#### Defined in

[prompt.ts:25](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L25)

___

### min

• **min**: `number`

#### Inherited from

QuestionMinMax.min

#### Defined in

[prompt.ts:40](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L40)

___

### name

• **name**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

Omit.name

#### Defined in

[prompt.ts:24](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L24)

___

### optionsPerPage

• **optionsPerPage**: `number`

#### Defined in

[prompt.ts:102](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L102)

___

### stdin

• **stdin**: `internal`

#### Inherited from

Omit.stdin

#### Defined in

[prompt.ts:33](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L33)

___

### stdout

• **stdout**: `internal`

#### Inherited from

Omit.stdout

#### Defined in

[prompt.ts:34](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L34)

___

### type

• **type**: ``"multiselect"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"multiselect"``\>

#### Defined in

[prompt.ts:100](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L100)

___

### warn

• **warn**: `string`

#### Inherited from

QuestionHints.warn

#### Defined in

[prompt.ts:47](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L47)

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

Omit.onRender

#### Defined in

[prompt.ts:29](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L29)

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

Omit.onState

#### Defined in

[prompt.ts:31](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L31)
