"use strict";

module.exports = {
    eleventyComputed: {
        layout: "layouts/post",
        eleventyNavigation: data => {
            return {
                key: data.title,
                ...(data.date ? {date: data.date} : {}),
                ...data.eleventyNavigation
            };
        }
    }
};
