---
title: "Thesis: The K<sub>r</sub>−e-Free Graph Sandwich Problem"
tagline: My BS + MS thesis in Computer Science at UBA, published on arXiv. An arboricity-sensitive algorithm that beats the previous polynomial bound and runs in near-linear time on sparse graphs.
category: research
period: 2025 – 2026
sortDate: 2026-09-01
featured: true
tags: [Graph Theory, Algorithms, Complexity, Arboricity, Proofs, cs.DS, cs.DM]
logo: ../../assets/thesis/uba-logo.png
cover:
  src: ../../assets/thesis/forests-cover.svg
  alt: A graph whose edges are colored to split it into three forests, illustrating arboricity
stats:
  - { value: "O(n + α·m)", label: "Diamond-free case (r = 4)" }
  - { value: "O(n + α<sup>r−3</sup>·m)", label: "General K<sub>r</sub>−e-free case" }
  - { value: "O(n<sup>r</sup>·m)", label: "Previous bound" }
  - { value: "O(n<sup>r−1</sup>)", label: "Probe recognition, down from O(n<sup>r+2</sup>)" }
links:
  - { label: "Paper on arXiv", href: "https://arxiv.org/abs/2609.23458" }
  - { label: "PDF", href: "https://arxiv.org/pdf/2609.23458" }
---

## The thesis

This is the thesis for my **BS + MS in Computer Science at the University of Buenos Aires (UBA)**,
directed by **Min Chih Lin**. The results are published as a paper on arXiv, co-authored with him:

> **An Arboricity-Sensitive Algorithm for the K<sub>r</sub>−e-Free Graph Sandwich Problem**
> Min Chih Lin, Natán Vekselman. arXiv:2609.23458, 2026. Data Structures and Algorithms (cs.DS), Discrete Mathematics (cs.DM).

The thesis itself is written in Spanish: *Un Algoritmo Eficiente para el Problema K<sub>r</sub>−e-free Sandwich en Grafos*.

## The problem

In a **graph sandwich problem** you get two graphs on the same vertices. G₁ holds the edges you **must** keep,
and G₂ holds every edge you're **allowed** to use. The question: is there a graph G "sandwiched" between them,
containing all of G₁ and only edges from G₂, that has a given property?

![Three panels on the same five vertices: G1 with two mandatory edges, a valid sandwich G that adds two allowed edges, and G2 showing all allowed edges with unused ones dashed](../../assets/thesis/sandwich.svg)

*Mandatory edges in dark, chosen optional edges in teal, unused allowed edges dashed.*

Here the property is being **K<sub>r</sub>−e-free**: G must not contain, as an induced subgraph, a complete graph
on r vertices with exactly one edge removed. For r = 4 that forbidden shape is the **diamond**.

![The forbidden graphs K4 minus an edge (the diamond), K5 minus an edge, and K6 minus an edge, with the missing edge dashed](../../assets/thesis/kr-e-family.svg)

*The forbidden subgraphs K<sub>r</sub>−e for r = 4, 5, 6. The dashed line is the one missing edge.*

## The key idea: arboricity

The **arboricity** α of a graph is the smallest number of forests its edges can be split into. Sparse graphs,
such as planar graphs and most real-world networks, have small arboricity even when they have many vertices.
The cover image above shows a graph whose edges split into three forests, one per color.

Our algorithm's running time depends on α rather than only on the number of vertices. On sparse inputs this turns
a high-degree polynomial into something close to linear.

## Contributions

- A **deterministic algorithm** for the K<sub>r</sub>−e-free sandwich problem, for any fixed r ≥ 4, running in
  **O(n + α(G₂)<sup>r−3</sup>·m₂)** time and space, where m₂ is the number of edges of G₂.
- For the **diamond-free** case (r = 4) this becomes **O(n + α(G₂)·m₂)**.
- Both improve on the previous **O(n<sup>r</sup>·m₂)** approach.
- The implementation organizes the search around **components indexed by (r−3)-cliques**, with a filtered frontier
  that keeps the work proportional to the relevant part of the graph.
- Applied to **probe K<sub>r</sub>−e-free recognition**, the method runs in **O(n<sup>r−1</sup>)** time, improving on the
  earlier O(n<sup>r+2</sup>) bound.
- The same local characterization also yields a **static recognizer** for K<sub>r</sub>−e-free graphs.

<!-- TODO: a one-paragraph intuition of the local characterization, in your own words. -->

> Status: the paper is on arXiv; the thesis defense is expected by December 2026.
