"use strict";

module.exports = {
    permalink: false,
    eleventyComputed: {
        eleventyNavigation: {
            key: data => data.title,
            parent: "Projects"
        }
    }
};
