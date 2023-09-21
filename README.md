# eslint-plugin-wix-detox

Modern replacement for eslint-plugin-detox with the new "web" global.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
OR
$ yarn add eslint --dev
```

Next, install `eslint-plugin-wix-detox`:

```
$ npm install eslint-plugin-wix-detox --save-dev
OR
$ yarn add eslint-plugin-wix-detox --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-wix-detox` globally.

## Usage

Add `detox` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["wix-detox"]
}
```

Add the following line to the top of your detox test files:

```
/* eslint-env wix-detox/detox, jest */
```
