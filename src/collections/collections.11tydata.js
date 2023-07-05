"use strict";

module.exports = {
    eleventyComputed: {
        eleventyNavigation: {
            key: data => data.eleventyNavigation.key === false ? false : data.title,
            order: data => data.eleventyNavigation.order,
            parent: data => data.eleventyNavigation.parent
        }
    }
};
