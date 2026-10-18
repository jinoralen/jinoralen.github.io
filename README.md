# jinoralen.github.io

Personal website built with Astro.

## Development

Requires Node.js 22.12 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321` by default.

For a background server, use `pnpm dev --background`. Manage it with
`pnpm astro dev status`, `pnpm astro dev logs`, and `pnpm astro dev stop`.

## Build

```sh
pnpm build
pnpm preview
```

The static site is generated in `dist/`.

## Files

- `src/pages/index.astro` — homepage.
- `public/` — static assets served as-is.
- `astro.config.mjs` — Astro configuration.

[Astro documentation](https://docs.astro.build)

## Blog

Create each post at `src/content/posts/<slug>/index.md`. Its URL is `/blog/<slug>/`.

```yaml
---
title: My post
description: A short summary.
date: 2026-10-18
tags: [ai-agents]
draft: true
---
```

Drafts appear in development with a draft label and are excluded from production pages and RSS.
Set `draft: false` when a post is ready to publish. Optional `updated` dates appear in the post header.
The Blog navigation link appears when there are visible posts. The feed is available at `/rss.xml`.
Keep images beside the post, for example `<slug>/illustration.png`, and reference them as `![Alt text](./illustration.png)`.

The imported Herdr posts remain drafts; their dates are the import date, to be set before publishing.

Post tags link to `/tags/<tag>/`, listing matching posts newest first. Tags are trimmed, lowercased, and deduplicated. Tag pages follow the same draft visibility rules as the blog.
