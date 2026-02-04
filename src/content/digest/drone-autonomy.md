---
title: Drone Autonomy - The AI Grand Prix
date: 2026-02-04
tags: [drones, autonomy, robotics]
---

[The AI Grand Prix](https://theaigrandprix.com/) is hosting a competition for fully autonomous drone software, so I have decided to register and work on my own tools + autonomy model.

# Architecture

Two pipelines: **world generation** (synthetic training data) and **vision-to-control** (onboard inference).

## World Generator

Diffusion model outputs 3D Gaussian Splatting (3DGS) scenes conditioned on track layout graphs. 3DGS enables photorealistic rendering at arbitrary viewpoints, ~2ms rasterization, and easy domain randomization via splat perturbation.

## Vision Model

Mamba SSM backbone instead of transformer: linear complexity (critical at 200 FPS), implicit memory via recurrent state, constant inference time.

## Latency Budget

At 150 km/h: **4.2 cm/ms**. Target 5ms loop:

Positional error stays under 21 cm—workable for ~1m gate gaps.
