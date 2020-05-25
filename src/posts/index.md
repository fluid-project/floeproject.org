---
layout: layouts/post
title: News | floe
permalink: posts/index.html
---
<div id="content" class="floe-content">
    <div class="flc-toc-tocContainer toc"> </div>
    <h2> News </h2>
    <div class="floe-news-archive">
        <ul>
            {%- for post in collections.post -%}
              <li> {{ post.data.permalink }} </li>
            {%- endfor -%}
        </ul>
    </div>
</div>
