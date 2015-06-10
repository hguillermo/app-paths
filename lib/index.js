"use strict";

var path = require('path'),
    _ = require('lodash');

var defaults = {
    lib: 'lib',
    config: 'config'
};

module.exports = appPaths;

function appPaths(options) {
    // Options is a user parameter that contains paths to other directories.
    // Example:
    // options = {
    //     routes: 'path/to/routes',
    //     views: 'path/to/views'
    // }
    var dirs = _.merge(defaults, options),
        toRoot = '../../..';

    return {
        /**
         * Returns the node application absolute base path
         * @return {String} The path to the app
         */
        base: function lib() {
            return path.resolve(__dirname, toRoot);
        },

        /**
         * This will return the path to some specific directory relative to the
         * application path.
         * @param  {String} dir Directory we want to get the full path
         * @return {String}     The path to the dir app
         */
        pathTo: function pathTo(dir) {
            var fullpath = false;
            if (dirs && dirs[dir]) {
                fullpath = path.resolve(__dirname, toRoot, dirs[dir]);
            }

            if (!fullpath) {
                return new Error('The dir (' + dir + ') parameter is not defined in the user options');
            }

            return fullpath;
        },

        /**
         * Path to lib folder relative to the application path
         * @return {String} The path to the lib directory
         */
        lib: function lib() {
            var fullpath = false;
            if (dirs && dirs.lib) {
                fullpath = path.resolve(__dirname, toRoot, dirs.lib);
            }

            if (!fullpath) {
                return new Error('The lib path is not defined');
            }

            return fullpath;
        },

        /**
         * Path to config folder relative to the application path
         * @return {String} The path to the config directory
         */
        config: function config() {
            var fullpath = false;
            if (dirs && dirs.config) {
                fullpath = path.resolve(__dirname, toRoot, dirs.config);
            }

            if (!fullpath) {
                return new Error('The config path is not defined');
            }

            return fullpath;
        },

        /**
         * Returns the full path from the application root to the dir passed
         * as a parameter. It helps doing path.joins in the client code
         * @param  {String} dir Directory we want to get the full path
         * @return {String}     Full path to the dir from the app root
         */
        fromRoot: function(dir) {
            return this._(dir);
        },

        _: function (dir) {
            return path.join(this.base(), dir);
        }
    }
}
