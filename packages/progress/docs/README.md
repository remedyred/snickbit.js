# @snickbit/progress

## Table of contents

### Classes

- [MultiProgress](classes/MultiProgress.md)
- [MultiProgressChild](classes/MultiProgressChild.md)
- [Progress](classes/Progress.md)

### Interfaces

- [MultiProgressChildConfig](interfaces/MultiProgressChildConfig.md)
- [ProgressConfig](interfaces/ProgressConfig.md)

### Type Aliases

- [MultiProgressBars](README.md#multiprogressbars)
- [MultiProgressChildOptions](README.md#multiprogresschildoptions)
- [ProgressOptions](README.md#progressoptions)
- [ProgressPayload](README.md#progresspayload)

### Functions

- [multiProgress](README.md#multiprogress)
- [progress](README.md#progress)

## Type Aliases

### MultiProgressBars

Ƭ **MultiProgressBars**: `Record`<`string`, [`MultiProgressChild`](classes/MultiProgressChild.md)\>

___

### MultiProgressChildOptions

Ƭ **MultiProgressChildOptions**: `Partial`<[`MultiProgressChildConfig`](interfaces/MultiProgressChildConfig.md)\>

___

### ProgressOptions

Ƭ **ProgressOptions**: `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\>

___

### ProgressPayload

Ƭ **ProgressPayload**: `Record`<`string`, `any`\>

## Functions

### multiProgress

▸ **multiProgress**(`options?`): [`MultiProgress`](classes/MultiProgress.md)

Multi-Progress bar. Uses cli-progress to create multiple progress bars.

**`See`**

https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\> |

#### Returns

[`MultiProgress`](classes/MultiProgress.md)

___

### progress

▸ **progress**(`options?`): [`Progress`](classes/Progress.md)

Progress bar. Uses cli-progress to create multiple progress bars.

**`See`**

https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\> |

#### Returns

[`Progress`](classes/Progress.md)
