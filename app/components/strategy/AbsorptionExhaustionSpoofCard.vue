<template>
  <StrategyCardShell :meta="meta">
      <!-- DETECT -->
      <template #detect>
        <StrategySection title="Setup & Detection Tools" color="info" icon="⚙" default-open>
          <StrategyDivider label="Primary Indicators" />
          <StrategyCheckbox label="Heatmap: core layer — shows where passive liquidity sits and how it reacts" accent="info" />
          <StrategyCheckbox label="Volume Dots: filter ≥ 25 lot on ES — shows aggressive print size and location" accent="info" />
          <StrategyCheckbox label="CVD (Cumulative Volume Delta): net aggressor direction reveals hidden bias" accent="info" />
          <StrategyCheckbox label="Absorption Indicator (Global+): auto-detects passive limit order absorption events" accent="info" />

          <StrategyDivider label="MBO Bundle Layers" />
          <StrategyCheckbox label="S&I Tracker: iceberg detection confirms hidden absorption participants" accent="cyan" />
          <StrategyCheckbox label="Liquidity Tracker Pro: order-level additions/pulls reveal spoof vs genuine" accent="cyan" />
          <StrategyCheckbox label="Liquidity Marker: flags significant liquidity changes within 5-sec windows" accent="cyan" />
          <StrategyCheckbox label="Tradermap Pro: bot filter MEDIUM — isolate human order flow from HFT noise" accent="cyan" />

          <StrategyDivider label="Visual Config" />
          <StrategyCheckbox label="Heatmap smoothing: 'None' when comparing to Liquidity Marker detections" accent="info" />
          <StrategyCheckbox label="Volume Dots clustering: TIME mode for absorption, PRICE mode for exhaustion" accent="info" />
          <StrategyCheckbox label="Order book imbalance: ON — snapshot of bid/ask weight at each price" accent="info" />
        </StrategySection>

        <StrategySection title="Three Phenomena — Quick ID" color="purple" icon="◆">
          <StrategyCheckbox label="ABSORPTION: large volume transacts at a price, price doesn't move → passive wall" sublabel="Heatmap: liquidity keeps reappearing. Volume Dots: heavy prints at same level." accent="cyan" />
          <StrategyCheckbox label="EXHAUSTION: large aggressive prints appear, but price fails to extend → momentum dying" sublabel="Volume Dots: big prints, no follow-through. CVD: flattens or diverges." accent="warn" />
          <StrategyCheckbox label="SPOOF: large orders appear in book, then vanish before being hit → fake intent" sublabel="Heatmap: bright band appears and pulls. LT Pro: shows add → cancel sequence." accent="purple" />
        </StrategySection>
      </template>

      <!-- ABSORB -->
      <template #absorb>
        <StrategySection title="Identifying Absorption" color="cyan" icon="🛡" default-open>
          <StrategyCheckbox label="Price tests a level with heavy aggressive volume — level holds ± 2 ticks" sublabel="Key: the passive side is absorbing all the aggression without breaking" accent="cyan" />
          <StrategyCheckbox label="Heatmap shows liquidity replenishing at the same price after each wave" accent="cyan" />
          <StrategyCheckbox label="Volume Dots: multiple large prints cluster at a single price (not pushing through)" accent="cyan" />
          <StrategyCheckbox label="CVD divergence: net aggressors selling heavily, but price won't drop (or vice versa)" accent="cyan" />
          <StrategyCheckbox label="Absorption Indicator: green (buy absorption) or red (sell absorption) flags on chart" accent="cyan" />
          <StrategyCheckbox label="S&I Tracker: iceberg detections correlate with absorption events" sublabel="Native icebergs + Absorption Indicator often fire together — strong confluence" accent="cyan" />
        </StrategySection>

        <StrategySection title="Trading Absorption — Long Setup" color="long" icon="▲" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Buying absorption detected at structural support (VWAP, PDL, balance low)" accent="long" />
          <StrategyCheckbox label="Sellers hitting bid aggressively but price holds — 3+ waves minimum" accent="long" />
          <StrategyCheckbox label="CVD turning positive while price stabilizes at absorption zone" accent="long" />
          <StrategyCheckbox label="Heatmap: ask-side liquidity thins above → path of least resistance up" accent="long" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="Buy on first uptick after absorption confirms — momentum shift off the wall" accent="long" />
          <StrategyCheckbox label="Scale: T1 at +4-6 ticks (50%), T2 at +8-12 ticks (25%), trail runner" accent="long" />
          <StrategyCheckbox label="Stop: 2 ticks below absorption zone — if the wall breaks, thesis is dead" accent="long" />
        </StrategySection>

        <StrategySection title="Trading Absorption — Short Setup" color="short" icon="▼">
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Selling absorption detected at structural resistance (VWAP, PDH, balance high)" accent="short" />
          <StrategyCheckbox label="Buyers lifting offer aggressively but price caps — 3+ waves minimum" accent="short" />
          <StrategyCheckbox label="CVD turning negative while price stalls at absorption zone" accent="short" />
          <StrategyCheckbox label="Heatmap: bid-side liquidity thins below → path of least resistance down" accent="short" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="Sell on first downtick after absorption confirms" accent="short" />
          <StrategyCheckbox label="Scale: T1 at −4-6 ticks (50%), T2 at −8-12 ticks (25%), trail runner" accent="short" />
          <StrategyCheckbox label="Stop: 2 ticks above absorption zone" accent="short" />
        </StrategySection>
      </template>

      <!-- EXHAUST -->
      <template #exhaust>
        <StrategySection title="Identifying Exhaustion" color="warn" icon="💨" default-open>
          <StrategyCheckbox label="Large aggressive prints fire — but price barely moves or reverses immediately" sublabel="The aggressor is 'spending ammunition' with no reward — momentum is dying" accent="warn" />
          <StrategyCheckbox label="Volume Dots: big green dots at highs → no new high = buy exhaustion" accent="warn" />
          <StrategyCheckbox label="Volume Dots: big red dots at lows → no new low = sell exhaustion" accent="warn" />
          <StrategyCheckbox label="CVD makes new extreme while price doesn't → classic divergence signal" accent="warn" />
          <StrategyCheckbox label="Spread widens on the aggressor side (ask thins on buying push = no new sellers agree)" accent="warn" />
          <StrategyCheckbox label="Follow-through test: no new prints in aggressor direction within 15-30 sec" accent="warn" />
        </StrategySection>

        <StrategySection title="Trading Exhaustion — Reversal" color="long" icon="↩" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Exhaustion occurs at structural level (S/R, VWAP, PDH/PDL, volume node)" accent="long" />
          <StrategyCheckbox label="3-step confirmation: price stalls → CVD diverges → liquidity rebuilds opposing side" accent="long" />
          <StrategyCheckbox label="No new aggressive prints in trend direction for 30+ sec after last big print" accent="long" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="Enter on the FIRST sign of opposing momentum after exhaustion confirms" sublabel="Don't front-run — wait for the stall, then the flip" accent="long" />
          <StrategyCheckbox label="T1: +4-6 ticks (50%), T2: prior level before exhaustion push (25%), trail" accent="long" />
          <StrategyCheckbox label="Stop: 2-3 ticks beyond the exhaustion extreme" accent="long" />

          <StrategyDivider label="Warnings" />
          <StrategyCheckbox label="First stall is often just a pause, not a reversal — wait for CVD flip confirmation" accent="warn" />
          <StrategyCheckbox label="If new large prints resume in trend direction → exhaustion thesis failed, scratch" accent="warn" />
          <StrategyCheckbox label="Exhaustion in a strong trend can just mean consolidation, not reversal" accent="warn" />
        </StrategySection>
      </template>

      <!-- SPOOF -->
      <template #spoof>
        <StrategySection title="Identifying Spoofs" color="purple" icon="👻" default-open>
          <StrategyCheckbox label="Large order appears in book → vanishes before it can be hit" sublabel="Heatmap: bright band flashes at a price then disappears within seconds" accent="purple" />
          <StrategyCheckbox label="LT Pro: shows large add event immediately followed by cancellation" accent="purple" />
          <StrategyCheckbox label="Liquidity Marker: significant increase then decrease at same price, same 5-sec window" accent="purple" />
          <StrategyCheckbox label="No corresponding T&S prints — the order was never executed, only displayed" accent="purple" />
          <StrategyCheckbox label="Repeated pattern: same size appears and pulls 3+ times at different prices" accent="purple" />
          <StrategyCheckbox label="Spoof often appears on the OPPOSITE side of the intended move" sublabel="Fake sell wall to scare longs → real accumulation happening on the bid underneath" accent="purple" />
        </StrategySection>

        <StrategySection title="Spoof Patterns" color="orange" icon="🎭" default-open>
          <StrategyDivider label="Spoof Test" />
          <StrategyCheckbox label="Large offer appears → price dips → offer pulls → price reclaims" sublabel="The spoofer tested if the market would run from the fake wall" accent="orange" />
          <StrategyCheckbox label="If price DOESN'T run: spoofer knows the bid is strong → often triggers a rally" accent="long" />

          <StrategyDivider label="Layered Spoof" />
          <StrategyCheckbox label="Multiple fake orders stacked at consecutive price levels above/below" accent="orange" />
          <StrategyCheckbox label="Creates illusion of massive supply/demand — but it's all fake" accent="orange" />
          <StrategyCheckbox label="When layers pull: price snaps in opposite direction violently" accent="orange" />

          <StrategyDivider label="Spoof + Accumulation" />
          <StrategyCheckbox label="Fake sell wall holds price down → real buying accumulates on bid at lower price" accent="cyan" />
          <StrategyCheckbox label="Once accumulation complete: spoof pulls, price explodes upward" accent="long" />
          <StrategyCheckbox label="Confirm: LT Pro shows consistent bid-side additions while ask-side orders keep cancelling" accent="cyan" />
        </StrategySection>

        <StrategySection title="Trading Spoofs" color="long" icon="⚡">
          <StrategyCheckbox label="NEVER trade the spoof direction — trade the REAL direction underneath" accent="long" />
          <StrategyCheckbox label="Wait for the pull: once spoof orders cancel, enter in opposite direction" sublabel="The spoofer reveals their hand when they pull the fake orders" accent="long" />
          <StrategyCheckbox label="Confirm with CVD: real accumulation shows up as net buying despite visible sell walls" accent="long" />
          <StrategyCheckbox label="Stop: tight, 3-4 ticks — if the move doesn't come quickly after pull, thesis is wrong" accent="warn" />
          <StrategyCheckbox label="Target: back through the spoof zone and beyond — the trapped flow fuels momentum" accent="long" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement by Setup Type" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Absorption reversal: 2 ticks beyond absorption zone — wall must hold" accent="warn" />
          <StrategyCheckbox label="Exhaustion fade: 2-3 ticks beyond the exhaustion extreme — tight invalidation" accent="warn" />
          <StrategyCheckbox label="Spoof fade: 3-4 ticks — slightly wider, spoofs can reappear briefly" accent="warn" />
          <StrategyCheckbox label="All setups: hard MAX 8 ticks (2 pts ES / $100 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: always move to breakeven" accent="long" />
        </StrategySection>

        <StrategySection title="Common Traps & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Absorption Traps" />
          <StrategyCheckbox label="Absorption that BREAKS: wall holds 3 waves then collapses on 4th → continuation, not reversal" accent="short" />
          <StrategyCheckbox label="Partial absorption: level holds but leaks 2-3 ticks each wave → slow bleed, not defense" accent="short" />
          <StrategyCheckbox label="Absorption against news flow: macro data can overwhelm any passive wall" accent="short" />

          <StrategyDivider label="Exhaustion Traps" />
          <StrategyCheckbox label="False exhaustion in strong trend: first stall → brief pause → continuation" sublabel="Requires 30+ sec of no follow-through AND CVD divergence to be genuine" accent="short" />
          <StrategyCheckbox label="Exhaustion into iceberg: price stalls because of hidden order, not because aggressors quit" accent="warn" />

          <StrategyDivider label="Spoof Traps" />
          <StrategyCheckbox label="Genuine large order misidentified as spoof → gets filled, creates real level" accent="short" />
          <StrategyCheckbox label="Multi-layer spoof that actually HOLDS → rare but devastating if you faded it" accent="short" />
          <StrategyCheckbox label="Always cross-reference: spoof thesis needs LT Pro cancel + no T&S prints + CVD divergence" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → all three signals unreliable" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: opening rotation creates false absorption/exhaustion reads" accent="warn" />
          <StrategyCheckbox label="VIX > 35: spoofs are rampant, absorption walls break more often" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): spoofs have outsized impact, absorption signals weak" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'absorption-exhaustion-spoof',
  title: 'ABSORPTION / EXHAUSTION / SPOOF',
  subtitle: 'ES / MES INTRADAY · ORDER FLOW MICROSTRUCTURE',
  icon: '⚖',
  iconGradient: 'linear-gradient(135deg, #39d2c0 0%, #1a8a7e 50%, #0d4945 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'detect', label: 'DETECT', icon: '◎', color: 'info' },
    { id: 'absorb', label: 'ABSORB', icon: '🛡', color: 'cyan' },
    { id: 'exhaust', label: 'EXHAUST', icon: '💨', color: 'warn' },
    { id: 'spoof', label: 'SPOOF', icon: '👻', color: 'purple' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'short' },
  ],
  highConviction: [
    { text: 'Absorption + CVD divergence = reversal imminent', color: 'cyan' },
    { text: 'Exhaustion: large prints → no follow-through = fade', color: 'warn' },
    { text: 'Spoof pull + momentum flip = real direction revealed', color: 'purple' },
    { text: 'Absorption at key level + liquidity thinning ahead = low-risk entry', color: 'long' },
    { text: 'Stacked spoofs → accumulation underneath = classic trap', color: 'orange' },
  ],
  footerTools: 'HEATMAP · VOLUME DOTS · CVD · LT PRO · ABSORPTION INDICATOR',
}
</script>
