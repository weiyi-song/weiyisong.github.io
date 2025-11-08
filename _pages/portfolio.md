---
layout: page
title: Portfolio
permalink: /portfolio/
description: Visual portfolio — moments and photos
nav: true
nav_order: 3
---

<!-- Portfolio: Life Moments Gallery -->
## ✨ Portfolio

<style>
  .life-moments .card-img-top {
    max-height: 300px;
    object-fit: cover;
    width: 100%;
  }
  .life-moments .card-body {
    padding: 0.75rem;
  }
  .life-moments .card-text {
    font-size: 0.9rem;
    margin-bottom: 0;
  }
</style>

<div class="row row-cols-1 row-cols-md-3 life-moments">
  <!-- Card 1 -->
  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="assets/img/life/1.jpg" class="card-img-top" alt="Life moment 1" %}
      <div class="card-body">
        <p class="card-text">Home is wherever I’m with them — Dali, Yunnan.</p>
      </div>
    </div>
  </div>
  
  <!-- Card 2 -->
  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="assets/img/life/2.jpg" class="card-img-top" alt="Life moment 2" %}
      <div class="card-body">
        <p class="card-text">Found geometry in Kunming.</p>
      </div>
    </div>
  </div>
  
  <!-- Card 3 -->
  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="assets/img/life/3.jpg" class="card-img-top" alt="Life moment 3" %}
      <div class="card-body">
        <p class="card-text">A small bubble, a big memory - California</p>
      </div>
    </div>
  </div>
  
  <!-- Card 4 -->
  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="assets/img/life/4.jpg" class="card-img-top" alt="Life moment 4" %}
      <div class="card-body">
        <p class="card-text">A joyful corner with my love - Weiyi</p>
      </div>
    </div>
  </div>
  
  <!-- Card 5 -->
  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="assets/img/life/5.jpg" class="card-img-top" alt="Life moment 5" %}
      <div class="card-body">
        <p class="card-text">The river whispering goodnight to Cincinnati.</p>
      </div>
    </div>
  </div>
  
  <!-- Card 6 -->
  <div class="col mb-4">
    <div class="card h-100 hoverable">
      {% include figure.liquid loading="eager" path="assets/img/life/6.jpg" class="card-img-top" alt="Life moment 6" %}
      <div class="card-body">
        <p class="card-text">Mount Rainier, twice!</p>
      </div>
    </div>
  </div>
</div>
