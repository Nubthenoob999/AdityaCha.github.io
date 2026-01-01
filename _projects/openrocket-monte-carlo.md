---
title: "OpenRocket Monte Carlo"
excerpt: "A Monte Carlo simulation toolchain for exploring flight outcome dispersion under uncertainty."
tags:
  - OpenRocket
  - Simulation
  - Monte Carlo
  - Aerospace
header:
  overlay_image: /assets/images/projects/montecarlo-banner.svg
  overlay_filter: "0.25"
  overlay_color: "#111827"
  caption: "Replace this banner by updating assets images projects"
teaser: /assets/images/projects/montecarlo-thumb.svg
---

## Overview

This project supports Monte Carlo style runs around an OpenRocket based flight model to study how uncertainty affects outcomes. Typical inputs include variability in mass properties, aerodynamic parameters, launch conditions, and wind profiles. Typical outputs include distributions of apogee and other flight metrics.

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

## Technical Highlights

- Uncertainty modeling with configurable distributions and bounds  
- Batch execution across many trials  
- Output aggregation and post processing hooks  
- Reproducibility features such as fixed seeds and saved configs  

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

## Links

- Detailed repo documentation at https://github.com/NCSU-High-Powered-Rocketry-Club/OpenRocket-Monte-Carlo  
- Project list at [{{ "/projects/" | relative_url }}]({{ "/projects/" | relative_url }})
