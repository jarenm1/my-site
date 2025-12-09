---
title: Triad
layout: ../layouts/MainLayout.astro
description: Notes about the Triad project.
---

<div class="flex items-center gap-4 w-full bg-neutral-950 rounded-lg py-4">
  <img src="/triad-subdivide.svg" alt="Triad triangle sweep animation" class="h-20 w-20 ml-4" />
  <h1 class="m-0 font-aboreto text-6xl!">Triad</h1>
  <div class="ml-auto mr-4 text-lg text-white!">
    <a href="https://github.com/jarenm1/triad" target="_blank" rel="noreferrer" class="flex items-center gap-2 underline">
      Triad Repo
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 3h6v6" />
        <path d="M3 13 13 3" />
      </svg>
    </a>
  </div>
</div>


Triad is my custom renderer that I've built for use in realtime autonomy stacks or creation of virtual worlds for data collection.


<figure>
  <img src="/triad.png" alt="Triad Showcase Image" />
  <figcaption>Goat skull PLY model in triad</figcaption>
</figure>


## Architecture

Currently the renderer uses a frame graph to order render passes and share GPU resources with a DAG. The goal is to keep passes very explicit, avoid global state, and leave room to add on compute stages.\
I'm still designing the ingest system for the real-time point cloud data. My naive, no ML experience, approach is to tokenize the rgb input and vertex data in-frame, then output goes into ingest then processed by compute shader / cuda kernel.
<figure>
  <img src="/render_ingest.svg" alt="Triad diagram" class="mx-auto justify-center"/>
</figure>

## Resources
- [Triangle Splatting+](https://arxiv.org/abs/2509.25122)
- [3DGS Real-Time Radiance Field Rendering](https://arxiv.org/abs/2308.04079)