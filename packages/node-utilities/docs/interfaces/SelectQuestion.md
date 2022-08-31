[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / SelectQuestion

# Interface: SelectQuestion

## Hierarchy

- `BaseQuestion`<`number` \| `string`\>

- `QuestionHints`

- `QuestionChoices`

  ↳ **`SelectQuestion`**

## Table of contents

### Properties

- [choices](SelectQuestion.md#choices)
- [format](SelectQuestion.md#format)
- [hint](SelectQuestion.md#hint)
- [initial](SelectQuestion.md#initial)
- [message](SelectQuestion.md#message)
- [name](SelectQuestion.md#name)
- [stdin](SelectQuestion.md#stdin)
- [stdout](SelectQuestion.md#stdout)
- [type](SelectQuestion.md#type)
- [warn](SelectQuestion.md#warn)

### Methods

- [onRender](SelectQuestion.md#onrender)
- [onState](SelectQuestion.md#onstate)

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

BaseQuestion.format

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

### initial

• **initial**: `string` \| `number` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

#### Defined in

[prompt.ts:26](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L26)

___

### message

• **message**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.message

#### Defined in

[prompt.ts:25](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L25)

___

### name

• **name**: `string` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.name

#### Defined in

[prompt.ts:24](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L24)

___

### stdin

• **stdin**: `internal`

#### Inherited from

BaseQuestion.stdin

#### Defined in

[prompt.ts:33](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L33)

___

### stdout

• **stdout**: `internal`

#### Inherited from

BaseQuestion.stdout

#### Defined in

[prompt.ts:34](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L34)

___

### type

• **type**: ``"select"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"select"``\>

#### Defined in

[prompt.ts:121](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L121)

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

BaseQuestion.onRender

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

BaseQuestion.onState

#### Defined in

[prompt.ts:31](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L31)
