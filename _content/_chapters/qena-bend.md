---
layout: chapter
image_id: s01-map-qena-bend

chapter_title: "Trav'lin the Thebes-Farshût Road"

part_number: 1
chapter_number: 1
scenes: "1-6"

intro: > 
  Although J was the last letter added to the English alphabet, this digital anthology begins more than 3,800 years ago on a trade route across the Qena Bend of the River Nile.

  During the Middle Kingdom, Egypt was experiencing its second golden age, a period of sustained peace and prosperity, significant cultural achievements in art and literature, and massive expansion of commerce  and foreign trade.

  The river Nile, although often considered the best transportation route between central Africa and the Mediterranean world, may not always have been the ideal artery of travel {% cite darnellNarrowDoorsDesert2002 %}.

---

{% comment %}
1. INDEX EVERYTHING BY IMAGE_ID: All satellite files.
{% endcomment %}

{% assign man_map = site.data.manifest | group_by: "image_id" %}
{% assign loc_map = site.data.location | group_by: "image_id" %}
{% assign attr_map = site.data.attribution | group_by: "image_id" %}
{% assign plate_map = site.plates | group_by: "image_id" %}
{% assign ref_map = site.data.zotero.references | group_by: "id" %}

{% comment %}
2. LOOKUP DATA FOR THIS SPECIFIC CHAPTER
{% endcomment %}

{% assign target_id = page.image_id | append: "" | strip %}

{% assign man = man_map | where: "name", target_id | map: "items" | first | first %}
{% assign loc = loc_map | where: "name", target_id | map: "items" | first | first %}
{% assign plate = plate_map | where: "name", target_id | map: "items" | first | first %}

<!-- In Progress: Add inline citations with Zotero. Test code snippet from scenes that displays citation in sidebar. Keep writing the narrative. -->

{% include chapter-image.html id="s01-map-qena-bend" side="end" %}

Although J was the last letter added to the English alphabet, this digital anthology begins more than 3,800 years ago on a trade route across the Qena Bend of the River Nile.
  
During the Middle Kingdom, Egypt was experiencing its second golden age, a period of sustained peace and prosperity, significant cultural achievements in art and literature, and massive expansion of commerce  and foreign trade.

The river Nile, although often considered the best transportation route between central Africa and the Mediterranean world, may not always have been the ideal artery of travel {% cite darnellNarrowDoorsDesert2002 %}.

Some stretches of the river were difficult to navigate such as the natural hazards during the seasonal inundation from the sea that obscured the channel of the river, and when the water fell back, the prevalence of exposed sandbanks made travel equally challenging. 

One treacherous area was the northern part of the Qena Bend, a sharp bend in the nile resulting from geomorphic activity pushing up the land and forming the Western Desert also known as the Theban Plateau. 

{% include chapter-image.html id="s01e02-giving-thanks-offerings" side="start" %}


Across this plateau, a network of overland caravan routes criss-crossed Egypt's Western Desert. 

The Caravan Tracks

The Western Desert is a stark, dry, and inhospitable realm of rocky plateaus and chains of dunes.

The Thebes-Farshût road was a crucial desert connector facilitating the transport of essential resources that flowed into and out of the southern city of Thebes. 

<div class="clearfix"></div> 
