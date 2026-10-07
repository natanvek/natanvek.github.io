---
title: Mercado Libre Warehouse Optimization Challenge
tagline: First place in Mercado Libre's first optimization challenge, solving wave order picking with a heuristic + CPLEX hybrid. Awarded at SBPO 2025 in Brazil.
category: competition
period: Oct 2025
sortDate: 2025-10-01
award: 1st Place
tags: [Integer Programming, IBM CPLEX, Java, Heuristics, Beam Search, Fractional Programming, Operations Research]
logo: ../../assets/meli/logo.jpg
stats:
  - { value: "1st", label: "Final ranking" }
  - { value: "600 s", label: "Time limit per instance" }
  - { value: "SBPO 2025", label: "Awarded in Gramado, Brazil" }
links:
  - { label: "My solution", href: "https://github.com/natanvek/challenge-sbpo-2025" }
  - { label: "Challenge announcement", href: "https://medium.com/mercadolibre-tech/primer-desaf%C3%ADo-mercado-libre-de-optimizaci%C3%B3n-e8dad236054c" }
  - { label: "SBPO 2025", href: "https://sbpo2025.galoa.com.br/sbpo-2025/page/5407-home" }
gallery:
  - src: ../../assets/meli/award-stage.jpg
    alt: Natan on stage at SBPO 2025 wearing the first-place medal, next to two organizers, in front of the final ranking slide
    caption: Receiving first place on stage at SBPO 2025.
  - src: ../../assets/meli/medal.jpg
    alt: Gold medal reading "1º Lugar, Primeiro Desafio Mercado Livre de Otimização, SBPO 2025" next to Natan's SBPO conference badge
    caption: The medal and my badge from the 57th SBPO, Gramado, October 2025.
  - src: ../../assets/meli/presenting-combo.jpg
    alt: Natan presenting a slide titled "Algoritmo Final - COMBO" that lists the steps of the solution
    caption: Walking through the final algorithm, COMBO.
  - src: ../../assets/meli/sbpo-plenary.jpg
    alt: A full auditorium during a plenary talk at SBPO 2025
    caption: A plenary session at SBPO 2025.
  - src: ../../assets/meli/sbpo-session.jpg
    alt: Attendees watching a talk with a slide comparing optimization methods
    caption: One of the technical sessions at the symposium.
---

## The challenge

Mercado Libre, Latin America's largest e-commerce company, ran its **first optimization challenge** as part of
**SBPO 2025**, the 57th Brazilian Symposium on Operations Research. The problem came straight from their fulfillment
centers: **wave order picking**.

A warehouse has orders waiting and aisles holding stock. A *wave* is a batch of orders picked together. You choose
which orders go in the wave and which aisles the pickers visit, and you want as many units as possible per aisle visited:

> **maximize** units picked ÷ aisles visited
>
> **subject to:** every chosen order is picked in full · each item's demand fits the stock in the chosen aisles · the wave's total units stay between a lower and an upper bound

Solutions ran in Java under a hard **10-minute limit per instance**, on large real-world-shaped datasets.

## Why it's hard

- **The objective is a ratio.** Adding an aisle can raise or lower the score, so neither greedy choice nor a plain integer program solves it directly.
- **The search space is huge.** Every subset of aisles allows a different set of orders.
- **Time is strict.** A full integer program over every aisle and order doesn't converge in 10 minutes on the big instances. Exceeding the limit or returning an infeasible wave scores nothing.

## My approach: COMBO

A pipeline where fast heuristics find good regions of the search space and CPLEX does exact work only inside them.

![Pipeline with four steps: Fill, Ranking, Reduce, and CPLEX ratio search](../../assets/meli/pipeline.svg)

1. **Fill.** Given a set of aisles, greedily add orders while stock and the wave-size bound allow. Fast enough to run thousands of times.
2. **Ranking.** A beam search over aisle sets grouped by size: for each number of aisles, keep the best *K* sets found so far, extend each one by every aisle, fill, and re-rank. *K* is calibrated at runtime by timing a few iterations, so the search fits its time budget on any instance.
3. **Reduce.** Build the integer program using only the aisles that appear in the top-ranked sets of the most promising sizes, drop orders that can't possibly be served, and bound the number of aisles.
4. **CPLEX ratio search.** Instead of optimizing a ratio, ask CPLEX for a feasible wave with units − λ·aisles > 0, where λ is the best ratio so far. Each success raises λ and tightens the maximum number of aisles, in the spirit of Dinkelbach's method for fractional programs. CPLEX first runs with each top aisle set fixed, then on the reduced model, and on the full model if more than 100 seconds remain.

A safety margin before the 10-minute limit guarantees a valid answer is always returned.

## Result

> **First place** in the final ranking, awarded with a medal at SBPO 2025 in Gramado, Brazil.

<!-- TODO: final score or margin over second place; what you would improve with more time. -->
