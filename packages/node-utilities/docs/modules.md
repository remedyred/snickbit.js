[@snickbit/node-utilities](README.md) / Exports

# @snickbit/node-utilities

## Table of contents

### Other Classes

- [MultiProgressChild](classes/MultiProgressChild.md)

### Progress Classes

- [MultiProgress](classes/MultiProgress.md)
- [Progress](classes/Progress.md)

### Spinner Classes

- [Spinner](classes/Spinner.md)

### Files Interfaces

- [FindUpOptions](interfaces/FindUpOptions.md)

### Imports Interfaces

- [ImportDefinition](interfaces/ImportDefinition.md)
- [ParsedImport](interfaces/ParsedImport.md)

### Other Interfaces

- [AutoCompleteQuestion](interfaces/AutoCompleteQuestion.md)
- [MultiProgressChildConfig](interfaces/MultiProgressChildConfig.md)
- [UnparsedImport](interfaces/UnparsedImport.md)

### Progress Interfaces

- [ProgressConfig](interfaces/ProgressConfig.md)

### Prompts Interfaces

- [AutoCompleteMultiSelectQuestion](interfaces/AutoCompleteMultiSelectQuestion.md)
- [ChoiceDefinition](interfaces/ChoiceDefinition.md)
- [ConfirmQuestion](interfaces/ConfirmQuestion.md)
- [DateQuestion](interfaces/DateQuestion.md)
- [InvisibleQuestion](interfaces/InvisibleQuestion.md)
- [ListQuestion](interfaces/ListQuestion.md)
- [MultiSelectQuestion](interfaces/MultiSelectQuestion.md)
- [NumberQuestion](interfaces/NumberQuestion.md)
- [PasswordQuestion](interfaces/PasswordQuestion.md)
- [PromptState](interfaces/PromptState.md)
- [PromptTypeMethod](interfaces/PromptTypeMethod.md)
- [PromptsLocales](interfaces/PromptsLocales.md)
- [SelectQuestion](interfaces/SelectQuestion.md)
- [TextQuestion](interfaces/TextQuestion.md)
- [ToggleQuestion](interfaces/ToggleQuestion.md)

### Spinner Interfaces

- [SpinnerConfig](interfaces/SpinnerConfig.md)

### Imports Type Aliases

- [ImportRecords](modules.md#importrecords)
- [RecordOfImportRecords](modules.md#recordofimportrecords)

### Other Type Aliases

- [ImportMethod](modules.md#importmethod)
- [MultiProgressChildOptions](modules.md#multiprogresschildoptions)
- [ParsedImportRecords](modules.md#parsedimportrecords)
- [ProgressOptions](modules.md#progressoptions)
- [ProgressPayload](modules.md#progresspayload)
- [RawImports](modules.md#rawimports)

### Progress Type Aliases

- [MultiProgressBars](modules.md#multiprogressbars)

### Prompts Type Aliases

- [AnswerTypes](modules.md#answertypes)
- [Answers](modules.md#answers)
- [ChoiceOption](modules.md#choiceoption)
- [ChoiceRecords](modules.md#choicerecords)
- [PromptType](modules.md#prompttype)
- [PromptsMethod](modules.md#promptsmethod)
- [Question](modules.md#question)
- [QuestionRecords](modules.md#questionrecords)

### Spinner Type Aliases

- [SpinnerOptions](modules.md#spinneroptions)

### Environment Variables

- [app\_data\_dir](modules.md#app_data_dir)
- [bashrc\_path](modules.md#bashrc_path)
- [home\_dir](modules.md#home_dir)
- [is\_wsl](modules.md#is_wsl)
- [platform](modules.md#platform)
- [temp\_dir](modules.md#temp_dir)
- [user\_config\_dir](modules.md#user_config_dir)
- [user\_data\_dir](modules.md#user_data_dir)
- [verbose](modules.md#verbose)

### Other Variables

- [default\_progress\_options](modules.md#default_progress_options)

### Before Exit Functions

- [beforeExit](modules.md#beforeexit)

### Buffer Functions

- [bufferStream](modules.md#bufferstream)
- [makeBuffer](modules.md#makebuffer)

### Environment Functions

- [interpolateEnv](modules.md#interpolateenv)
- [isBundledElectronApp](modules.md#isbundledelectronapp)
- [isElectronApp](modules.md#iselectronapp)

### Files Functions

- [fileExists](modules.md#fileexists)
- [findUp](modules.md#findup)
- [getFile](modules.md#getfile)
- [getFileJSON](modules.md#getfilejson)
- [getFileJson](modules.md#getfilejson-1)
- [isDirectory](modules.md#isdirectory)
- [mkdir](modules.md#mkdir)
- [saveFile](modules.md#savefile)
- [saveFileJSON](modules.md#savefilejson)
- [saveFileJson](modules.md#savefilejson-1)
- [unlink](modules.md#unlink)

### Imports Functions

- [isImport](modules.md#isimport)
- [isImportDefinition](modules.md#isimportdefinition)
- [parseImports](modules.md#parseimports)

### Other Functions

- [makeProgressConfig](modules.md#makeprogressconfig)
- [makeProgressFormat](modules.md#makeprogressformat)

### Progress Functions

- [multiprogress](modules.md#multiprogress)
- [progress](modules.md#progress)

### Prompts Functions

- [ask](modules.md#ask)
- [confirm](modules.md#confirm)
- [prompt](modules.md#prompt)

### Spinner Functions

- [spinner](modules.md#spinner)

## Imports Type Aliases

### ImportRecords

Ƭ **ImportRecords**<`I`\>: `Record`<`string`, `I` \| [`ImportDefinition`](interfaces/ImportDefinition.md)<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](modules.md#importmethod) = [`ImportMethod`](modules.md#importmethod) |

#### Defined in

[imports.ts:22](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L22)

___

### RecordOfImportRecords

Ƭ **RecordOfImportRecords**<`I`\>: `Record`<`string`, [`ImportRecords`](modules.md#importrecords)<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](modules.md#importmethod) = [`ImportMethod`](modules.md#importmethod) |

#### Defined in

[imports.ts:25](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L25)

___

## Other Type Aliases

### ImportMethod

Ƭ **ImportMethod**<`Args`, `Results`\>: (...`args`: `Args`[]) => `Promise`<`Results`\> \| `Results`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `any` |
| `Results` | `any` |

#### Type declaration

▸ (...`args`): `Promise`<`Results`\> \| `Results`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args`[] |

##### Returns

`Promise`<`Results`\> \| `Results`

#### Defined in

[imports.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L9)

___

### MultiProgressChildOptions

Ƭ **MultiProgressChildOptions**: `Partial`<[`MultiProgressChildConfig`](interfaces/MultiProgressChildConfig.md)\>

#### Defined in

[multi-progress.ts:88](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L88)

___

### ParsedImportRecords

Ƭ **ParsedImportRecords**<`I`\>: `Record`<`string`, [`ParsedImport`](interfaces/ParsedImport.md)<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](modules.md#importmethod) = [`ImportMethod`](modules.md#importmethod) |

#### Defined in

[imports.ts:37](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L37)

___

### ProgressOptions

Ƭ **ProgressOptions**: `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\>

#### Defined in

[progress.ts:18](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L18)

___

### ProgressPayload

Ƭ **ProgressPayload**: `Record`<`string`, `any`\>

#### Defined in

[progress.ts:20](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L20)

___

### RawImports

Ƭ **RawImports**<`I`\>: [`ImportRecords`](modules.md#importrecords)<`I`\> \| [`RecordOfImportRecords`](modules.md#recordofimportrecords)<`I`\> \| `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](modules.md#importmethod) = [`ImportMethod`](modules.md#importmethod) |

#### Defined in

[imports.ts:27](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L27)

___

## Progress Type Aliases

### MultiProgressBars

Ƭ **MultiProgressBars**: `Record`<`string`, [`MultiProgressChild`](classes/MultiProgressChild.md)\>

#### Defined in

[multi-progress.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L9)

___

## Prompts Type Aliases

### AnswerTypes

Ƭ **AnswerTypes**: `Date` \| `boolean` \| `number` \| `string`

#### Defined in

[prompt.ts:13](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L13)

___

### Answers

Ƭ **Answers**: `Record`<`string`, `string`\>

#### Defined in

[prompt.ts:163](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L163)

___

### ChoiceOption

Ƭ **ChoiceOption**: [`ChoiceDefinition`](interfaces/ChoiceDefinition.md) \| `string`

#### Defined in

[prompt.ts:180](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L180)

___

### ChoiceRecords

Ƭ **ChoiceRecords**: `Record`<`string`, [`ChoiceOption`](modules.md#choiceoption)\>

#### Defined in

[prompt.ts:166](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L166)

___

### PromptType

Ƭ **PromptType**: ``"autocomplete"`` \| ``"autocompleteMultiselect"`` \| ``"confirm"`` \| ``"date"`` \| ``"invisible"`` \| ``"list"`` \| ``"multiselect"`` \| ``"number"`` \| ``"password"`` \| ``"select"`` \| ``"text"`` \| ``"toggle"``

#### Defined in

[prompt.ts:10](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L10)

___

### PromptsMethod

Ƭ **PromptsMethod**: (`prev`: `string`, `answers`: [`Answers`](modules.md#answers), `previousQuestion`: [`Question`](modules.md#question)) => `Promise`<`string`\> \| `string`

#### Type declaration

▸ (`prev`, `answers`, `previousQuestion`): `Promise`<`string`\> \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `prev` | `string` |
| `answers` | [`Answers`](modules.md#answers) |
| `previousQuestion` | [`Question`](modules.md#question) |

##### Returns

`Promise`<`string`\> \| `string`

#### Defined in

[prompt.ts:7](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L7)

___

### Question

Ƭ **Question**: [`AutoCompleteMultiSelectQuestion`](interfaces/AutoCompleteMultiSelectQuestion.md) \| [`AutoCompleteQuestion`](interfaces/AutoCompleteQuestion.md) \| [`ConfirmQuestion`](interfaces/ConfirmQuestion.md) \| [`DateQuestion`](interfaces/DateQuestion.md) \| [`InvisibleQuestion`](interfaces/InvisibleQuestion.md) \| [`ListQuestion`](interfaces/ListQuestion.md) \| [`MultiSelectQuestion`](interfaces/MultiSelectQuestion.md) \| [`NumberQuestion`](interfaces/NumberQuestion.md) \| [`PasswordQuestion`](interfaces/PasswordQuestion.md) \| [`SelectQuestion`](interfaces/SelectQuestion.md) \| [`TextQuestion`](interfaces/TextQuestion.md) \| [`ToggleQuestion`](interfaces/ToggleQuestion.md)

#### Defined in

[prompt.ts:140](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L140)

___

### QuestionRecords

Ƭ **QuestionRecords**: `Record`<`string`, [`Question`](modules.md#question)\>

#### Defined in

[prompt.ts:16](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L16)

___

## Spinner Type Aliases

### SpinnerOptions

Ƭ **SpinnerOptions**: `Partial`<[`SpinnerConfig`](interfaces/SpinnerConfig.md)\>

#### Defined in

[spinner.ts:17](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/spinner.ts#L17)

## Environment Variables

### app\_data\_dir

• `Const` **app\_data\_dir**: `string`

#### Defined in

[environment.ts:22](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L22)

___

### bashrc\_path

• `Const` **bashrc\_path**: `string`

#### Defined in

[environment.ts:34](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L34)

___

### home\_dir

• `Const` **home\_dir**: `string`

#### Defined in

[environment.ts:13](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L13)

___

### is\_wsl

• `Const` **is\_wsl**: `boolean` = `isWsl`

#### Defined in

[environment.ts:10](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L10)

___

### platform

• `Const` **platform**: `string`

#### Defined in

[environment.ts:7](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L7)

___

### temp\_dir

• `Const` **temp\_dir**: `string`

#### Defined in

[environment.ts:16](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L16)

___

### user\_config\_dir

• `Const` **user\_config\_dir**: `string`

#### Defined in

[environment.ts:25](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L25)

___

### user\_data\_dir

• `Const` **user\_data\_dir**: `string` = `app_data_dir`

#### Defined in

[environment.ts:28](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L28)

___

### verbose

• `Const` **verbose**: `number`

#### Defined in

[environment.ts:31](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L31)

___

## Other Variables

### default\_progress\_options

• `Const` **default\_progress\_options**: [`ProgressConfig`](interfaces/ProgressConfig.md)

#### Defined in

[progress.ts:45](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L45)

## Before Exit Functions

### beforeExit

▸ **beforeExit**(`callback`): `void`

Add a function to be called before the process exits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[before-exit.ts:17](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/before-exit.ts#L17)

___

## Buffer Functions

### bufferStream

▸ **bufferStream**(`readable`): `Promise`<`Buffer`\>

Make a buffer from a file stream

#### Parameters

| Name | Type |
| :------ | :------ |
| `readable` | `Readable` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[buffer.ts:14](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/buffer.ts#L14)

___

### makeBuffer

▸ **makeBuffer**(`content`): `Buffer`

Make a buffer from a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`Buffer`

#### Defined in

[buffer.ts:8](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/buffer.ts#L8)

___

## Environment Functions

### interpolateEnv

▸ **interpolateEnv**(`str`, `defaultValues?`): `string`

interpolate string with env variables, optionally pass an object of default values

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `defaultValues` | `Record`<`string`, `string`\> |

#### Returns

`string`

#### Defined in

[environment.ts:52](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L52)

___

### isBundledElectronApp

▸ **isBundledElectronApp**(): `boolean`

Check if the current process is a bundled Electron app.

#### Returns

`boolean`

#### Defined in

[environment.ts:46](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L46)

___

### isElectronApp

▸ **isElectronApp**(): `boolean`

Check if the current process is a Electron app

#### Returns

`boolean`

#### Defined in

[environment.ts:40](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/environment.ts#L40)

___

## Files Functions

### fileExists

▸ **fileExists**(`filepath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`boolean`

#### Defined in

[files.ts:19](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L19)

___

### findUp

▸ **findUp**(`name`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `PathLike` |
| `options?` | `string` \| `boolean` \| `Partial`<[`FindUpOptions`](interfaces/FindUpOptions.md)\> |

#### Returns

`any`

#### Defined in

[files.ts:87](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L87)

___

### getFile

▸ **getFile**(`filepath`, `fallback?`): `any`

Get file content

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

#### Defined in

[files.ts:39](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L39)

___

### getFileJSON

▸ **getFileJSON**(`filepath`, `fallback?`): `any`

Get JSON from file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

#### Defined in

[files.ts:67](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L67)

___

### getFileJson

▸ **getFileJson**(`filepath`, `fallback?`): `any`

Get JSON from file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

#### Defined in

[files.ts:67](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L67)

___

### isDirectory

▸ **isDirectory**(`filepath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`boolean`

#### Defined in

[files.ts:22](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L22)

___

### mkdir

▸ **mkdir**(`dir_path`, `recursive?`): `void`

Make a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dir_path` | `PathLike` | `undefined` |
| `recursive` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[files.ts:48](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L48)

___

### saveFile

▸ **saveFile**(`filepath`, `content`, `options?`): `void`

Save file to disk

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `string` \| `ArrayBufferView` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

#### Defined in

[files.ts:28](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L28)

___

### saveFileJSON

▸ **saveFileJSON**(`filepath`, `content`, `options?`): `void`

Save file to disk as JSON

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `any` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

#### Defined in

[files.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L9)

___

### saveFileJson

▸ **saveFileJson**(`filepath`, `content`, `options?`): `void`

Save file to disk as JSON

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `any` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

#### Defined in

[files.ts:9](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L9)

___

### unlink

▸ **unlink**(`filepath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`void`

#### Defined in

[files.ts:56](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/files.ts#L56)

___

## Imports Functions

### isImport

▸ **isImport**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[imports.ts:4](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L4)

___

### isImportDefinition

▸ **isImportDefinition**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

#### Defined in

[imports.ts:7](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L7)

___

### parseImports

▸ **parseImports**<`I`\>(`imports`, `parent?`): [`ParsedImportRecords`](modules.md#parsedimportrecords)<`I`\>

Parse imports from `import * as name from 'path'` statements into a more manageable format.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](modules.md#importmethod)<`any`, `any`\> = [`ImportMethod`](modules.md#importmethod)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `imports` | `any` |
| `parent?` | `string` |

#### Returns

[`ParsedImportRecords`](modules.md#parsedimportrecords)<`I`\>

#### Defined in

[imports.ts:55](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/imports.ts#L55)

___

## Other Functions

### makeProgressConfig

▸ **makeProgressConfig**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[progress.ts:73](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L73)

___

### makeProgressFormat

▸ **makeProgressFormat**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[progress.ts:57](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L57)

___

## Progress Functions

### multiprogress

▸ **multiprogress**(`options?`): [`MultiProgress`](classes/MultiProgress.md)

Multi-Progress bar. Uses cli-progress to create multiple progress bars.

**`See`**

https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\> |

#### Returns

[`MultiProgress`](classes/MultiProgress.md)

#### Defined in

[multi-progress.ts:16](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/multi-progress.ts#L16)

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

#### Defined in

[progress.ts:86](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/progress.ts#L86)

___

## Prompts Functions

### ask

▸ **ask**(`question`, `defaultAnswer?`): `Promise`<`any`\>

Prompt the user for input using Prompts.

**`See`**

https://github.com/terkelg/prompts

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `defaultAnswer?` | `string` \| `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

[prompt.ts:235](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L235)

▸ **ask**(`question`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options?` | `Partial`<[`Question`](modules.md#question)\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[prompt.ts:236](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L236)

___

### confirm

▸ **confirm**(`question`, `defaultAnswer?`): `Promise`<`boolean`\>

Prompt the user for confirmation using Prompts.

**`See`**

https://github.com/terkelg/prompts

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `defaultAnswer?` | `boolean` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[prompt.ts:223](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L223)

▸ **confirm**(`question`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options?` | `Partial`<[`Question`](modules.md#question)\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[prompt.ts:224](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L224)

___

### prompt

▸ **prompt**(`questions`): `Promise`<[`Answers`](modules.md#answers)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `questions` | [`QuestionRecords`](modules.md#questionrecords) \| [`Question`](modules.md#question)[] |

#### Returns

`Promise`<[`Answers`](modules.md#answers)\>

#### Defined in

[prompt.ts:205](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/prompt.ts#L205)

___

## Spinner Functions

### spinner

▸ **spinner**(`options?`): [`Spinner`](classes/Spinner.md)

Spinner. Uses nanospinner to show spinners in the terminal.

**`See`**

https://github.com/usmanyunusov/nanospinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](classes/Spinner.md)

#### Defined in

[spinner.ts:32](https://github.com/snickbit/snickbit.js/blob/3fd09b6/packages/node-utilities/src/spinner.ts#L32)
