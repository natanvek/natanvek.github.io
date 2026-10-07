---
title: Algorithmic Trading System
tagline: A full-stack, profitable trading system in Rust for Polymarket prediction markets and crypto.
category: trading
period: 2025 – present
sortDate: 2026-01-01
featured: true
logo: ../../assets/logos/polymarket.png
tags: [Rust, Backtesting, CMA-ES, Genetic Algorithms, Concurrency, Prediction Markets]
stats:
  - { value: "Rust", label: "End to end" }
  - { value: "Live", label: "Trading with real capital" }
  - { value: "CMA-ES + GA", label: "Strategy optimizers" }
links:
  - { label: "Live track record", href: "https://predicts.guru/checker/0x1c4ee4e794c367b4c81d233e79769652b8a04150" }
---

## Overview

A complete algorithmic trading stack that runs on **Polymarket** (prediction markets) and crypto markets.
It covers the whole loop: researching strategies offline, tuning them automatically, and running them live.
The system is profitable, and its public on-chain track record is linked above.

## Architecture

### Parallel backtesting engine
Replays historical market data across many strategy configurations at once, making full use of every core.
Being in Rust keeps it fast and memory-safe under heavy parallelism.

### Evolutionary optimizers
Strategy parameters are tuned with **CMA-ES** and **genetic algorithms**, searching spaces that are too large,
noisy, and non-differentiable for grid search or gradient methods.

### Live orchestrator
Runs the selected strategies against live markets, handling order flow and coordination between components.

<!-- TODO: add anything you're comfortable sharing publicly: data sources, latency, number of markets traded, how you avoid overfitting in backtests, a diagram. Keep the actual strategy logic private. -->

> The code is private. Happy to walk through the design in an interview.
