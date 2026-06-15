<template>
  <StrategyCardShell :meta="meta">
      <!-- SETUP -->
      <template #setup>
        <StrategySection title="LT Pro Configuration" color="info" icon="⚙" default-open>
          <StrategyDivider label="Core Settings" />
          <StrategyCheckbox label="Data requirement: CME MBO via Rithmic or BookmapData ONLY" sublabel="LT Pro order-size filter does NOT work with CQG, dxFeed, Eurex, or non-CME data" accent="info" />
          <StrategyCheckbox label="Market depth (half-life): 10-20 levels for ES intraday" sublabel="Exponential weighting: closer levels count more. 10 = tight focus, 20 = broader view" accent="info" />
          <StrategyCheckbox label="Smooth: light smoothing (2-3) for cleaner lines, 0 for raw response" accent="info" />
          <StrategyCheckbox label="Display: lines for bid (blue) and ask (red) liquidity, plus imbalance" accent="info" />

          <StrategyDivider label="Order Size Filter (Key Feature)" />
          <StrategyCheckbox label="Unfiltered view: shows ALL resting liquidity — total market depth" accent="info" />
          <StrategyCheckbox label="Min size ≥ 5: filters out small retail orders, shows 'informed' liquidity" sublabel="Imbalance between large orders often diverges from total — that divergence IS the signal" accent="cyan" />
          <StrategyCheckbox label="Min size ≥ 10: aggressive filter — shows only institutional-scale resting orders" accent="cyan" />
          <StrategyCheckbox label="Run BOTH views side-by-side: unfiltered + filtered ≥ 5 for maximum context" sublabel="When total imbalance is flat but large-order imbalance is 10x skewed → smart money positioning" accent="cyan" />

          <StrategyDivider label="Companion Layers" />
          <StrategyCheckbox label="Heatmap: visual confirmation of where LT Pro detects liquidity concentration" accent="purple" />
          <StrategyCheckbox label="Liquidity Marker: flags sudden adds/pulls — complements LT Pro's continuous view" accent="purple" />
          <StrategyCheckbox label="CVD: aggressive order bias to pair with LT Pro's passive order view" accent="purple" />
          <StrategyCheckbox label="S&I Tracker: iceberg/stop events that explain sudden LT Pro shifts" accent="purple" />
        </StrategySection>
      </template>

      <!-- READ -->
      <template #read>
        <StrategySection title="Reading LT Pro Lines" color="info" icon="◎" default-open>
          <StrategyCheckbox label="Bid line (blue): total exponentially-weighted resting buy liquidity across all levels" accent="info" />
          <StrategyCheckbox label="Ask line (red): total exponentially-weighted resting sell liquidity across all levels" accent="info" />
          <StrategyCheckbox label="Imbalance: bid minus ask — positive = more buy liquidity, negative = more sell" accent="info" />
          <StrategyCheckbox label="Rising bid line: buyers are ADDING resting orders → building demand" accent="long" />
          <StrategyCheckbox label="Rising ask line: sellers are ADDING resting orders → building supply" accent="short" />
          <StrategyCheckbox label="Falling bid line: buyers PULLING orders → demand evaporating" accent="short" />
          <StrategyCheckbox label="Falling ask line: sellers PULLING orders → supply evaporating" accent="long" />
        </StrategySection>

        <StrategySection title="Key Patterns" color="purple" icon="◆" default-open>
          <StrategyDivider label="Liquidity Imbalance" />
          <StrategyCheckbox label="Bid >> Ask: heavy passive demand → price likely to bounce or hold support" accent="long" />
          <StrategyCheckbox label="Ask >> Bid: heavy passive supply → price likely to reject or hold resistance" accent="short" />
          <StrategyCheckbox label="Best signal: imbalance at structural level (VWAP, PDH/PDL, round number)" accent="info" />

          <StrategyDivider label="Large-Order Divergence" />
          <StrategyCheckbox label="Total imbalance flat BUT filtered (≥5) imbalance strongly skewed" sublabel="Retail is balanced but institutions are loading one side → follow the big orders" accent="cyan" />
          <StrategyCheckbox label="Ratio check: if large-order imbalance > 10x vs total → high conviction directional bias" accent="cyan" />

          <StrategyDivider label="Liquidity Pull / Add Dynamics" />
          <StrategyCheckbox label="Ask liquidity pulls BEFORE price rise → sellers getting out of the way = bullish" accent="long" />
          <StrategyCheckbox label="Bid liquidity pulls BEFORE price drop → buyers getting out of the way = bearish" accent="short" />
          <StrategyCheckbox label="Liquidity ADDS opposing price direction → passive defense building = potential reversal" accent="warn" />

          <StrategyDivider label="Book Flip" />
          <StrategyCheckbox label="Bid and ask dominance reverses sharply within seconds → momentum regime change" accent="orange" />
          <StrategyCheckbox label="Price lag: the flip often precedes the price move by 5-15 seconds" accent="orange" />
          <StrategyCheckbox label="Most reliable when it occurs at a key structural level with CVD confirmation" accent="orange" />
        </StrategySection>
      </template>

      <!-- LONG -->
      <template #long>
        <StrategySection title="Long Entry — Conditions" color="long" icon="▲" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural support (VWAP, PDL, balance low, volume node)" accent="long" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="long" />
          <StrategyCheckbox label="Broader bias not aggressively bearish" accent="long" />

          <StrategyDivider label="LT Pro Signal" />
          <StrategyCheckbox label="Bid liquidity rising while ask liquidity flat or falling → demand building" accent="long" />
          <StrategyCheckbox label="Large-order filter (≥5): bid-side imbalance > 3x ask → institutional demand" accent="long" />
          <StrategyCheckbox label="Ask-side liquidity PULLING ahead of current price → supply vacuum above" accent="long" />
          <StrategyCheckbox label="Book flip: bid takes over from ask dominance at support level" accent="long" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD turning positive — aggressors align with passive bid buildup" accent="long" />
          <StrategyCheckbox label="Heatmap: visible bid wall building at support, ask side thinning above" accent="long" />
          <StrategyCheckbox label="S&I: iceberg detection on bid side corroborates LT Pro bid buildup" accent="long" />
        </StrategySection>

        <StrategySection title="Long Entry — Trigger & Exit" color="long" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: buy on first uptick after LT Pro confirms bid dominance at support" sublabel="Limit 1-2 ticks above support, or market on clear momentum shift" accent="long" />
          <StrategyCheckbox label="T1: take 50% at +4-6 ticks — first resistance or where ask builds up" accent="long" />
          <StrategyCheckbox label="T2: take 25% at +8-12 ticks — next key LT Pro ask concentration" accent="long" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="long" />
          <StrategyCheckbox label="EXIT SIGNAL: ask liquidity suddenly surges above → new supply cap forming" accent="warn" />
          <StrategyCheckbox label="EXIT SIGNAL: bid liquidity collapses → your support is evaporating" accent="warn" />
          <StrategyCheckbox label="Time stop: no +2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- SHORT -->
      <template #short>
        <StrategySection title="Short Entry — Conditions" color="short" icon="▼" default-open>
          <StrategyDivider label="Context" />
          <StrategyCheckbox label="Price at or near structural resistance (VWAP, PDH, balance high, round number)" accent="short" />
          <StrategyCheckbox label="Session: RTH open > 15 min, not within 5 min of major news" accent="short" />
          <StrategyCheckbox label="Broader bias not aggressively bullish" accent="short" />

          <StrategyDivider label="LT Pro Signal" />
          <StrategyCheckbox label="Ask liquidity rising while bid liquidity flat or falling → supply building" accent="short" />
          <StrategyCheckbox label="Large-order filter (≥5): ask-side imbalance > 3x bid → institutional supply" accent="short" />
          <StrategyCheckbox label="Bid-side liquidity PULLING below current price → demand vacuum below" accent="short" />
          <StrategyCheckbox label="Book flip: ask takes over from bid dominance at resistance level" accent="short" />

          <StrategyDivider label="Confirmation" />
          <StrategyCheckbox label="CVD turning negative — aggressors align with passive ask buildup" accent="short" />
          <StrategyCheckbox label="Heatmap: visible ask wall at resistance, bid side thinning below" accent="short" />
          <StrategyCheckbox label="S&I: iceberg detection on ask side corroborates LT Pro ask buildup" accent="short" />
        </StrategySection>

        <StrategySection title="Short Entry — Trigger & Exit" color="short" icon="⚡" default-open>
          <StrategyCheckbox label="ENTRY: sell on first downtick after LT Pro confirms ask dominance at resistance" sublabel="Limit 1-2 ticks below resistance, or market on clear momentum shift" accent="short" />
          <StrategyCheckbox label="T1: cover 50% at −4-6 ticks — first support or where bid builds up" accent="short" />
          <StrategyCheckbox label="T2: cover 25% at −8-12 ticks — next key LT Pro bid concentration" accent="short" />
          <StrategyCheckbox label="Runner: trail 25% with 4-tick trailing stop" accent="short" />
          <StrategyCheckbox label="EXIT SIGNAL: bid liquidity suddenly surges below → new demand floor forming" accent="warn" />
          <StrategyCheckbox label="EXIT SIGNAL: ask liquidity collapses → your resistance is evaporating" accent="warn" />
          <StrategyCheckbox label="Time stop: no −2 tick move within 90 sec → scratch" accent="warn" />
        </StrategySection>
      </template>

      <!-- RISK -->
      <template #risk>
        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Initial stop: 2-3 ticks beyond the LT Pro liquidity concentration zone" sublabel="If bid wall is your thesis, stop goes just below where bids are stacked" accent="warn" />
          <StrategyCheckbox label="Hard stop MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="Dynamic stop: if LT Pro shows liquidity PULLING from your side → tighten or exit" sublabel="LT Pro gives real-time stop adjustment signals — the book tells you when to leave" accent="warn" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
        </StrategySection>

        <StrategySection title="Warnings & Invalidators" color="short" icon="⚠" default-open>
          <StrategyDivider label="Immediate Invalidation" />
          <StrategyCheckbox label="Liquidity on YOUR side collapses rapidly → passive defense abandoned, exit" accent="short" />
          <StrategyCheckbox label="Large-order filter divergence reverses → institutional bias has shifted" accent="short" />
          <StrategyCheckbox label="Price slices through your LT Pro wall on heavy volume → broken level, flip bias" accent="short" />
          <StrategyCheckbox label="Both sides pulling simultaneously → liquidity vacuum, stand aside (wide spread incoming)" accent="short" />

          <StrategyDivider label="LT Pro Specific Caveats" />
          <StrategyCheckbox label="LT Pro is PASSIVE orders only — doesn't show aggressive flow (need CVD for that)" sublabel="Always pair LT Pro with CVD: passive buildup + aggressive confirmation = highest conviction" accent="warn" />
          <StrategyCheckbox label="Flickering best price causes small noise — use smoothing ≥ 2 to filter" accent="warn" />
          <StrategyCheckbox label="Spoofs show up as liquidity adds then pulls — cross-reference with Liquidity Marker" accent="warn" />
          <StrategyCheckbox label="LT Pro order size filter only works on CME via Rithmic or BookmapData" accent="warn" />

          <StrategyDivider label="Regime Filters" />
          <StrategyCheckbox label="Within ±2 min of scheduled news → passive liquidity gets pulled en masse" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: book is rebuilding, LT Pro readings are noisy" accent="warn" />
          <StrategyCheckbox label="VIX > 35: passive orders get pulled faster, LT Pro signals are transient" accent="warn" />
          <StrategyCheckbox label="Low volume sessions: thin book means small orders create outsized LT Pro signals" accent="warn" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'liquidity-tracker-pro',
  title: 'LIQUIDITY TRACKER PRO',
  subtitle: 'ES / MES INTRADAY · MBO BUNDLE · ORDER BOOK DYNAMICS',
  icon: '🌊',
  iconGradient: 'linear-gradient(135deg, #bc8cff 0%, #8957e5 50%, #553098 100%)',
  cardType: 'atomic',
  tabs: [
    { id: 'setup', label: 'SETUP', icon: '⚙', color: 'info' },
    { id: 'read', label: 'READ', icon: '◉', color: 'info' },
    { id: 'long', label: 'LONG', icon: '▲', color: 'long' },
    { id: 'short', label: 'SHORT', icon: '▼', color: 'short' },
    { id: 'risk', label: 'RISK', icon: '⛊', color: 'warn' },
  ],
  highConviction: [
    { text: 'Bid liquidity surges + ask thins = bullish imbalance → long', color: 'long' },
    { text: "Large-order imbalance ≥ 10x diverges from total = 'smart money' bias", color: 'cyan' },
    { text: 'Liquidity pulls ahead of price = path of least resistance revealed', color: 'purple' },
    { text: 'Book flip: bid/ask dominance reverses sharply = momentum shift', color: 'orange' },
    { text: 'Sustained imbalance at VWAP/key level = institutional defense', color: 'info' },
  ],
  footerTools: 'LIQUIDITY TRACKER PRO · MBO BUNDLE · RITHMIC/BOOKMAP DATA',
}
</script>
