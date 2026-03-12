<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="Volume Bubbles Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="Core Settings" />
          <StrategyCheckbox label="Bookmap Volume Bubbles: circle overlays on price ladder showing volume at each tick" sublabel="Size = total volume. Color = delta (green = net buy, red = net sell). Position = price level." accent="info" />
          <StrategyCheckbox label="Aggregation period: 1-5 min candles — each candle shows a column of bubbles" sublabel="1 min = granular micro-reads. 5 min = cleaner patterns, less noise." accent="info" />
          <StrategyCheckbox label="Size threshold: filter out tiny bubbles (< 50 contracts ES) to reduce visual clutter" accent="info" />
          <StrategyCheckbox label="Color mode: DELTA — green when ask vol > bid vol, red when bid vol > ask vol" accent="info" />
          <StrategyCheckbox label="Transparency: enable opacity scaling — bigger bubbles more opaque, small ones translucent" accent="info" />

          <StrategyDivider label="Display Options" />
          <StrategyCheckbox label="Bubble outline mode: shows size via circle diameter, delta via fill color" accent="info" />
          <StrategyCheckbox label="Numbers on bubbles: ON for exact volume count on significant bubbles" accent="info" />
          <StrategyCheckbox label="Overlay on heatmap: bubbles sit atop heatmap — see traded volume vs resting liquidity" sublabel="Heatmap = where orders SIT. Bubbles = where orders TRADE. Powerful combination." accent="info" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="Heatmap: resting liquidity vs bubble traded volume = absorption detection" accent="cyan" />
          <StrategyCheckbox label="Volume Profile: bubbles are the real-time building blocks of the profile" accent="cyan" />
          <StrategyCheckbox label="CVD: aggregate of all bubble deltas — confirms overall bias" accent="cyan" />
          <StrategyCheckbox label="Volume Dots: large individual trades within the aggregated bubble" accent="cyan" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="Reading Volume Bubbles" color="info" icon="◎" default-open>
          <StrategyCheckbox label="BUBBLE SIZE: total volume traded at that price in that time period" sublabel="Large bubble = many contracts exchanged = significant price level. Small = light interest." accent="info" />
          <StrategyCheckbox label="BUBBLE COLOR (delta): green = more aggressive buys, red = more aggressive sells" accent="info" />
          <StrategyCheckbox label="BUBBLE POSITION: y-axis = price, x-axis = time — creates real-time footprint map" accent="info" />
          <StrategyCheckbox label="Adjacent bubbles same size/color = volume consistency → trend supported by participation" accent="long" />
          <StrategyCheckbox label="Bubble size shrinking in trend = participation fading → trend weakening" accent="warn" />
          <StrategyCheckbox label="No bubbles (gap) between price levels = LVN / fast-travel zone" accent="warn" />
        </StrategySection>

        <StrategySection title="Bubble Patterns" color="purple" icon="◆" default-open>
          <StrategyDivider label="Absorption Bubbles" />
          <StrategyCheckbox label="Large RED bubble at support + price holds = sell volume absorbed by passive buyers" sublabel="Big volume traded at bid (aggressive selling) but price didn't break → bullish" accent="long" />
          <StrategyCheckbox label="Large GREEN bubble at resistance + price holds = buy volume absorbed by passive sellers" accent="short" />
          <StrategyCheckbox label="Successive absorption bubbles at same price = institutional wall defending" accent="cyan" />

          <StrategyDivider label="Exhaustion Bubbles" />
          <StrategyCheckbox label="Large GREEN bubble at a high → next bubble smaller or red = buy exhaustion" sublabel="Biggest buyer already fired their shot — subsequent weakness confirms top" accent="warn" />
          <StrategyCheckbox label="Large RED bubble at a low → next bubble smaller or green = sell exhaustion" accent="warn" />
          <StrategyCheckbox label="Exhaustion: the bubble BEFORE the reversal is the largest in the sequence" accent="warn" />

          <StrategyDivider label="Momentum Bubbles" />
          <StrategyCheckbox label="Ascending green bubbles of consistent or growing size = healthy buying momentum" accent="long" />
          <StrategyCheckbox label="Descending red bubbles of consistent or growing size = healthy selling momentum" accent="short" />
          <StrategyCheckbox label="Bubbles getting BIGGER in trend direction = momentum accelerating → ride it" accent="long" />
          <StrategyCheckbox label="Bubbles getting SMALLER in trend direction = momentum fading → tighten or exit" accent="warn" />

          <StrategyDivider label="Delta Flip" />
          <StrategyCheckbox label="Bubble sequence shifts from green → red at highs = demand-to-supply transition" accent="short" />
          <StrategyCheckbox label="Bubble sequence shifts from red → green at lows = supply-to-demand transition" accent="long" />
          <StrategyCheckbox label="Delta flip at key level (VWAP, PDH/PDL, HVN) = highest conviction reversal signal" accent="orange" />
          <StrategyCheckbox label="The flip bubble itself is often the largest in the group — the turning point" accent="orange" />
        </StrategySection>

        <StrategySection title="Bubbles + Heatmap Integration" color="cyan" icon="🔗">
          <StrategyCheckbox label="Large bubble ON bright heatmap = volume traded INTO resting liquidity = absorption" accent="cyan" />
          <StrategyCheckbox label="Large bubble where heatmap is dim = volume traded in thin area = momentum/breakout" accent="cyan" />
          <StrategyCheckbox label="Heatmap band with NO bubble = liquidity sitting there but never tested = untested S/R" accent="info" />
          <StrategyCheckbox label="Bubble with NO heatmap = aggressive trade with no passive defense = momentum print" accent="info" />
          <StrategyCheckbox label="Both large bubble AND bright heatmap at same price = heavily contested zone" sublabel="This is where the battle happens — the winner determines next direction" accent="purple" />
        </StrategySection>
      </template>

      <!-- LONG -->
      <template #long>
        <StrategySection title="Long Entry — Conditions" color="long" icon="▲" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural support (VWAP, PDL, HVN, balance low)" accent="long" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="long" />
          <StrategyCheckbox label="Profile shape: not B-shaped (avoid buying in selling trend)" accent="long" />

          <StrategyDivider label="Bubble Signal" />
          <StrategyCheckbox label="Large RED bubble(s) at support with price holding = sell volume being absorbed" accent="long" />
          <StrategyCheckbox label="Delta flip: red bubbles transition to green at support level" accent="long" />
          <StrategyCheckbox label="Bubble size growing on green side, shrinking on red = demand overtaking supply" accent="long" />
          <StrategyCheckbox label="Bubble gap above: no significant bubbles overhead = path clear for upside" accent="long" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="Heatmap bright at support where absorption bubbles appear = passive defense confirmed" accent="long" />
          <StrategyCheckbox label="CVD turning positive — aggregate flow aligning with bubble delta flip" accent="long" />
          <StrategyCheckbox label="Volume Dots: large buy prints co-located with green bubbles" accent="long" />
          <StrategyCheckbox label="Next bubbles above are small or nonexistent = low resistance ahead" accent="long" />
        </StrategySection>

        <StrategySection title="Long Entry — Trigger & Exit" color="long" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: buy on first uptick after delta flip confirms green at support" sublabel="Limit 1-2 ticks above the absorption bubble price" accent="long" />
          <StrategyCheckbox label="ALT: buy when green bubbles start stacking upward from support (momentum entry)" accent="long" />
          <StrategyCheckbox label="T1: +4-6 ticks (50%) — first level with large prior bubbles (contested zone)" accent="long" />
          <StrategyCheckbox label="T2: +8-12 ticks (25%) — next HVN or structural level" accent="long" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="long" />
          <StrategyCheckbox label="EXIT: large red bubble appears above → new selling entering" accent="warn" />
          <StrategyCheckbox label="EXIT: bubble sizes shrinking on upward push → momentum fading" accent="warn" />
          <StrategyCheckbox label="Time stop: no +2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- SHORT -->
      <template #short>
        <StrategySection title="Short Entry — Conditions" color="short" icon="▼" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural resistance (VWAP, PDH, HVN, balance high)" accent="short" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="short" />
          <StrategyCheckbox label="Profile shape: not P-shaped (avoid selling in buying trend)" accent="short" />

          <StrategyDivider label="Bubble Signal" />
          <StrategyCheckbox label="Large GREEN bubble(s) at resistance with price capping = buy volume being absorbed" accent="short" />
          <StrategyCheckbox label="Delta flip: green bubbles transition to red at resistance level" accent="short" />
          <StrategyCheckbox label="Bubble size growing on red side, shrinking on green = supply overtaking demand" accent="short" />
          <StrategyCheckbox label="Bubble gap below: no significant bubbles underneath = path clear for downside" accent="short" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="Heatmap bright at resistance where absorption bubbles appear = passive supply confirmed" accent="short" />
          <StrategyCheckbox label="CVD turning negative — aggregate flow aligning with bubble delta flip" accent="short" />
          <StrategyCheckbox label="Volume Dots: large sell prints co-located with red bubbles" accent="short" />
          <StrategyCheckbox label="Next bubbles below are small or nonexistent = low support ahead" accent="short" />
        </StrategySection>

        <StrategySection title="Short Entry — Trigger & Exit" color="short" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: sell on first downtick after delta flip confirms red at resistance" sublabel="Limit 1-2 ticks below the absorption bubble price" accent="short" />
          <StrategyCheckbox label="ALT: sell when red bubbles start stacking downward from resistance (momentum entry)" accent="short" />
          <StrategyCheckbox label="T1: −4-6 ticks (50%) — first level with large prior bubbles (contested zone)" accent="short" />
          <StrategyCheckbox label="T2: −8-12 ticks (25%) — next HVN or structural level" accent="short" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="short" />
          <StrategyCheckbox label="EXIT: large green bubble appears below → new buying entering" accent="warn" />
          <StrategyCheckbox label="EXIT: bubble sizes shrinking on downward push → momentum fading" accent="warn" />
          <StrategyCheckbox label="Time stop: no −2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Absorption bubble trade: 2 ticks beyond the absorption bubble zone" accent="warn" />
          <StrategyCheckbox label="Delta flip trade: 2 ticks beyond the price where the flip occurred" accent="warn" />
          <StrategyCheckbox label="Momentum trade: 2 ticks beyond last significant same-direction bubble" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
          <StrategyCheckbox label="Dynamic: if bubbles in your direction shrink to < 25% of entry bubble → tighten" accent="warn" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Signal Quality" />
          <StrategyCheckbox label="Small bubbles across the board = low-volume session → all signals are weaker" accent="short" />
          <StrategyCheckbox label="Single large bubble without follow-up = one-off event, not pattern → wait for more" accent="short" />
          <StrategyCheckbox label="Delta color mismatch between bubble and CVD = conflicting signals → stand aside" accent="warn" />
          <StrategyCheckbox label="Bubbles evenly split green/red at a level = contested zone → no clear bias, reduce size" accent="warn" />

          <StrategyDivider label="Visual Traps" />
          <StrategyCheckbox label="Very large bubble from news spike = reactive, not deliberate → don't trade the bubble" accent="short" />
          <StrategyCheckbox label="Bubble cluster during opening rotation (first 5 min) = noisy, don't trust" accent="short" />
          <StrategyCheckbox label="Aggregation period matters: 1-min bubbles may show patterns that 5-min smooths out" sublabel="Always cross-reference with CVD and heatmap — don't rely on bubbles alone" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → bubbles spike but are meaningless for direction" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: bubble patterns unreliable during opening rotation" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): bubbles are sparse, patterns don't form reliably" accent="warn" />
          <StrategyCheckbox label="VIX > 35: bubble deltas whipsaw — absorption patterns break more often" accent="warn" />
          <StrategyCheckbox label="Lunch hour (12-13:30 ET): bubble sizes collapse, signals are low conviction" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'volume-bubbles',
  title: 'VOLUME BUBBLES',
  subtitle: 'ES / MES INTRADAY · REAL-TIME VOLUME-AT-PRICE · VISUAL FOOTPRINT',
  icon: '🫧',
  iconGradient: 'linear-gradient(135deg, #39d2c0 0%, #2ea89a 50%, #1a6b62 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'long', label: 'LONG', icon: '▲', color: 'long' },
    { id: 'short', label: 'SHORT', icon: '▼', color: 'short' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Large bubble at S/R = volume commitment → level is defended', color: 'cyan' },
    { text: 'Bubble cluster shifting color = delta flip → momentum changing', color: 'orange' },
    { text: 'Big bubble + no price move = absorption — passive wall is winning', color: 'purple' },
    { text: 'Tiny bubbles in trend = low participation → hollow move, reversal risk', color: 'warn' },
    { text: 'Bubble gap (no volume between prices) = LVN fast-travel zone', color: 'info' },
  ],
  footerTools: 'VOLUME BUBBLES · HEATMAP · CVD · VOLUME PROFILE · FOOTPRINT',
}
</script>
