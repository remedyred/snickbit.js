# Interface: IAddOptions

## Hierarchy

- [`IStartOptions`](IStartOptions.md)

- [`ISpinnerOptions`](ISpinnerOptions.md)

  ↳ **`IAddOptions`**

## Table of contents

### Properties

- [color](IAddOptions.md#color)
- [name](IAddOptions.md#name)
- [textPrefix](IAddOptions.md#textprefix)
- [verbose](IAddOptions.md#verbose)
- [withPrefix](IAddOptions.md#withprefix)

### Methods

- [verbosityCallback](IAddOptions.md#verbositycallback)

## Properties

### color

• `Optional` **color**: `string`

Spinner frame color

**`Default`**

```ts
"white"
```

#### Inherited from

[ISpinnerOptions](ISpinnerOptions.md).[color](ISpinnerOptions.md#color)

___

### name

• `Optional` **name**: `SpinnerName`

Spinner name (from cli-spinners lib)

**`Default`**

```ts
"dots"
```

#### Inherited from

[ISpinnerOptions](ISpinnerOptions.md).[name](ISpinnerOptions.md#name)

___

### textPrefix

• `Optional` **textPrefix**: `string`

Show this prefix before all text

#### Inherited from

[ISpinnerOptions](ISpinnerOptions.md).[textPrefix](ISpinnerOptions.md#textprefix)

___

### verbose

• `Optional` **verbose**: `boolean`

Do not log anything when disabled

**`Default`**

```ts
true
```

#### Inherited from

[ISpinnerOptions](ISpinnerOptions.md).[verbose](ISpinnerOptions.md#verbose)

___

### withPrefix

• `Optional` **withPrefix**: `string`

#### Inherited from

[IStartOptions](IStartOptions.md).[withPrefix](IStartOptions.md#withprefix)

## Methods

### verbosityCallback

▸ `Optional` **verbosityCallback**(): `boolean`

Callback to determine if spinner should be verbose aka disabled

#### Returns

`boolean`

#### Inherited from

[ISpinnerOptions](ISpinnerOptions.md).[verbosityCallback](ISpinnerOptions.md#verbositycallback)
