# Random GitHub Repository Finder

![Bun](https://img.shields.io/badge/Bun-Runtime-black)
![React](https://img.shields.io/badge/React-19-149ECA)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4)
![Status](https://img.shields.io/badge/status-active-success)

Discover a random GitHub project in one click.

Website: https://msworks.it

This app lets you pick a programming language and fetches random repositories from the GitHub Search API, so you can quickly explore codebases, ideas, and trends.

## Why this project

- Explore unfamiliar repositories fast
- Get inspiration for side projects
- Practice reading real-world code
- Built as a clean, modern React + Bun example

## Features

- Searchable language selector
- Random repository extraction from GitHub results
- Quick refresh flow for new discoveries
- Simple and responsive card UI

## Stack

- Bun
- TypeScript
- React 19
- TanStack Query
- Tailwind CSS v4
- Radix/Base UI + Lucide icons

## Quick Start

### 1) Install dependencies

```bash
bun install
```

### 2) Start development server

```bash
bun dev
```

### 3) Run production mode

```bash
bun start
```

### 4) Build for production

```bash
bun run build
```

## Scripts

- `bun dev` — development server with hot reload
- `bun start` — production server
- `bun run build` — frontend build to `dist/`

## Project Layout

```text
github-random-repository/
  src/
    App.tsx
    frontend.tsx
    index.ts
    components/
      interface/
      ui/
  styles/
  build.ts
```

## API Sources

- Languages JSON:
  https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json
- Repositories search:
  https://api.github.com/search/repositories

## Notes

- Unauthenticated GitHub API calls can hit rate limits.
- For heavier usage, add token-based authenticated requests.

## License

MIT-style usage under the terms of [LICENSE](LICENSE).
