[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / AutoCompleteQuestion

# Interface: AutoCompleteQuestion

## Hierarchy

- `BaseQuestion`<`number` \| `string`\>

- `QuestionChoices`

  ↳ **`AutoCompleteQuestion`**

## Table of contents

### Properties

- [choices](AutoCompleteQuestion.md#choices)
- [clearFirst](AutoCompleteQuestion.md#clearfirst)
- [fallback](AutoCompleteQuestion.md#fallback)
- [format](AutoCompleteQuestion.md#format)
- [initial](AutoCompleteQuestion.md#initial)
- [limit](AutoCompleteQuestion.md#limit)
- [message](AutoCompleteQuestion.md#message)
- [name](AutoCompleteQuestion.md#name)
- [stdin](AutoCompleteQuestion.md#stdin)
- [stdout](AutoCompleteQuestion.md#stdout)
- [type](AutoCompleteQuestion.md#type)

### Methods

- [onRender](AutoCompleteQuestion.md#onrender)
- [onState](AutoCompleteQuestion.md#onstate)
- [suggest](AutoCompleteQuestion.md#suggest)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../modules.md#choiceoption)[]

#### Inherited from

QuestionChoices.choices

#### Defined in

[prompt.ts:52](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L52)

___

### clearFirst

• **clearFirst**: `boolean`

#### Defined in

[prompt.ts:63](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L63)

___

### fallback

• **fallback**: `string`

#### Defined in

[prompt.ts:64](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L64)

___

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L27)

___

### initial

• **initial**: `string` \| `number` \| [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

#### Defined in

[prompt.ts:26](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L26)

___

### limit

• **limit**: `number`

#### Defined in

[prompt.ts:62](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L62)

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

• **type**: ``"autocomplete"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"autocomplete"``\>

#### Defined in

[prompt.ts:58](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L58)

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

___

### suggest

▸ **suggest**(`input`, `choices`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `choices` | `any` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[prompt.ts:60](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L60)
