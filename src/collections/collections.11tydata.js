"use strict";

module.exports = {
    eleventyComputed: {
        eleventyNavigation: data => {
            if (!data.eleventyNavigation) {
                return false;
            }

            return {
                key: data.title,
                ...(data.date ? {date: data.date} : {}),
                ...(data.excerpt ? {excerpt: data.excerpt} : {}),
                ...data.eleventyNavigation
            };
        }
    }
};
