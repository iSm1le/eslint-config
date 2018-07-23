# Eslint Config

>This config used in my projects to achieve same style along my JavaScript projects  
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

[![NPM version](https://img.shields.io/npm/v/eslint-config-alpha.svg?maxAge=3600)](https://www.npmjs.com/package/eslint-config-alpha)
[![Travis Ci build status](https://api.travis-ci.org/iSm1le/eslint-config-alpha.svg?branch=master&maxAge=3600)](https://travis-ci.org/iSm1le/eslint-config-alpha)
[![Dependencies](https://david-dm.org/iSm1le/eslint-config-alpha/status.svg?maxAge=3600)](https://david-dm.org/iSm1le/eslint-config-alpha)

[![NPM info](https://nodei.co/npm/eslint-config-alpha.png?downloads=true&stars=true)](https://nodei.co/npm/eslint-config-alpha/)

## Install

```bash
yarn add -D eslint-config-alpha
OR
npm install --save-dev eslint-config-alpha
```

## Usage

Add the ESLint config to your `package.json`:

```json
{
  "name": "my-project",
  ...
  "eslintConfig": {
    "extends": "alpha"
  }
}
```

Or to `eslintrc.js` or `eslintrc.json`:

```json
{
  "extends": "alpha"
}
```

## Targets

If you are developing with JavaScript consider adding:

```json
{
  "extends": "alpha",
  "env": {
    "browser": true
  }
}
```

or use the platform specific configs for Node.js:

```json
{
  "extends": "alpha/src/node"
}
```

or Vue.js:

```json
{
  "extends": "alpha/src/vue"
}
```

Using the vue extended config will require you to additionally install `eslint-plugin-vue` and `babel-eslint`

```bash
yarn add -D babel-eslint eslint-plugin-vue
OR
npm install --save-dev babel-eslint eslint-plugin-vue
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

Original Author iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)

Changed for personal use by iSm1le.

> GitHub [@iSm1le](https://github.com/iSm1le) · Twitter [@sm1leua](https://twitter.com/sm1leua)
