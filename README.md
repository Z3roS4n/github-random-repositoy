# Random GitHub Repository Finder

A small React + Bun app to discover random GitHub repositories, with optional language filtering.

## Overview

This project fetches a list of programming languages, lets you pick one, and then queries the GitHub Search API to show a random repository from the results.

It is a lightweight UI playground built with modern tooling:

- **Bun** for runtime, dev server, and build
- **React 19** for UI
- **Tailwind CSS v4** + reusable UI components
- **TanStack Query** for data fetching and async state

## Features

- Pick a language from a searchable selector
- Fetch repositories from GitHub Search API
- Show one random repository at a time
- Refresh to get another random result
- Clean card-based interface

## Tech Stack

- Bun
- TypeScript
- React 19
- TanStack Query
- Tailwind CSS v4
- Radix/Base UI primitives
- Lucide icons

## Getting Started

### Prerequisites

- [Bun](https://bun.com) installed

### Installation

```bash
bun install
```

### Run in development

```bash
bun dev
```

The app server starts with hot reloading enabled.

### Run in production mode

```bash
bun start
```

### Create a production build

```bash
bun run build
```

Build output is generated in `dist/`.

## Available Scripts

- `bun dev` → run Bun server with HMR (`src/index.ts`)
- `bun start` → run server in production mode
- `bun run build` → bundle frontend assets via `build.ts`

## Project Structure

```text
src/
	App.tsx                 # Main UI logic
	frontend.tsx            # React entry point + QueryClient setup
	index.ts                # Bun server entry and routes
	components/
		interface/
			language-selector.tsx
			repository.tsx
		ui/                   # Reusable UI components
styles/
	globals.css
build.ts                  # Custom Bun build script
```

## Data Sources

- Language list JSON:
	`https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json`
- GitHub repositories:
	`https://api.github.com/search/repositories`

## Notes

- GitHub API requests are unauthenticated by default and may be rate-limited.
- If you hit rate limits, consider adding authenticated requests (token-based).

## License

This repository is released under the license in [LICENSE](../LICENSE).
