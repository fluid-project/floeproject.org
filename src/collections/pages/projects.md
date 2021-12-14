---
layout: layouts/projects
title: Projects
eleventyNavigation:
    key: Projects
    order: 3
pagination:
  data: collections.projects
  size: 6
  alias: posts
permalink: "/{{ title | slug }}/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1}}/{% endif %}"
---
