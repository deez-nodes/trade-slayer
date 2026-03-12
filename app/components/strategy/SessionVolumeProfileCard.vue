<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="Volume Profile Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="Profile Types" />
          <StrategyCheckbox label="Session Profile: resets each RTH session — shows current day's value" accent="info" />
          <StrategyCheckbox label="Developing Profile: updates in real-time as session progresses" sublabel="Watch VPOC migration — if VPOC shifts direction, market is accepting new value" accent="info" />
          <StrategyCheckbox label="Composite Profile: multi-day aggregated — shows longer-term value zones" accent="info" />
          <StrategyCheckbox label="Prior Day Profile: yesterday's completed profile — key reference levels" accent="info" />
          <StrategyCheckbox label="Custom Period: 30m or 1h micro-profiles for recent auction zones" accent="info" />

          <StrategyDivider label="Key Levels to Display" />
          <StrategyCheckbox label="VPOC (Volume Point of Control): price with highest volume — fairest price" accent="purple" />
          <StrategyCheckbox label="VAH (Value Area High): upper edge of 70% value area — upper boundary" accent="info" />
          <StrategyCheckbox label="VAL (Value Area Low): lower edge of 70% value area — lower boundary" accent="info" />
          <StrategyCheckbox label="Prior Day VPOC / VAH / VAL: carry-forward lines for today's reference" accent="cyan" />
          <StrategyCheckbox label="HVN markers: locally high-volume prices (mini-VPOCs within the profile)" accent="info" />
          <StrategyCheckbox label="LVN markers: locally low-volume prices (fast-travel / gap zones)" accent="warn" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="VWAP: often near VPOC — when they align, the level is doubly significant" accent="cyan" />
          <StrategyCheckbox label="Heatmap: real-time liquidity at profile levels confirms active defense" accent="cyan" />
          <StrategyCheckbox label="CVD: tells you if volume at a price level was buyer or seller driven" accent="cyan" />
          <StrategyCheckbox label="LT Pro: passive book imbalance at profile levels = institutional positioning" accent="cyan" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="Core Volume Profile Concepts" color="info" icon="◎" default-open>
          <StrategyCheckbox label="Volume profile shows HOW MUCH volume traded at each price — not when" sublabel="It reveals where the market agreed on value (high vol) and rejected prices (low vol)" accent="info" />
          <StrategyCheckbox label="VPOC: the single price with the most volume = the 'fairest' price of the session" accent="purple" />
          <StrategyCheckbox label="Value Area (70%): the range containing 70% of volume = the 'accepted value' zone" accent="info" />
          <StrategyCheckbox label="Above VA: price is premium — buyers need to prove they can sustain new value" accent="short" />
          <StrategyCheckbox label="Below VA: price is discount — sellers need to prove they can sustain new value" accent="long" />
          <StrategyCheckbox label="At VPOC: price at fair value — range-bound behavior likely, mean reversion dominant" accent="neutral" />
        </StrategySection>

        <StrategySection title="HVN vs LVN — Reading the Nodes" color="purple" icon="◆" default-open>
          <StrategyDivider label="High Volume Nodes (HVN)" />
          <StrategyCheckbox label="Price traded here heavily → both sides agreed this was fair → STICKY level" accent="info" />
          <StrategyCheckbox label="Acts as S/R: price gravitates toward HVN and tends to consolidate around it" accent="info" />
          <StrategyCheckbox label="Breaking through HVN requires significant aggressive volume (it's thick)" accent="info" />
          <StrategyCheckbox label="HVN from prior day = institutional reference point — expect reaction on first test" accent="cyan" />

          <StrategyDivider label="Low Volume Nodes (LVN)" />
          <StrategyCheckbox label="Price passed through quickly → rejection zone → price will move FAST through again" accent="warn" />
          <StrategyCheckbox label="LVN = poor S/R: don't place entries or stops at LVN — they won't hold reliably" accent="warn" />
          <StrategyCheckbox label="LVN between two HVNs = bridge zone: volatile transition area" accent="warn" />
          <StrategyCheckbox label="If price enters an LVN, expect acceleration until it reaches the next HVN" accent="warn" />
          <StrategyCheckbox label="Stops in LVN zones get blown through → always place stops beyond HVN clusters" accent="short" />

          <StrategyDivider label="VPOC Migration" />
          <StrategyCheckbox label="VPOC shifts UP during session: market accepting higher value → bullish bias" accent="long" />
          <StrategyCheckbox label="VPOC shifts DOWN during session: market accepting lower value → bearish bias" accent="short" />
          <StrategyCheckbox label="VPOC stationary: balanced market, value not changing → range conditions" accent="neutral" />
          <StrategyCheckbox label="Monitor developing VPOC every 30 min for directional bias updates" accent="info" />
        </StrategySection>
      </template>

      <!-- TRADE -->
      <template #trade>
        <StrategySection title="Mean Reversion — Fade to VPOC" color="long" icon="↩" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Price extended to VAH or VAL — at the edge of accepted value" accent="long" />
          <StrategyCheckbox label="Profile is D-shaped (balanced) → range regime, mean reversion is primary strategy" accent="long" />
          <StrategyCheckbox label="CVD diverging from price at the value edge → exhaustion" accent="long" />
          <StrategyCheckbox label="Heatmap or LT Pro shows liquidity building at the edge (absorption developing)" accent="long" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="LONG at VAL: buy when price touches VAL with CVD divergence + absorption" sublabel="Target: VPOC. Stop: 2-3 ticks below VAL." accent="long" />
          <StrategyCheckbox label="SHORT at VAH: sell when price touches VAH with CVD divergence + absorption" sublabel="Target: VPOC. Stop: 2-3 ticks above VAH." accent="short" />
          <StrategyCheckbox label="T1: VPOC (50%). T2: opposite value edge (25%). Runner trail." accent="info" />
        </StrategySection>

        <StrategySection title="Breakout — Value Area Extension" color="purple" icon="→" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Price breaks above VAH or below VAL with volume confirmation" accent="purple" />
          <StrategyCheckbox label="Profile is P-shaped (trending up) or B-shaped (trending down)" accent="purple" />
          <StrategyCheckbox label="CVD accelerating in break direction — aggressive flow confirming" accent="purple" />
          <StrategyCheckbox label="No HVN immediately ahead (no thick resistance in the break direction)" accent="purple" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="LONG: buy pullback to VAH (now support) after upside break" sublabel="VAH was resistance, now floor. Enter on retest with new bid liquidity." accent="long" />
          <StrategyCheckbox label="SHORT: sell rally to VAL (now resistance) after downside break" sublabel="VAL was support, now ceiling. Enter on retest with new ask liquidity." accent="short" />
          <StrategyCheckbox label="T1: next HVN or prior-day VPOC (+6-10 ticks). T2: next VA edge." accent="info" />
          <StrategyCheckbox label="Stop: 2 ticks back inside the old value area — if reclaimed, break was false" accent="warn" />
        </StrategySection>

        <StrategySection title="HVN Bounce / LVN Fast Travel" color="cyan" icon="◆">
          <StrategyDivider label="HVN Bounce" />
          <StrategyCheckbox label="Price pulls back to prior-day HVN or intraday HVN → expect reaction" accent="cyan" />
          <StrategyCheckbox label="Confirm with Bookmap: heatmap wall at HVN, CVD diverging, absorption detected" accent="cyan" />
          <StrategyCheckbox label="Entry: fade at HVN with tight stop (2 ticks beyond). Target: VPOC or next HVN." accent="cyan" />

          <StrategyDivider label="LVN Fast Travel" />
          <StrategyCheckbox label="When price enters LVN, expect quick move to next HVN — don't try to fade in LVN" accent="warn" />
          <StrategyCheckbox label="Trade: join the direction once price enters LVN, target the next HVN" accent="warn" />
          <StrategyCheckbox label="Do NOT place stops in LVN zones — they will be run through on the fast move" accent="short" />
        </StrategySection>
      </template>

      <!-- SHAPES -->
      <template #shapes>
        <StrategySection title="D-Shape — Balanced / Range" color="info" icon="🔔" default-open>
          <StrategyCheckbox label="Bell curve: volume concentrated in the middle, thin tails" accent="info" />
          <StrategyCheckbox label="Meaning: market found balance — value is accepted, range-bound likely" accent="info" />
          <StrategyCheckbox label="Strategy: MEAN REVERSION — fade VAH/VAL back to VPOC" accent="long" />
          <StrategyCheckbox label="Scalp off edges: tight stops, frequent entries, small targets to VPOC" accent="long" />
          <StrategyCheckbox label="Avoid: trend-following in D-shape — breakouts fail more often than not" accent="warn" />
          <StrategyCheckbox label="Shift: if D-shape starts developing a tail, bias is forming → watch for transition" accent="info" />
        </StrategySection>

        <StrategySection title="P-Shape — Buying Trend / Short Covering" color="long" icon="📈" default-open>
          <StrategyCheckbox label="Volume concentrated at the TOP of the range, thin at bottom" accent="long" />
          <StrategyCheckbox label="Meaning: price was rejected low, value accepted higher → bullish" accent="long" />
          <StrategyCheckbox label="Strategy: BUY DIPS into volume nodes — don't fade the trend" accent="long" />
          <StrategyCheckbox label="Best entries: pullback to nearest HVN below, VPOC, or VAL" accent="long" />
          <StrategyCheckbox label="Trail runners: P-shape trends tend to extend — give room" accent="long" />
          <StrategyCheckbox label="Warning: short covering can create P-shape without real demand — check CVD" accent="warn" />
        </StrategySection>

        <StrategySection title="B-Shape — Selling Trend / Long Liquidation" color="short" icon="📉" default-open>
          <StrategyCheckbox label="Volume concentrated at the BOTTOM of the range, thin at top" accent="short" />
          <StrategyCheckbox label="Meaning: price was rejected high, value accepted lower → bearish" accent="short" />
          <StrategyCheckbox label="Strategy: SELL RALLIES into volume nodes — don't buy the dip" accent="short" />
          <StrategyCheckbox label="Best entries: rally to nearest HVN above, VPOC, or VAH" accent="short" />
          <StrategyCheckbox label="Trail runners: B-shape trends tend to extend — give room" accent="short" />
          <StrategyCheckbox label="Warning: long liquidation can create B-shape without real supply — check CVD" accent="warn" />
        </StrategySection>

        <StrategySection title="Double Distribution — Breakout Pending" color="orange" icon="⏳">
          <StrategyCheckbox label="Two separate volume clusters with thin LVN bridge between them" accent="orange" />
          <StrategyCheckbox label="Meaning: market tried two value areas — hasn't decided which is 'true' value" accent="orange" />
          <StrategyCheckbox label="The LVN bridge is the breakout zone: volatile, fast moves" accent="orange" />
          <StrategyCheckbox label="Strategy: wait for price to commit to one distribution, then trade with it" accent="orange" />
          <StrategyCheckbox label="If price enters bridge from above and holds → moving to lower distribution (short)" accent="short" />
          <StrategyCheckbox label="If price enters bridge from below and holds → moving to upper distribution (long)" accent="long" />
          <StrategyCheckbox label="Avoid: trading inside the bridge — it's no-man's-land" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement by Profile Setup" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Mean reversion (fade at VA edge): 2-3 ticks beyond VAH/VAL" accent="warn" />
          <StrategyCheckbox label="Breakout (VA extension): 2 ticks back inside old value area" accent="warn" />
          <StrategyCheckbox label="HVN bounce: 2 ticks beyond the HVN cluster" accent="warn" />
          <StrategyCheckbox label="NEVER place stops at LVN — they will be run through on fast travel" accent="short" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Profile Traps" />
          <StrategyCheckbox label="Developing profile can shift shape: D→P or D→B as session progresses" sublabel="Don't commit to a shape too early — wait until 10:30 ET for profile to develop" accent="warn" />
          <StrategyCheckbox label="VPOC migration invalidates mean reversion: if VPOC shifts to VA edge, bias has formed" accent="short" />
          <StrategyCheckbox label="Prior-day VA loses relevance if current session has strong directional volume" accent="warn" />
          <StrategyCheckbox label="Thin profile (low-vol session): all levels are less reliable — reduce size" accent="warn" />

          <StrategyDivider label="Breakout Traps" />
          <StrategyCheckbox label="Break above VAH on low volume = likely false → mean reversion wins" accent="short" />
          <StrategyCheckbox label="Break into LVN that immediately reverses = stop hunt, not real break" accent="short" />
          <StrategyCheckbox label="Check: does CVD confirm the break? If not → fade it back into value" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → profile levels get blown through" accent="warn" />
          <StrategyCheckbox label="First 30 min RTH: profile is too thin to trade — wait for development" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): profile nodes are unreliable, LVNs are everywhere" accent="warn" />
          <StrategyCheckbox label="VIX > 35: value area expands dramatically, mean reversion targets are distant" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'session-volume-profile',
  title: 'SESSION VOLUME PROFILE',
  subtitle: 'ES / MES INTRADAY · VPOC · VALUE AREA · HVN/LVN · AUCTION THEORY',
  icon: '📊',
  iconGradient: 'linear-gradient(135deg, #bc8cff 0%, #8957e5 50%, #6e40c9 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'trade', label: 'TRADE', icon: '⚡', color: 'long' },
    { id: 'shapes', label: 'SHAPES', icon: '📊', color: 'purple' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'VPOC = price magnet — mean reversion target & anchor level', color: 'purple' },
    { text: 'VAH/VAL = value edges — fade back into value or trade the break', color: 'info' },
    { text: 'LVN = fast-travel zone — price moves quickly through, poor for stops', color: 'warn' },
    { text: 'HVN = acceptance zone — strong S/R, sticky, hard to break', color: 'cyan' },
    { text: 'Profile shape (D/P/B) reveals regime before price confirms', color: 'long' },
  ],
  footerTools: 'VOLUME PROFILE · VPOC · VAH/VAL · HVN/LVN · AUCTION THEORY',
}
</script>
