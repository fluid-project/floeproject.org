---
layout: layouts/posts_paged
title: News
eleventyNavigation:
    key: News
    order: 2
pagination:
  data: collections.news
  size: 6
  alias: posts
permalink: "/{{ title | slug }}/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1}}/{% endif %}"
---
