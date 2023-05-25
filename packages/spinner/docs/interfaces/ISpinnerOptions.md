# Interface: ISpinnerOptions

## Hierarchy

- **`ISpinnerOptions`**

  ↳ [`IAddOptions`](IAddOptions.md)

## Table of contents

### Properties

- [color](ISpinnerOptions.md#color)
- [name](ISpinnerOptions.md#name)
- [onVerbose](ISpinnerOptions.md#onverbose)
- [textPrefix](ISpinnerOptions.md#textprefix)
- [verbose](ISpinnerOptions.md#verbose)

### Methods

- [verbosityCallback](ISpinnerOptions.md#verbositycallback)

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

• `Optional` **onVerbose**: ``"disable"`` \| ``"ignore"`` \| ``"print"``

Define onVerbose behavior

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
