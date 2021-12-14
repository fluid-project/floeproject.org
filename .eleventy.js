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
const navigationPlugin = require("@11ty/eleventy-navigation");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Import filters
const dateFilter = require("./src/filters/date-filter.js");

// Import transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const parseTransform = require("./src/transforms/parse-transform.js");

module.exports = function (config) {
    // Collections
    config.addCollection("news", collection => collection.getFilteredByGlob("src/collections/news/*.md").reverse());
    config.addCollection("resources", collection => collection.getFilteredByGlob("src/collections/resources/*.md"));
    config.addCollection("projects", collection => collection.getFilteredByGlob("src/collections/projects/*.md").map(project => {
        // This function computes an overall sort ranking based on the "order" value as well as certain tags
        project.data.sortOrder = 0;

        const IS_ACTIVE = 10000;
        const NO_DATA = 1000000;

        if (project.data.order && typeof project.data.order === "number") { // Featured Projects
            project.data.sortOrder += project.data.order;
        } else if (project.data.tags && project.data.tags.includes("active")) { // Non-featured active projects
            project.data.sortOrder += IS_ACTIVE;
        } else { // Other projects
            project.data.sortOrder = NO_DATA;
        }

        return project;
    }).sort((first, second) => { return first.data.sortOrder - second.data.sortOrder; }));

    // Filters
    config.addFilter("dateFilter", dateFilter);

    // Shortcodes
    config.addShortcode("svg_sprite", function (sprite) {
        return `<svg class="floe-${sprite}" aria-hidden="true"><use xlink:href="/assets/images/sprites.svg#${sprite}"></use></svg>`;
    });
    config.addShortcode("small_caps", function (text, toReplace) {
        toReplace.split(",").forEach(substr => {
            let regExp = new RegExp(substr.trim(), "g");
            text = text.replace(regExp, `<span class="small-caps">${substr}</span>`);
        });
        return text;
    });

    // Transforms
    config.addTransform("htmlmin", htmlMinTransform);
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy({"src/_redirects": "_redirects"});
    config.addPassthroughCopy({"src/assets/images": "assets/images"});
    config.addPassthroughCopy({"src/assets/fonts": "assets/fonts"}); // TODO: remove after updateing CSS
    config.addPassthroughCopy({"src/collections/news/images": "news/images"});

    // Plugins
    config.addPlugin(fluidPlugin);
    config.addPlugin(navigationPlugin);
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
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk"
    };
};
