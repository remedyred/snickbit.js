# Interface: SpinnerOptions

## Table of contents

### Properties

- [color](SpinnerOptions.md#color)
- [name](SpinnerOptions.md#name)
- [onVerbose](SpinnerOptions.md#onverbose)
- [text](SpinnerOptions.md#text)
- [textPrefix](SpinnerOptions.md#textprefix)
- [verbose](SpinnerOptions.md#verbose)

### Methods

- [verbosityCallback](SpinnerOptions.md#verbositycallback)

## Properties

### color

• `Optional` **color**: `string`

Spinner frame color

**`Default`**

```ts
"white"
```

___

### name

• `Optional` **name**: `SpinnerName`

Spinner name (from cli-spinners lib)

**`Default`**

```ts
"dots"
```

___

### onVerbose

• `Optional` **onVerbose**: `VerbosityBehavior` \| ``"disable"`` \| ``"print"`` \| ``"ignore"``

Define onVerbose behavior

___

### text

• `Optional` **text**: `string`

Spinner text

___

### textPrefix

• `Optional` **textPrefix**: `string`

Show this prefix before all text

___

### verbose

• `Optional` **verbose**: `boolean`

Do not log anything when disabled

**`Default`**

```ts
true
```

## Methods

### verbosityCallback

▸ `Optional` **verbosityCallback**(): `boolean`

Callback to determine if spinner should be verbose aka disabled

#### Returns

`boolean`
