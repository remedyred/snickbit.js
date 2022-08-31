[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / Progress

# Class: Progress

Progress bar. Uses cli-progress and @snickbit/out to output progress.

**`See`**

https://github.com/npkgz/cli-progress

## Hierarchy

- **`Progress`**

  ↳ [`MultiProgress`](MultiProgress.md)

  ↳ [`MultiProgressChild`](MultiProgressChild.md)

## Table of contents

### Constructors

- [constructor](Progress.md#constructor)

### Properties

- [bar](Progress.md#bar)
- [options](Progress.md#options)
- [out](Progress.md#out)

### Methods

- [#create](Progress.md##create)
- [#formatValue](Progress.md##formatvalue)
- [eta](Progress.md#eta)
- [fail](Progress.md#fail)
- [finish](Progress.md#finish)
- [message](Progress.md#message)
- [set](Progress.md#set)
- [setTotal](Progress.md#settotal)
- [start](Progress.md#start)
- [stop](Progress.md#stop)
- [tick](Progress.md#tick)
- [update](Progress.md#update)

## Constructors

### constructor

• **new Progress**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Defined in

[progress.ts:102](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L102)

## Properties

### bar

• **bar**: `SingleBar`

#### Defined in

[progress.ts:100](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L100)

___

### options

• **options**: [`ProgressConfig`](../interfaces/ProgressConfig.md)

#### Defined in

[progress.ts:96](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L96)

___

### out

• **out**: `Out`

#### Defined in

[progress.ts:98](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L98)

## Methods

### #create

▸ `Private` **#create**(): [`Progress`](Progress.md)

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:112](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L112)

___

### #formatValue

▸ `Private` **#formatValue**(`v`, `options`, `type`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |
| `options` | `any` |
| `type` | `any` |

#### Returns

`any`

#### Defined in

[progress.ts:121](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L121)

___

### eta

▸ **eta**(): `string` \| `number`

Get the ETA

#### Returns

`string` \| `number`

#### Defined in

[progress.ts:135](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L135)

___

### fail

▸ **fail**(...`messages`): [`Progress`](Progress.md)

Fail and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:232](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L232)

___

### finish

▸ **finish**(...`messages`): [`Progress`](Progress.md)

Succeed and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:258](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L258)

___

### message

▸ **message**(`message`): [`Progress`](Progress.md)

Set the progress bar message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:214](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L214)

___

### set

▸ **set**(`value`, `payload?`): `void`

Set the progress bar current value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

`void`

#### Defined in

[progress.ts:188](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L188)

___

### setTotal

▸ **setTotal**(`total`): [`Progress`](Progress.md)

Set the progress bar total

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:221](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L221)

___

### start

▸ **start**(`options?`): [`Progress`](Progress.md)

Start the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:142](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L142)

___

### stop

▸ **stop**(...`messages`): [`Progress`](Progress.md)

Stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:245](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L245)

___

### tick

▸ **tick**(`payload`): [`Progress`](Progress.md)

Tick the progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:156](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L156)

▸ **tick**(`value?`, `payload?`): [`Progress`](Progress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:157](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L157)

▸ **tick**(`message`, `payload?`): [`Progress`](Progress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:158](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L158)

___

### update

▸ **update**(`payload?`): [`Progress`](Progress.md)

Update the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

#### Defined in

[progress.ts:203](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L203)
