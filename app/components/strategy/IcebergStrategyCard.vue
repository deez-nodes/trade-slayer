<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="Indicator Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="Stops & Icebergs On-Chart" />
          <StrategyCheckbox label="Enable S&I Tracker add-on → MBO bundle required" accent="info" />
          <StrategyCheckbox label="Rithmic: uncheck 'Aggregate quotes', enable 'Plugin mode'" accent="info" />
          <StrategyCheckbox label="Auto size threshold: ON — recalculates per-minute vs SD" sublabel="Override manually if too much noise: bump individual threshold 25–50% above auto" accent="info" />
          <StrategyCheckbox label="ES filter: ≥ 50 contracts per iceberg (default auto, raise in high-vol sessions)" accent="info" />
          <StrategyCheckbox label="MES filter: ≥ 200 contracts (scale ~4x from ES due to 1/5 multiplier)" accent="info" />
          <StrategyCheckbox label="Aggregation filter: set above half your individual threshold to collapse clusters" accent="info" />
          <StrategyCheckbox label="Filtered icons: semi-transparent at 40% opacity — don't hide, just dim" accent="info" />

          <StrategyDivider label="Sub-Chart Config" />
          <StrategyCheckbox label="Accumulation mode: SUM for trend bias, EXPONENTIAL (1min half-life) for momentum" accent="info" />
          <StrategyCheckbox label="Iceberg CVD line: blue for buy icebergs, orange for sell icebergs" accent="info" />
          <StrategyCheckbox label="Alert threshold: match on-chart threshold for 1:1 alert-to-visual parity" accent="info" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="Heatmap: active — watch for liquidity walls reappearing at same price" accent="cyan" />
          <StrategyCheckbox label="Volume Dots / Large Lot Tracker: filter ≥ 25 lot on ES" accent="cyan" />
          <StrategyCheckbox label="CVD (Cumulative Volume Delta): confirm net aggressive bias" accent="cyan" />
          <StrategyCheckbox label="Strength Level Indicator: 5ms delay, corroborates hidden liquidity" accent="cyan" />
          <StrategyCheckbox label="Tradermap Pro: bot filter sensitivity MEDIUM for ES/MES" accent="cyan" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="Genuine Accumulation vs Spoof" color="info" icon="◎" default-open>
          <StrategyCheckbox label="GENUINE: iceberg absorbs 3+ aggressive waves, price holds ± 2 ticks" sublabel="Hidden liquidity keeps reloading at the same price — wall doesn't move" accent="long" />
          <StrategyCheckbox label="GENUINE: iceberg size stays consistent or grows across reloads" accent="long" />
          <StrategyCheckbox label="GENUINE: delta diverges from price — selling into it but price won't drop" accent="long" />
          <StrategyCheckbox label="SPOOF: iceberg flashes then disappears before significant fills" sublabel="Size never actually transacts — it's pulled, not absorbed" accent="short" />
          <StrategyCheckbox label="SPOOF: iceberg appears only during fast moves (momentum chasing, not defending)" accent="short" />
          <StrategyCheckbox label="SPOOF: no corresponding print on T&S — order book ghost" accent="short" />
        </StrategySection>

        <StrategySection title="Bid vs Ask Iceberg Intent" color="purple" icon="⇅" default-open>
          <StrategyCheckbox label="BID-SIDE iceberg: hidden buy orders absorbing market sells" sublabel="Bullish intent — large buyer defending a floor" accent="long" />
          <StrategyCheckbox label="ASK-SIDE iceberg: hidden sell orders absorbing market buys" sublabel="Bearish intent — large seller capping a ceiling" accent="short" />
          <StrategyCheckbox label="BOTH SIDES at same level = contested zone → wait for one side to exhaust" accent="warn" />
        </StrategySection>

        <StrategySection title="Clusters vs Isolated Fills" color="cyan" icon="◆">
          <StrategyCheckbox label="CLUSTER: 3+ iceberg detections within 2-4 ticks = institutional zone" sublabel="Higher conviction — treat as major S/R until broken" accent="info" />
          <StrategyCheckbox label="ISOLATED: single iceberg fill with no follow-through = low conviction" sublabel="May be algo noise or partial fill — don't trade alone" accent="neutral" />
          <StrategyCheckbox label="STACKED: icebergs at consecutive tick levels = aggressive campaign" accent="info" />
        </StrategySection>

        <StrategySection title="Confirmation Signals" color="info" icon="✦">
          <StrategyCheckbox label="CVD divergence: net aggressor direction opposes price move at iceberg" accent="info" />
          <StrategyCheckbox label="Large lot prints co-located with iceberg level (Volume Dots)" accent="info" />
          <StrategyCheckbox label="Heatmap shows liquidity replenishing at exact iceberg price" accent="info" />
          <StrategyCheckbox label="Sub-chart iceberg CVD trending in direction of iceberg defense" accent="info" />
          <StrategyCheckbox label="Stop run INTO iceberg → trapped shorts/longs fuel reversal" accent="info" />
        </StrategySection>
      </template>

      <!-- LONG -->
      <template #long>
        <StrategySection title="Long Entry — Conditions" color="long" icon="▲" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural support (VWAP, PDL, prior balance low, round number)" accent="long" />
          <StrategyCheckbox label="Session context: RTH open > 15 min, not within 5 min of major news" accent="long" />
          <StrategyCheckbox label="Broader bias not aggressively bearish (no panic flush / limit-down)" accent="long" />

          <StrategyDivider label="Iceberg Signal" />
          <StrategyCheckbox label="BID-side iceberg cluster detected: ≥ 2 icebergs within 4 ticks" accent="long" />
          <StrategyCheckbox label="Iceberg absorbs ≥ 3 waves of aggressive selling — price holds" accent="long" />
          <StrategyCheckbox label="Iceberg reloads at same price (repeated refills visible on heatmap)" accent="long" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD flattens or turns positive while price holds at iceberg level" accent="long" />
          <StrategyCheckbox label="Sell-side momentum exhausts: smaller prints, wider spread on ask" accent="long" />
          <StrategyCheckbox label="Heatmap: ask-side liquidity thins above iceberg (path of least resistance up)" accent="long" />
        </StrategySection>

        <StrategySection title="Long Entry — Trigger" color="long" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: Buy on first uptick off iceberg level after absorption confirms" sublabel="Limit order 1-2 ticks above iceberg price, or market on clear momentum shift" accent="long" />
          <StrategyCheckbox label="ALT ENTRY: buy the pullback retest of a 'broken ice' (failed sell iceberg above)" accent="long" />
        </StrategySection>

        <StrategySection title="Long Exit — Scale & Trail" color="long" icon="◧">
          <StrategyDivider label="Scale-Out Rules" />
          <StrategyCheckbox label="T1: take 50% at +4–6 ticks (1–1.5 pts ES) — first resistance or VWAP" accent="long" />
          <StrategyCheckbox label="T2: take 25% at +8–12 ticks — next iceberg cluster or volume node" accent="long" />
          <StrategyCheckbox label="Runner: trail final 25% with 4-tick trailing stop below last swing low" accent="long" />

          <StrategyDivider label="Exit Signals" />
          <StrategyCheckbox label="ASK-side iceberg appears above → new seller defending = exit remaining" accent="warn" />
          <StrategyCheckbox label="CVD rolls over sharply while price stalls → exhaustion, flatten" accent="warn" />
          <StrategyCheckbox label="Time stop: no +2 tick move within 90 sec of entry → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- SHORT -->
      <template #short>
        <StrategySection title="Short Entry — Conditions" color="short" icon="▼" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural resistance (VWAP, PDH, prior balance high, round number)" accent="short" />
          <StrategyCheckbox label="Session context: RTH open > 15 min, not within 5 min of major news" accent="short" />
          <StrategyCheckbox label="Broader bias not aggressively bullish (no melt-up / short squeeze)" accent="short" />

          <StrategyDivider label="Iceberg Signal" />
          <StrategyCheckbox label="ASK-side iceberg cluster detected: ≥ 2 icebergs within 4 ticks" accent="short" />
          <StrategyCheckbox label="Iceberg absorbs ≥ 3 waves of aggressive buying — price caps" accent="short" />
          <StrategyCheckbox label="Iceberg reloads at same price (hidden seller keeps refilling)" accent="short" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD flattens or turns negative while price stalls at iceberg level" accent="short" />
          <StrategyCheckbox label="Buy-side momentum exhausts: smaller prints, wider spread on bid" accent="short" />
          <StrategyCheckbox label="Heatmap: bid-side liquidity thins below iceberg (path of least resistance down)" accent="short" />
        </StrategySection>

        <StrategySection title="Short Entry — Trigger" color="short" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: Sell on first downtick off iceberg level after absorption confirms" sublabel="Limit order 1-2 ticks below iceberg price, or market on clear momentum shift" accent="short" />
          <StrategyCheckbox label="ALT ENTRY: sell the rally retest of a 'broken ice' (failed buy iceberg below)" accent="short" />
        </StrategySection>

        <StrategySection title="Short Exit — Scale & Trail" color="short" icon="◧">
          <StrategyDivider label="Scale-Out Rules" />
          <StrategyCheckbox label="T1: cover 50% at −4–6 ticks (1–1.5 pts ES) — first support or VWAP" accent="short" />
          <StrategyCheckbox label="T2: cover 25% at −8–12 ticks — next iceberg cluster or volume node" accent="short" />
          <StrategyCheckbox label="Runner: trail final 25% with 4-tick trailing stop above last swing high" accent="short" />

          <StrategyDivider label="Exit Signals" />
          <StrategyCheckbox label="BID-side iceberg appears below → new buyer defending = cover remaining" accent="warn" />
          <StrategyCheckbox label="CVD surges positive while price holds → absorption, flatten" accent="warn" />
          <StrategyCheckbox label="Time stop: no −2 tick move within 90 sec of entry → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Initial stop: 2 ticks beyond the far edge of iceberg cluster" sublabel="If iceberg at 5200.00, stop at 5199.50 (long) — the wall must hold" accent="warn" />
          <StrategyCheckbox label="Hard stop MAX: 6 ticks (1.5 pts ES / $75 per MES) — never wider" accent="short" />
          <StrategyCheckbox label="If iceberg is thin (< 3 reloads), tighten to 4 ticks" accent="warn" />
          <StrategyCheckbox label="After T1 hit: move stop to breakeven" accent="long" />
          <StrategyCheckbox label="Context adj: widen 1-2 ticks during high-vol events (FOMC, NFP) if trading at all" accent="warn" />
          <StrategyCheckbox label="'Broken Ice' stop: place stop 1 tick beyond the failed iceberg level" sublabel="The level already proved it couldn't hold — tight invalidation" accent="warn" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Immediate Invalidation" />
          <StrategyCheckbox label="Iceberg stops reloading mid-absorption → defender pulled out, DO NOT ENTER" accent="short" />
          <StrategyCheckbox label="Price slices through iceberg cluster on heavy volume → broken, flip bias" sublabel="This is the 'Broken Ice' setup — the failed iceberg becomes your signal" accent="short" />
          <StrategyCheckbox label="Opposing iceberg appears within 4 ticks → contested zone, stand aside" accent="short" />
          <StrategyCheckbox label="Large stop run triggers INTO your iceberg level → trapped flow may be deceptive" accent="warn" />

          <StrategyDivider label="Regime Filters — No Trade" />
          <StrategyCheckbox label="Within ±2 min of scheduled news (FOMC, CPI, NFP, GDP)" accent="warn" />
          <StrategyCheckbox label="Low-volume drift: < 50% of 20d avg volume for current 30m bar" accent="warn" />
          <StrategyCheckbox label="Wide-spread chop: ES spread persistently > 1 tick" accent="warn" />
          <StrategyCheckbox label="Pre-market / Globex-only session (unless confirmed with overnight context)" accent="warn" />
          <StrategyCheckbox label="First 5 min of RTH open: iceberg detection unreliable during opening rotation" accent="warn" />
          <StrategyCheckbox label="Extreme VIX regime (> 35): iceberg refill rates erratic, false positives spike" accent="warn" />

          <StrategyDivider label="Trap Awareness" />
          <StrategyCheckbox label="Iceberg appears RIGHT at a round number with no prior structure → likely bait" accent="short" />
          <StrategyCheckbox label="Single iceberg with zero cluster support → isolated noise, not institutional" accent="short" />
          <StrategyCheckbox label="Iceberg contradicts all higher-TF bias → counter-trend trap probability high" accent="short" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'iceberg',
  title: 'ICEBERG ORDER STRATEGY',
  subtitle: 'ES / MES INTRADAY · BOOKMAP S&I TRACKER',
  icon: '🧊',
  iconGradient: 'linear-gradient(135deg, #58a6ff 0%, #1f6feb 50%, #0d419d 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'long', label: 'LONG', icon: '▲', color: 'long' },
    { id: 'short', label: 'SHORT', icon: '▼', color: 'short' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Iceberg absorbs 3+ waves → fade direction', color: 'cyan' },
    { text: 'Cluster at VWAP/PDH/PDL = institutional defense', color: 'info' },
    { text: 'Broken Ice = failed iceberg → strong continuation', color: 'purple' },
    { text: 'Iceberg + delta divergence = reversal imminent', color: 'long' },
    { text: 'Exhausted reload (iceberg stops refilling) = breakout', color: 'warn' },
  ],
  footerTools: 'BOOKMAP S&I TRACKER · MBO BUNDLE · RITHMIC/BOOKMAP DATA',
}
</script>
