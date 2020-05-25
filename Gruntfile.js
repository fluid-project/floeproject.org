/*
Copyright 2020 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.
*/

/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            all: ["**/*.js"]
        },
        jsonlint: {
            all: ["package.json", ".eslintrc.json"]
        },
        clean: {
            infusion: "src/lib/infusion"
        },
        copy: {
            // Copy external front end dependencies into appropriate directories
            frontEndDependencies: {
                files: [
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/dist/",
                        src: "infusion-all.js",
                        dest: "./src/lib/infusion"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/components/tableOfContents/css/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/components/tableOfContents/css/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/components/tableOfContents/html/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/components/tableOfContents/html/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/components/textfieldControl/css/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/components/textfieldControl/css/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/components/switch/css/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/components/switch/css/"
                    },
                    {
                        expand: true,
                        cwd: ".node_modules/infusion/",
                        src: "*.txt",
                        dest: "./src/lib/infusion"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/framework/preferences",
                        src: ["**/*", "!**/js/**"],
                        dest: "./src/lib/infusion/src/framework/preferences"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/framework/enhancement/css/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/framework/enhancement/css/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/framework/core/css/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/framework/core/css/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/framework/core/images/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/framework/core/images/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/jquery/ui/css/default-theme/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/lib/jquery/ui/css/default-theme/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/normalize/css/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/lib/normalize/css/"
                    },
                    
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/open-dyslexic/fonts/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/lib/open-dyslexic/fonts"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/opensans/fonts/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/lib/opensans/fonts/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/roboto/fonts/",
                        src: "**/*",
                        dest: "./src/lib/infusion/src/lib/roboto/fonts/"
                    }
                ]
            }
        }
    });

    // Load the plugin(s):
    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    // Custom tasks:
    grunt.registerTask("default", ["clean", "installFrontEnd"]);
    grunt.registerTask("installFrontEnd", "Install front-end dependencies from the node_modules directory after 'npm install'", ["copy:frontEndDependencies"]);
    grunt.registerTask("lint", ["eslint", "jsonlint"]);
};
