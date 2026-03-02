---
title: "HPRC Aerodynamics Lead"
permalink: /hie/hprc-aerodynamics-lead/
layout: single
classes: wide
toc: true
toc_sticky: true
---

<figure class="portfolio-media-hero">
	<img src="/assets/images/projects/Hprc/ABM_0319.JPG" alt="HPRC team and vehicle during competition preparation" />
	<figcaption>Placeholder caption: Add a one-sentence overview of this lead image and why it represents your leadership role.</figcaption>
</figure>

## Experience Snapshot

- **Experience type:** Student Leadership 
- **Role:** Aerodynamics Lead, High-Powered Rocketry Club (HPRC)
- **Date range:** May 5, 2025 – Present
- **Average hours/week:** 30
- **Host department:** Mechanical and Aerospace Engineering
- **Supervisor:** Felix Ewere, Associate Teaching Professor

## Club Connection and Scope

I have been active in HPRC for over three years, starting in my first year through payload and structures work before moving into aerodynamics leadership. As Aerodynamics Lead, I focused on simulation and performance integration for the airbrake subsystem during the 2024–2025 and 2025–2026 competition cycles.

## My Role and Contributions

- Led aerodynamics-side decisions and coordination for airbrake simulation and system performance impact
- Managed communication between subsystem members and broader vehicle integration needs
- Helped drive simulation-informed tradeoffs under timeline pressure during build/test cycles
- Supported competition execution and stepped into additional aerodynamics responsibility during travel when needed

<figure class="portfolio-inline-media">
	<img src="/assets/images/projects/Hprc/ABM_0160.JPG" alt="HPRC rocket hardware and subsystem context" />
	<figcaption>Placeholder caption: Describe what subsystem state is shown here and what decision this phase informed.</figcaption>
</figure>

## Challenge and Leadership Growth

The most difficult part of this role was balancing technical ownership with people management while also handling senior design, coursework, testing, and personal workload. I learned how to prioritize under pressure, set clearer expectations, and keep subsystem work aligned to full-vehicle milestones.

<figure class="portfolio-inline-media">
	<img src="/assets/images/projects/Hprc/DSC_0198.JPG" alt="HPRC on-site execution and team operations" />
	<figcaption>Placeholder caption: Add a short reflection connecting this moment to communication under pressure.</figcaption>
</figure>

## Reflection and Learning

This experience changed how I view engineering: technical outcomes depend on communication quality, ownership structure, and consistency under pressure. I also learned that strong teams are built by distributing real responsibility, not by centralizing all work in one lead.

## Skills Gained

- **Leadership:** setting direction, task ownership, and accountability in a student engineering team
- **Communication:** cross-subteam updates, faster technical clarification, and decision framing
- **Systems thinking:** ensuring airbrake subsystem work integrates with full rocket constraints
- **Professional growth:** handling disagreement, ambiguity, and compressed timelines without stalling progress

## Career Impact

HPRC leadership shifted my direction from primarily aviation toward computational and space-focused aerospace work. It strengthened my interest in simulation-heavy engineering where modeling and real-world testing must converge.

## Reflective Caption (Ready to Reuse)

As Aerodynamics Lead in NC State’s High-Powered Rocketry Club, I guided simulation-centered airbrake development while coordinating integration across a multidisciplinary student team. The role required technical judgment, communication under pressure, and leadership through uncertainty during competition preparation. This strengthened both my systems engineering mindset and my confidence in leading complex aerospace projects.

## HPRC Photo Slideshow

<div class="portfolio-slideshow" data-slideshow="hprc-gallery">
	<div class="portfolio-slideshow__viewport">
		<figure class="portfolio-slide is-active">
			<img src="/assets/images/projects/Hprc/20250407_151005.jpg" alt="HPRC team setup in the field" />
			<figcaption>Placeholder caption: Add context for this setup stage and your responsibilities.</figcaption>
		</figure>
		<figure class="portfolio-slide">
			<img src="/assets/images/projects/Hprc/ABM_0019.JPG" alt="Rocket integration close-up" />
			<figcaption>Placeholder caption: Add a technical note about integration constraints or checks.</figcaption>
		</figure>
		<figure class="portfolio-slide">
			<img src="/assets/images/projects/Hprc/ABM_0110.JPG" alt="Rocket subsystem view" />
			<figcaption>Placeholder caption: Add what stage of prep this image represents.</figcaption>
		</figure>
		<figure class="portfolio-slide">
			<img src="/assets/images/projects/Hprc/ABM_0465.JPG" alt="Team operations during event" />
			<figcaption>Placeholder caption: Add one leadership takeaway from this moment.</figcaption>
		</figure>
		<figure class="portfolio-slide">
			<img src="/assets/images/projects/Hprc/DSC_0172.JPG" alt="Field execution environment" />
			<figcaption>Placeholder caption: Add what changed in your process after this phase.</figcaption>
		</figure>
	</div>
	<div class="portfolio-slideshow__controls">
		<button type="button" class="portfolio-slide-btn" data-action="prev" aria-label="Previous slide">Previous</button>
		<span class="portfolio-slide-counter" aria-live="polite">1 / 5</span>
		<button type="button" class="portfolio-slide-btn" data-action="next" aria-label="Next slide">Next</button>
	</div>
</div>

## HPRC Video Highlight (First 30 Seconds)

<figure class="portfolio-video">
	<video controls preload="metadata" playsinline>
		<source src="/assets/images/projects/Hprc/VDF_2026.mp4#t=0,30" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<figcaption>Placeholder caption: Add what this clip demonstrates and why this 30-second segment matters.</figcaption>
</figure>

[Open video directly](/assets/images/projects/Hprc/VDF_2026.mp4)

Placeholder text to edit later: [Add 2-3 sentences connecting this footage to decision-making, team execution, and leadership growth.]

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
