---
layout: default
title: Chapters
permalink: /chapters/
---

{% comment %}
TRIAD ARCHITECTURE LOGIC:
The Chapter, Scene, and Plate all use image_id as the primary key 
to pull metadata from site.data.plates (The Technical Ledger).
{% endcomment %}

<div class="container my-5">
  {% assign chapters = site.chapters | sort: 'chapter_number' %}
  {% for chapter in chapters %}
    {% comment %}
    1. CHAPTER LEVEL LOOKUP:
    We find the CSV row that matches the Chapter's own image_id.
    {% endcomment %}
    {% assign chapter_ledger = site.data.plates | where: "image_id", chapter.image_id | first %}
    <section class="chapter-group mb-5">
      <a href="{{ chapter.url | relative_url }}" class="text-decoration-none link-body-emphasis">    
        <div class="chapter-header-block mb-4 mt-5">
          <div class="row g-0 rounded shadow-sm overflow-hidden border border-secondary-subtle bg-body-tertiary">
            <div class="col-md-5 col-lg-4">
              <div class="header-map-wrapper h-100">
                {% comment %}
                Now pulling the chapter's cover image from the CSV Ledger.
                {% endcomment %}
                {% if chapter_ledger.image_path %}
                  <img src="{{ chapter_ledger.image_path | relative_url }}" class="img-fluid h-100 w-100"
                    style="object-fit: cover; min-height: 250px;" alt="{{ chapter.title }}">
                {% else %}
                  <div class="bg-body-secondary h-100 d-flex align-items-center justify-content-center text-secondary">
                    No Chapter Image
                  </div>
                {% endif %}
              </div>
            </div>
            <div class="col-md-7 col-lg-8 p-4 d-flex flex-column justify-content-center">
              <div class="chapter-meta mb-2">
                <span class="badge border border-secondary-subtle text-uppercase small fw-light text-secondary" style="letter-spacing: 1px;">
                  Part {{ chapter.part_number }}
                </span>
                <span class="badge border border-secondary-subtle text-uppercase small fw-light ms-2 text-secondary" style="letter-spacing: 1px;">
                  Chapter {{ chapter.chapter_number }}
                </span>
              </div>
              <h3 class="serif-font display-6 mb-3">
                {{ chapter.title }}
              </h3>
              <div class="chapter-excerpt small-serif text-secondary" style="font-size: 1.1rem; line-height: 1.5;">
                {{ chapter.content | strip_html | truncatewords: 50 }}
              </div>
            </div>
          </div>
        </div>
      </a>
      <div class="row g-4 mb-5">
        {% assign current_scenes = site.scenes | where: "chapter_number", chapter.chapter_number | sort: "scene_number" %}
        {% for scene in current_scenes %}
          {% comment %}
          2. SCENE LEVEL LOOKUP:
          We find the CSV row that matches the individual Scene's image_id.
          {% endcomment %}
          {% assign d = site.data.plates | where: "image_id", scene.image_id | first %}
          <div class="col-md-4 col-lg-3">
            <div class="card h-100 border-0 shadow-sm bg-body-secondary overflow-hidden">
              <div class="position-relative">
                {% if d.image_path %}
                  <img src="{{ d.image_path | relative_url }}" class="card-img-top" alt="{{ scene.title }}"
                    style="aspect-ratio: 4/3; object-fit: cover;">
                {% else %}
                  <div class="bg-body-tertiary d-flex align-items-center justify-content-center text-secondary" style="aspect-ratio: 4/3;">
                    Image In Progress
                  </div>
                {% endif %}
                <span class="badge position-absolute top-0 end-0 m-2 bg-dark text-white opacity-75 fw-normal">
                  {{ d.image_title }}
                </span>
              </div>
              <div class="card-body p-3">
                <p class="text-uppercase mb-1" style="font-size: 0.7rem; letter-spacing: 0.1rem; color: #8a7345;">
                  Scene {{ scene.scene_number }}
                </p>
                <h6 class="card-title mb-2 serif-font" style="font-size: 1.1rem; line-height: 1.2;">
                  <a href="{{ scene.url | relative_url }}" class="stretched-link text-decoration-none link-body-emphasis">
                    {{ d.image_title }}
                  </a>
                </h6>
                <p class="small text-secondary mb-3" style="font-size: 0.85rem; line-height: 1.4;">
                  {{ scene.content | strip_html | truncatewords: 15 }}
                </p>
                <hr class="my-2 opacity-10">
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <h6 class="text-uppercase small ls-1 text-muted mb-0">Location Data</h6>
                  <p class="mb-0 font-monospace small">{{ d.latitude }}, {{ d.longitude }}</p>
                </div>
                <div class="text-end">
                  <h6 class="text-uppercase small ls-1 text-muted mb-0">Elevation</h6>
                  <p class="mb-0 small">{{ d.elevation | default: '---' }} masl</p>
                </div>
              </div>
            </div>
                <div class="d-flex justify-content-between align-items-center mt-2 small text-secondary">
                  <span class="text-truncate">
                     {{ d.place_region }} - {{ d.place_city }}
                     <p>Add location data</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
      <hr class="my-5 opacity-25">
    </section>
  {% endfor %}
</div>