# @snickbit/plural

## Table of contents

### Functions

- [isPlural](README.md#isplural)
- [isSingular](README.md#issingular)
- [plural](README.md#plural)
- [singular](README.md#singular)

## Functions

### isPlural

▸ **isPlural**(`word`, `count?`): `boolean`

Check if a word is plural.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `word` | `string` | `undefined` |
| `count` | `number` | `2` |

#### Returns

`boolean`

___

### isSingular

▸ **isSingular**(`word`, `count?`): `boolean`

Check if a word is singular.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `word` | `string` | `undefined` |
| `count` | `number` | `1` |

#### Returns

`boolean`

___

### plural

▸ **plural**(`word`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `count?` | `number` |

#### Returns

`any`

▸ **plural**(`word`, `pluralized`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `pluralized` | `string` |
| `count?` | `number` |

#### Returns

`any`

___

### singular

▸ **singular**(`word`, `count?`): `any`

Get the singular version of a word

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `count?` | `number` |

#### Returns

`any`

▸ **singular**(`word`, `singularized`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `singularized` | `string` |
| `count?` | `number` |

#### Returns

`any`
