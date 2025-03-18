"use strict";

module.exports = {
    layout: "layouts/post",
    eleventyComputed: {
        permalink: function (data) {
            return `/news/${this.dateString(data.date)}-${data.slug ? data.slug : this.slugify(data.title)}/`;
        },

        eleventyNavigation: {
            key: data => data.title,
            parent: "News"
        }
    }
};
