[@snickbit/node-utilities](../README.md) / [Exports](../modules.md) / Spinner

# Class: Spinner

Spinner. Uses nanospinner to show spinners in the terminal.

**`See`**

https://github.com/usmanyunusov/nanospinner

## Table of contents

### Constructors

- [constructor](Spinner.md#constructor)

### Properties

- [out](Spinner.md#out)
- [preload\_message](Spinner.md#preload_message)
- [spinner](Spinner.md#spinner)

### Methods

- [#getMessage](Spinner.md##getmessage)
- [#parseOptions](Spinner.md##parseoptions)
- [error](Spinner.md#error)
- [fail](Spinner.md#fail)
- [finish](Spinner.md#finish)
- [start](Spinner.md#start)
- [stop](Spinner.md#stop)
- [text](Spinner.md#text)
- [update](Spinner.md#update)

## Constructors

### constructor

• **new Spinner**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Defined in

[spinner.ts:48](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L48)

## Properties

### out

• **out**: `Out`

#### Defined in

[spinner.ts:46](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L46)

___

### preload\_message

• **preload\_message**: `string` = `''`

#### Defined in

[spinner.ts:44](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L44)

___

### spinner

• **spinner**: `any`

#### Defined in

[spinner.ts:42](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L42)

## Methods

### #getMessage

▸ `Private` **#getMessage**(`message`, `fallback?`): `string`

Parse the message, using the fallback if necessary

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `fallback?` | `string` |

#### Returns

`string`

#### Defined in

[spinner.ts:78](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L78)

___

### #parseOptions

▸ `Private` **#parseOptions**(`options?`, `fallback_text?`): [`SpinnerConfig`](../interfaces/SpinnerConfig.md)

Parse the options

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |
| `fallback_text?` | `string` |

#### Returns

[`SpinnerConfig`](../interfaces/SpinnerConfig.md)

#### Defined in

[spinner.ts:58](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L58)

___

### error

▸ **error**(`options?`): [`Spinner`](Spinner.md)

Error and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:123](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L123)

___

### fail

▸ **fail**(`options?`): [`Spinner`](Spinner.md)

Fail and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:116](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L116)

___

### finish

▸ **finish**(`options?`): [`Spinner`](Spinner.md)

Succeed and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:149](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L149)

___

### start

▸ **start**(`options?`): [`Spinner`](Spinner.md)

Start the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:102](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L102)

___

### stop

▸ **stop**(`options?`): [`Spinner`](Spinner.md)

Stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:136](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L136)

___

### text

▸ **text**(`message`): [`Spinner`](Spinner.md)

Set the spinner text

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:85](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L85)

___

### update

▸ **update**(`options`): [`Spinner`](Spinner.md)

Update the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

#### Defined in

[spinner.ts:93](https://github.com/snickbit/snickbit.js/blob/166d3ad/packages/node-utilities/src/spinner.ts#L93)
