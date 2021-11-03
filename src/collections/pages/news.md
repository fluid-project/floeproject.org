---
layout: layouts/posts_paged
title: News
eleventyNavigation:
    key: News
    order: 1
pagination:
  data: collections.news
  size: 5
  alias: posts
permalink: "/{{ title | slug }}/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1}}/{% endif %}"
---
