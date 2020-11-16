---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - post
    - posts
    - tagList
  addAllPagesToCollections: true
layout: tags.liquid
eleventyComputed:
  title: Tagged “{{ tag }}”
permalink: /tags/{{ tag }}/
---