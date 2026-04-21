---
title: "KBase Publication: Pseudarthrobacter oxydans Analysis"
excerpt: "A genome analysis project focused on a mine-drainage bacterial isolate and its possible relevance to e-waste remediation."
permalink: /hie/honors-project-one/
layout: single
classes: wide
toc: true
toc_sticky: true
---

## Project Snapshot

- **Project type:** Honors research and scientific communication
- **Organization:** NC State University Honors / KBase narrative project
- **Date range:** 2022
- **Role:** Student researcher and narrative co-author
- **Tools:** KBase, Nanopore MinION sequencing, Nanodrop, Qubit, RASTtk, GTDB-Tk, biolog plates

## Overview

This project documented the sequencing and genome analysis of a bacterial isolate collected from an acid mine drainage environment. The broader goal was to study whether an organism that survives in a metal-rich setting might contain traits that could eventually support electronic waste remediation. The original working hypothesis centered on *Arthrobacter*, but the final taxonomic classification identified the isolate as *Pseudarthrobacter oxydans*. 

The KBase narrative brought together the biological background, wet-lab preparation, sequencing workflow, and genome analysis into one publication-style record. My contribution focused on helping organize the project story from sample collection through annotation and classification, then translating those results into a readable scientific narrative for a public-facing research portfolio.

## Experimental Workflow and Analysis

The isolate was collected from an acid waste drain associated with a mine, then transported to NC State for growth, purification, sequencing, and genome analysis. To prepare the sample, the bacteria were grown in tryptic soy broth, plate streaked to support colony growth, and evaluated with biolog plates after turbidity was adjusted for testing. Genomic isolation followed, including bacterial lysis, gDNA binding, and purification. Sample concentration was checked with Nanodrop and Qubit before sequencing.

Sequencing was carried out with Nanopore hardware and related ONT preparation kits. The project used MinION FLO-MIN106 R9.4.1 flow cells along with the Rapid Barcoding Kit and Flow Cell Priming Kit. The resulting dataset was generated from single-end reads and represented the first sequencing effort for this genome, so no accession number was available at the time.

Within KBase, the dataset moved through assembly and annotation steps. Some parts of the workflow were successful while others were not. The Unicycler assembly app produced errors, and the DRAM annotation step also failed. Even with those issues, the project still produced a usable analysis pipeline through RASTtk and GTDB-Tk, which made it possible to annotate the genome and determine the organism's classification.

## Key Findings

The sequencing statistics reported in the narrative included a total read length of 4,539,679 base pairs, a mean read length of 15,564.6534 base pairs, and 361,021 reads. The assembled genome was described as 5,201,919 base pairs across 9 contigs, with a GC content of 65.54% and an N50 of 4,539,679 base pairs.

RASTtk annotated the genome and reported 6,921 new features, including 6,771 coding genes and 150 non-coding features. The annotation process used standard gene-calling methods and additional scans for rRNA, tRNA, repeat regions, and related genomic features. The taxonomic classification step ultimately identified the isolate as *Pseudarthrobacter oxydans*.

This result mattered because it refined the original project direction. What began as a broader analysis of a possible *Arthrobacter* isolate became a more specific genome-based identification effort. That shift showed the value of computational biology tools in correcting assumptions and grounding a research question in actual sequencing evidence.

## Why This Project Mattered

I chose this project for my portfolio because it sits at the intersection of environmental science, genomics, and applied problem solving. The isolate came from a harsh, metal-rich environment, which made it interesting from the start as a possible candidate for future remediation research. Even though this narrative did not prove direct e-waste recycling capability, it established a strong first step by identifying the organism, documenting the sequencing workflow, and building a record of the genome analysis.

It also gave me experience with how real research often works. Not every tool runs cleanly, not every pipeline step succeeds on the first try, and sometimes the most important outcome is refining the question rather than fully answering it. In that sense, this project was both a biology investigation and a lesson in scientific process.

## Reflection

This project helped me better understand how experimental work and computational analysis fit together in modern biological research. I learned how much care is required in sample preparation, sequencing, and annotation, but I also learned that interpretation matters just as much as raw output. The project strengthened my ability to read technical workflows, explain results clearly, and turn a lab-based investigation into a polished written narrative. Looking back, I would improve the page further by adding figures or screenshots from the KBase workflow, but the written record still captures the core scientific process and the main findings of the project.
