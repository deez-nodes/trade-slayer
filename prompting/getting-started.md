# TradeSlayer — Getting Started with Claude

## Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) (`npm install -g @anthropic-ai/claude-code`)

## 1. Clone & Install

```bash
git clone https://github.com/deez-nodes/trade-slayer.git
cd trade-slayer
pnpm install
```

## 2. Run the Dev Server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## 3. Start Claude Code

From the project root:

```bash
claude
```

Claude will automatically read `CLAUDE.md` for project conventions (tech stack, component patterns, slot usage, etc.). Just describe what you want to build or fix.

## 4. Branches

| Branch | Purpose |
|--------|---------|
| `main` | Initial scaffold |
| `feature/css-modules` | Layout fixes, strategy cards, Nuxt UI patterns |
| `dashboard_chart` | Next up: TradingView chart widget on the dashboard |

Pick the branch you want to work from:

```bash
git checkout dashboard_chart
```

## 5. Using the Prompt Manager

Open `prompting/tradeslayer-prompt-manager.html` in any browser. It's a self-contained tool — no server needed.

**How it works:**
1. Open the HTML file directly in your browser (double-click or `File > Open`)
2. Set the **base dir** in the top-right to your project path (e.g. `~/projects/tradeslayer`)
3. Switch between **Prompts** and **Tasks** modes using the tabs
4. Pick a template — there are general templates (Promptology, Dev/Code) and TradeSlayer-specific ones (Signal Engine, Frontend Component, Schema/DB, Debug Session)
5. Fill in the structured fields, attach file paths, and the **Output Preview** builds your prompt in real time
6. Click **Copy Prompt** to paste directly into Claude, or **Save .md** to download it

**Tips:**
- You can save the HTML anywhere on your machine — it works offline, zero dependencies
- Prompts are saved in your browser's local storage, so they persist between sessions
- You can choose any directory to save exported `.md` prompts — the `prompting/` folder is a good default
- Use **Export All** to dump every saved prompt into a single `.md` file

## 6. What's in This Folder

| File | What it is |
|------|-----------|
| `tradeslayer-prompt-manager.html` | Self-contained prompt builder tool (open in browser) |
| `addChart.md` | Prompt: add TradingView Advanced Chart widget to the dashboard |
| `bookmap_setup.md` | Prompt: Bookmap setup for spotting icebergs, absorption, liquidity |
| `charting-library-context.txt` | TradingView Charting Library full API reference (types + docs) — feed this to Claude when working on chart features |
| `gemini_cards.vue` | Reference: strategy card component with Bookmap-based strategies (Heatmap Absorption, Liquidity Flip) |
| `getting-started.md` | This file |

## 7. Project Context Files

| File | What it covers |
|------|---------------|
| `CLAUDE.md` | Project conventions, layout patterns, component choices, TODOs |
| `nuxt-llm.txt` | Nuxt 4 framework reference (routing, auto-imports, SFCs) |

## 8. Common Tasks

**Add the chart widget (next TODO):**
```
Feed Claude the charting library context and the addChart prompt:
@prompting/charting-library-context.txt @prompting/addChart.md
```

**Ask Claude to build something:**
```
Add a TradingView chart to the dashboard page. Default to MES futures.
```

**Ask Claude to fix something:**
```
The sidebar disappears on mobile. Fix the responsive layout.
```

**Ask Claude to explain the codebase:**
```
How does the layout system work? Walk me through app.vue → default.vue → page.
```

## 9. Key Conventions

- Always use `pnpm` (never `npm`)
- CSS goes in `<style module>` blocks, referenced as `$style.className`
- No inline class strings in templates
- Dashboard pages go inside `UDashboardPanel`'s `#body` slot
- Use `UCard` for dashboard cards, `UPageCard` for marketing pages
- Check `CLAUDE.md` before making architectural decisions — it documents what works
