<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="Stop Tracker Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="S&I On-Chart — Stops" />
          <StrategyCheckbox label="Enable S&I Tracker → 'Show stops' checkbox ON" accent="info" />
          <StrategyCheckbox label="Rithmic: uncheck 'Aggregate quotes', enable 'Plugin mode'" accent="info" />
          <StrategyCheckbox label="Auto size threshold: ON — recalculates per-minute vs SD" sublabel="Stop chains combine multiple triggered stops in same direction — threshold filters noise" accent="info" />
          <StrategyCheckbox label="ES stop filter: ≥ 30 contracts per chain (lower than iceberg — stops are faster events)" accent="info" />
          <StrategyCheckbox label="MES stop filter: ≥ 120 contracts (scale ~4x from ES)" accent="info" />
          <StrategyCheckbox label="Color config: red for sell stops, green for buy stops — matches directional bias" accent="info" />

          <StrategyDivider label="Sub-Chart Config" />
          <StrategyCheckbox label="Stop CVD: SUM mode for cumulative bias, SUM_SAME_SIDE for run isolation" sublabel="SUM_SAME_SIDE resets on direction flip — cleanly isolates each run" accent="info" />
          <StrategyCheckbox label="Symmetric y-axis: ON — centers zero line for balanced visual" accent="info" />
          <StrategyCheckbox label="Alert threshold: set to match on-chart for 1:1 parity" accent="info" />
          <StrategyCheckbox label="Display: vertical bars for discrete stop events, line for cumulative" accent="info" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="S&I Icebergs: ON — stop run INTO iceberg = highest conviction setup" accent="cyan" />
          <StrategyCheckbox label="Heatmap: active — locate liquidity clusters where stops likely rest" accent="cyan" />
          <StrategyCheckbox label="CVD (Cumulative Volume Delta): confirm net aggressive bias post-run" accent="cyan" />
          <StrategyCheckbox label="Volume Dots ≥ 25 lot: spot large aggressive prints during/after the run" accent="cyan" />
          <StrategyCheckbox label="Liquidity Tracker Pro: watch bid/ask liquidity shift post-run" accent="cyan" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="What Is a Stop Run" color="info" icon="◎" default-open>
          <StrategyCheckbox label="Stop orders sit OFF-book — invisible until triggered, then become market orders" sublabel="S&I Tracker detects them post-execution via MBO order lifecycle tracking" accent="info" />
          <StrategyCheckbox label="A stop run = chain of consecutive stops in the same direction sweeping through levels" accent="info" />
          <StrategyCheckbox label="Sub-chart spike shows magnitude: e.g., −33 = 33 sell stops triggered in that run" accent="info" />
          <StrategyCheckbox label="Stops sweep the book: aggressive sell market order takes best bid from 1693.4 → 1692" accent="info" />
        </StrategySection>

        <StrategySection title="Stop Run Variants" color="purple" icon="⚡" default-open>
          <StrategyDivider label="Stop & Hold" />
          <StrategyCheckbox label="Stop run triggers → price HOLDS the new level → continuation signal" sublabel="Stops fueled the move, but new participants step in to defend = momentum is real" accent="long" />
          <StrategyCheckbox label="Confirm: CVD continues in run direction, no reversal candle within 30 sec" accent="long" />

          <StrategyDivider label="Stop & Reverse" />
          <StrategyCheckbox label="Stop run triggers → price REVERSES immediately → trapped flow signal" sublabel="Run exhausted available supply/demand — no follow-through = fade opportunity" accent="short" />
          <StrategyCheckbox label="Confirm: iceberg appears at run terminus, CVD diverges, volume dries up" accent="short" />

          <StrategyDivider label="Dumb & Dumber" />
          <StrategyCheckbox label="Sell stops triggered → buy stops triggered shortly after (or vice versa)" sublabel="Both sides get swept — massive trapped flow creates explosive directional move" accent="orange" />
          <StrategyCheckbox label="Trade: wait for BOTH runs to complete, then join the surviving direction" accent="orange" />

          <StrategyDivider label="Stop Into Ice" />
          <StrategyCheckbox label="Stop run sweeps into an iceberg cluster → iceberg absorbs the run flow" sublabel="Highest conviction reversal — trapped stops + institutional defense = snap-back" accent="cyan" />
          <StrategyCheckbox label="Confirm: iceberg reloads 2+ times during/after the stop run" accent="cyan" />
        </StrategySection>

        <StrategySection title="Reading the Sub-Chart" color="info" icon="📊">
          <StrategyCheckbox label="Spike direction: positive = buy stops (upward sweep), negative = sell stops (downward)" accent="info" />
          <StrategyCheckbox label="Spike magnitude: > 50 contracts on ES = significant run, > 200 = monster" accent="info" />
          <StrategyCheckbox label="Cluster of spikes same direction = extended stop cascade (multi-wave run)" accent="info" />
          <StrategyCheckbox label="Flat line after spike = no continuation — potential reversal zone" accent="warn" />
          <StrategyCheckbox label="Opposite spike follows quickly = Dumb & Dumber pattern" accent="orange" />
        </StrategySection>
      </template>

      <!-- FADE -->
      <template #fade>
        <StrategySection title="Fade the Run — Conditions" color="long" icon="↩" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Stop run occurs at structural level (PDH/PDL, VWAP, prior balance edge, round number)" accent="long" />
          <StrategyCheckbox label="Run direction is COUNTER to broader session bias (counter-trend run)" accent="long" />
          <StrategyCheckbox label="Session context: RTH open > 15 min, not within 5 min of major news" accent="long" />

          <StrategyDivider label="Stop Run Signal" />
          <StrategyCheckbox label="Sub-chart shows significant stop run spike (> 30 contracts ES, > 120 MES)" accent="long" />
          <StrategyCheckbox label="Price penetrates key level by 2-4 ticks then stalls — the sweep is complete" accent="long" />
          <StrategyCheckbox label="No follow-through volume: aggressive orders dry up within 15-30 seconds" accent="long" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="Iceberg cluster appears at or near the run terminus (Stop Into Ice)" accent="long" />
          <StrategyCheckbox label="CVD divergence: run pushed price down but net delta turns positive (or vice versa)" accent="long" />
          <StrategyCheckbox label="Heatmap: liquidity rebuilds on the side price just swept through" accent="long" />
          <StrategyCheckbox label="Volume Dots: large prints appear in reversal direction within 60 sec of run" accent="long" />
        </StrategySection>

        <StrategySection title="Fade — Trigger & Execution" color="long" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: fade the run on first reversal candle after run exhaustion confirms" sublabel="Buy after sell-stop run, sell after buy-stop run — enter 1-2 ticks beyond run apex" accent="long" />
          <StrategyCheckbox label="ALT ENTRY: wait for retest of the run level — if it holds, enter on second touch" accent="long" />
          <StrategyCheckbox label="Position: full size if iceberg confirmed at run terminus, half size without" accent="long" />
        </StrategySection>

        <StrategySection title="Fade — Scale & Trail" color="long" icon="◧">
          <StrategyDivider label="Scale-Out" />
          <StrategyCheckbox label="T1: take 50% at reclaim of pre-run level (+4-6 ticks)" accent="long" />
          <StrategyCheckbox label="T2: take 25% at +8-12 ticks — next structural level or volume node" accent="long" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="long" />

          <StrategyDivider label="Exit Signals" />
          <StrategyCheckbox label="Price fails to reclaim pre-run level within 90 sec → scratch" accent="warn" />
          <StrategyCheckbox label="New stop run triggers in same direction → the move is real, exit" accent="warn" />
          <StrategyCheckbox label="Opposing iceberg appears ahead of your target → take profit" accent="warn" />
        </StrategySection>
      </template>

      <!-- JOIN -->
      <template #join>
        <StrategySection title="Join the Run — Conditions (Stop & Hold)" color="purple" icon="→" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Stop run occurs in DIRECTION of broader session trend" accent="purple" />
          <StrategyCheckbox label="Run breaks through a contested zone — stops clear out weak-hand opposition" accent="purple" />
          <StrategyCheckbox label="Price is not extended (not 3+ ATR from VWAP)" accent="purple" />

          <StrategyDivider label="Stop Run Signal" />
          <StrategyCheckbox label="Sub-chart shows strong stop spike: > 50 contracts ES in one burst" accent="purple" />
          <StrategyCheckbox label="Price clears key level and HOLDS above/below it for 30+ seconds" accent="purple" />
          <StrategyCheckbox label="No immediate reversal candle — price consolidates at new level" accent="purple" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD continues trending in run direction post-sweep" accent="purple" />
          <StrategyCheckbox label="Heatmap: liquidity on the opposite side (where price came from) thins out" accent="purple" />
          <StrategyCheckbox label="New aggressive prints appear in run direction (Volume Dots confirm)" accent="purple" />
          <StrategyCheckbox label="No opposing iceberg cluster within 4 ticks of breakout level" accent="purple" />
        </StrategySection>

        <StrategySection title="Join — Trigger & Execution" color="purple" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: join on the first pullback to the broken level after the run" sublabel="The level that was resistance is now support (or vice versa) — enter on retest" accent="purple" />
          <StrategyCheckbox label="ALT ENTRY: enter on consolidation breakout above/below the run zone" accent="purple" />
          <StrategyCheckbox label="AGGRESSIVE: enter during the run if > 50 stop contracts and CVD confirms" sublabel="Higher risk — requires immediate follow-through or scratch" accent="purple" />
        </StrategySection>

        <StrategySection title="Join — Scale & Trail" color="purple" icon="◧">
          <StrategyDivider label="Scale-Out" />
          <StrategyCheckbox label="T1: take 50% at next structural target (+6-10 ticks from run level)" accent="purple" />
          <StrategyCheckbox label="T2: take 25% at next major liquidity wall or iceberg cluster" accent="purple" />
          <StrategyCheckbox label="Runner: trail 25% with 6-tick trailing stop — continuation trades deserve room" accent="purple" />

          <StrategyDivider label="Exit Signals" />
          <StrategyCheckbox label="Price reclaims pre-run level (broken support/resistance fails to hold) → exit all" accent="warn" />
          <StrategyCheckbox label="Opposing stop run triggers → momentum may be shifting" accent="warn" />
          <StrategyCheckbox label="CVD flattens or diverges from price → exhaustion, tighten stop" accent="warn" />
          <StrategyCheckbox label="Time stop: no new high/low within 2 min of entry → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyDivider label="Fade Trades" />
          <StrategyCheckbox label="Initial stop: 2-3 ticks beyond the stop run apex (the furthest point of the sweep)" sublabel="If the run pushes further, your thesis is wrong — the fade is invalidated" accent="warn" />
          <StrategyCheckbox label="Hard stop MAX: 8 ticks (2 pts ES) — runs can spike, need slightly wider than iceberg plays" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />

          <StrategyDivider label="Continuation Trades" />
          <StrategyCheckbox label="Initial stop: 2 ticks back through the broken level (the old S/R)" accent="warn" />
          <StrategyCheckbox label="Hard stop MAX: 6 ticks (1.5 pts ES) — tighter than fade, level must hold" accent="short" />
          <StrategyCheckbox label="After T1: trail stop below/above last consolidation low/high" accent="long" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Immediate Invalidation" />
          <StrategyCheckbox label="Second stop run in SAME direction within 60 sec = this is real momentum, do NOT fade" accent="short" />
          <StrategyCheckbox label="Stop run on heavy volume (> 2x avg 30s volume) with no iceberg absorption = don't fade" accent="short" />
          <StrategyCheckbox label="Run occurs during news release → chaotic, unreliable signal" accent="short" />
          <StrategyCheckbox label="No CVD divergence after run → no trapped flow to fuel reversal" accent="short" />

          <StrategyDivider label="Regime Filters — No Trade" />
          <StrategyCheckbox label="Within ±2 min of scheduled news (FOMC, CPI, NFP, GDP)" accent="warn" />
          <StrategyCheckbox label="First 5 min of RTH open: stop runs during rotation are noisy" accent="warn" />
          <StrategyCheckbox label="Low-volume drift: < 50% of 20d avg volume — stops trigger erratically" accent="warn" />
          <StrategyCheckbox label="Wide spread chop: ES spread > 1 tick persistently" accent="warn" />
          <StrategyCheckbox label="Extreme VIX (> 35): stop cascades are massive and unpredictable" accent="warn" />

          <StrategyDivider label="Trap Awareness" />
          <StrategyCheckbox label="Stop run at obvious round number with no structural context → likely engineered" sublabel="Institutions hunt stops at obvious levels — the run itself is the trap" accent="short" />
          <StrategyCheckbox label="'Failed level from prior day' + stop run = high conviction next-day trade" sublabel="Pulcini setup: prior-session iceberg/stop zones carry into next session" accent="info" />
          <StrategyCheckbox label="Dumb & Dumber aftermath: wait for BOTH sweeps to complete before committing" accent="orange" />
          <StrategyCheckbox label="Run size mismatch: sub-chart shows small spike but price moved big → algo driven, unreliable" accent="short" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'stop-run',
  title: 'STOP RUN STRATEGY',
  subtitle: 'ES / MES INTRADAY · BOOKMAP S&I TRACKER · MBO DATA',
  icon: '💥',
  iconGradient: 'linear-gradient(135deg, #f85149 0%, #da3633 50%, #8b1a10 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'fade', label: 'FADE', icon: '↩', color: 'long' },
    { id: 'join', label: 'JOIN', icon: '→', color: 'purple' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Stop run INTO iceberg = reversal (fade the run)', color: 'cyan' },
    { text: 'Stop & Hold: run triggers, price holds → continuation', color: 'purple' },
    { text: 'Dumb & Dumber: stops sweep both sides → trade the survivor', color: 'orange' },
    { text: 'Run + CVD divergence = trapped flow, high R:R fade', color: 'long' },
    { text: 'Run without follow-through volume = exhaustion reversal', color: 'warn' },
  ],
  footerTools: 'BOOKMAP S&I TRACKER · MBO BUNDLE · RITHMIC/BOOKMAP DATA',
}
</script>
