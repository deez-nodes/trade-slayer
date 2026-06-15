<template>
  <StrategyCardShell :meta="meta">
      <!-- IDENTIFY -->
      <template #identify>
        <StrategySection title="Sources of S/R — Bookmap Layers" color="info" icon="🔍" default-open>
          <StrategyDivider label="Heatmap-Derived Levels" />
          <StrategyCheckbox label="Persistent heatmap bands: dense liquidity that stays on-screen for 5+ minutes = real S/R" sublabel="Bright, continuous bands → passive institutional orders resting at that price" accent="info" />
          <StrategyCheckbox label="Recurring heatmap walls: same price lights up across multiple sessions = structural anchor" accent="info" />
          <StrategyCheckbox label="Heatmap 'cliff': liquidity abruptly drops off at a price → edge of value zone" accent="info" />
          <StrategyCheckbox label="Layered heatmap: multiple bright bands within 4-6 ticks = dense S/R zone (not a single line)" accent="info" />

          <StrategyDivider label="Order Flow-Derived Levels" />
          <StrategyCheckbox label="Iceberg cluster zone: 2+ iceberg detections within 4 ticks = hidden institutional S/R" accent="cyan" />
          <StrategyCheckbox label="Absorption zone: Absorption Indicator fires at a price → passive wall defending that level" accent="cyan" />
          <StrategyCheckbox label="Stop cascade terminus: where a stop run exhausted and reversed = new reactive S/R" accent="cyan" />
          <StrategyCheckbox label="Large lot prints cluster: Volume Dots concentrate at a price = fought-over level" accent="cyan" />

          <StrategyDivider label="Structural / External Levels" />
          <StrategyCheckbox label="PDH / PDL (prior day high/low): classic institutional reference points" accent="purple" />
          <StrategyCheckbox label="VWAP: session VWAP and developing VWAP — mean-reversion anchor" accent="purple" />
          <StrategyCheckbox label="Volume Profile HVN/LVN: HVN = sticky S/R, LVN = fast-move zone (not S/R)" accent="purple" />
          <StrategyCheckbox label="Round numbers (00/50): psychological levels — only valid with Bookmap confirmation" accent="purple" />
          <StrategyCheckbox label="Prior session balance edges: value area high/low from yesterday" accent="purple" />
          <StrategyCheckbox label="Overnight high/low: Globex extremes — often tested at RTH open" accent="purple" />
        </StrategySection>

        <StrategySection title="Ranking S/R Strength" color="purple" icon="📊">
          <StrategyCheckbox label="TIER 1 (Fortress): heatmap wall + iceberg + absorption + structural level = highest conviction" sublabel="Multiple Bookmap layers agree on the same price → trade it with full size" accent="long" />
          <StrategyCheckbox label="TIER 2 (Strong): any 2 of (heatmap wall, iceberg, absorption) + structural level" accent="info" />
          <StrategyCheckbox label="TIER 3 (Moderate): structural level with fresh heatmap liquidity — no iceberg/absorption yet" accent="warn" />
          <StrategyCheckbox label="TIER 4 (Weak): structural level alone, no Bookmap confirmation → half size or skip" accent="neutral" />
          <StrategyCheckbox label="Rule: never trade a level BELOW Tier 3 — require at least one Bookmap layer" accent="short" />
        </StrategySection>
      </template>

      <!-- CONFIRM -->
      <template #confirm>
        <StrategySection title="Confirmation — Level Is Holding" color="cyan" icon="✦" default-open>
          <StrategyDivider label="Real-Time Confirmation Checklist" />
          <StrategyCheckbox label="Heatmap liquidity REPLENISHES after each test — wall keeps reloading at the same price" sublabel="If liquidity diminishes on each test, the wall is weakening, not confirming" accent="cyan" />
          <StrategyCheckbox label="Absorption detected: aggressive orders hitting the level but price holds ± 2 ticks" accent="cyan" />
          <StrategyCheckbox label="Iceberg refill: S&I Tracker shows hidden orders reloading at the S/R price" accent="cyan" />
          <StrategyCheckbox label="CVD divergence at the level: net aggressors push against it, price doesn't budge" sublabel="Sellers hitting support aggressively but price won't drop = bullish confirmation" accent="cyan" />
          <StrategyCheckbox label="LT Pro: passive liquidity on the defending side GROWING at the level" accent="cyan" />
          <StrategyCheckbox label="Volume Dots: large prints cluster at S/R but are absorbed, not breaking through" accent="cyan" />
          <StrategyCheckbox label="Multiple tests: level holds 2+ tests across 5+ minutes = genuine structural S/R" accent="long" />

          <StrategyDivider label="Time-Based Confirmation" />
          <StrategyCheckbox label="Level holds through 2+ distinct test waves spaced > 2 min apart = strong" accent="long" />
          <StrategyCheckbox label="Level holds during high-volume period (9:45-11:30 ET) = more reliable than lunch test" accent="long" />
          <StrategyCheckbox label="Level from prior session that re-confirms on new session open = institutional memory" accent="long" />
        </StrategySection>

        <StrategySection title="Invalidation — Level Is Breaking" color="short" icon="💔" default-open>
          <StrategyDivider label="Real-Time Invalidation Signals" />
          <StrategyCheckbox label="Heatmap wall THINS on successive tests — each wave eats away at the liquidity" sublabel="Wall goes from bright to dim = defender is running out of ammo" accent="short" />
          <StrategyCheckbox label="Iceberg stops reloading: S&I Tracker shows no new hidden orders at the level" accent="short" />
          <StrategyCheckbox label="LT Pro: defending-side liquidity PULLS (bid pulling at support / ask pulling at resistance)" accent="short" />
          <StrategyCheckbox label="Absorption Indicator stops firing: passive wall depleted, aggressors will push through" accent="short" />
          <StrategyCheckbox label="Stop cascade initiates AT the level: stops sitting behind S/R begin triggering" accent="short" />
          <StrategyCheckbox label="Volume surge through level: 30-sec volume > 2x avg AND price prints 3+ ticks through" accent="short" />
          <StrategyCheckbox label="CVD accelerates through: net delta aligns with the break direction = real, not fake" accent="short" />

          <StrategyDivider label="False Break vs Real Break" />
          <StrategyCheckbox label="FALSE BREAK: price pokes 1-2 ticks through, no stop cascade, immediately reclaims" sublabel="Heatmap wall still visible, CVD doesn't confirm → level still valid, often better entry" accent="warn" />
          <StrategyCheckbox label="REAL BREAK: price clears by 3+ ticks, stop cascade triggers, heatmap wall disappears" accent="short" />
          <StrategyCheckbox label="Test: does price HOLD on the other side for 30+ sec? If yes → broken. If reclaimed → false" accent="warn" />
          <StrategyCheckbox label="Broken S/R FLIPS role: old support becomes resistance, old resistance becomes support" accent="info" />
          <StrategyCheckbox label="Best confirmation of flip: new iceberg or heatmap wall appears on the OTHER side of the level" accent="info" />
        </StrategySection>
      </template>

      <!-- LONG -->
      <template #long>
        <StrategySection title="Long — Support Bounce" color="long" icon="▲" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Price tests confirmed support (Tier 1-2 level with Bookmap confirmation)" accent="long" />
          <StrategyCheckbox label="Heatmap wall holds or brightens on the current test" accent="long" />
          <StrategyCheckbox label="Absorption or iceberg detected on bid side at the support level" accent="long" />
          <StrategyCheckbox label="CVD flattens or turns positive at the test — selling pressure exhausting" accent="long" />
          <StrategyCheckbox label="LT Pro: bid liquidity stable/growing, ask liquidity flat or thinning above" accent="long" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="ENTRY: buy on first uptick after support confirms — limit 1-2 ticks above level" sublabel="Wait for the absorption + hold, then enter on the lift — not before" accent="long" />
          <StrategyCheckbox label="ALT: buy the retest of broken resistance (S/R flip) with iceberg on bid" accent="long" />

          <StrategyDivider label="Targets" />
          <StrategyCheckbox label="T1: +4-6 ticks — VWAP or first heatmap resistance cluster above" accent="long" />
          <StrategyCheckbox label="T2: +8-12 ticks — next structural S/R or HVN on volume profile" accent="long" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop below last swing low" accent="long" />
        </StrategySection>

        <StrategySection title="Long — Resistance Break Continuation" color="long" icon="⚡">
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Resistance level INVALIDATED: heatmap wall gone, stops triggered through, CVD confirms" accent="long" />
          <StrategyCheckbox label="Price holds above broken resistance for 30+ sec — level has flipped to support" accent="long" />
          <StrategyCheckbox label="New bid-side liquidity appears on heatmap at the broken level (LT Pro confirms)" accent="long" />
          <StrategyCheckbox label="No ask-side iceberg cluster within 4 ticks above current price" accent="long" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="ENTRY: buy the pullback retest of broken resistance (now support)" accent="long" />
          <StrategyCheckbox label="T1: +6-10 ticks — next structural level above" accent="long" />
          <StrategyCheckbox label="T2: next heatmap wall / HVN above" accent="long" />
        </StrategySection>
      </template>

      <!-- SHORT -->
      <template #short>
        <StrategySection title="Short — Resistance Rejection" color="short" icon="▼" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Price tests confirmed resistance (Tier 1-2 level with Bookmap confirmation)" accent="short" />
          <StrategyCheckbox label="Heatmap wall holds or brightens on the current test" accent="short" />
          <StrategyCheckbox label="Absorption or iceberg detected on ask side at the resistance level" accent="short" />
          <StrategyCheckbox label="CVD flattens or turns negative at the test — buying pressure exhausting" accent="short" />
          <StrategyCheckbox label="LT Pro: ask liquidity stable/growing, bid liquidity flat or thinning below" accent="short" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="ENTRY: sell on first downtick after resistance confirms — limit 1-2 ticks below level" sublabel="Wait for the absorption + hold, then enter on the fade — not before" accent="short" />
          <StrategyCheckbox label="ALT: sell the rally retest of broken support (S/R flip) with iceberg on ask" accent="short" />

          <StrategyDivider label="Targets" />
          <StrategyCheckbox label="T1: −4-6 ticks — VWAP or first heatmap support cluster below" accent="short" />
          <StrategyCheckbox label="T2: −8-12 ticks — next structural S/R or HVN on volume profile" accent="short" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop above last swing high" accent="short" />
        </StrategySection>

        <StrategySection title="Short — Support Break Continuation" color="short" icon="⚡">
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Support level INVALIDATED: heatmap wall gone, stops triggered through, CVD confirms" accent="short" />
          <StrategyCheckbox label="Price holds below broken support for 30+ sec — level has flipped to resistance" accent="short" />
          <StrategyCheckbox label="New ask-side liquidity appears on heatmap at the broken level (LT Pro confirms)" accent="short" />
          <StrategyCheckbox label="No bid-side iceberg cluster within 4 ticks below current price" accent="short" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="ENTRY: sell the rally retest of broken support (now resistance)" accent="short" />
          <StrategyCheckbox label="T1: −6-10 ticks — next structural level below" accent="short" />
          <StrategyCheckbox label="T2: next heatmap wall / HVN below" accent="short" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement by S/R Trade Type" color="warn" icon="⛊" default-open>
          <StrategyDivider label="Bounce / Rejection Trades" />
          <StrategyCheckbox label="Initial stop: 2 ticks beyond the S/R zone (beyond the heatmap wall edge)" accent="warn" />
          <StrategyCheckbox label="Tier 1 level: can use tighter stop (4 ticks) — the wall is strong" accent="long" />
          <StrategyCheckbox label="Tier 2-3 level: use standard stop (6 ticks) — less certainty" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />

          <StrategyDivider label="Break Continuation Trades" />
          <StrategyCheckbox label="Initial stop: 2 ticks back through the broken level (the old S/R)" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks — if the level reclaims, the break was false" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven in all cases" accent="long" />

          <StrategyDivider label="Dynamic Stop Adjustment" />
          <StrategyCheckbox label="If heatmap wall THINS while you're in the trade → tighten stop 2 ticks" accent="warn" />
          <StrategyCheckbox label="If LT Pro defending-side liquidity pulls → consider immediate exit" accent="warn" />
          <StrategyCheckbox label="If opposing iceberg appears within 4 ticks of your position → take profit" accent="warn" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Level Quality Warnings" />
          <StrategyCheckbox label="S/R at round number with NO Bookmap confirmation → it's psychological, not structural" accent="short" />
          <StrategyCheckbox label="Level only visible on one Bookmap layer → low conviction, reduce size" accent="short" />
          <StrategyCheckbox label="Level held in low-volume session but untested in high-volume → unproven" accent="warn" />
          <StrategyCheckbox label="Multiple failed tests (4+) → level is weakening even if it hasn't broken yet" accent="warn" />

          <StrategyDivider label="Break Quality Warnings" />
          <StrategyCheckbox label="Break on low volume with no stop cascade → likely false break, don't chase" accent="short" />
          <StrategyCheckbox label="Break during news → unreliable invalidation signal, may reverse" accent="short" />
          <StrategyCheckbox label="Break where price immediately slams into new S/R on the other side → no room" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → S/R levels get blown through erratically" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: S/R from overnight/prior day gets tested chaotically" accent="warn" />
          <StrategyCheckbox label="VIX > 35: S/R breaks more frequently and false breaks are common" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): S/R appears to hold but thin book means fragile defense" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'support-resistance',
  title: 'SUPPORT / RESISTANCE',
  subtitle: 'ES / MES INTRADAY · BOOKMAP CONFIRMATION & INVALIDATION',
  icon: '🧱',
  iconGradient: 'linear-gradient(135deg, #58a6ff 0%, #1f6feb 50%, #388bfd 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'identify', label: 'IDENTIFY', icon: '🔍', color: 'info' },
    { id: 'confirm', label: 'CONFIRM', icon: '✦', color: 'cyan' },
    { id: 'long', label: 'LONG', icon: '▲', color: 'long' },
    { id: 'short', label: 'SHORT', icon: '▼', color: 'short' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Heatmap wall + iceberg + absorption at same price = fortress S/R', color: 'cyan' },
    { text: 'Level holds 3+ tests with CVD divergence = institutional defense', color: 'long' },
    { text: 'Wall breaks on heavy volume + stop cascade = invalidation → flip bias', color: 'short' },
    { text: "Liquidity pulls from level before test = trap S/R, don't trust", color: 'purple' },
    { text: 'Prior-day S/R + fresh iceberg = highest conviction next-day level', color: 'info' },
  ],
  footerTools: 'HEATMAP · S&I TRACKER · LT PRO · ABSORPTION INDICATOR · CVD',
}
</script>
