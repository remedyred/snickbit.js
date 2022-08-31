[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / ImportDefinition

# Interface: ImportDefinition<I, Args, Results\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](../modules.md#importmethod) = [`ImportMethod`](../modules.md#importmethod) |
| `Args` | `any` |
| `Results` | `any` |

## Hierarchy

- [`ImportMethod`](../modules.md#importmethod)<`Args`, `Results`\>

  ↳ **`ImportDefinition`**

## Callable

### ImportDefinition

▸ **ImportDefinition**(...`args`): `Results` \| `Promise`<`Results`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args`[] |

#### Returns

`Results` \| `Promise`<`Results`\>

#### Defined in

[imports.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L9)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [aliases](ImportDefinition.md#aliases)
- [default](ImportDefinition.md#default)
- [description](ImportDefinition.md#description)
- [name](ImportDefinition.md#name)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

#### Defined in

[imports.ts:16](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L16)

___

### default

• **default**: `I` \| [`ImportMethod`](../modules.md#importmethod)<`Args`, `Results`\> \| [`ImportDefinition`](ImportDefinition.md)<[`ImportMethod`](../modules.md#importmethod)<`any`, `any`\>, `any`, `any`\>[] \| [`ImportDefinition`](ImportDefinition.md)<`I`, `any`, `any`\>

#### Defined in

[imports.ts:13](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L13)

___

### description

• `Optional` **description**: `string`

#### Defined in

[imports.ts:15](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L15)

___

### name

• `Optional` **name**: `string`

#### Defined in

[imports.ts:14](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L14)
