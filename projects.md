---
title: "Projects"
layout: single
permalink: /projects/
---

{% for p in site.projects %}
### [{{ p.title }}]({{ p.url }})
{{ p.excerpt }}

{% endfor %}
