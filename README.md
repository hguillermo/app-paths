# TODO: Still on dev

# app-paths

It helps to get the path relative to the root of the node app.

```js
var basePaths = require('app-paths')();

console.log(basePaths.pathTo('lib')); // APP_PATH/lib
```

# Methods

To start using it require the module:

```js
var basePaths = require('app-paths')();

console.log(basePaths.base()); // APP_PATH/

```
Or you can pass some options:

```js
var options = {
    views: 'path/to/views',
    routes: 'path/to/routes'
}
var basePaths = require('app-paths')(options);

console.log(basePaths.pathTo('routes')); // APP_PATH/path/to/routes

```
## base()

It returns the path to the application root path.

## lib()

It returns the path to the lib path.

## config()

It returns the path to the config path.

## pathTo(dir)

It returns the path to the directory (dir) passed as a parameter relative to the node application.

Basic example:
```
app
  - lib
  - config
  - node_modules
  - index.js

var basePaths = require('app-paths')();
console.log(basePaths.base());           // /path/to/app/
console.log(basePaths.pathTo('lib'));    // /path/to/app/lib
console.log(basePaths.lib());            // /path/to/app/lib
console.log(basePaths.config());         // /path/to/app/config
console.log(basePaths.pathTo('a/b/c'));  // /path/to/app/a/b/c
```

Another example:

```
app
  - lib
  - config
  - node_modules
  - index.js

var myPaths = {
    views: 'path/to/my/views',
    routes: 'path/to/my/routes',
    assets: 'path/to/my/assets'
}
var basePaths = require('app-paths')(myPaths);

console.log(basePaths.base());           // /path/to/app/
console.log(basePaths.pathTo('lib'));    // /path/to/app/lib
console.log(basePaths.pathTo('a/b/c'));  // /path/to/app/a/b/c

console.log(basePaths.pathTo('views'));  // /path/to/app/path/to/my/views
console.log(basePaths.pathTo('routes')); // /path/to/app/path/to/my/routes
```

# Install

With [npm](http://npmjs.org) do:

```
npm install app-paths --save
```
# License

MIT
