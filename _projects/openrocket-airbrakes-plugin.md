---
title: "OpenRocket Airbrakes Plugin"
excerpt: "An OpenRocket plugin that introduces airbrake effects into simulation runs using configurable dynamics and aerodynamic data."
tags:
  - OpenRocket
  - Java
  - Plugins
  - Simulation
  - Aerospace
header:
  overlay_image: /assets/images/projects/Plugin_Dev/launch-vehicle-airbrakes-deployment.png
  overlay_filter: "0.25"
  overlay_color: "#111827"
  caption: "OpenRocket airbrakes plugin workflow snapshots"
teaser: /assets/images/projects/Plugin_Dev/launch-vehicle-airbrakes-deployment.png
classes: wide
---

## Overview

This project extends OpenRocket with airbrake related behavior so simulations can account for drag changes from deployed surfaces. Implementations typically integrate into the simulation loop and use parameterized models or tabulated aerodynamic data.

<figure class="portfolio-media-hero">
  <img src="{{ '/assets/images/projects/Plugin_Dev/launch-vehicle-airbrakes-deployment.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/Launch%20Vechile%20AirBrakes%20Deployment.png' | relative_url }}';" alt="Airbrakes deployment visualization in OpenRocket plugin workflow" />
  <figcaption></figcaption>
</figure>

Artifact classification  
- Category: Academic artifact  
- Skill themes: Software engineering, simulation fidelity, plugin architecture

Repo link  
- https://github.com/NCSU-High-Powered-Rocketry-Club/OpenRocket-Airbrakes-Plugin

## Highlights

- Adds an airbrake capable component and configuration to the vehicle model  
- Applies airbrake effects during simulation so trajectories reflect deployment state  
- Supports aerodynamic inputs such as curves or tables from analysis workflows  
- Keeps the workflow inside OpenRocket so design iteration stays fast  
- Enables comparisons between control strategies by rerunning consistent scenarios  

## My Contribution

- Went through documentation and forums to understand how to develop a plugin for Openrocket
- Developed Logic in Java code to interoplate drag based on a .csv file of extension level, mach number, and drag for any given velocity
- Implemented a bang bang control scheme within a code base to simulate active control withina simulation loop
- Replicated and refined a 6DOF Runge-Kutta-4 apogee prediction algorithm to ingest values and parameters from the simulation to predict apogee throughout flight. 
- Conducted CFD simualtions for the quantification of altitude reduction the air brakes unit can afford the launch vehicle.  

## Reflection Prompt

In this Project I learned how to read documentation, garner advice from other people on forums and ask devlopers for input on how to implement code into a software. I was able to ask and corridnate with other members of my team to ask questions about how the system worked and how I could best replicate it in software. Overall this plugin has proven its worth with being able to simulate prior flights within a 1% error. 

## Technical Highlights

- OpenRocket plugin structure and build tooling  
- Integration points for simulation updates per time step or event  
- Data driven aerodynamics such as lookup tables where applicable  
- Configuration and serialization so designs can be shared and rerun  

<figure class="portfolio-inline-media">
  <img src="{{ '/assets/images/projects/Plugin_Dev/LandingPage.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/LandingPage.png' | relative_url }}';" alt="Airbrakes plugin landing and configuration context" />
  <figcaption></figcaption>
</figure>

## Launch Video

<figure class="portfolio-media-hero">
  <video id="launch-video" src="{{ '/assets/images/projects/Plugin_Dev/Launch.mp4' | relative_url }}" style="width:100%;border-radius:6px;" preload="metadata">
    Your browser does not support the video tag.
  </video>
  <div style="margin-top:0.5rem;display:flex;gap:0.75rem;justify-content:center;">
    <button type="button" id="launch-video-play-btn" style="padding:0.4rem 1.2rem;cursor:pointer;">Play</button>
    <button type="button" id="launch-video-pause-btn" style="padding:0.4rem 1.2rem;cursor:pointer;">Pause</button>
  </div>
  <figcaption>Launch footage — use the buttons above to play or pause.</figcaption>
</figure>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("launch-video");
    var playBtn = document.getElementById("launch-video-play-btn");
    var pauseBtn = document.getElementById("launch-video-pause-btn");

    if (playBtn && video) {
      playBtn.addEventListener("click", function () {
        video.play();
      });
    }

    if (pauseBtn && video) {
      pauseBtn.addEventListener("click", function () {
        video.pause();
      });
    }
  });
</script>

## Validation Approach

Responsible validation steps for a plugin like this usually include  
- Unit tests for interpolation and table lookup behavior  
- Sanity checks versus the no airbrake baseline  
- Comparison to simplified analytic drag estimates where possible  
- Flight data comparison if instrumentation and logs are available  
- Sensitivity checks across step size and solver settings

## Airbrakes Slideshow

<div class="portfolio-slideshow" data-slideshow="airbrakes-gallery">
  <div class="portfolio-slideshow__viewport">
    <figure class="portfolio-slide is-active">
      <img src="{{ '/assets/images/projects/Plugin_Dev/ORHistogramWithAirbrakes.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/ORHistogramWithAirbrakes.png' | relative_url }}';" alt="Airbrakes simulation histogram output" />
      <figcaption>Histogram of apogees with the Air Brakes plugin </figcaption>
    </figure>
    <figure class="portfolio-slide">
      <img src="{{ '/assets/images/projects/Plugin_Dev/Options.png' | relative_url }}" onerror="this.onerror=null;this.src='{{ '/assets/images/projects/Plugin%20Dev/Options.png' | relative_url }}';" alt="Plugin options and parameter panel" />
      <figcaption> Options </figcaption>
    </figure>
  </div>
  <div class="portfolio-slideshow__controls">
    <button type="button" class="portfolio-slide-btn" data-action="prev" aria-label="Previous slide">Previous</button>
    <span class="portfolio-slide-counter" aria-live="polite">1 / 3</span>
    <button type="button" class="portfolio-slide-btn" data-action="next" aria-label="Next slide">Next</button>
  </div>
</div>

## Links

- Repo at https://github.com/NCSU-High-Powered-Rocketry-Club/OpenRocket-Airbrakes-Plugin  
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
