---
title: "CFD Aerospike Proposal and Thermal Trade Study"
excerpt: "Mach 3 to Mach 5 aerospike CFD and heat-transfer analysis used to guide material and deployment design decisions."
tags:
  - CFD
  - Aerothermal
  - ANSYS Fluent
  - OpenRocket
  - SolidWorks
  - Aerospace
header:
  overlay_image: /assets/images/projects/BEFAST/AftSpike%20Streamline%20Mach%20Contour.png
  overlay_filter: "0.25"
  overlay_color: "#111827"
  caption: "BEFAST Lab research-derived CFD proposal artifact"
teaser: /assets/images/projects/BEFAST/AftSpike%20Streamline%20Mach%20Contour.png
classes: wide
---

## Overview

This project began as a proposal-support request for one comparison figure and expanded into a full aerospike thermal and performance trade study. The objective was to quantify whether aerospike integration could improve flight performance while remaining feasible under predicted thermal loads.

<figure class="portfolio-media-hero">
  <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20Streamline%20Mach%20Contour.png' | relative_url }}" alt="Aft-spike streamline Mach contour from ANSYS Fluent" />
  <figcaption></figcaption>
</figure>

Artifact classification  
- Category: Academic artifact (CFD proposal project)  
- Related HIE: [BEFAST Lab Research]({{ "/hie/befast-lab-research/" | relative_url }})

## Problem Statement

At high Mach conditions, aerodynamic gains from an aerospike can be offset by severe thermal loading and integration complexity. The project needed to answer three practical questions:

- What heat flux and heat-load levels are expected across candidate geometries?
- Which material choices are realistic for those thermal demands?
- Do external performance gains justify integration tradeoffs?

## Methods and Tools

- **CFD:** ANSYS Fluent simulations across Mach 3 to Mach 5 for multiple aerospike geometries
- **Thermal analysis:** local heat-flux and total heat-load evaluation across geometry variants
- **External performance checks:** OpenRocket modeling for drag and apogee trend impact
- **Mechanical integration concept:** SolidWorks design for a deployable nose-cone aerospike assembly

## Key Results

- Peak heat-flux values were on the order of roughly 3 to 5 MW depending on condition and geometry
- Material recommendation converged on hot-pressed silicon nitride for thermal resistance considerations
- OpenRocket trend results suggested about 3% to 5% drag reduction and near 10% apogee gain in modeled cases
- The final concept moved beyond simulation-only evidence by linking thermal results to a feasible deployment concept

## Engineering Trade Study Insight

The project framed aerospike adoption as a coupled thermal-structural-performance decision, not a pure drag optimization. Thermal survivability and added mass implications must be evaluated together with aerodynamic benefits to produce credible design recommendations.

## My Contribution

- Led simulation setup and thermal post-processing workflow
- Interpreted model outputs into actionable design implications
- Proposed material pathway aligned to heat-load conditions
- Connected CFD findings to system-level integration and performance discussion

## CFD Contour Slideshow

<div class="portfolio-slideshow" data-slideshow="befast-contours">
  <div class="portfolio-slideshow__viewport">
    <figure class="portfolio-slide is-active">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20Streamline%20Mach%20Contour.png' | relative_url }}" alt="Aft-spike streamline Mach contour" />
      <figcaption>Aft-spike streamline Mach contour</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/Aft%20Spike%20Temp%20Contour.png' | relative_url }}" alt="Aft-spike temperature contour" />
      <figcaption>Aft-spike temperature contour</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20-%20Density%20Contour.png' | relative_url }}" alt="Aft-spike density contour" />
      <figcaption>Aft-spike density contour</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20-%20ZoomedIn.png' | relative_url }}" alt="Aft-spike zoomed-in view" />
      <figcaption>Aft-spike zoomed-in view</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20Mesh.png' | relative_url }}" alt="Aft-spike mesh" />
      <figcaption>Aft-spike mesh</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20First%20Go.jpeg' | relative_url }}" alt="Aft-spike initial simulation result" />
      <figcaption>Aft-spike initial simulation result</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/CaseFilePic2.png' | relative_url }}" alt="Case file setup" />
      <figcaption>Case file setup</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/FowardSpike%20-%20AMR%20Density%20Contour.png' | relative_url }}" alt="Forward-spike AMR density contour" />
      <figcaption>Forward-spike AMR density contour</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/FowardSpike%20-%20Temperature%20contour.png' | relative_url }}" alt="Forward-spike temperature contour" />
      <figcaption>Forward-spike temperature contour</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/ForwardSpike%20-%20ZoomedIn.png' | relative_url }}" alt="Forward-spike zoomed-in view" />
      <figcaption>Forward-spike zoomed-in view</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/FowardSpike%20-Mesh.png' | relative_url }}" alt="Forward-spike mesh" />
      <figcaption>Forward-spike mesh</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/FowardSpike%20First.jpeg' | relative_url }}" alt="Forward-spike initial simulation result" />
      <figcaption>Forward-spike initial simulation result</figcaption>
    </figure>
  </div>
  <div class="portfolio-slideshow__controls">
    <button type="button" class="portfolio-slide-btn" data-action="prev" aria-label="Previous slide">Previous</button>
    <span class="portfolio-slide-counter" aria-live="polite">1 / 12</span>
    <button type="button" class="portfolio-slide-btn" data-action="next" aria-label="Next slide">Next</button>
  </div>
</div>

## CFD Graphs Slideshow

<div class="portfolio-slideshow" data-slideshow="befast-graphs">
  <div class="portfolio-slideshow__viewport">
    <figure class="portfolio-slide is-active">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20Heat%20Flux%20vs%20X%20corrd%20over%20spike.png' | relative_url }}" alt="Aft-spike heat flux vs X coordinate over spike" />
      <figcaption>Aft-spike heat flux vs X coordinate over spike</figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/BEFAST/AftSpike%20Heat%20Transfer%20Coef%20vs%20X%20corrdiate%20over%20spike.png' | relative_url }}" alt="Aft-spike heat transfer coefficient vs X coordinate over spike" />
      <figcaption>Aft-spike heat transfer coefficient vs X coordinate over spike</figcaption>
    </figure>
  </div>
  <div class="portfolio-slideshow__controls">
    <button type="button" class="portfolio-slide-btn" data-action="prev" aria-label="Previous slide">Previous</button>
    <span class="portfolio-slide-counter" aria-live="polite">1 / 2</span>
    <button type="button" class="portfolio-slide-btn" data-action="next" aria-label="Next slide">Next</button>
  </div>
</div>

## Reflective Caption

In this CFD proposal project, I evaluated aerospike geometries under Mach 3 to Mach 5 conditions to quantify both thermal risk and aerodynamic benefit. I translated simulation evidence into practical decisions about materials and deployable integration, rather than stopping at isolated contour plots. This artifact reflects growth in analytical rigor, system-level thinking, and engineering communication.

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
