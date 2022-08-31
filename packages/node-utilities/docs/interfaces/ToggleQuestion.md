[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / ToggleQuestion

# Interface: ToggleQuestion

## Hierarchy

- `BaseQuestion`<`boolean`\>

  ↳ **`ToggleQuestion`**

## Table of contents

### Properties

- [active](ToggleQuestion.md#active)
- [format](ToggleQuestion.md#format)
- [inactive](ToggleQuestion.md#inactive)
- [initial](ToggleQuestion.md#initial)
- [message](ToggleQuestion.md#message)
- [name](ToggleQuestion.md#name)
- [stdin](ToggleQuestion.md#stdin)
- [stdout](ToggleQuestion.md#stdout)
- [type](ToggleQuestion.md#type)

### Methods

- [onRender](ToggleQuestion.md#onrender)
- [onState](ToggleQuestion.md#onstate)

## Properties

### active

• **active**: `string`

#### Defined in

[prompt.ts:135](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L135)

___

### format

• **format**: [`PromptsMethod`](../modules.md#promptsmethod)

#### Inherited from

BaseQuestion.format

#### Defined in

[prompt.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L27)

___

### inactive

• **inactive**: `string`

#### Defined in

[prompt.ts:136](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L136)

___

### initial

• **initial**: `boolean` \| [`PromptsMethod`](../modules.md#promptsmethod)

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

• **type**: ``"toggle"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"toggle"``\>

#### Defined in

[prompt.ts:134](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L134)

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
