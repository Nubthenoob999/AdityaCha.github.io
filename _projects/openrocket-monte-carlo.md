---
title: "OpenRocket Monte Carlo"
excerpt: "A Monte Carlo simulation toolchain for exploring flight outcome dispersion under uncertainty."
tags:
  - OpenRocket
  - Simulation
  - Monte Carlo
  - Aerospace
header:
  overlay_image: /assets/images/projects/plugin-dev/MonteCarloLanding.png
  overlay_filter: "0.25"
  overlay_color: "#111827"
  caption: "OpenRocket Monte Carlo workflow snapshots"
teaser: /assets/images/projects/plugin-dev/MonteCarloLanding.png
classes: wide
---

## Overview

This project supports Monte Carlo style runs around an OpenRocket based flight model to study how uncertainty affects outcomes. Typical inputs include variability in mass properties, aerodynamic parameters, launch conditions, and wind profiles. Typical outputs include distributions of apogee and other flight metrics.

<figure class="portfolio-media-hero">
  <img src="{{ '/assets/images/projects/plugin-dev/MonteCarloLanding.png' | relative_url }}" alt="OpenRocket Monte Carlo workflow landing interface" />
  <figcaption>Placeholder caption: Add a one-sentence summary of what this top image shows in your workflow.</figcaption>
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

Resume details not provided yet  
- [ADD DETAIL]  
- [ADD DETAIL]  
- [ADD DETAIL]  

## Reflection Prompt

Use this short narrative to summarize your contribution and growth:

"In this project, I implemented [specific contribution] to address [technical challenge].
I learned how to [skill gained], and the final outcome [result/impact] improved my ability to [future-facing competency]."

## Technical Highlights

- Uncertainty modeling with configurable distributions and bounds  
- Batch execution across many trials  
- Output aggregation and post processing hooks  
- Reproducibility features such as fixed seeds and saved configs  

<figure class="portfolio-inline-media">
  <img src="{{ '/assets/images/projects/plugin-dev/disturbances.png' | relative_url }}" alt="Disturbance configuration view for Monte Carlo inputs" />
  <figcaption>Placeholder caption: Add what uncertainty inputs are visible here and why they matter.</figcaption>
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
      <img src="{{ '/assets/images/projects/plugin-dev/Options.png' | relative_url }}" alt="Monte Carlo options and parameter controls" />
      <figcaption>Placeholder caption: Add what simulation options you tuned for this run set.</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/plugin-dev/ORHistogramWithAirbrakes.png' | relative_url }}" alt="Histogram output from OpenRocket simulations" />
      <figcaption>Placeholder caption: Add what this distribution says about outcome spread.</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/plugin-dev/LandingPage.png' | relative_url }}" alt="Workflow landing page context" />
      <figcaption>Placeholder caption: Add where this sits in your end-to-end workflow.</figcaption>
    </figure>
  </div>
  <div class="portfolio-slideshow__controls">
    <button type="button" class="portfolio-slide-btn" data-action="prev" aria-label="Previous slide">Previous</button>
    <span class="portfolio-slide-counter" aria-live="polite">1 / 3</span>
    <button type="button" class="portfolio-slide-btn" data-action="next" aria-label="Next slide">Next</button>
  </div>
</div>

Placeholder text to edit later: [Add 2-4 sentences describing your Monte Carlo process, your specific contribution, and one key result.]

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
