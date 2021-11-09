"use strict";
const htmlmin = require("html-minifier");

module.exports = function htmlMinTransform(value, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
        return htmlmin.minify(value, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        });
    }
    return value;
};
