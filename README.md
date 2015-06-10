# app-paths

It helps to get the path relative to the root of the node app.

```js
var basePaths = require('app-paths')();

console.log(basePaths.pathTo('lib')); // APP_PATH/lib
```

# methods

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

## pathTo(dir)

It returns the path to the directory (dir) passed as a parameter relative to the node application.

## base()

It returns the path to the application root path.

## lib()

It returns the path to the lib path.

## config()

It returns the path to the config path.

Example:
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

# install

With [npm](http://npmjs.org) do:

```
npm install app-paths --save
```
# license

MIT
