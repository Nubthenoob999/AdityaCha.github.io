---
title: "Projects"
layout: collection
permalink: /projects/
collection: projects
entries_layout: grid
classes: wide
---

{% for p in site.projects %}
### [{{ p.title }}]({{ p.url }})
{{ p.excerpt }}

{% endfor %}
