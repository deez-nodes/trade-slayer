<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="Imbalance Indicator Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="Core Settings" />
          <StrategyCheckbox label="Bookmap Imbalance Indicator: detects bid/ask volume imbalance at each price level" sublabel="Compares volume traded at bid vs ask within a candle at each tick level" accent="info" />
          <StrategyCheckbox label="Imbalance ratio: default 300% (3:1) — ask volume ≥ 3x bid volume = buy imbalance" sublabel="Lower ratio (200%) = more signals, noisier. Higher (400%) = fewer, cleaner signals." accent="info" />
          <StrategyCheckbox label="Min volume filter: ≥ 10 contracts at the price level to trigger" sublabel="Prevents thin-print false positives — need meaningful volume for signal validity" accent="info" />
          <StrategyCheckbox label="Display: green highlights for buy imbalance, red for sell imbalance on price ladder" accent="info" />
          <StrategyCheckbox label="Stacking detection: consecutive imbalances at adjacent prices = trend signal" accent="info" />

          <StrategyDivider label="Footprint / Bid-Ask Volume Map" />
          <StrategyCheckbox label="Enable bid/ask volume breakdown per price level (footprint-style view)" accent="info" />
          <StrategyCheckbox label="Resolution: tick-by-tick for micro reads, 1-min for broader patterns" accent="info" />
          <StrategyCheckbox label="Delta column: net volume (ask vol − bid vol) at each price — quick imbalance scan" accent="info" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="Volume Profile: confirms whether imbalances align with HVN/LVN zones" accent="cyan" />
          <StrategyCheckbox label="CVD: aggregate delta should align with imbalance direction for confirmation" accent="cyan" />
          <StrategyCheckbox label="Heatmap: shows if passive liquidity sits at imbalance levels (absorption potential)" accent="cyan" />
          <StrategyCheckbox label="Large Lots: big prints co-located with imbalance = institutional conviction" accent="cyan" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="What Imbalances Mean" color="info" icon="◎" default-open>
          <StrategyCheckbox label="BUY IMBALANCE: at a given price, ask volume >> bid volume (e.g. 3:1 or higher)" sublabel="Aggressive buyers overwhelming sellers at that tick → demand exceeds supply locally" accent="long" />
          <StrategyCheckbox label="SELL IMBALANCE: at a given price, bid volume >> ask volume (e.g. 3:1 or higher)" sublabel="Aggressive sellers overwhelming buyers at that tick → supply exceeds demand locally" accent="short" />
          <StrategyCheckbox label="Imbalance ≠ direction: a buy imbalance at a high can be exhaustion, not continuation" accent="warn" />
          <StrategyCheckbox label="CONTEXT IS EVERYTHING: where the imbalance occurs determines its meaning" accent="warn" />
        </StrategySection>

        <StrategySection title="Imbalance Patterns" color="purple" icon="◆" default-open>
          <StrategyDivider label="Stacked Imbalances" />
          <StrategyCheckbox label="3+ consecutive buy imbalances at ascending prices = aggressive demand campaign" sublabel="Buyers lifting offers at every tick level → strong upward momentum" accent="long" />
          <StrategyCheckbox label="3+ consecutive sell imbalances at descending prices = aggressive supply campaign" accent="short" />
          <StrategyCheckbox label="Diagonal stacking = most bullish/bearish pattern — market accepting new value" accent="info" />

          <StrategyDivider label="Imbalance at Key Levels" />
          <StrategyCheckbox label="Buy imbalance at support = demand stepping in to defend → bullish" accent="long" />
          <StrategyCheckbox label="Sell imbalance at resistance = supply stepping in to cap → bearish" accent="short" />
          <StrategyCheckbox label="Buy imbalance at resistance = breakout attempt → confirm with volume follow-through" accent="warn" />
          <StrategyCheckbox label="Sell imbalance at support = breakdown attempt → confirm with volume follow-through" accent="warn" />

          <StrategyDivider label="Imbalance Reversal" />
          <StrategyCheckbox label="Buy imbalances flipping to sell imbalances at highs = momentum reversing" sublabel="Buyers were aggressive, now sellers are stepping up → potential top" accent="warn" />
          <StrategyCheckbox label="Sell imbalances flipping to buy imbalances at lows = momentum reversing" accent="warn" />
          <StrategyCheckbox label="The flip itself is the signal — don't need to wait for price confirmation" accent="info" />

          <StrategyDivider label="Imbalance Void" />
          <StrategyCheckbox label="Price moves multiple ticks with NO imbalance triggers = hollow move" sublabel="No aggressive participation on either side → move is likely position squaring, not conviction" accent="orange" />
          <StrategyCheckbox label="Hollow rallies reverse. Hollow selloffs bounce. Require imbalance for real moves." accent="orange" />
          <StrategyCheckbox label="Exception: LVN fast-travel zone — price can move through thin areas without imbalance" accent="neutral" />
        </StrategySection>
      </template>

      <!-- LONG -->
      <template #long>
        <StrategySection title="Long Entry — Conditions" color="long" icon="▲" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural support (VWAP, PDL, HVN, balance low)" accent="long" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="long" />
          <StrategyCheckbox label="Volume profile not B-shaped (selling trend) — don't buy into liquidation" accent="long" />

          <StrategyDivider label="Imbalance Signal" />
          <StrategyCheckbox label="Buy imbalance triggers at support level: aggressive demand defending the price" accent="long" />
          <StrategyCheckbox label="Stacked buy imbalances (2+ at consecutive ticks) at or just above support" accent="long" />
          <StrategyCheckbox label="Sell imbalance FADING: prior sell imbalances at this level now replaced by buy" accent="long" />
          <StrategyCheckbox label="Imbalance ratio > 4:1 at support = high conviction aggressive demand" accent="long" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD turning positive — aggregate aggressive flow aligns with imbalance" accent="long" />
          <StrategyCheckbox label="Heatmap: bid-side liquidity visible at support (passive + aggressive align)" accent="long" />
          <StrategyCheckbox label="No sell imbalance triggers within 4 ticks above (no supply overhead)" accent="long" />
          <StrategyCheckbox label="Large lot buy prints co-located with buy imbalance = institutional + imbalance confluence" accent="long" />
        </StrategySection>

        <StrategySection title="Long Entry — Trigger & Exit" color="long" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: buy on first uptick after buy imbalance confirms at support" sublabel="Limit 1-2 ticks above the imbalance level" accent="long" />
          <StrategyCheckbox label="ALT: buy on stacked imbalance breakout — enter as 3rd consecutive buy imbalance prints" accent="long" />
          <StrategyCheckbox label="T1: +4-6 ticks (50%) — first resistance or sell imbalance cluster above" accent="long" />
          <StrategyCheckbox label="T2: +8-12 ticks (25%) — next structural level or volume node" accent="long" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="long" />
          <StrategyCheckbox label="EXIT: sell imbalance appears at or near your position → supply entering" accent="warn" />
          <StrategyCheckbox label="EXIT: imbalance void on current push → hollow rally, take profit" accent="warn" />
          <StrategyCheckbox label="Time stop: no +2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- SHORT -->
      <template #short>
        <StrategySection title="Short Entry — Conditions" color="short" icon="▼" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural resistance (VWAP, PDH, HVN, balance high)" accent="short" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="short" />
          <StrategyCheckbox label="Volume profile not P-shaped (buying trend) — don't sell into short squeeze" accent="short" />

          <StrategyDivider label="Imbalance Signal" />
          <StrategyCheckbox label="Sell imbalance triggers at resistance level: aggressive supply capping the price" accent="short" />
          <StrategyCheckbox label="Stacked sell imbalances (2+ at consecutive ticks) at or just below resistance" accent="short" />
          <StrategyCheckbox label="Buy imbalance FADING: prior buy imbalances at this level now replaced by sell" accent="short" />
          <StrategyCheckbox label="Imbalance ratio > 4:1 at resistance = high conviction aggressive supply" accent="short" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD turning negative — aggregate aggressive flow aligns with imbalance" accent="short" />
          <StrategyCheckbox label="Heatmap: ask-side liquidity visible at resistance (passive + aggressive align)" accent="short" />
          <StrategyCheckbox label="No buy imbalance triggers within 4 ticks below (no demand underneath)" accent="short" />
          <StrategyCheckbox label="Large lot sell prints co-located with sell imbalance = institutional + imbalance confluence" accent="short" />
        </StrategySection>

        <StrategySection title="Short Entry — Trigger & Exit" color="short" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: sell on first downtick after sell imbalance confirms at resistance" sublabel="Limit 1-2 ticks below the imbalance level" accent="short" />
          <StrategyCheckbox label="ALT: sell on stacked imbalance breakdown — enter as 3rd consecutive sell imbalance prints" accent="short" />
          <StrategyCheckbox label="T1: −4-6 ticks (50%) — first support or buy imbalance cluster below" accent="short" />
          <StrategyCheckbox label="T2: −8-12 ticks (25%) — next structural level or volume node" accent="short" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="short" />
          <StrategyCheckbox label="EXIT: buy imbalance appears at or near your position → demand entering" accent="warn" />
          <StrategyCheckbox label="EXIT: imbalance void on current push → hollow selloff, cover" accent="warn" />
          <StrategyCheckbox label="Time stop: no −2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="S/R bounce: 2 ticks beyond the imbalance zone at S/R" accent="warn" />
          <StrategyCheckbox label="Stacked breakout: 2 ticks below the first imbalance in the stack" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
          <StrategyCheckbox label="If imbalance reverses at your level while in trade → exit immediately" sublabel="Buy imbalance flipping to sell while you're long = thesis destroyed" accent="short" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Signal Quality" />
          <StrategyCheckbox label="Low-volume imbalance (< 10 contracts at price level) = noise, not signal" accent="short" />
          <StrategyCheckbox label="Single imbalance in isolation = weak — require 2+ or structural confluence" accent="short" />
          <StrategyCheckbox label="Imbalance during news = reactive volume, not deliberate positioning" accent="short" />
          <StrategyCheckbox label="Imbalance at LVN = expected (thin area naturally creates ratios) — low conviction" accent="warn" />

          <StrategyDivider label="Common Traps" />
          <StrategyCheckbox label="Buy imbalance at the TOP of a move = exhaustion, not continuation" sublabel="Aggressive buyers making their last push — next move is often down" accent="short" />
          <StrategyCheckbox label="Sell imbalance at the BOTTOM of a move = capitulation, not continuation" accent="short" />
          <StrategyCheckbox label="Stacked imbalances that form AFTER a big move = late, not early — chase risk" accent="warn" />
          <StrategyCheckbox label="Imbalance vs absorption conflict: imbalance says move, absorption says hold → absorption wins" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → imbalances are chaotic and unreliable" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: opening rotation creates false imbalance patterns" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): min volume filter may not trigger even on real moves" accent="warn" />
          <StrategyCheckbox label="VIX > 35: imbalance ratios are extreme but whipsaw frequently" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'imbalance',
  title: 'IMBALANCE INDICATOR',
  subtitle: 'ES / MES INTRADAY · BID/ASK VOLUME IMBALANCE · FOOTPRINT ANALYSIS',
  icon: '⚖',
  iconGradient: 'linear-gradient(135deg, #d29922 0%, #b8860b 50%, #8b6914 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'long', label: 'LONG', icon: '▲', color: 'long' },
    { id: 'short', label: 'SHORT', icon: '▼', color: 'short' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Stacked buy imbalances = aggressive demand → trend continuation', color: 'long' },
    { text: 'Imbalance at S/R + absorption = institutional entry zone', color: 'cyan' },
    { text: 'Imbalance reversal: buy → sell flip at highs = momentum exhaustion', color: 'warn' },
    { text: 'Diagonal imbalance stacking = price accepting new value range', color: 'purple' },
    { text: 'Imbalance void (no triggers) in move = hollow trend, likely to reverse', color: 'orange' },
  ],
  footerTools: 'BID/ASK IMBALANCE · FOOTPRINT · VOLUME PROFILE · CVD',
}
</script>
