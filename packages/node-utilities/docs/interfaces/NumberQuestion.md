[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / NumberQuestion

# Interface: NumberQuestion

## Hierarchy

- `BaseQuestion`<`number`\>

  ↳ **`NumberQuestion`**

## Table of contents

### Properties

- [float](NumberQuestion.md#float)
- [format](NumberQuestion.md#format)
- [increment](NumberQuestion.md#increment)
- [initial](NumberQuestion.md#initial)
- [message](NumberQuestion.md#message)
- [name](NumberQuestion.md#name)
- [round](NumberQuestion.md#round)
- [stdin](NumberQuestion.md#stdin)
- [stdout](NumberQuestion.md#stdout)
- [type](NumberQuestion.md#type)

### Methods

- [onRender](NumberQuestion.md#onrender)
- [onState](NumberQuestion.md#onstate)

## Properties

### float

• **float**: `boolean`

#### Defined in

[prompt.ts:109](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L109)

___

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L27)

___

### increment

• **increment**: `number`

#### Defined in

[prompt.ts:111](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L111)

___

### initial

• **initial**: `number` \| [`PromptsMethod`](../modules.md#promptsmethod)

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

### round

• **round**: `number`

#### Defined in

[prompt.ts:110](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L110)

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

• **type**: ``"number"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"number"``\>

#### Defined in

[prompt.ts:108](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L108)

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
