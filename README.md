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
