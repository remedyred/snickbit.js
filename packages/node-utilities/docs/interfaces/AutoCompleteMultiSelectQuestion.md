[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / AutoCompleteMultiSelectQuestion

# Interface: AutoCompleteMultiSelectQuestion

## Hierarchy

- `Omit`<[`MultiSelectQuestion`](MultiSelectQuestion.md), ``"type"``\>

  ↳ **`AutoCompleteMultiSelectQuestion`**

## Table of contents

### Properties

- [choices](AutoCompleteMultiSelectQuestion.md#choices)
- [format](AutoCompleteMultiSelectQuestion.md#format)
- [hint](AutoCompleteMultiSelectQuestion.md#hint)
- [instructions](AutoCompleteMultiSelectQuestion.md#instructions)
- [max](AutoCompleteMultiSelectQuestion.md#max)
- [message](AutoCompleteMultiSelectQuestion.md#message)
- [min](AutoCompleteMultiSelectQuestion.md#min)
- [name](AutoCompleteMultiSelectQuestion.md#name)
- [optionsPerPage](AutoCompleteMultiSelectQuestion.md#optionsperpage)
- [stdin](AutoCompleteMultiSelectQuestion.md#stdin)
- [stdout](AutoCompleteMultiSelectQuestion.md#stdout)
- [type](AutoCompleteMultiSelectQuestion.md#type)
- [warn](AutoCompleteMultiSelectQuestion.md#warn)

### Methods

- [onRender](AutoCompleteMultiSelectQuestion.md#onrender)
- [onState](AutoCompleteMultiSelectQuestion.md#onstate)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../modules.md#choiceoption)[]

#### Inherited from

Omit.choices

#### Defined in

[prompt.ts:52](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L52)

___

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

Omit.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L27)

___

### hint

• **hint**: `string`

#### Inherited from

Omit.hint

#### Defined in

[prompt.ts:46](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L46)

___

### instructions

• **instructions**: `string` \| `boolean`

#### Inherited from

Omit.instructions

#### Defined in

[prompt.ts:101](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L101)

___

### max

• **max**: `number`

#### Inherited from

Omit.max

#### Defined in

[prompt.ts:41](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L41)

___

### message

• **message**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

Omit.message

#### Defined in

[prompt.ts:25](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L25)

___

### min

• **min**: `number`

#### Inherited from

Omit.min

#### Defined in

[prompt.ts:40](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L40)

___

### name

• **name**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

Omit.name

#### Defined in

[prompt.ts:24](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L24)

___

### optionsPerPage

• **optionsPerPage**: `number`

#### Inherited from

Omit.optionsPerPage

#### Defined in

[prompt.ts:102](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L102)

___

### stdin

• **stdin**: `internal`

#### Inherited from

Omit.stdin

#### Defined in

[prompt.ts:33](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L33)

___

### stdout

• **stdout**: `internal`

#### Inherited from

Omit.stdout

#### Defined in

[prompt.ts:34](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L34)

___

### type

• **type**: ``"autocompleteMultiselect"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"autocompleteMultiselect"``\>

#### Defined in

[prompt.ts:69](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L69)

___

### warn

• **warn**: `string`

#### Inherited from

Omit.warn

#### Defined in

[prompt.ts:47](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L47)

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

Omit.onState

#### Defined in

[prompt.ts:31](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/prompt.ts#L31)
