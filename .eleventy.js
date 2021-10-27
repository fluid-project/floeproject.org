/*
 Copyright the FLOE Project copyright holders.

 See the AUTHORS.md file at the top-level directory of this distribution and at
 https://github.com/fluid-project/floeproject.org/raw/main/AUTHORS.md.

 Licensed under the New BSD license. You may not use this file except in compliance with this License.

 You may obtain a copy of the New BSD License at
 https://github.com/fluid-project/floeproject.org/raw/main/LICENSE.md.
*/

"use strict";

const fs = require("fs");

const fluidPlugin = require("eleventy-plugin-fluid");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Import filters
const dateFilter = require("./src/filters/date-filter.js");
const limitFilter = require("./src/filters/limit-filter.js");
const markdownFilter = require("./src/filters/markdown-filter.js");

// Import transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const parseTransform = require("./src/transforms/parse-transform.js");

module.exports = function (config) {
    // Collections
    config.addCollection("news", collection => {
        return [
            ...collection.getFilteredByGlob("src/news/*.md").sort((a, b) => b.data.date - a.data.date)
        ].reverse();
    });

    // Filters
    config.addFilter("dateFilter", dateFilter);
    config.addFilter("limit", limitFilter);
    config.addFilter("markdownFilter", markdownFilter);

    // Transforms
    config.addTransform("htmlmin", htmlMinTransform);
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy({"src/assets/images": "assets/images"});
    config.addPassthroughCopy({"src/assets/stylesheets": "assets/stylesheets"}); // TODO: remove after updateing CSS
    config.addPassthroughCopy({"src/news/images": "news/images"});

    // Plugins
    config.addPlugin(fluidPlugin);
    config.addPlugin(rssPlugin);
    config.addPlugin(syntaxHighlight);

    // 404
    config.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware("*", (req, res) => {
                    const content_404 = fs.readFileSync("dist/404.html");
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.writeHead(404);
                    res.end();
                });
            }
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        },
        htmlTemplateEngine: "njk", // remove if all the templates are .njk files
        passthroughFileCopy: true
    };
};
