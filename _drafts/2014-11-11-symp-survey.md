---
published: false
---

## ChemBio Hub 2014 Symposium - walk-up survey results

Talk about what a success the symposium was - multidisciplinary and cross department discussions all around the room - photo?
We set up a survey to attempt to capture interest in aspects of chemical biology research. The results were:
<ul>
{% for result in walkupsurvey %}

<li>{{ result.title }}

{% endfor %}
</ul>
each individual question with a horizontal bar graph overlaying the picture which was used as an illustration
Have each question result held in a config file, create a template for each one.

What do these results mean for ChemBio Hub? It's clear that **visualisation of assay results** is a key requirement of a great any chemical biology researchers