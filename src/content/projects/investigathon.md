---
title: Investigathon 2025, Graph Track
tagline: First place at yhat's research hackathon at FCEN-UBA. We characterized a graph class and decided membership in linear time.
category: competition
period: Dec 2025
sortDate: 2025-12-01
award: 1st Place
tags: [Graph Theory, Proofs, C++, Algorithms, Outerplanar Graphs]
logo: ../../assets/investigathon/yhat.png
stats:
  - { value: "O(n)", label: "Decision algorithm, vs O(n!·n) trying every ordering" }
  - { value: "200+", label: "Attendees at the presentation" }
  - { value: "4", label: "Team members" }
links:
  - { label: "Repository", href: "https://github.com/nacho-04/Investigathon2025" }
  - { label: "Poster", href: "https://github.com/nacho-04/Investigathon2025/blob/main/poster.pdf" }
  - { label: "yhat", href: "https://somosyhat.com/" }
---

## The event

Investigathon is a research hackathon run by [yhat](https://somosyhat.com/) at FCEN-UBA. Instead of shipping a product,
teams take on an open problem and present a written, proven result. Our team of four took the **graph theory track**.

## What we found

The problem asked which graphs admit a vertex ordering satisfying a set of degree constraints. The problem came
with only a brute-force solution, and simply trying every ordering takes **O(n!·n)** time. We characterized the valid graphs exactly:

- maximum degree 4, **outerplanar**, and **pathwidth 2**;
- closed under topological minors;
- every biconnected component is a **chain of cycles**, and a single path links them all, a shape we called
  "caterpillars" (*orugas*).

That structure gave us an **O(n) decision algorithm** in C++, plus formal proofs that it is correct.

## Result

> **First place**, with a monetary prize, presented to more than 200 attendees.
