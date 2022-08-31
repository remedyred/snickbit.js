[@snickbit/utilities](README.md) / Exports

# @snickbit/utilities

## Table of contents

### Validation Interfaces

- [AnyFunction](interfaces/AnyFunction.md)
- [AsyncFunction](interfaces/AsyncFunction.md)

### Arrays Type Aliases

- [ArrayPredicate](modules.md#arraypredicate)

### Generators Type Aliases

- [CombinationOptions](modules.md#combinationoptions)

### Objects Type Aliases

- [IObject](modules.md#iobject)
- [ObjectPredicate](modules.md#objectpredicate)

### Other Type Aliases

- [AdvancedVariableType](modules.md#advancedvariabletype)
- [BasicVariableType](modules.md#basicvariabletype)
- [CallableVariableType](modules.md#callablevariabletype)
- [EmptyVariableType](modules.md#emptyvariabletype)
- [FunctionType](modules.md#functiontype)
- [OverloadSchema](modules.md#overloadschema)
- [PrimitiveVariableType](modules.md#primitivevariabletype)
- [TryWaitFunction](modules.md#trywaitfunction)
- [VariableType](modules.md#variabletype)

### Templating Type Aliases

- [interpolateReplacements](modules.md#interpolatereplacements)

### Validation Type Aliases

- [AnyClass](modules.md#anyclass)
- [ArrayWithValues](modules.md#arraywithvalues)
- [EmptyArray](modules.md#emptyarray)
- [EmptyObject](modules.md#emptyobject)
- [VariableTypeDefinition](modules.md#variabletypedefinition)

### Other Variables

- [advanced](modules.md#advanced)
- [all](modules.md#all)
- [basic](modules.md#basic)
- [callable](modules.md#callable)
- [empty](modules.md#empty)
- [primitive](modules.md#primitive)
- [reserved](modules.md#reserved)

### Parsing Variables

- [capital\_plus\_lower](modules.md#capital_plus_lower)
- [capitals](modules.md#capitals)

### Arrays Functions

- [arrayDuplicates](modules.md#arrayduplicates)
- [arrayMerge](modules.md#arraymerge)
- [arrayMergeDeep](modules.md#arraymergedeep)
- [arrayReject](modules.md#arrayreject)
- [arrayRemove](modules.md#arrayremove)
- [arrayShuffle](modules.md#arrayshuffle)
- [arrayToObject](modules.md#arraytoobject)
- [arrayUnique](modules.md#arrayunique)
- [arrayUniqueInsensitive](modules.md#arrayuniqueinsensitive)
- [arrayWrap](modules.md#arraywrap)
- [isSingle](modules.md#issingle)

### Functions Functions

- [functionClone](modules.md#functionclone)
- [overloadOptions](modules.md#overloadoptions)
- [parseOptions](modules.md#parseoptions)
- [promiseAll](modules.md#promiseall)
- [tryWait](modules.md#trywait)

### Generators Functions

- [combinations](modules.md#combinations)
- [makeRandomSegment](modules.md#makerandomsegment)
- [randomString](modules.md#randomstring)
- [uuid](modules.md#uuid)

### Numbers Functions

- [formatBytes](modules.md#formatbytes)
- [formatCurrency](modules.md#formatcurrency)
- [formatPercentage](modules.md#formatpercentage)
- [maxDecimals](modules.md#maxdecimals)
- [numberEven](modules.md#numbereven)
- [numberOdd](modules.md#numberodd)
- [numberPad](modules.md#numberpad)
- [randomBetween](modules.md#randombetween)

### Objects Functions

- [objectClone](modules.md#objectclone)
- [objectCopy](modules.md#objectcopy)
- [objectExcept](modules.md#objectexcept)
- [objectFilter](modules.md#objectfilter)
- [objectFind](modules.md#objectfind)
- [objectFindEntry](modules.md#objectfindentry)
- [objectFindKey](modules.md#objectfindkey)
- [objectFlatten](modules.md#objectflatten)
- [objectGetMethod](modules.md#objectgetmethod)
- [objectHasMethod](modules.md#objecthasmethod)
- [objectMerge](modules.md#objectmerge)
- [objectMergeDeep](modules.md#objectmergedeep)
- [objectMethods](modules.md#objectmethods)
- [objectOnly](modules.md#objectonly)
- [objectPull](modules.md#objectpull)
- [objectSort](modules.md#objectsort)

### Other Functions

- [findFirstDiff](modules.md#findfirstdiff)
- [plural](modules.md#plural)
- [singular](modules.md#singular)

### Parsing Functions

- [JSONParse](modules.md#jsonparse)
- [JSONPrettify](modules.md#jsonprettify)
- [JSONStringify](modules.md#jsonstringify)
- [camelCase](modules.md#camelcase)
- [initials](modules.md#initials)
- [kebabCase](modules.md#kebabcase)
- [limitString](modules.md#limitstring)
- [limitWords](modules.md#limitwords)
- [padString](modules.md#padstring)
- [parse](modules.md#parse)
- [safeVarName](modules.md#safevarname)
- [sleep](modules.md#sleep)
- [slugify](modules.md#slugify)
- [snakeCase](modules.md#snakecase)
- [spaceCase](modules.md#spacecase)

### Templating Functions

- [escapeRegExp](modules.md#escaperegexp)
- [escapeReplacement](modules.md#escapereplacement)
- [interpolate](modules.md#interpolate)

### Validation Functions

- [isArray](modules.md#isarray)
- [isAsyncFunction](modules.md#isasyncfunction)
- [isAwaitable](modules.md#isawaitable)
- [isBase64](modules.md#isbase64)
- [isBoolean](modules.md#isboolean)
- [isClass](modules.md#isclass)
- [isDate](modules.md#isdate)
- [isDefined](modules.md#isdefined)
- [isEmpty](modules.md#isempty)
- [isFunction](modules.md#isfunction)
- [isNullDefined](modules.md#isnulldefined)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isPrimitive](modules.md#isprimitive)
- [isPromise](modules.md#ispromise)
- [isSet](modules.md#isset)
- [isString](modules.md#isstring)
- [isType](modules.md#istype)

### Variables Functions

- [clone](modules.md#clone)
- [count](modules.md#count)
- [isCallable](modules.md#iscallable)
- [isJSONString](modules.md#isjsonstring)
- [merge](modules.md#merge)
- [mergeDeep](modules.md#mergedeep)
- [typeOf](modules.md#typeof)

## Arrays Type Aliases

### ArrayPredicate

Ƭ **ArrayPredicate**: (`value`: `any`, `index?`: `number`, `array?`: `any`[]) => `unknown`

#### Type declaration

▸ (`value`, `index?`, `array?`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `index?` | `number` |
| `array?` | `any`[] |

##### Returns

`unknown`

#### Defined in

[utilities/src/arrays.ts:5](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L5)

___

## Generators Type Aliases

### CombinationOptions

Ƭ **CombinationOptions**: `Record`<`string`, `any`[]\>

#### Defined in

[utilities/src/generators.ts:34](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/generators.ts#L34)

___

## Objects Type Aliases

### IObject

Ƭ **IObject**: `Record`<`string` \| `symbol`, `any`\>

#### Defined in

[utilities/src/objects.ts:6](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L6)

___

### ObjectPredicate

Ƭ **ObjectPredicate**<`T`\>: (`key`: `string` \| `symbol`, `value?`: `T`, `object?`: `object`) => `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`key`, `value?`, `object?`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `symbol` |
| `value?` | `T` |
| `object?` | `object` |

##### Returns

`unknown`

#### Defined in

[utilities/src/objects.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L9)

___

## Other Type Aliases

### AdvancedVariableType

Ƭ **AdvancedVariableType**: ``"array"`` \| ``"date"`` \| ``"object"`` \| ``"symbol"``

#### Defined in

[utilities/src/data/variable-types.ts:12](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L12)

___

### BasicVariableType

Ƭ **BasicVariableType**: ``"bigint"`` \| ``"boolean"`` \| ``"number"`` \| ``"string"``

#### Defined in

[utilities/src/data/variable-types.ts:1](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L1)

___

### CallableVariableType

Ƭ **CallableVariableType**: ``"asyncfunction"`` \| ``"function"`` \| ``"promise"``

#### Defined in

[utilities/src/data/variable-types.ts:20](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L20)

___

### EmptyVariableType

Ƭ **EmptyVariableType**: ``"null"`` \| ``"undefined"``

#### Defined in

[utilities/src/data/variable-types.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L9)

___

### FunctionType

Ƭ **FunctionType**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[utilities/src/functions.ts:43](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L43)

___

### OverloadSchema

Ƭ **OverloadSchema**: `Record`<`string`, [`VariableType`](modules.md#variabletype)\>

#### Defined in

[utilities/src/functions.ts:84](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L84)

___

### PrimitiveVariableType

Ƭ **PrimitiveVariableType**: [`BasicVariableType`](modules.md#basicvariabletype) \| [`EmptyVariableType`](modules.md#emptyvariabletype)

#### Defined in

[utilities/src/data/variable-types.ts:23](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L23)

___

### TryWaitFunction

Ƭ **TryWaitFunction**: (...`args`: `any`[]) => `Promise`<`any`\> \| `any`

#### Type declaration

▸ (...`args`): `Promise`<`any`\> \| `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`any`\> \| `any`

#### Defined in

[utilities/src/functions.ts:45](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L45)

___

### VariableType

Ƭ **VariableType**: [`AdvancedVariableType`](modules.md#advancedvariabletype) \| [`CallableVariableType`](modules.md#callablevariabletype) \| [`PrimitiveVariableType`](modules.md#primitivevariabletype)

#### Defined in

[utilities/src/data/variable-types.ts:26](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L26)

___

## Templating Type Aliases

### interpolateReplacements

Ƭ **interpolateReplacements**: `Record`<`string`, `any` \| `number` \| `string`\>

#### Defined in

[utilities/src/templating.ts:20](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/templating.ts#L20)

___

## Validation Type Aliases

### AnyClass

Ƭ **AnyClass**: `Object`

#### Defined in

[utilities/src/validations.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L27)

___

### ArrayWithValues

Ƭ **ArrayWithValues**: [`any`, ...any]

#### Defined in

[utilities/src/validations.ts:14](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L14)

___

### EmptyArray

Ƭ **EmptyArray**: `never`[]

#### Defined in

[utilities/src/validations.ts:11](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L11)

___

### EmptyObject

Ƭ **EmptyObject**: `Record`<`any`, `never`\>

#### Defined in

[utilities/src/validations.ts:8](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L8)

___

### VariableTypeDefinition

Ƭ **VariableTypeDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[utilities/src/validations.ts:5](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L5)

## Other Variables

### advanced

• `Const` **advanced**: [`AdvancedVariableType`](modules.md#advancedvariabletype)[]

#### Defined in

[utilities/src/data/variable-types.ts:13](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L13)

___

### all

• `Const` **all**: [`VariableType`](modules.md#variabletype)[]

#### Defined in

[utilities/src/data/variable-types.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L27)

___

### basic

• `Const` **basic**: [`BasicVariableType`](modules.md#basicvariabletype)[]

#### Defined in

[utilities/src/data/variable-types.ts:2](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L2)

___

### callable

• `Const` **callable**: [`CallableVariableType`](modules.md#callablevariabletype)[]

#### Defined in

[utilities/src/data/variable-types.ts:21](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L21)

___

### empty

• `Const` **empty**: [`EmptyVariableType`](modules.md#emptyvariabletype)[]

#### Defined in

[utilities/src/data/variable-types.ts:10](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L10)

___

### primitive

• `Const` **primitive**: [`PrimitiveVariableType`](modules.md#primitivevariabletype)[]

#### Defined in

[utilities/src/data/variable-types.ts:24](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/variable-types.ts#L24)

___

### reserved

• `Const` **reserved**: `string`[]

#### Defined in

[utilities/src/data/reserved.ts:1](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/data/reserved.ts#L1)

___

## Parsing Variables

### capital\_plus\_lower

• `Const` **capital\_plus\_lower**: `RegExp`

#### Defined in

[utilities/src/strings.ts:10](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L10)

___

### capitals

• `Const` **capitals**: `RegExp`

#### Defined in

[utilities/src/strings.ts:16](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L16)

## Arrays Functions

### arrayDuplicates

▸ **arrayDuplicates**(`array`, `predicate?`): `any`[]

Return the duplicate values from an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `predicate?` | [`ArrayPredicate`](modules.md#arraypredicate) |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:55](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L55)

___

### arrayMerge

▸ **arrayMerge**(...`arrs`): `any`[]

Merge two or more arrays together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | `any`[][] |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:108](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L108)

___

### arrayMergeDeep

▸ **arrayMergeDeep**(...`arrs`): `any`[]

Merge two or more arrays together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | `any`[][] |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:122](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L122)

___

### arrayReject

▸ **arrayReject**(`array`, `callback`): `any`[]

Get the reverse of a filtered array

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `callback` | (...`args`: `any`[]) => `boolean` |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:136](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L136)

___

### arrayRemove

▸ **arrayRemove**(`array`, `value`): `any`[]

Finds and returns an element from an array, removing it in the process

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `value` | `any` |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:73](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L73)

___

### arrayShuffle

▸ **arrayShuffle**(`array`): `any`[]

Shuffles/randomizes an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:88](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L88)

___

### arrayToObject

▸ **arrayToObject**(`array`, `key`, `value`): `object`

Convert an array to an object using the given key as the property

**`Example`**

```ts
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
// {1: 'John', 2: 'Jane'}
```

**`Example`**

```ts
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
// {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `key` | `string` \| `number` |
| `value` | `string` \| `number` |

#### Returns

`object`

#### Defined in

[utilities/src/arrays.ts:43](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L43)

___

### arrayUnique

▸ **arrayUnique**(`array`, `key?`): `any`[]

Returns unique values from an array. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `key?` | `string` |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:24](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L24)

___

### arrayUniqueInsensitive

▸ **arrayUniqueInsensitive**(`array`, `key?`): `any`[]

Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `key?` | `string` |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:30](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L30)

___

### arrayWrap

▸ **arrayWrap**(`values`): `any`[]

Wrap a variable in an array if it is not already an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `any` |

#### Returns

`any`[]

#### Defined in

[utilities/src/arrays.ts:49](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L49)

___

### isSingle

▸ **isSingle**(`array`, `value?`): `boolean`

Checks if the given array only contains a single value, optionally pass a value or predicate to check against

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `value?` | `any` |

#### Returns

`boolean`

#### Defined in

[utilities/src/arrays.ts:11](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/arrays.ts#L11)

___

## Functions Functions

### functionClone

▸ **functionClone**(`fn`): [`FunctionType`](modules.md#functiontype)

Clone a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`FunctionType`](modules.md#functiontype) |

#### Returns

[`FunctionType`](modules.md#functiontype)

#### Defined in

[utilities/src/functions.ts:67](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L67)

___

### overloadOptions

▸ **overloadOptions**(`options`, `schemas`): `object`

Parses an array of arguments for an overloaded function into an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any`[] |
| `schemas` | [`OverloadSchema`](modules.md#overloadschema)[] |

#### Returns

`object`

#### Defined in

[utilities/src/functions.ts:90](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L90)

___

### parseOptions

▸ **parseOptions**(`given`, `defaults`, `non_object_key?`): `any` \| `object`

Parse options for a function

**`Example`**

```ts
const options = parseOptions(true, {param: 'default'}, 'my_param')
// {param: 'default', my_param: true}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `given` | `any` | The given options |
| `defaults` | [`IObject`](modules.md#iobject) | The default options |
| `non_object_key?` | `string` | Optional key to use if the given options are not an object, will be added to the defaults object |

#### Returns

`any` \| `object`

#### Defined in

[utilities/src/functions.ts:18](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L18)

___

### promiseAll

▸ **promiseAll**(`array`, `fn`): `Promise`<`Awaited`<`unknown`\>[]\>

Send each item in an array to a function, await the results

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `fn` | (`value`: `any`, `index`: `number`, `array`: `any`[]) => `any` |

#### Returns

`Promise`<`Awaited`<`unknown`\>[]\>

#### Defined in

[utilities/src/functions.ts:77](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L77)

___

### tryWait

▸ **tryWait**(`fn`, ...`args`): `Promise`<`any`\>

Catch an async function or promise and force it to resolve, returning undefined if it fails

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TryWaitFunction`](modules.md#trywaitfunction) |
| `...args` | `any`[][] |

#### Returns

`Promise`<`any`\>

#### Defined in

[utilities/src/functions.ts:51](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/functions.ts#L51)

___

## Generators Functions

### combinations

▸ **combinations**(`options`): `any`[]

Generate an array of all possible property values. Provide an object with each property as a key and an array of possible values as the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CombinationOptions`](modules.md#combinationoptions) |

#### Returns

`any`[]

#### Defined in

[utilities/src/generators.ts:40](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/generators.ts#L40)

___

### makeRandomSegment

▸ **makeRandomSegment**(): `string`

Generate a random string between 8 and 14 characters long

#### Returns

`string`

#### Defined in

[utilities/src/generators.ts:29](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/generators.ts#L29)

___

### randomString

▸ **randomString**(`length?`): `string`

Generate a random string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`string`

#### Defined in

[utilities/src/generators.ts:17](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/generators.ts#L17)

___

### uuid

▸ **uuid**(`prefix?`): `string`

Create uuid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `''` |

#### Returns

`string`

#### Defined in

[utilities/src/generators.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/generators.ts#L9)

___

## Numbers Functions

### formatBytes

▸ **formatBytes**(`bytes`, `decimals?`): `string`

Format a number in bytes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bytes` | `number` | `undefined` | The number of bytes. |
| `decimals?` | `number` | `2` | The number of decimals. |

#### Returns

`string`

#### Defined in

[utilities/src/numbers.ts:19](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L19)

___

### formatCurrency

▸ **formatCurrency**(`amount`, `symbol?`, `decimals?`): `string`

Format a number as currency.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `number` | `undefined` | The number to format. |
| `symbol?` | `string` | `'$'` | The currency symbol. |
| `decimals?` | `number` | `2` | The number of decimals. |

#### Returns

`string`

#### Defined in

[utilities/src/numbers.ts:50](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L50)

___

### formatPercentage

▸ **formatPercentage**(`amount`, `decimals?`): `string`

Format a number as a percentage.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `number` | `undefined` | The number to format. |
| `decimals?` | `number` | `2` | The number of decimals to show. |

#### Returns

`string`

#### Defined in

[utilities/src/numbers.ts:58](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L58)

___

### maxDecimals

▸ **maxDecimals**(`value`, `max_places?`): `number`

limit the amount of decimals to the given number

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | the number to limit |
| `max_places?` | `number` | `2` | the maximum number of decimals |

#### Returns

`number`

#### Defined in

[utilities/src/numbers.ts:66](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L66)

___

### numberEven

▸ **numberEven**(`num`, `subtract?`): `number`

Force a number to be even

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | the number to force even |
| `subtract?` | `boolean` | `false` | whether to subtract 1 from the number if it is odd |

#### Returns

`number`

#### Defined in

[utilities/src/numbers.ts:87](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L87)

___

### numberOdd

▸ **numberOdd**(`num`, `subtract?`): `number`

Force a number to be odd

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `number` | `undefined` | the number to force odd |
| `subtract?` | `boolean` | `false` | whether to subtract 1 from the number if it is even |

#### Returns

`number`

#### Defined in

[utilities/src/numbers.ts:97](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L97)

___

### numberPad

▸ **numberPad**(`num`, `length?`): `string`

Pad a number with zeros.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `num` | `string` \| `number` | `undefined` | The number to pad. |
| `length?` | `number` | `2` | The length of the resulting string. |

#### Returns

`string`

#### Defined in

[utilities/src/numbers.ts:7](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L7)

___

### randomBetween

▸ **randomBetween**(`min`, `max`, `inclusive?`): `number`

Generate a random number between min and max.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `undefined` | The minimum number. |
| `max` | `number` | `undefined` | The maximum number. |
| `inclusive?` | `boolean` | `true` | Whether to include the max value in the range. |

#### Returns

`number`

#### Defined in

[utilities/src/numbers.ts:75](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/numbers.ts#L75)

___

## Objects Functions

### objectClone

▸ **objectClone**<`I`\>(...`objects`): `I`

Deep clones an object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](modules.md#iobject)[] |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:153](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L153)

___

### objectCopy

▸ **objectCopy**<`I`\>(`object`, `force?`): `I`

Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `force?` | `boolean` |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:167](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L167)

___

### objectExcept

▸ **objectExcept**<`I`\>(`object`, `excluded`): `I`

Returns a new object without the excluded properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` | the object to filter |
| `excluded` | `string`[] | the allowed properties |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:121](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L121)

___

### objectFilter

▸ **objectFilter**<`I`, `R`\>(`object`, `predicate?`): `R`

Filter an object by a given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |
| `R` | `Partial`<`I`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `predicate` | [`ObjectPredicate`](modules.md#objectpredicate)<`any`\> |

#### Returns

`R`

#### Defined in

[utilities/src/objects.ts:75](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L75)

___

### objectFind

▸ **objectFind**<`T`, `I`\>(`object`, `predicate?`): `T` \| `undefined`

Finds an object property's value that matches the given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `I` |  |
| `predicate?` | `string` \| `symbol` \| [`ObjectPredicate`](modules.md#objectpredicate)<`any`\> | A string or function that returns a boolean |

#### Returns

`T` \| `undefined`

#### Defined in

[utilities/src/objects.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L27)

___

### objectFindEntry

▸ **objectFindEntry**<`T`, `I`\>(`object`, `predicate`): [`string`, `T`] \| `undefined`

Finds an object property's entry [key, value] that matches the given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `predicate` | `string` \| `symbol` \| [`ObjectPredicate`](modules.md#objectpredicate)<`any`\> |

#### Returns

[`string`, `T`] \| `undefined`

#### Defined in

[utilities/src/objects.ts:36](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L36)

___

### objectFindKey

▸ **objectFindKey**<`I`\>(`object`, `predicate`): `string` \| `symbol` \| `undefined`

Finds an object property's name that matches the given predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `predicate` | `string` \| `symbol` \| [`ObjectPredicate`](modules.md#objectpredicate)<`any`\> |

#### Returns

`string` \| `symbol` \| `undefined`

#### Defined in

[utilities/src/objects.ts:15](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L15)

___

### objectFlatten

▸ **objectFlatten**<`I`\>(`object`, `prefix?`): `I`

Flattens an object into a single level using dot notation for nested properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `object` | `I` | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:137](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L137)

___

### objectGetMethod

▸ **objectGetMethod**<`T`, `I`\>(`object`, `method`, `strict?`): `T` \| `undefined`

Checks if an object has a method with the given name, and returns the method

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `method` | `string` |
| `strict?` | `boolean` |

#### Returns

`T` \| `undefined`

#### Defined in

[utilities/src/objects.ts:57](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L57)

___

### objectHasMethod

▸ **objectHasMethod**<`I`\>(`object`, `method`, `strict?`): `boolean`

Checks if an object has a method with the given name

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `method` | `string` |
| `strict?` | `boolean` |

#### Returns

`boolean`

#### Defined in

[utilities/src/objects.ts:49](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L49)

___

### objectMerge

▸ **objectMerge**<`I`\>(...`objects`): `I`

Merge two or more objects together

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](modules.md#iobject)[] |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:176](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L176)

___

### objectMergeDeep

▸ **objectMergeDeep**<`I`\>(...`objects`): `I`

Merge two or more objects together, recursing child values

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](modules.md#iobject)[] |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:190](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L190)

___

### objectMethods

▸ **objectMethods**<`I`\>(`object`): `string`[]

Returns an array of the given object's available method names

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |

#### Returns

`string`[]

#### Defined in

[utilities/src/objects.ts:209](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L209)

___

### objectOnly

▸ **objectOnly**<`I`\>(`object`, `allowed`): `I`

Returns a new object with only the allowed properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `allowed` | `string`[] |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:102](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L102)

___

### objectPull

▸ **objectPull**<`I`\>(`object`, `key`): `any`

Remove a property from an object and return the value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[utilities/src/objects.ts:228](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L228)

___

### objectSort

▸ **objectSort**<`I`\>(`object`): `I`

Sort an object by it's keys

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:241](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L241)

▸ **objectSort**<`I`\>(`object`, `sortFunction`): `I`

Sort an object by a predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` = [`IObject`](modules.md#iobject) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `I` |
| `sortFunction` | (`a`: [`string`, `unknown`], `b`: [`string`, `unknown`]) => `number` |

#### Returns

`I`

#### Defined in

[utilities/src/objects.ts:247](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/objects.ts#L247)

___

## Other Functions

### findFirstDiff

▸ **findFirstDiff**(`first`, `second`): `number`

Return the index of the first difference between two strings

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `any` |
| `second` | `any` |

#### Returns

`number`

-1 if no difference

#### Defined in

[utilities/src/strings.ts:142](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L142)

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

#### Defined in

plural/dist/index.d.ts:1

▸ **plural**(`word`, `pluralized`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `pluralized` | `string` |
| `count?` | `number` |

#### Returns

`any`

#### Defined in

plural/dist/index.d.ts:2

___

### singular

▸ **singular**(`word`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `count?` | `number` |

#### Returns

`any`

#### Defined in

plural/dist/index.d.ts:3

▸ **singular**(`word`, `singularized`, `count?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | `string` |
| `singularized` | `string` |
| `count?` | `number` |

#### Returns

`any`

#### Defined in

plural/dist/index.d.ts:4

___

## Parsing Functions

### JSONParse

▸ **JSONParse**<`T`\>(`text`, `strict?`): `T` \| `undefined`

Parse a string into JSON

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `strict?` | `boolean` |

#### Returns

`T` \| `undefined`

#### Defined in

[utilities/src/parsing.ts:50](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/parsing.ts#L50)

___

### JSONPrettify

▸ **JSONPrettify**(`data`, `spacer?`): `string`

Pretty print a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `spacer` | `number` | `2` |

#### Returns

`string`

#### Defined in

[utilities/src/parsing.ts:94](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/parsing.ts#L94)

___

### JSONStringify

▸ **JSONStringify**<`T`\>(`data`, `options?`): `string`

Parse a variable into a JSON string

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T` | `undefined` |
| `options` | `JSONStringifyOptions` | `false` |

#### Returns

`string`

#### Defined in

[utilities/src/parsing.ts:72](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/parsing.ts#L72)

___

### camelCase

▸ **camelCase**(`text`): `string`

Convert a string to camelCase

**`See`**

https://www.npmjs.com/package/just-camel-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:39](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L39)

___

### initials

▸ **initials**(`text`): `string`

Convert a string to initials

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:57](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L57)

___

### kebabCase

▸ **kebabCase**(`text`): `string`

Convert a string to kebab-case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The string to convert |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:31](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L31)

___

### limitString

▸ **limitString**(`text`, `limit?`, `suffix?`): `string`

Limit a string to a certain length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `suffix` | `string` | `'...'` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:67](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L67)

___

### limitWords

▸ **limitWords**(`text`, `limit?`, `suffix?`): `string`

Limit a string to a certain amount of words

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `suffix` | `string` | `'...'` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:73](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L73)

___

### padString

▸ **padString**(`text`, `padding?`, `character?`): `string`

Pad a string on both sides with the given character and length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `padding` | `number` | `2` |
| `character` | `string` | `' '` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:82](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L82)

___

### parse

▸ **parse**(`value`): `any`

Parse a string into it's primitive type if possible. If not, return the original variable.

**`Example`**

```ts
'123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[utilities/src/parsing.ts:11](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/parsing.ts#L11)

___

### safeVarName

▸ **safeVarName**(`text`, `replacer?`): `string`

Create a safe javascript variable name from a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `replacer` | `string` | `''` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:91](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L91)

___

### sleep

▸ **sleep**(`ms`): `Promise`<`unknown`\>

sleep for a given time

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[utilities/src/sleep.ts:5](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/sleep.ts#L5)

___

### slugify

▸ **slugify**(`text`, `replace?`): `string`

Create slug from string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `replace` | `string` | `'-'` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:126](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L126)

___

### snakeCase

▸ **snakeCase**(`text`): `string`

Convert a string to snake_case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:22](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L22)

___

### spaceCase

▸ **spaceCase**(`text`): `string`

Convert a string to space-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utilities/src/strings.ts:112](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/strings.ts#L112)

___

## Templating Functions

### escapeRegExp

▸ **escapeRegExp**(`text`): `string`

escape regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utilities/src/templating.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/templating.ts#L9)

___

### escapeReplacement

▸ **escapeReplacement**(`text`): `string`

escape regexp replacement string

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[utilities/src/templating.ts:17](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/templating.ts#L17)

___

### interpolate

▸ **interpolate**(`text`, `replacements`): `string`

interpolate string with data from object using `{{key}}` syntax or `${key}` syntax

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `replacements` | [`interpolateReplacements`](modules.md#interpolatereplacements) |

#### Returns

`string`

#### Defined in

[utilities/src/templating.ts:26](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/templating.ts#L26)

___

## Validation Functions

### isArray

▸ **isArray**(`value`): value is [any, ...any[]]

Checks if variable is an array and is not empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is [any, ...any[]]

#### Defined in

[utilities/src/validations.ts:98](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L98)

___

### isAsyncFunction

▸ **isAsyncFunction**<`T`\>(`value`): value is AsyncFunction<T\>

Check if a variable is an async function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AsyncFunction<T\>

#### Defined in

[utilities/src/validations.ts:66](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L66)

___

### isAwaitable

▸ **isAwaitable**<`T`\>(`value`): value is AsyncFunction<T\> \| Promise<T\>

Check if a variable can be used with await (a Promise or AsyncFunction)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AsyncFunction<T\> \| Promise<T\>

#### Defined in

[utilities/src/validations.ts:72](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L72)

___

### isBase64

▸ **isBase64**(`content`): `boolean`

Check if a variable is a Base64 string

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`boolean`

#### Defined in

[utilities/src/validations.ts:154](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L154)

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

Check if a variable is a boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is boolean

#### Defined in

[utilities/src/validations.ts:116](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L116)

___

### isClass

▸ **isClass**(`value`): value is AnyClass

Check if a variable is a class

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is AnyClass

#### Defined in

[utilities/src/validations.ts:134](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L134)

___

### isDate

▸ **isDate**(`value`): value is Date

Check if a variable is a valid date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Date

#### Defined in

[utilities/src/validations.ts:160](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L160)

___

### isDefined

▸ **isDefined**(`value`): value is undefined

Check if a value is undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is undefined

#### Defined in

[utilities/src/validations.ts:35](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L35)

___

### isEmpty

▸ **isEmpty**(`value`): value is EmptyObject

Check if a value is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is EmptyObject

#### Defined in

[utilities/src/validations.ts:43](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L43)

▸ **isEmpty**(`value`): value is ""

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

value is ""

#### Defined in

[utilities/src/validations.ts:44](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L44)

▸ **isEmpty**(`value`): value is EmptyArray

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any`[] |

#### Returns

value is EmptyArray

#### Defined in

[utilities/src/validations.ts:45](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L45)

___

### isFunction

▸ **isFunction**(`value`, `strict?`): value is AnyFunction<any\>

Check if a variable is a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | ``false`` |

#### Returns

value is AnyFunction<any\>

#### Defined in

[utilities/src/validations.ts:122](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L122)

▸ **isFunction**(`value`, `strict`): value is Function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict` | ``true`` |

#### Returns

value is Function

#### Defined in

[utilities/src/validations.ts:124](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L124)

___

### isNullDefined

▸ **isNullDefined**(`value`): value is null

Check if a value is null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is null

#### Defined in

[utilities/src/validations.ts:54](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L54)

___

### isNumber

▸ **isNumber**(`value`): value is number

Check if a variable is a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

#### Defined in

[utilities/src/validations.ts:110](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L110)

___

### isObject

▸ **isObject**(`value`, `strict?`): value is Record<any, any\>

Check if a variable is an object and is not null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | ``true`` |

#### Returns

value is Record<any, any\>

#### Defined in

[utilities/src/validations.ts:88](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L88)

▸ **isObject**(`value`, `strict`): value is AnyFunction<any\> \| Record<any, any\> \| [any, ...any[]] \| Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict` | ``false`` |

#### Returns

value is AnyFunction<any\> \| Record<any, any\> \| [any, ...any[]] \| Date

#### Defined in

[utilities/src/validations.ts:89](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L89)

___

### isPrimitive

▸ **isPrimitive**(`value`, `includeNullUndefined`): value is BasicVariableType

Check if a variable is a primitive type. i.e. string, boolean, number, or bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `includeNullUndefined` | ``true`` |

#### Returns

value is BasicVariableType

#### Defined in

[utilities/src/validations.ts:78](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L78)

▸ **isPrimitive**(`value`, `includeNullUndefined?`): value is PrimitiveVariableType

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `includeNullUndefined?` | ``false`` |

#### Returns

value is PrimitiveVariableType

#### Defined in

[utilities/src/validations.ts:79](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L79)

___

### isPromise

▸ **isPromise**<`T`\>(`value`): value is Promise<T\>

Check if a variable is a promise

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Promise<T\>

#### Defined in

[utilities/src/validations.ts:60](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L60)

___

### isSet

▸ **isSet**<`T`\>(`value`): value is Set<T\>

Check if a variable is a Set

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Set<T\>

#### Defined in

[utilities/src/validations.ts:140](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L140)

___

### isString

▸ **isString**(`value`): value is string

Check if a variable is a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is string

#### Defined in

[utilities/src/validations.ts:104](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L104)

___

### isType

▸ **isType**(`value`, `type`): value is VariableType

Check if a variable is the given type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `string` \| [`VariableTypeDefinition`](modules.md#variabletypedefinition) |

#### Returns

value is VariableType

#### Defined in

[utilities/src/validations.ts:146](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/validations.ts#L146)

___

## Variables Functions

### clone

▸ **clone**(`value`): `any`

Clone a variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[utilities/src/variables.ts:149](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L149)

___

### count

▸ **count**(`value`, `strict?`): `number`

Count the number of keys in an object \
Count the number of entries in an array \
Count the number of values in a Set \
Get the length of a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `strict` | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[utilities/src/variables.ts:14](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L14)

___

### isCallable

▸ **isCallable**(`value`, `options?`): `boolean`

Check if a variable is callable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `boolean` \| `Partial`<`isCallableOptions`\> |

#### Returns

`boolean`

#### Defined in

[utilities/src/variables.ts:75](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L75)

___

### isJSONString

▸ **isJSONString**(`value`, `returnValue?`): `any`

Check if a variable is a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `returnValue` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[utilities/src/variables.ts:32](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L32)

___

### merge

▸ **merge**(...`values`): `any`[] \| [`IObject`](modules.md#iobject)

Merge two or more variables together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] \| [`IObject`](modules.md#iobject)[] |

#### Returns

`any`[] \| [`IObject`](modules.md#iobject)

#### Defined in

[utilities/src/variables.ts:97](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L97)

___

### mergeDeep

▸ **mergeDeep**(...`values`): `any`[] \| [`IObject`](modules.md#iobject)

Merge two or more variables together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `any`[] \| [`IObject`](modules.md#iobject)[] |

#### Returns

`any`[] \| [`IObject`](modules.md#iobject)

#### Defined in

[utilities/src/variables.ts:123](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L123)

___

### typeOf

▸ **typeOf**(`value`): [`VariableType`](modules.md#variabletype)

Return a variable's type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`VariableType`](modules.md#variabletype)

#### Defined in

[utilities/src/variables.ts:45](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/utilities/src/variables.ts#L45)
