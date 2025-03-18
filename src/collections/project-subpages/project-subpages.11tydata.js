"use strict";

module.exports = {
    layout: "layouts/project-subpage",
    eleventyComputed: {
        /* Configure navigation */
        eleventyNavigation: {
            key: (data) => data.uuid,
            title: (data) => data.title,
            parent: (data) => data.parent,
            order: (data) => data.order,
            publisher: (data) => data.publisher,
            authors: (data) => data.authors,
            subject: (data) => data.subject,
            thumbnailImage: (data) => data.thumbnailImage,
            thumbnailAltText: (data) => data.thumbnailAltText
        },
        permalink: (data) => `/projects/${data.parent}/${data.slug}/`
    }
};
