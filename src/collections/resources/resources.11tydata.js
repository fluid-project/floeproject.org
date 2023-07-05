"use strict";

module.exports = {
    layout: "layouts/post",
    permalink: false,
    eleventyComputed: {
        eleventyNavigation: {
            key: data => data.title,
            parent: "Resources"
        }
    }
};
