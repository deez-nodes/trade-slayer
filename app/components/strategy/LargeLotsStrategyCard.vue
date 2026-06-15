<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="Volume Dots / Large Lot Tracker Config" color="info" icon="⚙" default-open>
          <StrategyDivider label="On-Chart — Volume Dots" />
          <StrategyCheckbox label="Enable Volume Dots add-on: shows circles at the price where large trades print" sublabel="Dot size scales with trade size — bigger dot = bigger print" accent="info" />
          <StrategyCheckbox label="ES threshold: ≥ 25 contracts per print (filters out retail noise)" accent="info" />
          <StrategyCheckbox label="MES threshold: ≥ 100 contracts (scale ~4x from ES)" accent="info" />
          <StrategyCheckbox label="Significant threshold: ≥ 50 contracts ES / ≥ 200 MES for 'monster' prints" accent="info" />
          <StrategyCheckbox label="Color: green dots = aggressive buy (traded at ask), red dots = aggressive sell (traded at bid)" accent="info" />
          <StrategyCheckbox label="Clustering mode: PRICE for S/R analysis, TIME for momentum/exhaustion reads" sublabel="PRICE: groups dots at same price level. TIME: spreads across timeline for sequence analysis" accent="info" />
          <StrategyCheckbox label="Opacity: filter small prints to 40% opacity — keep them visible but dimmed" accent="info" />

          <StrategyDivider label="Sub-Chart Config" />
          <StrategyCheckbox label="Large Lot Tracker sub-chart: shows cumulative large-lot volume bias" accent="info" />
          <StrategyCheckbox label="SUM mode: running total of large buy vs sell prints — directional bias" accent="info" />
          <StrategyCheckbox label="Alert threshold: match on-chart min size for 1:1 parity" accent="info" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="Heatmap: confirms whether large prints are hitting into passive liquidity walls" accent="cyan" />
          <StrategyCheckbox label="CVD: compare large-lot bias vs overall CVD — divergence = institutional vs retail split" accent="cyan" />
          <StrategyCheckbox label="S&I Tracker: large lots co-located with iceberg = hidden institutional defense" accent="cyan" />
          <StrategyCheckbox label="LT Pro: large aggressive prints near LT Pro imbalance zones = conviction" accent="cyan" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="What Large Lots Tell You" color="info" icon="◎" default-open>
          <StrategyCheckbox label="Large lots are AGGRESSIVE orders: they cross the spread to execute immediately" sublabel="A 50-lot buy at the ask = someone paying up for immediate entry = conviction" accent="info" />
          <StrategyCheckbox label="They are NOT the same as resting orders — these prints appear on T&S, not in the book" accent="info" />
          <StrategyCheckbox label="Single large lot = one participant taking a position or adding to one" accent="info" />
          <StrategyCheckbox label="Cluster of large lots = multiple participants or repeated entries = institutional activity" accent="info" />
          <StrategyCheckbox label="Large lot AT a key level = the participant chose that price deliberately" accent="info" />
          <StrategyCheckbox label="Large lot in open space = momentum trade or stop-market execution" accent="info" />
        </StrategySection>

        <StrategySection title="Large Lot Patterns" color="purple" icon="◆" default-open>
          <StrategyDivider label="Absorption Prints" />
          <StrategyCheckbox label="Large sell prints cluster at a price, but price holds → passive buy wall is absorbing" sublabel="Red dots stacking at support with no breakdown = bullish absorption signal" accent="long" />
          <StrategyCheckbox label="Large buy prints cluster at a price, but price caps → passive sell wall is absorbing" accent="short" />
          <StrategyCheckbox label="Confirmation: iceberg detected at the same price as the large-lot cluster" accent="cyan" />

          <StrategyDivider label="Exhaustion Prints" />
          <StrategyCheckbox label="Large buy prints at highs → no new high follows within 30 sec = buy exhaustion" sublabel="The biggest buyer already fired — if price can't extend, momentum is dead" accent="warn" />
          <StrategyCheckbox label="Large sell prints at lows → no new low follows within 30 sec = sell exhaustion" accent="warn" />
          <StrategyCheckbox label="Exhaustion + CVD divergence → strongest reversal signal" accent="warn" />

          <StrategyDivider label="Momentum Prints" />
          <StrategyCheckbox label="Consecutive large lots in same direction, each at new price = momentum confirmation" accent="long" />
          <StrategyCheckbox label="Large lots driving through LVN (low volume node) = fast continuation move" accent="long" />
          <StrategyCheckbox label="Increasing print size in trend direction = accumulating conviction, not exhausting" accent="long" />

          <StrategyDivider label="Reversal Prints" />
          <StrategyCheckbox label="Large lot fires in OPPOSITE direction after stop run = real money fading the move" accent="orange" />
          <StrategyCheckbox label="Large buy print at bottom of sell cascade = institutional bottom-picking" accent="orange" />
          <StrategyCheckbox label="Context matters: reversal print at structural level >> reversal print in open space" accent="orange" />
        </StrategySection>

        <StrategySection title="Sub-Chart: Large Lot CVD" color="info" icon="📊">
          <StrategyCheckbox label="Rising large-lot CVD: more big buys than big sells = institutional bid bias" accent="long" />
          <StrategyCheckbox label="Falling large-lot CVD: more big sells than big buys = institutional offer bias" accent="short" />
          <StrategyCheckbox label="Large-lot CVD diverges from price: institutions positioning against the move" accent="warn" />
          <StrategyCheckbox label="Large-lot CVD diverges from regular CVD: 'smart money' disagrees with aggregate flow" sublabel="This is the highest-value read — when big players go opposite to the crowd" accent="cyan" />
          <StrategyCheckbox label="Flat large-lot CVD during trend: no institutional participation → trend is retail-driven, fragile" accent="warn" />
        </StrategySection>
      </template>

      <!-- LONG -->
      <template #long>
        <StrategySection title="Long Entry — Conditions" color="long" icon="▲" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural support (VWAP, PDL, HVN, prior balance low)" accent="long" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="long" />
          <StrategyCheckbox label="Broader bias not aggressively bearish" accent="long" />

          <StrategyDivider label="Large Lot Signal" />
          <StrategyCheckbox label="Large buy prints (green dots) cluster at support — 2+ prints within 4 ticks" accent="long" />
          <StrategyCheckbox label="OR: large sell prints absorbed at support (red dots cluster, price holds = absorption)" accent="long" />
          <StrategyCheckbox label="Large-lot sub-chart CVD turning positive at the support level" accent="long" />
          <StrategyCheckbox label="Print size increasing on successive buy prints = growing conviction" accent="long" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="Regular CVD aligns with large-lot direction (both turning positive)" accent="long" />
          <StrategyCheckbox label="Heatmap: ask-side liquidity thinning above → path of least resistance up" accent="long" />
          <StrategyCheckbox label="Iceberg or absorption detected at same level as large buy prints" accent="long" />
          <StrategyCheckbox label="No large sell prints appearing above within 4 ticks (no seller stepping in)" accent="long" />
        </StrategySection>

        <StrategySection title="Long Entry — Trigger & Exit" color="long" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: buy on first uptick after large buy lot confirms at support" sublabel="Limit 1-2 ticks above the last large buy print price" accent="long" />
          <StrategyCheckbox label="ALT: buy on momentum shift after sell exhaustion prints (large red dots, no new low)" accent="long" />
          <StrategyCheckbox label="T1: +4-6 ticks (50%) — VWAP or first resistance level" accent="long" />
          <StrategyCheckbox label="T2: +8-12 ticks (25%) — next S/R or where large ask prints cluster" accent="long" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="long" />
          <StrategyCheckbox label="EXIT: large sell prints appear above your entry → new seller, take profit" accent="warn" />
          <StrategyCheckbox label="EXIT: large-lot CVD rolls over → institutional buying has stopped" accent="warn" />
          <StrategyCheckbox label="Time stop: no +2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- SHORT -->
      <template #short>
        <StrategySection title="Short Entry — Conditions" color="short" icon="▼" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural resistance (VWAP, PDH, HVN, prior balance high)" accent="short" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="short" />
          <StrategyCheckbox label="Broader bias not aggressively bullish" accent="short" />

          <StrategyDivider label="Large Lot Signal" />
          <StrategyCheckbox label="Large sell prints (red dots) cluster at resistance — 2+ prints within 4 ticks" accent="short" />
          <StrategyCheckbox label="OR: large buy prints absorbed at resistance (green dots cluster, price caps = absorption)" accent="short" />
          <StrategyCheckbox label="Large-lot sub-chart CVD turning negative at the resistance level" accent="short" />
          <StrategyCheckbox label="Print size increasing on successive sell prints = growing conviction" accent="short" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="Regular CVD aligns with large-lot direction (both turning negative)" accent="short" />
          <StrategyCheckbox label="Heatmap: bid-side liquidity thinning below → path of least resistance down" accent="short" />
          <StrategyCheckbox label="Iceberg or absorption detected at same level as large sell prints" accent="short" />
          <StrategyCheckbox label="No large buy prints appearing below within 4 ticks (no buyer stepping in)" accent="short" />
        </StrategySection>

        <StrategySection title="Short Entry — Trigger & Exit" color="short" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: sell on first downtick after large sell lot confirms at resistance" sublabel="Limit 1-2 ticks below the last large sell print price" accent="short" />
          <StrategyCheckbox label="ALT: sell on momentum shift after buy exhaustion prints (large green dots, no new high)" accent="short" />
          <StrategyCheckbox label="T1: −4-6 ticks (50%) — VWAP or first support level" accent="short" />
          <StrategyCheckbox label="T2: −8-12 ticks (25%) — next S/R or where large bid prints cluster" accent="short" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="short" />
          <StrategyCheckbox label="EXIT: large buy prints appear below your entry → new buyer, cover" accent="warn" />
          <StrategyCheckbox label="EXIT: large-lot CVD surges positive → institutional selling has stopped" accent="warn" />
          <StrategyCheckbox label="Time stop: no −2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Initial stop: 2 ticks beyond the large-lot cluster price" sublabel="If the institutional print zone breaks, your thesis is wrong" accent="warn" />
          <StrategyCheckbox label="Absorption setup: 2 ticks beyond the absorption zone (tighter — wall must hold)" accent="warn" />
          <StrategyCheckbox label="Exhaustion fade: 2-3 ticks beyond the exhaustion extreme" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Signal Quality" />
          <StrategyCheckbox label="Single large lot in isolation = noise — require 2+ prints or cluster for conviction" accent="short" />
          <StrategyCheckbox label="Large lot with no structural context (random price level) = low conviction" accent="short" />
          <StrategyCheckbox label="Large lot during news event = reactive, not planned — lower reliability" accent="short" />
          <StrategyCheckbox label="Large lot that doesn't move price at ALL = it was absorbed, not momentum" sublabel="Context dependent: absorption at S/R is bullish, absorption mid-move is neutral" accent="warn" />

          <StrategyDivider label="Traps" />
          <StrategyCheckbox label="Large buy prints at highs in downtrend = short covering, not new longs → don't go long" accent="short" />
          <StrategyCheckbox label="Large sell prints at lows in uptrend = profit taking, not new shorts → don't go short" accent="short" />
          <StrategyCheckbox label="Distinguish: is the large lot INITIATING or LIQUIDATING a position?" sublabel="Check context: initiation = at S/R, fresh move. Liquidation = after extended run." accent="warn" />
          <StrategyCheckbox label="HFT spoofing via large aggressive prints: rare but exists — confirm with iceberg/LT Pro" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → large lots are reactive, not predictive" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: large lots during opening rotation are often inventory management" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): large lots have outsized impact, signals exaggerated" accent="warn" />
          <StrategyCheckbox label="VIX > 35: large lots more frequent but less reliable — everyone is trading big in panic" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'large-lots',
  title: 'LARGE LOTS INDICATOR',
  subtitle: 'ES / MES INTRADAY · VOLUME DOTS · AGGRESSIVE PRINT TRACKING',
  icon: '🎯',
  iconGradient: 'linear-gradient(135deg, #f0883e 0%, #d2691e 50%, #8b4513 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'long', label: 'LONG', icon: '▲', color: 'long' },
    { id: 'short', label: 'SHORT', icon: '▼', color: 'short' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Large lots cluster at S/R + absorption = institutional commitment', color: 'cyan' },
    { text: 'Large buy prints with no new high = buy exhaustion → fade', color: 'warn' },
    { text: 'Large lots AFTER stop run = real money entering, high R:R', color: 'purple' },
    { text: 'Consecutive large lots same direction = momentum confirmation', color: 'long' },
    { text: 'Large lots vs price divergence = trapped flow signal', color: 'orange' },
  ],
  footerTools: 'VOLUME DOTS · LARGE LOT TRACKER · T&S PRINTS · CVD',
}
</script>
