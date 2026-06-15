<template>
  <StrategyCardShell :meta="meta">
      <!-- IDENTIFY -->
      <template #identify>
        <StrategySection title="Long-Term vs Short-Term Liquidity" color="info" icon="🔍" default-open>
          <StrategyDivider label="Long-Term Liquidity" />
          <StrategyCheckbox label="Large resting orders that persist in the book for minutes to hours" sublabel="Define structural levels — these are the anchors institutions defend" accent="cyan" />
          <StrategyCheckbox label="Visible as: dense heatmap bands that don't fade, high-volume nodes on profile" accent="cyan" />
          <StrategyCheckbox label="Key levels: PDH/PDL, VWAP, weekly VPOC, prior session balance edges" accent="cyan" />
          <StrategyCheckbox label="LT Pro filtered (≥5 lot): long-term liquidity dominates the large-order view" accent="cyan" />
          <StrategyCheckbox label="Behavior: holds through multiple tests, absorbs aggressive flow, defines value" accent="cyan" />

          <StrategyDivider label="Short-Term Liquidity" />
          <StrategyCheckbox label="Orders that flash briefly — appear and disappear within seconds to minutes" sublabel="Can distort the auction temporarily, often triggers fakeouts and stop hunts" accent="purple" />
          <StrategyCheckbox label="Visible as: flickering heatmap bands, Liquidity Marker add/pull events" accent="purple" />
          <StrategyCheckbox label="Often HFT or algo-generated: momentum-chasing orders, spoofs, quote stuffing" accent="purple" />
          <StrategyCheckbox label="Tradermap Pro bot filter: reveals short-term liquidity that's algorithmic" accent="purple" />
          <StrategyCheckbox label="Behavior: creates temporary support/resistance that breaks easily under pressure" accent="purple" />
        </StrategySection>

        <StrategySection title="Volume Profile Shapes — Regime Detection" color="info" icon="📊" default-open>
          <StrategyCheckbox label="D-SHAPE (bell curve): balanced market, value accepted → range/mean-reversion regime" sublabel="High liq environment: scalp from edges, fade extremes back to VPOC" accent="info" />
          <StrategyCheckbox label="P-SHAPE: volume concentrated at top, thin at bottom → buying trend / short covering" sublabel="Price accepted value higher: buy dips into volume nodes, trail runners" accent="long" />
          <StrategyCheckbox label="B-SHAPE: volume concentrated at bottom, thin at top → selling trend / long liquidation" sublabel="Price accepted value lower: sell rallies into volume nodes, trail runners" accent="short" />
          <StrategyCheckbox label="DOUBLE DISTRIBUTION: two volume clusters with thin bridge → breakout pending" sublabel="Low liq bridge zone: volatile transition area, trade the break with direction" accent="warn" />
          <StrategyCheckbox label="LOW-VOLUME NODE (LVN): price passed quickly → future fast-move zone" accent="warn" />
          <StrategyCheckbox label="HIGH-VOLUME NODE (HVN): heavy participation → magnet/anchor level for mean reversion" accent="info" />
        </StrategySection>

        <StrategySection title="Measuring Current Liquidity Regime" color="cyan" icon="📏">
          <StrategyCheckbox label="Spread check: ES spread = 1 tick = high liq. Spread > 1 tick = degrading liquidity" accent="info" />
          <StrategyCheckbox label="Volume check: current 30m bar vs 20d avg — > 100% = high liq, < 50% = low liq" accent="info" />
          <StrategyCheckbox label="Heatmap depth: dense bands on both sides = high liq. Sparse/thin = low liq" accent="info" />
          <StrategyCheckbox label="LT Pro bid/ask lines: fat lines = deep book = high liq. Thin lines = shallow" accent="info" />
          <StrategyCheckbox label="Time of day: 9:45-11:30 ET & 14:00-15:30 ET = peak liq. 12:00-13:30 = low liq" accent="warn" />
          <StrategyCheckbox label="VIX context: < 15 = stable/high liq. 15-25 = normal. > 25 = degrading. > 35 = crisis" accent="warn" />
        </StrategySection>
      </template>

      <!-- HIGH LIQ -->
      <template #high>
        <StrategySection title="High Liquidity — Strategy Adjustments" color="long" icon="🌊" default-open>
          <StrategyDivider label="What Works" />
          <StrategyCheckbox label="Scalping: tight spreads enable high-frequency entries with minimal cost" accent="long" />
          <StrategyCheckbox label="Mean reversion: fade extremes back to VPOC / HVN — price gravitates to value" accent="long" />
          <StrategyCheckbox label="Order flow reads are CLEANER: heatmap signals more reliable, less noise" accent="long" />
          <StrategyCheckbox label="Absorption / iceberg setups: passive walls hold better in deep books" accent="long" />
          <StrategyCheckbox label="Tight stops work: 4-6 tick stops are viable, slippage minimal" accent="long" />

          <StrategyDivider label="Entry Playbook" />
          <StrategyCheckbox label="LONG: buy at HVN support + bid-side absorption + CVD positive → tight stop, scalp target" accent="long" />
          <StrategyCheckbox label="SHORT: sell at HVN resistance + ask-side absorption + CVD negative → tight stop, scalp target" accent="short" />
          <StrategyCheckbox label="RANGE: fade the extremes of the D-shaped profile back to VPOC" accent="info" />
          <StrategyCheckbox label="TREND: buy pullbacks to HVN in P-shape, sell rallies to HVN in B-shape" accent="info" />

          <StrategyDivider label="Targets & Exits" />
          <StrategyCheckbox label="Scalp T1: +4-6 ticks (VPOC, nearest HVN, or first structural level)" accent="long" />
          <StrategyCheckbox label="Position: scale out at each volume node — they act as speed bumps" accent="long" />
          <StrategyCheckbox label="Exit signal: spread widens beyond 1 tick = liquidity degrading, reduce size" accent="warn" />
        </StrategySection>
      </template>

      <!-- LOW LIQ -->
      <template #low>
        <StrategySection title="Low Liquidity — Strategy Adjustments" color="warn" icon="🏜" default-open>
          <StrategyDivider label="Characteristics" />
          <StrategyCheckbox label="Wider spreads: ES spread > 1 tick → higher per-trade cost" accent="warn" />
          <StrategyCheckbox label="Slippage risk: market orders fill worse, stops get blown through" accent="warn" />
          <StrategyCheckbox label="Volatility spikes: small orders move price disproportionately" accent="warn" />
          <StrategyCheckbox label="False signals: heatmap spoofs have outsized impact, order flow is noisier" accent="warn" />
          <StrategyCheckbox label="Gaps in book: LVNs become fast-move zones, price can jump multiple ticks" accent="warn" />

          <StrategyDivider label="Adaptation Rules" />
          <StrategyCheckbox label="Reduce position size: cut to 50% of normal sizing in low liq" accent="short" />
          <StrategyCheckbox label="LIMIT ORDERS ONLY: never market order in thin conditions — slippage will eat you" accent="short" />
          <StrategyCheckbox label="Widen stops: add 2-4 extra ticks — thin book means more noise before signal" accent="warn" />
          <StrategyCheckbox label="Bigger targets: low liq = bigger moves when they happen → swing for +8-16 ticks" accent="long" />
          <StrategyCheckbox label="Avoid scalping: spread + slippage makes high-frequency unprofitable" accent="short" />
          <StrategyCheckbox label="Break up large orders: if trading multiple contracts, scale in/out incrementally" sublabel="1000 shares as 10×100 spaced out — blend with normal flow, reduce impact" accent="warn" />

          <StrategyDivider label="Entry Playbook" />
          <StrategyCheckbox label="LONG: only at MAJOR structural support (VWAP, PDL, weekly HVN) with limit order" accent="long" />
          <StrategyCheckbox label="SHORT: only at MAJOR structural resistance with limit order" accent="short" />
          <StrategyCheckbox label="Confirmation required: long-term liquidity must be present (LT Pro large-order filter)" sublabel="Short-term liquidity alone is not enough in thin conditions — it will evaporate" accent="cyan" />
          <StrategyCheckbox label="Avoid: LVN zones in thin conditions — they become gap zones with no stops working" accent="short" />
        </StrategySection>
      </template>

      <!-- ADAPT -->
      <template #adapt>
        <StrategySection title="Regime Transition Detection" color="purple" icon="⚡" default-open>
          <StrategyCheckbox label="Monitor spread continuously: widening from 1→2 ticks = transition from high→low liq" accent="purple" />
          <StrategyCheckbox label="Volume pace: 30m bar volume dropping below 75% of 20d avg = liquidity fading" accent="purple" />
          <StrategyCheckbox label="LT Pro bid/ask lines narrowing = book thinning = regime shift incoming" accent="purple" />
          <StrategyCheckbox label="Time-based transitions: expect shift at ~11:30 ET (lunch low liq) and ~14:00 ET (return)" accent="purple" />
          <StrategyCheckbox label="News-driven: liquidity pulls 2-5 min before scheduled events, returns 2-5 min after" accent="purple" />
        </StrategySection>

        <StrategySection title="Switching Strategy by Regime" color="orange" icon="🔄" default-open>
          <StrategyDivider label="High → Low Transition" />
          <StrategyCheckbox label="Stop scalping immediately when spread widens or volume drops" accent="warn" />
          <StrategyCheckbox label="Flatten runners or tighten stops — thin book can reverse fast" accent="warn" />
          <StrategyCheckbox label="Switch to: limit orders only, wider stops, bigger targets, fewer trades" accent="warn" />
          <StrategyCheckbox label="Reduce size by 50% until regime stabilizes" accent="warn" />

          <StrategyDivider label="Low → High Transition" />
          <StrategyCheckbox label="Wait for spread to return to 1 tick and volume to normalize before resuming scalping" accent="long" />
          <StrategyCheckbox label="Tighten stops back to standard (4-6 ticks)" accent="long" />
          <StrategyCheckbox label="Resume full position sizing once 2+ consecutive 30m bars show normal volume" accent="long" />
          <StrategyCheckbox label="Reactivate absorption/iceberg setups — these work best in deep books" accent="long" />

          <StrategyDivider label="Intraday Rhythm" />
          <StrategyCheckbox label="9:30-9:45: opening rotation — chaotic, mixed liq → reduced size, wide stops" accent="info" />
          <StrategyCheckbox label="9:45-11:30: peak liquidity → full size, scalp + swing, tight stops" accent="long" />
          <StrategyCheckbox label="11:30-13:30: lunch lull → reduce size 50%, wider stops, limit orders only" accent="warn" />
          <StrategyCheckbox label="13:30-14:00: transition → watch for volume return before re-engaging" accent="info" />
          <StrategyCheckbox label="14:00-15:30: afternoon push → full size resumes, momentum setups work best" accent="long" />
          <StrategyCheckbox label="15:30-16:00: MOC imbalance / close → short-term liq spikes, beware reversals" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Position Sizing by Regime" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="High liq: full position (your normal 1-2% risk per trade)" accent="long" />
          <StrategyCheckbox label="Medium liq (spread ≤ 1 tick, volume 50-100% avg): 75% position" accent="warn" />
          <StrategyCheckbox label="Low liq (spread > 1 tick, volume < 50% avg): 50% position MAX" accent="short" />
          <StrategyCheckbox label="Crisis liq (VIX > 35, spread > 2 ticks): 25% position or flat" accent="short" />
          <StrategyCheckbox label="Rule: risk $ per trade stays constant — widen stop = cut size proportionally" sublabel="$75 risk budget: 6 tick stop = 1 MES. 12 tick stop = still $75, so can't add size" accent="warn" />
        </StrategySection>

        <StrategySection title="Stop Adjustments by Regime" color="short" icon="📐" default-open>
          <StrategyCheckbox label="High liq stops: 4-6 ticks (standard) — tight invalidation works in deep book" accent="long" />
          <StrategyCheckbox label="Low liq stops: 6-10 ticks — wider to account for noise and slippage" accent="warn" />
          <StrategyCheckbox label="Always use limit stop-orders in low liq — market stops get terrible fills" accent="short" />
          <StrategyCheckbox label="LVN zones: if your stop sits in an LVN, widen beyond it — price will skip through" accent="short" />
          <StrategyCheckbox label="After T1 in any regime: move stop to breakeven" accent="long" />
        </StrategySection>

        <StrategySection title="Warnings & No-Trade Conditions" color="short" icon="⚠" default-open>
          <StrategyDivider label="Hard No-Trade" />
          <StrategyCheckbox label="ES spread > 2 ticks persistently → market is broken, stand aside" accent="short" />
          <StrategyCheckbox label="Volume < 25% of 20d avg → holiday/half-day session, no reliable signals" accent="short" />
          <StrategyCheckbox label="Within ±2 min of FOMC/CPI/NFP → all liquidity pulls, regime undefined" accent="short" />
          <StrategyCheckbox label="VIX > 40 with expanding spread → crisis conditions, preservation mode" accent="short" />

          <StrategyDivider label="Trap Awareness" />
          <StrategyCheckbox label="Short-term liquidity flash at key level → don't trust it without long-term confirmation" sublabel="If heatmap band appears and fades in < 30 sec, it's not real support/resistance" accent="warn" />
          <StrategyCheckbox label="Breakout in low liq = unreliable → wait for volume to confirm the move" accent="warn" />
          <StrategyCheckbox label="Mean reversion in low liq = dangerous → price can stay irrational longer" accent="warn" />
          <StrategyCheckbox label="Regime mismatch: using high-liq strategy in low-liq environment = #1 cause of overtrading" accent="short" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'liquidity-regime',
  title: 'LIQUIDITY REGIME STRATEGY',
  subtitle: 'ES / MES INTRADAY · SHORT vs LONG-TERM LIQUIDITY · VOLUME PROFILE',
  icon: '💧',
  iconGradient: 'linear-gradient(135deg, #f0883e 0%, #c45d15 50%, #7a3510 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'identify', label: 'IDENTIFY', icon: '🔍', color: 'info' },
    { id: 'high', label: 'HIGH LIQ', icon: '🌊', color: 'long' },
    { id: 'low', label: 'LOW LIQ', icon: '🏜', color: 'warn' },
    { id: 'adapt', label: 'ADAPT', icon: '⚡', color: 'purple' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'short' },
  ],
  highConviction: [
    { text: 'High liq: scalp off volume nodes, tight stops, high frequency', color: 'long' },
    { text: 'Low liq: wider stops, limit orders only, swing for bigger targets', color: 'warn' },
    { text: 'Long-term liq at key level = institutional anchor → high conviction S/R', color: 'cyan' },
    { text: 'Short-term liq flash = fakeout bait → don\'t chase', color: 'purple' },
    { text: 'Volume profile shape (P/B/D) reveals regime before price confirms', color: 'info' },
  ],
  footerTools: 'VOLUME PROFILE · HEATMAP · LT PRO · AUCTION THEORY',
}
</script>
