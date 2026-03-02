---
title: "OpenRocket Monte Carlo"
excerpt: "A Monte Carlo simulation toolchain for exploring flight outcome dispersion under uncertainty."
tags:
  - OpenRocket
  - Simulation
  - Monte Carlo
  - Aerospace
header:
  overlay_image: /assets/images/projects/Plugin_Dev/MonteCarloLanding.png
  overlay_filter: "0.25"
  overlay_color: "#111827"
  caption: "OpenRocket Monte Carlo workflow snapshots"
teaser: /assets/images/projects/Plugin_Dev/MonteCarloLanding.png
classes: wide
---

## Overview

This project supports Monte Carlo style runs around an OpenRocket based flight model to study how uncertainty affects outcomes. Typical inputs include variability in mass properties, aerodynamic parameters, launch conditions, and wind profiles. Typical outputs include distributions of apogee and other flight metrics.

<figure class="portfolio-media-hero">
  <img src="/assets/images/projects/Plugin_Dev/MonteCarloLanding.png" alt="OpenRocket Monte Carlo workflow landing interface" />
  <figcaption></figcaption>
</figure>

Artifact classification  
- Category: Academic artifact  
- Skill themes: Technical and analytical growth, uncertainty quantification

Repo link  
- https://github.com/NCSU-High-Powered-Rocketry-Club/OpenRocket-Monte-Carlo

## Highlights

- Runs many randomized or swept simulations to estimate dispersion rather than a single nominal case  
- Organizes input uncertainty sources like wind, mass, launch angle, and model parameters  
- Produces structured outputs suitable for plots and reports  
- Supports repeatable experiments through configuration and seeded randomness  
- Enables comparisons across design options by keeping the workflow consistent  

## My Contribution
  
- Utlized base code from the University of Waterloo, and created a simulation wrapper around it  
- Added many more features to vary due to issues seen with my Club's past launches. THey range from varying wind speed, turbulance, and mass to Cd and simulting wind gusts.
- Overhauled the landing dispersion with a 6DOF model that is translated from Python 

## Reflection Prompt

In this Project I learned how to code with a vision in mind and carry out the ideas I wanted to explore. My club has had issues with the reliability of simulations from prior years so I took it upon myself to rectify these. I took some exsisting, trusted code base and modified it to fit our clubs needs. Now it has proven its worth with this prior VDF launch where we were able to predict the apogee and landing location within a 2 sigma confidence.   

## Technical Highlights

- Uncertainty modeling with configurable distributions and bounds  
- Batch execution across many trials  
- Output aggregation and post processing hooks  
- Reproducibility features such as fixed seeds and saved configs  

<figure class="portfolio-inline-media">
  <img src="/assets/images/projects/Plugin_Dev/disturbances.png" alt="Disturbance configuration view for Monte Carlo inputs" />
  <figcaption></figcaption>
</figure>

## How to Run

Start here in the repository  
- Read the repo README  
- Install the required runtime listed there  
- Run a small trial count first to validate your environment  
- Increase trial count once outputs look correct

## Results and Outputs

Typical outputs for a rocketry Monte Carlo workflow include  
- Apogee distribution plots and summary statistics  
- Time series or event metrics per run such as burnout, deployment events, and max velocity  
- Sensitivity views such as correlation of apogee to input uncertainties  
- Exported CSV or JSON artifacts for report generation

## Monte Carlo Slideshow
<div class="portfolio-slideshow" data-slideshow="monte-carlo-gallery">
  <div class="portfolio-slideshow__viewport">
    <figure class="portfolio-slide is-active">
      <img src="{{ '/assets/images/projects/Plugin_Dev/LandingPage.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/LandingPage.png' | relative_url }}';" alt="Landing page" />
      <figcaption></figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/Plugin_Dev/disturbances.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/disturbances.png' | relative_url }}';" alt="Options" />
      <figcaption></figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/Plugin_Dev/MonteCarloLanding.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/MonteCarloLanding.png' | relative_url }}';" alt="Landing distribution" />
      <figcaption></figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/Plugin_Dev/Vdf_2026_landing.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/Vdf_2026_landing.png' | relative_url }}';" alt="Landing distribution" />
      <figcaption></figcaption>
    </figure>
  </div>
  <div class="portfolio-slideshow__controls">
    <button type="button" class="portfolio-slide-btn" data-action="prev" aria-label="Previous slide">Previous</button>
    <span class="portfolio-slide-counter" aria-live="polite">1 / 4</span>
    <button type="button" class="portfolio-slide-btn" data-action="next" aria-label="Next slide">Next</button>
  </div>
</div>

## Links

- Detailed repo documentation at https://github.com/NCSU-High-Powered-Rocketry-Club/OpenRocket-Monte-Carlo  
- Project list at [{{ "/projects/" | relative_url }}]({{ "/projects/" | relative_url }})

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const galleries = document.querySelectorAll(".portfolio-slideshow");
    galleries.forEach(function (gallery) {
      if (gallery.dataset.initialized === "true") return;
      gallery.dataset.initialized = "true";

      const slides = Array.from(gallery.querySelectorAll(".portfolio-slide"));
      const counter = gallery.querySelector(".portfolio-slide-counter");
      const prevBtn = gallery.querySelector('[data-action="prev"]');
      const nextBtn = gallery.querySelector('[data-action="next"]');

      let currentIndex = 0;

      function render(index) {
        slides.forEach(function (slide, idx) {
          slide.classList.toggle("is-active", idx === index);
        });
        if (counter) counter.textContent = (index + 1) + " / " + slides.length;
      }

      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          render(currentIndex);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          currentIndex = (currentIndex + 1) % slides.length;
          render(currentIndex);
        });
      }

      render(currentIndex);
    });
  });
</script>
