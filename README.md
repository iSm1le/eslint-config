# eslint-config-alpha

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/eslint-config-alpha"><img src="https://img.shields.io/npm/v/eslint-config-alpha.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://travis-ci.org/iSm1le/eslint-config-alpha"><img src="https://api.travis-ci.org/iSm1le/eslint-config-alpha.svg?branch=master&maxAge=3600" alt="Travis Ci build status" /></a>
		<a href="https://david-dm.org/iSm1le/eslint-config-alpha"><img src="https://david-dm.org/iSm1le/eslint-config-alpha/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
    <a href="https://nodei.co/npm/eslint-config-alpha/"><img src="https://nodei.co/npm/eslint-config-alpha.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Install

```bash
yarn add -D eslint-config-alpha@next
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

# Node development

If you are developing with node.js consider adding:

```json
{
	"extends": "alpha",
	"env": {
		"es6": true,
		"node": true
	}
}
```

or use the somewhat stricter setup (my own) with:

```json
{
	"extends": "alpha/src/node"
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

Original Author iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)<br>

Changed for personal use by iSm1le.

> GitHub [@iSm1le](https://github.com/iSm1le) · Twitter [@sm1leua](https://twitter.com/sm1leua)<br>

Authored and maintained by iSm1le.<br>
