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

## 5. Using the Prompt Builder

Open `prompting/prompt-builder.html` in any browser. It's a self-contained tool — no server needed.

**How it works:**
1. Open the HTML file directly in your browser (double-click or `File > Open`)
2. Pick a task template or write your own prompt
3. Paste in any relevant context from the project (CLAUDE.md, component code, etc.)
4. Click **Copy Prompt** to get a ready-to-paste prompt for Claude
5. You can save your prompts as `.md` files wherever you like — the `prompting/` folder is a good default

**Tip:** You can save the prompt builder HTML anywhere on your machine. It works offline and has zero dependencies.

## 6. Project Context Files

These files give Claude (or you) quick context about the codebase:

| File | What it covers |
|------|---------------|
| `CLAUDE.md` | Project conventions, layout patterns, component choices |
| `prompting/nuxt-llm-context.txt` | Nuxt 4 framework reference (routing, auto-imports, SFCs) |

## 7. Common Tasks

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

## 8. Key Conventions

- Always use `pnpm` (never `npm`)
- CSS goes in `<style module>` blocks, referenced as `$style.className`
- No inline class strings in templates
- Dashboard pages go inside `UDashboardPanel`'s `#body` slot
- Use `UCard` for dashboard cards, `UPageCard` for marketing pages
- Check `CLAUDE.md` before making architectural decisions — it documents what works
