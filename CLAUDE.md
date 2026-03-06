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
├── app.vue              # Root component (UApp > NuxtLayout + NuxtPage)
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

## Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
