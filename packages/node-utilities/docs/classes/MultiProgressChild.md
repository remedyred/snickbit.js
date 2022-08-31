[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / MultiProgressChild

# Class: MultiProgressChild

## Hierarchy

- [`Progress`](Progress.md)

  ↳ **`MultiProgressChild`**

## Table of contents

### Constructors

- [constructor](MultiProgressChild.md#constructor)

### Properties

- [bar](MultiProgressChild.md#bar)
- [id](MultiProgressChild.md#id)
- [options](MultiProgressChild.md#options)
- [out](MultiProgressChild.md#out)

### Methods

- [#create](MultiProgressChild.md##create)
- [#create](MultiProgressChild.md##create-1)
- [#formatValue](MultiProgressChild.md##formatvalue)
- [eta](MultiProgressChild.md#eta)
- [fail](MultiProgressChild.md#fail)
- [finish](MultiProgressChild.md#finish)
- [message](MultiProgressChild.md#message)
- [remove](MultiProgressChild.md#remove)
- [set](MultiProgressChild.md#set)
- [setTotal](MultiProgressChild.md#settotal)
- [start](MultiProgressChild.md#start)
- [stop](MultiProgressChild.md#stop)
- [tick](MultiProgressChild.md#tick)
- [update](MultiProgressChild.md#update)

## Constructors

### constructor

• **new MultiProgressChild**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`MultiProgressChildConfig`](../interfaces/MultiProgressChildConfig.md)\> |

#### Overrides

[Progress](Progress.md).[constructor](Progress.md#constructor)

#### Defined in

[multi-progress.ts:98](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L98)

## Properties

### bar

• **bar**: `SingleBar`

#### Inherited from

[Progress](Progress.md).[bar](Progress.md#bar)

#### Defined in

[progress.ts:100](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L100)

___

### id

• **id**: `string`

#### Defined in

[multi-progress.ts:94](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L94)

___

### options

• **options**: [`MultiProgressChildConfig`](../interfaces/MultiProgressChildConfig.md)

#### Overrides

[Progress](Progress.md).[options](Progress.md#options)

#### Defined in

[multi-progress.ts:96](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L96)

___

### out

• **out**: `Out`

#### Inherited from

[Progress](Progress.md).[out](Progress.md#out)

#### Defined in

[progress.ts:98](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L98)

## Methods

### #create

▸ `Private` **#create**(): `void`

#### Returns

`void`

#### Inherited from

[Progress](Progress.md).[#create](Progress.md##create)

#### Defined in

[multi-progress.ts:102](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L102)

___

### #create

▸ `Private` **#create**(): [`MultiProgressChild`](MultiProgressChild.md)

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

Progress.#create

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

#### Inherited from

[Progress](Progress.md).[#formatValue](Progress.md##formatvalue)

#### Defined in

[progress.ts:121](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L121)

___

### eta

▸ **eta**(): `string` \| `number`

Get the ETA

#### Returns

`string` \| `number`

#### Inherited from

[Progress](Progress.md).[eta](Progress.md#eta)

#### Defined in

[progress.ts:135](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L135)

___

### fail

▸ **fail**(...`messages`): [`MultiProgressChild`](MultiProgressChild.md)

Fail and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[fail](Progress.md#fail)

#### Defined in

[progress.ts:232](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L232)

___

### finish

▸ **finish**(...`messages`): [`MultiProgressChild`](MultiProgressChild.md)

Succeed and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[finish](Progress.md#finish)

#### Defined in

[progress.ts:258](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L258)

___

### message

▸ **message**(`message`): [`MultiProgressChild`](MultiProgressChild.md)

Set the progress bar message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[message](Progress.md#message)

#### Defined in

[progress.ts:214](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L214)

___

### remove

▸ **remove**(): `void`

Remove this child progress bar

#### Returns

`void`

#### Defined in

[multi-progress.ts:111](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L111)

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

#### Inherited from

[Progress](Progress.md).[set](Progress.md#set)

#### Defined in

[progress.ts:188](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L188)

___

### setTotal

▸ **setTotal**(`total`): [`MultiProgressChild`](MultiProgressChild.md)

Set the progress bar total

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[setTotal](Progress.md#settotal)

#### Defined in

[progress.ts:221](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L221)

___

### start

▸ **start**(`options?`): [`MultiProgressChild`](MultiProgressChild.md)

Start the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[start](Progress.md#start)

#### Defined in

[progress.ts:142](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L142)

___

### stop

▸ **stop**(...`messages`): [`MultiProgressChild`](MultiProgressChild.md)

Stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[stop](Progress.md#stop)

#### Defined in

[progress.ts:245](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L245)

___

### tick

▸ **tick**(`payload`): [`MultiProgressChild`](MultiProgressChild.md)

Tick the progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

#### Defined in

[progress.ts:156](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L156)

▸ **tick**(`value?`, `payload?`): [`MultiProgressChild`](MultiProgressChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

#### Defined in

[progress.ts:157](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L157)

▸ **tick**(`message`, `payload?`): [`MultiProgressChild`](MultiProgressChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

#### Defined in

[progress.ts:158](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L158)

___

### update

▸ **update**(`payload?`): [`MultiProgressChild`](MultiProgressChild.md)

Update the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | [`ProgressPayload`](../modules.md#progresspayload) |

#### Returns

[`MultiProgressChild`](MultiProgressChild.md)

#### Inherited from

[Progress](Progress.md).[update](Progress.md#update)

#### Defined in

[progress.ts:203](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L203)
