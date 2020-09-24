/*
 Copyright the FLOE Project copyright holders.

 See the AUTHORS.md file at the top-level directory of this distribution and at
 https://github.com/fluid-project/floeproject.org/raw/master/AUTHORS.md.

 Licensed under the New BSD license. You may not use this file except in compliance with this License.

 You may obtain a copy of the New BSD License at
 https://github.com/fluid-project/floeproject.org/raw/master/LICENSE.md.
*/

/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        lintAll: {
            sources: {
                json: ["package.json", ".eslintrc.json","./src/_data/*.json"],
                js: ["./src/assets/js/analytics.js","./src/transforms/*.js","./src/filters/*.js","./src/assets/js/floe.js","./src/assets/js/url.js","./src/assets/js/resources.js","./src/filters/*.js","./src/utils/*.js",".eleventy.js","Gruntfile.js"],
                md: ["./src/news/*.md","README.md","CONTRIBUTING.md","AUTHORS.md","./src/newsindex.md"]
            }
        },
        clean: {
            infusion: "src/lib/infusion",
            node_modules: "node_modules",
            dist: "dist"
        }
    });
    // Load the plugin(s):
    grunt.loadNpmTasks("gpii-grunt-lint-all");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    // Custom tasks:
    grunt.registerTask("default", ["clean"]);
    grunt.registerTask("lint", "Perform all standard lint checks.", ["lint-all"]);
};
