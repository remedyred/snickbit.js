# @snickbit/cycle

## Table of contents

### Namespaces

- [presets](modules/presets.md)

### Classes

- [Cycle](classes/Cycle.md)

### Type Aliases

- [Preset](README.md#preset)

### Functions

- [cycle](README.md#cycle)

## Type Aliases

### Preset

Ƭ **Preset**: `string` & keyof typeof [`presets`](modules/presets.md)

## Functions

### cycle

▸ **cycle**<`T`\>(`items?`): [`Cycle`](classes/Cycle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items?` | `T`[] |

#### Returns

[`Cycle`](classes/Cycle.md)

▸ **cycle**(`prefix?`): [`Cycle`](classes/Cycle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | [`Preset`](README.md#preset) |

#### Returns

[`Cycle`](classes/Cycle.md)
