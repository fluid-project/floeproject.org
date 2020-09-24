---
layout: layouts/newsindex
permalink: news/index.html
---
<div id="content" class="floe-content">
<div class="flc-toc-tocContainer toc"> </div>
<div class="floe-news-archive">
<h2> News </h2>
<ul >
{% for post in collections.news %}
<li><a href="{{ post.url }}"><p> {{ post.data.title }}</p></a>
<time class="floe-date" datetime="{{ post.data.date }}">{{ post.data.date | dateFilter }}</time>
</li>
{% endfor %}
</ul>
</div>
</div>
