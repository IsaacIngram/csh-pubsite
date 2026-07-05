# CSH Public Site

The public website for [Computer Science House](https://csh.rit.edu), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Project structure

```text
src/
├── components/       Nav, Footer, PageHeader, LogoGrid, etc.
├── content/blog/      Markdown blog posts (Astro content collection)
├── content.config.ts  Blog collection schema
├── data/              Eboard, sponsors, alumni, and tour room data
├── layouts/Layout.astro
├── lib/                Shared constants (asset host URL, site metadata) and helpers
└── pages/              File-based routes (index, about/, membership/, contact/, blog/, 404)
```

Real photos (hero carousel, eboard, sponsors, alumni logos, tour rooms) are not stored in this
repo — they're referenced directly from `https://assets.csh.rit.edu/pubsite` (see
`src/lib/constants.ts`).

## Commands

| Command             | Action                                       |
| :------------------- | :-------------------------------------------- |
| `npm install`         | Install dependencies                          |
| `npm run dev`         | Start the local dev server at `localhost:4321` |
| `npm run build`       | Build the production site to `./dist/`        |
| `npm run preview`     | Preview the production build locally          |

## Adding a blog post

Drop a new Markdown file in `src/content/blog/`, e.g. `src/content/blog/my-project.md`:

```md
---
title: My Project
date: 2026-01-01
description: A short summary shown on the blog index.
categories: [projects]
author: Your Name
authorImage: https://example.com/avatar.jpg
authorBio: Optional one-line bio.
authorEmail: you@csh.rit.edu
authorSocial:
  github: https://github.com/you
  linkedin: https://www.linkedin.com/in/you
image: /projects/my-project.png
---

Post content in Markdown goes here.
```

`image` is a path relative to the asset host (`https://assets.csh.rit.edu/pubsite`). It's
optional — posts without one get a deterministic colored placeholder on the blog index.

## Updating eboard, sponsors, alumni, or tour rooms

These are plain TypeScript data files, edited directly (no CMS):

- `src/data/eboard.ts` — executive board roster
- `src/data/sponsors.ts` — sponsor logos (also used for the homepage's random sponsor teaser)
- `src/data/alumni.ts` — alumni company logos
- `src/data/tourRooms.ts` — rooms shown on the virtual tour page

## Deployment

The site builds to static HTML (`npm run build` → `dist/`) and ships in a Docker image:

```sh
docker build -t cshpubsite .
docker run -p 8080:8080 cshpubsite
```

The image is a multi-stage build: `node:22-alpine` builds the Astro site, then
`nginxinc/nginx-unprivileged` serves the static output on port 8080. That nginx image already
runs as a non-root user and tolerates the arbitrary UID that OpenShift/OKD assigns to containers,
so no extra `USER`/permission setup is needed for deployment there.
