# TradeSlayer

## Overview
Trading journal and strategy tracking application built with Nuxt 4 + Vue 3.

## Tech Stack
- **Framework:** Nuxt 4.3.1 (Vue 3.5)
- **UI Library:** Nuxt UI 4.5.1
- **Styling:** Tailwind CSS 4.2.1
- **Package Manager:** pnpm (not npm)
- **Language:** TypeScript

## Project Structure
```
app/
├── app.vue              # Root component (UApp > NuxtLayout > NuxtPage)
├── assets/css/main.css  # Global CSS imports (Nuxt UI + Tailwind)
├── layouts/default.vue  # Dashboard layout with sidebar nav
├── pages/
│   ├── index.vue        # Dashboard page
│   ├── journal.vue      # Journal page
│   └── strategies.vue   # Strategies page
```

## Conventions
- Use `pnpm` for all package operations (never npm)
- Vue SFC files use `<script setup lang="ts">`
- CSS classes are extracted into `<style module>` blocks — no inline class strings in templates
- Use `$style.className` syntax in templates for CSS Module references
- Nuxt UI components (UDashboardGroup, UDashboardSidebar, etc.) are auto-imported

## Nuxt UI Dashboard Layout Pattern
The correct component hierarchy for dashboard pages:
```
UApp
└── NuxtLayout (wraps NuxtPage, NOT siblings)
    └── NuxtPage
```

Layout file (`layouts/default.vue`):
```
UDashboardGroup
├── UDashboardSidebar
│   ├── #header slot
│   └── UNavigationMenu
└── UDashboardPanel
    ├── #header slot → UDashboardNavbar
    └── #body slot → <slot /> (page content)
```
- `UDashboardPanel` uses named slots (`#header`, `#body`, `#footer`) — do NOT pass content via the default slot or the internal layout (overflow, padding, shrink) is lost
- `UDashboardPanel`'s `#body` slot provides `overflow-y-auto`, `p-4 sm:p-6`, and flex column layout — do not add `UPageBody` inside it (that component is for marketing/content pages)

## Nuxt UI Component Choices
- **UPageGrid** — responsive 3-col grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`), use for uniform card grids
- **UPageColumns** — CSS masonry columns, use for variable-height content
- **UPageCard** — marketing/landing page cards with spotlight effects; use **UCard** for dashboard data cards
- **UPageBody** — adds `mt-8 pb-24 space-y-12`, designed for content/marketing pages, NOT dashboard panels

## TODO: Dashboard Chart Widget (`pages/index.vue`)
- Add the TradingView Advanced Chart widget to the dashboard page
- Default symbol should be MES (Micro E-mini S&P 500) or NQ (Nasdaq) — NOT AAPL or any single stock
- The chart should render inside the `UDashboardPanel` `#body` slot (same pattern as strategies page)
- Use `<style module>` for any chart container styling — no inline class strings

## Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
