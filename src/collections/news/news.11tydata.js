"use strict";

module.exports = {
    eleventyComputed: {
        eleventyNavigation: {
            key: data => data.title,
            parent: "News"
        }
    }
};
