"use strict";

module.exports = {
    layout: "layouts/project",
    eleventyComputed: {
        permalink: (data) => (data.linking.type !== "link") ? `/projects/${data.linking.slug}/` : false,
        eleventyNavigation: {
            key: (data) => data.linking.slug || data.uuid,
            title: (data) => data.title,
            parent: "Projects"
        }
    }
};
