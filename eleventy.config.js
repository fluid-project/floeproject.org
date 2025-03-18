/*
 Copyright the FLOE Project copyright holders.

 See the AUTHORS.md file at the top-level directory of this distribution and at
 https://github.com/fluid-project/floeproject.org/raw/main/AUTHORS.md.

 Licensed under the New BSD license. You may not use this file except in compliance with this License.

 You may obtain a copy of the New BSD License at
 https://github.com/fluid-project/floeproject.org/raw/main/LICENSE.md.
*/

"use strict";

const pkg = require("./package.json");
const fluidPlugin = require("eleventy-plugin-fluid");
const navigationPlugin = require("@11ty/eleventy-navigation");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyImg = require("@11ty/eleventy-img");
const fs = require("node:fs");
const {parseHTML} = require("linkedom");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");

// Import filters
const dateFilter = require("./src/filters/date-filter.js");

// Import transforms
const parseTransform = require("./src/transforms/parse-transform.js");

module.exports = function (config) {
    // Collections
    config.addCollection("news", (collection) =>
        collection.getFilteredByGlob("src/collections/news/*.md").reverse()
    );
    config.addCollection("resources", (collection) =>
        collection.getFilteredByGlob("src/collections/resources/*.md")
    );
    config.addCollection("projectSubpages", (collection) =>
        collection.getFilteredByGlob("src/collections/project-subpages/*.md")
    );
    config.addCollection("projects", (collection) =>
        collection
            .getFilteredByGlob("src/collections/projects/*.md")
            .map((project) => {
                // This function computes an overall sort ranking based on the "order" value as well as certain tags
                project.data.sortOrder = 0;

                const IS_ACTIVE = 10000;
                const NO_DATA = 1000000;

                if (
                    project.data.order &&
                    typeof project.data.order === "number"
                ) {
                    // Featured Projects
                    project.data.sortOrder += project.data.order;
                } else if (
                    project.data.tags?.includes("active")
                ) {
                    // Non-featured active projects
                    project.data.sortOrder += IS_ACTIVE;
                } else {
                    // Other projects
                    project.data.sortOrder = NO_DATA;
                }

                return project;
            })
            .sort((first, second) => {
                return first.data.sortOrder - second.data.sortOrder;
            })
    );

    // Filters
    config.addFilter("dateFilter", dateFilter);
    config.addFilter("dateString", (date) => {
        if (typeof date === "string") {
            return date;
        }
        const dateObject = new Date(date);
        return dateObject.toISOString().split("T")[0];
    });

    // Shortcodes
    config.addShortcode(
        "svg_sprite",
        function (sprite, altText, ariaHidden = true) {
            const altTextMarkup = altText ? `<title>${altText}</title>` : "";
            const ariaHiddenMarkup = ariaHidden ? " aria-hidden=\"true\"" : "";
            return `<svg class="floe-${sprite}"${ariaHiddenMarkup}>${altTextMarkup}<use xlink:href="/assets/images/sprites.svg#${sprite}"></use></svg>`;
        }
    );
    config.addShortcode(
        "svgWithAttributes",
        function (image, altText = "", ariaHidden = true) {
            const fileContents = fs.readFileSync(image, "utf8");
            let {document} = parseHTML(fileContents);
            const svg = document.createElement("svg");
            const originalSvg = document.querySelector("svg");

            svg.setAttribute("xmlns", originalSvg.getAttribute("xmlns"));
            svg.setAttribute("height", originalSvg.getAttribute("height"));
            svg.setAttribute("width", originalSvg.getAttribute("width"));
            svg.setAttribute("viewBox", originalSvg.getAttribute("viewBox"));
            svg.setAttribute("fill", "none");
            if (altText !== "") {
                svg.innerHTML = `<title>${altText}</title>`;
            } else {
                if (ariaHidden) {
                    svg.setAttribute("aria-hidden", "true");
                }
            }

            const svgElements = [...originalSvg.querySelectorAll("> *")];

            for (const elem of svgElements) {
                svg.append(elem);
            }

            originalSvg.replaceWith(svg);

            return document.documentElement.outerHTML;
        }
    );
    config.addShortcode("small_caps", function (text, toReplace) {
        toReplace.split(",").forEach((substr) => {
            let regExp = new RegExp(substr.trim(), "g");
            text = text.replace(
                regExp,
                `<span class="small-caps">${substr}</span>`
            );
        });
        return text;
    });
    config.addShortcode("thumbnail", async function (src, alt) {
        let metadata = await eleventyImg(src, {
            widths: [500],
            formats: ["jpeg"],
            urlPath: "/assets/media/",
            outputDir: "./_site/assets/media/"
        });

        let imageAttributes = {
            alt,
            loading: "lazy",
            decoding: "async"
        };

        return eleventyImg.generateHTML(metadata, imageAttributes);
    });

    // Transforms
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });
    config.addPassthroughCopy({ "src/assets/media": "assets/media"
    });
    config.addPassthroughCopy({ "src/assets/images": "assets/images" });
    config.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" }); // TODO: remove after updating CSS
    config.addPlugin(fluidPlugin, {
        css: {
            browserslist: pkg.browserslist.join(", ")
        },
        i18n: false
    });
    config.addPlugin(navigationPlugin);
    config.addPlugin(rssPlugin);
    config.addPlugin(syntaxHighlight);
    config.addPlugin(brokenLinksPlugin, {
        forbidden: "warn",
        broken: "warn",
        cacheDuration: "60s",
        loggingLevel: 1,
        excludeUrls: [
            "https://blogs.lse.ac.uk/*"
        ]
    });

    return {
        dir: {
            input: "src"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk"
    };
};
