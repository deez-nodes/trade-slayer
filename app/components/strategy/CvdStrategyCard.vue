<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="CVD Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="Core Settings" />
          <StrategyCheckbox label="Bookmap CVD sub-chart: plots cumulative (ask volume − bid volume) over time" sublabel="Rising CVD = net buying aggression. Falling CVD = net selling aggression." accent="info" />
          <StrategyCheckbox label="Accumulation mode: SUM for session-long trend bias" accent="info" />
          <StrategyCheckbox label="Accumulation mode: EXPONENTIAL (1-5 min half-life) for short-term momentum" sublabel="Exponential decays old data — better for scalping. SUM better for swing bias." accent="info" />
          <StrategyCheckbox label="Reset: session reset at RTH open for clean intraday reads" accent="info" />
          <StrategyCheckbox label="Display: line chart, positive = green zone, negative = red zone" accent="info" />

          <StrategyDivider label="Multi-CVD Setup" />
          <StrategyCheckbox label="Standard CVD: all trades — broadest view of aggressive flow" accent="info" />
          <StrategyCheckbox label="S&I Iceberg CVD: buy iceberg vs sell iceberg cumulative delta" sublabel="Divergence between standard CVD and iceberg CVD = hidden vs visible flow conflict" accent="cyan" />
          <StrategyCheckbox label="Large-Lot CVD: only trades ≥ 25 lot — institutional aggressive bias" accent="cyan" />
          <StrategyCheckbox label="Stop CVD: cumulative stop triggers by direction — shows trapped flow bias" accent="cyan" />
          <StrategyCheckbox label="Run ALL four side-by-side when possible — their interplay is the real signal" accent="cyan" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="Price chart overlay: CVD sub-chart directly below price for divergence spotting" accent="purple" />
          <StrategyCheckbox label="Heatmap: passive liquidity context — CVD shows aggression, heatmap shows defense" accent="purple" />
          <StrategyCheckbox label="LT Pro: passive order book bias — CVD + LT Pro = complete aggressor + passive picture" accent="purple" />
          <StrategyCheckbox label="Volume Profile: CVD at HVN/LVN tells you if volume was buyer or seller driven" accent="purple" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="Reading CVD — Basics" color="info" icon="◎" default-open>
          <StrategyCheckbox label="CVD = running sum of (volume at ask − volume at bid) over time" sublabel="Each trade classified: traded at ask = aggressive buy, traded at bid = aggressive sell" accent="info" />
          <StrategyCheckbox label="Rising CVD: more aggressive buying than selling → net demand" accent="long" />
          <StrategyCheckbox label="Falling CVD: more aggressive selling than buying → net supply" accent="short" />
          <StrategyCheckbox label="Flat CVD: balanced aggression — neither side dominating" accent="neutral" />
          <StrategyCheckbox label="CVD SLOPE matters more than absolute level — acceleration/deceleration is the signal" accent="info" />
          <StrategyCheckbox label="CVD does NOT show passive orders — only aggressive (market) orders" sublabel="A large passive buyer won't appear on CVD until aggressors sell into them" accent="warn" />
        </StrategySection>

        <StrategySection title="CVD States & Meaning" color="purple" icon="◆" default-open>
          <StrategyDivider label="Trending CVD" />
          <StrategyCheckbox label="CVD trending up with price trending up = healthy bullish trend (confirmation)" accent="long" />
          <StrategyCheckbox label="CVD trending down with price trending down = healthy bearish trend (confirmation)" accent="short" />
          <StrategyCheckbox label="Steepening CVD slope = momentum INCREASING — trend accelerating" accent="long" />
          <StrategyCheckbox label="Flattening CVD slope = momentum FADING — trend decelerating (early warning)" accent="warn" />

          <StrategyDivider label="Divergent CVD" />
          <StrategyCheckbox label="Price making new highs, CVD making lower highs = BEARISH DIVERGENCE" sublabel="Buyers getting weaker on each push → trend exhaustion imminent" accent="short" />
          <StrategyCheckbox label="Price making new lows, CVD making higher lows = BULLISH DIVERGENCE" sublabel="Sellers getting weaker on each push → reversal setup forming" accent="long" />
          <StrategyCheckbox label="Multiple-swing divergence = stronger signal than single-swing" accent="info" />
          <StrategyCheckbox label="Divergence AT key level (VWAP, PDH/PDL, HVN) = highest conviction" accent="info" />

          <StrategyDivider label="Flat/Absorbed CVD" />
          <StrategyCheckbox label="Price moves but CVD stays flat = passive orders absorbing all aggression" sublabel="Classic absorption signal — the passive side is winning the fight" accent="cyan" />
          <StrategyCheckbox label="CVD flat at support while price tests = buyers absorbing without aggressing → bullish" accent="long" />
          <StrategyCheckbox label="CVD flat at resistance while price tests = sellers absorbing without aggressing → bearish" accent="short" />

          <StrategyDivider label="Spike CVD" />
          <StrategyCheckbox label="Sudden CVD spike with no proportional price move = aggressive flow absorbed by passive" accent="warn" />
          <StrategyCheckbox label="CVD spike often coincides with stop run — trapped flow creates the spike" accent="warn" />
          <StrategyCheckbox label="Post-spike: if CVD fails to sustain direction → the spike was exhaustion" accent="warn" />
        </StrategySection>
      </template>

      <!-- DIVERGE -->
      <template #diverge>
        <StrategySection title="Trading CVD Divergence — Bullish" color="long" icon="▲" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Price prints 2+ lower lows while CVD prints higher lows = bullish divergence" accent="long" />
          <StrategyCheckbox label="Divergence occurs at structural support (VWAP, PDL, HVN, balance low)" accent="long" />
          <StrategyCheckbox label="Broader context not aggressively bearish (no limit-down, no panic)" accent="long" />

          <StrategyDivider label="Confirmation Layers" />
          <StrategyCheckbox label="Iceberg or absorption detected at the divergence low = passive defense" accent="long" />
          <StrategyCheckbox label="Heatmap: bid-side liquidity building at the divergence low" accent="long" />
          <StrategyCheckbox label="Large-lot CVD also diverging positively = institutional agreement" accent="long" />
          <StrategyCheckbox label="LT Pro: bid liquidity growing while price makes new low = smart passive buying" accent="long" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="ENTRY: buy on first uptick after CVD prints higher low and price stabilizes" sublabel="Limit 1-2 ticks above the last low. Or market on clear momentum shift." accent="long" />
          <StrategyCheckbox label="T1: +4-6 ticks (50%) — prior swing high or VWAP" accent="long" />
          <StrategyCheckbox label="T2: +8-12 ticks (25%) — next structural level" accent="long" />
          <StrategyCheckbox label="Stop: 2 ticks below the divergence low" accent="long" />
        </StrategySection>

        <StrategySection title="Trading CVD Divergence — Bearish" color="short" icon="▼" default-open>
          <StrategyDivider label="Conditions" />
          <StrategyCheckbox label="Price prints 2+ higher highs while CVD prints lower highs = bearish divergence" accent="short" />
          <StrategyCheckbox label="Divergence occurs at structural resistance (VWAP, PDH, HVN, balance high)" accent="short" />
          <StrategyCheckbox label="Broader context not aggressively bullish (no melt-up, no squeeze)" accent="short" />

          <StrategyDivider label="Confirmation Layers" />
          <StrategyCheckbox label="Iceberg or absorption detected at the divergence high = passive supply" accent="short" />
          <StrategyCheckbox label="Heatmap: ask-side liquidity building at the divergence high" accent="short" />
          <StrategyCheckbox label="Large-lot CVD also diverging negatively = institutional selling" accent="short" />
          <StrategyCheckbox label="LT Pro: ask liquidity growing while price makes new high = smart passive selling" accent="short" />

          <StrategyDivider label="Entry" />
          <StrategyCheckbox label="ENTRY: sell on first downtick after CVD prints lower high and price stalls" sublabel="Limit 1-2 ticks below the last high. Or market on clear momentum shift." accent="short" />
          <StrategyCheckbox label="T1: −4-6 ticks (50%) — prior swing low or VWAP" accent="short" />
          <StrategyCheckbox label="T2: −8-12 ticks (25%) — next structural level" accent="short" />
          <StrategyCheckbox label="Stop: 2 ticks above the divergence high" accent="short" />
        </StrategySection>
      </template>

      <!-- CONFIRM -->
      <template #confirm>
        <StrategySection title="CVD as Confirmation Layer" color="cyan" icon="✦" default-open>
          <StrategyDivider label="Confirming Other Setups" />
          <StrategyCheckbox label="Iceberg setup + CVD trending in iceberg direction = highest conviction iceberg trade" accent="cyan" />
          <StrategyCheckbox label="Stop run fade + CVD diverging from run direction = trapped flow confirmed" accent="cyan" />
          <StrategyCheckbox label="Absorption at S/R + CVD flat or diverging = passive defense is real" accent="cyan" />
          <StrategyCheckbox label="Breakout + CVD accelerating in breakout direction = genuine momentum" accent="cyan" />
          <StrategyCheckbox label="Breakout + CVD flat or diverging = false breakout → fade it" accent="warn" />

          <StrategyDivider label="CVD + LT Pro Combination" />
          <StrategyCheckbox label="CVD positive (aggressive buying) + LT Pro bid building (passive buying) = STRONGEST bull" sublabel="Both aggressive and passive sides agree → maximum conviction long" accent="long" />
          <StrategyCheckbox label="CVD negative + LT Pro ask building = STRONGEST bear signal" accent="short" />
          <StrategyCheckbox label="CVD positive BUT LT Pro ask building = conflict → passive sellers absorbing buys" sublabel="This is the absorption divergence — passive side often wins" accent="warn" />
          <StrategyCheckbox label="CVD negative BUT LT Pro bid building = conflict → passive buyers absorbing sells" accent="warn" />

          <StrategyDivider label="Multi-CVD Cross-Reference" />
          <StrategyCheckbox label="Standard CVD + Large-Lot CVD agree = broad + institutional consensus → high conviction" accent="long" />
          <StrategyCheckbox label="Standard CVD positive but Large-Lot CVD negative = retail buying, institutions selling" sublabel="Follow the large lots — institutions have better information" accent="warn" />
          <StrategyCheckbox label="Standard CVD + Iceberg CVD agree = visible + hidden flow consensus" accent="long" />
          <StrategyCheckbox label="Standard CVD vs Iceberg CVD diverge = hidden accumulation/distribution → follow icebergs" accent="cyan" />
        </StrategySection>

        <StrategySection title="CVD Trend-Following Entry" color="long" icon="→">
          <StrategyCheckbox label="CVD in strong uptrend + price pulls back to VWAP/HVN = buy the dip" sublabel="CVD confirms buyers are in control — pullback is opportunity, not reversal" accent="long" />
          <StrategyCheckbox label="CVD in strong downtrend + price rallies to VWAP/HVN = sell the rip" accent="short" />
          <StrategyCheckbox label="CVD must not diverge on the pullback — slope should remain favorable" accent="warn" />
          <StrategyCheckbox label="Entry: limit order at pullback level, stop 2 ticks beyond, targets at prior extreme + extension" accent="info" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Divergence trade: 2 ticks beyond the divergence swing extreme" accent="warn" />
          <StrategyCheckbox label="Confirmation trade: follow the primary setup's stop rules (iceberg, S/R, etc.)" accent="warn" />
          <StrategyCheckbox label="Trend-follow pullback: 2 ticks beyond the pullback low/high" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
          <StrategyCheckbox label="If CVD reverses sharply against you (slope flips) → tighten or exit immediately" accent="short" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Divergence Traps" />
          <StrategyCheckbox label="Single-swing divergence = weak — require 2+ swings for reliable signal" accent="short" />
          <StrategyCheckbox label="Divergence in strong trend = often just a pause, not a reversal" sublabel="Strong trends can show divergence for extended periods before actually reversing" accent="short" />
          <StrategyCheckbox label="CVD divergence without structural level = floating signal, lower conviction" accent="warn" />
          <StrategyCheckbox label="Divergence that resolves (CVD catches up to price) = thesis invalidated, scratch" accent="short" />

          <StrategyDivider label="CVD Limitations" />
          <StrategyCheckbox label="CVD only measures AGGRESSIVE flow — passive orders are invisible" sublabel="A massive passive iceberg won't appear on CVD until aggressors trade into it" accent="warn" />
          <StrategyCheckbox label="CVD classification depends on bid/ask matching — can misclassify in fast markets" accent="warn" />
          <StrategyCheckbox label="CVD cumulative nature: late-session CVD is sum of ALL day — early divergence may be noise" accent="warn" />
          <StrategyCheckbox label="CVD resets: if using session reset, be aware of artificial zero-crossing at open" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → CVD spikes are reactive, not predictive" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: CVD gyrates wildly during opening rotation — wait for settling" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): CVD is easily skewed by single large trades" accent="warn" />
          <StrategyCheckbox label="VIX > 35: CVD divergences resolve less reliably — aggressive flow is chaotic" accent="warn" />
          <StrategyCheckbox label="Lunch hour drift: CVD goes flat, divergences during 12-13:30 ET are low conviction" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'cvd',
  title: 'CUMULATIVE VOLUME DELTA',
  subtitle: 'ES / MES INTRADAY · NET AGGRESSIVE FLOW · DIVERGENCE ENGINE',
  icon: '📈',
  iconGradient: 'linear-gradient(135deg, #3fb950 0%, #238636 50%, #196c2e 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'diverge', label: 'DIVERGE', icon: '↗', color: 'orange' },
    { id: 'confirm', label: 'CONFIRM', icon: '✦', color: 'cyan' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Price new high + CVD lower high = bearish divergence → reversal', color: 'short' },
    { text: 'Price new low + CVD higher low = bullish divergence → reversal', color: 'long' },
    { text: 'CVD trending with price = confirmation → ride the trend', color: 'cyan' },
    { text: 'CVD flat while price moves = passive absorption → level will hold', color: 'purple' },
    { text: 'CVD spike + no price follow-through = trapped aggressors', color: 'warn' },
  ],
  footerTools: 'CVD · LARGE-LOT CVD · ICEBERG CVD · STOP CVD · LT PRO',
}
</script>
