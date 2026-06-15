<template>
  <StrategyCardShell :meta="meta">
      <!-- CONTEXT -->
      <template #context>
        <StrategySection title="Trending Environment Required" color="info" icon="🗺" default-open>
          <StrategyInfoBox color="info">
            <span>The Pullback Strategy is a <strong>trend continuation</strong> play. It requires an established trend with structure already broken. This is NOT a reversal — you're joining the dominant direction on a temporary retracement.</span>
          </StrategyInfoBox>
          <StrategyCheckbox label="Structure has already broken in the trend direction" accent="info" />
          <StrategyCheckbox label="Price has swept to a new level (new low in downtrend / new high in uptrend)" accent="info" />
          <StrategyCheckbox label="The break was decisive: aggressors traded through the prior level, absorbing limits" accent="info" />
          <StrategyCheckbox label="This play is fractal — it repeats at every scale. Look for it again and again." accent="orange" />
        </StrategySection>

        <StrategySection title="The Volume Cluster — Your Anchor" color="orange" icon="🎯" default-open>
          <StrategyCheckbox label="Big new volume cluster formed at the new level after the break" accent="orange" />
          <StrategyCheckbox label="Cluster has correct delta: downtrend = mostly red dots, uptrend = mostly green dots" sublabel="This confirms the aggressive side is aligned with the trend direction" accent="orange" />
          <StrategyCheckbox label="Cluster is dense — lots of trading activity, not a thin sweep" accent="orange" />
          <StrategyCheckbox label="This cluster is where the trend established its new base" accent="info" />
          <StrategyInfoBox color="orange">
            <span>Volume cluster analysis: </span>
            <StrategyRefTag card="VOLUME BUBBLES CARD" color="orange" />
            <StrategyRefTag card="VOLUME PROFILE CARD" color="neutral" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="The Pullback — What You're Waiting For" color="warn" icon="↩" default-open>
          <StrategyCheckbox label="Price pulls back toward the break point on LOW volume" sublabel="Key: the pullback itself should be low energy — exhaustion into the node" accent="warn" />
          <StrategyCheckbox label="Pullback terminates at or near the low volume node between the cluster and prior range" accent="warn" />
          <StrategyCheckbox label="Low volume node = the thin area on the profile where price moved quickly through" accent="info" />
          <StrategyCheckbox label="Exhaustion visible: small dots, drying volume, no aggressive continuation against trend" accent="warn" />
          <StrategyCheckbox label="The pullback is the market re-testing the break — if it holds, trend continues" accent="info" />
        </StrategySection>
      </template>

      <!-- CONFLUENCE -->
      <template #confluence>
        <StrategySection title="CVD Exhaustion on Pullback" color="long" icon="📈" default-open>
          <StrategyCheckbox label="CVD divergence during the pullback: price retraces but CVD shows exhaustion" sublabel="Typical: heavy divergence on pullback. Even slight divergence counts here." accent="long" />
          <StrategyCheckbox label="Ideal: CVD way below the pullback price action (downtrend) = buyers on pullback are weak" accent="long" />
          <StrategyCheckbox label="Even slight CVD divergence is meaningful — confirms pullback is running out of steam" accent="info" />
          <StrategyInfoBox color="long">
            <span>CVD exhaustion reads: </span>
            <StrategyRefTag card="CVD CARD → DIVERGE TAB" color="long" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Iceberg Context" color="purple" icon="🧊" default-open>
          <StrategyCheckbox label="Read the context of ALL icebergs in the area, not just one large event" sublabel="Unlike Reversal where one big iceberg matters, Pullback reads the aggregate pattern" accent="purple" />
          <StrategyCheckbox label="Downtrend: more iceberg activity on the offer side vs bid side = hidden sellers positioned" sublabel="e.g., offer icebergs: 59, 56, 164 vs bid icebergs: 25, 2, 15, 22 — clear seller dominance" accent="short" />
          <StrategyCheckbox label="Uptrend: more iceberg activity on the bid side = hidden buyers positioned" accent="long" />
          <StrategyCheckbox label="⚠ Iceberg at higher level during pullback may be someone flipping out of a counter-trade" accent="warn" />
          <StrategyInfoBox color="purple">
            <span>Iceberg aggregate reading: </span>
            <StrategyRefTag card="ICEBERG CARD → READ TAB" color="purple" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Imbalance & Large Lots" color="warn" icon="⚖">
          <StrategyCheckbox label="Volume imbalance: slight negative (downtrend) or positive (uptrend) = trend-aligned skew" accent="warn" />
          <StrategyCheckbox label="Book imbalance may show opposite (bids building on pullback) — that's normal, it's the pullback" accent="info" />
          <StrategyCheckbox label="Large lot tracker: sparse during pullback is OK — they already positioned at the cluster" accent="neutral" />
          <StrategyCheckbox label="If large lots DO appear at the pullback level on the trend side = extra conviction" accent="long" />
          <StrategyInfoBox color="warn">
            <span>Imbalance reads: </span>
            <StrategyRefTag card="IMBALANCE CARD" color="warn" />
            <StrategyRefTag card="LARGE LOTS CARD" color="orange" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Correlation Tracker — Cross-Market Confirmation" color="cyan" icon="🔗" default-open>
          <StrategyInfoBox color="cyan">
            <span>New confluence not covered by atomic cards. The correlation tracker overlays a correlated market (e.g., NQ on ES) to confirm the trend and pullback quality.</span>
          </StrategyInfoBox>

          <StrategyDivider label="ES ↔ NQ Correlation" />
          <StrategyCheckbox label="NQ typically shows the same move with more amplitude (more volatile, less liquidity)" accent="cyan" />
          <StrategyCheckbox label="NQ breaks down more significantly than ES = correlated confirmation" accent="cyan" />
          <StrategyCheckbox label="NQ already breaking down again from its pullback BEFORE ES = leading signal" sublabel="This is a powerful early confirmation — NQ leads, ES follows" accent="long" />
          <StrategyCheckbox label="NQ pullback is an ABCD pattern back to the break point = textbook retest" accent="cyan" />

          <StrategyDivider label="Other Correlations" />
          <StrategyCheckbox label="ES vs bonds: opposite correlation — bonds rallying while ES selling = flight to safety confirms" accent="info" />
          <StrategyCheckbox label="ES vs DXY (dollar index): strong dollar often pressures equities" accent="info" />
          <StrategyCheckbox label="Sector leaders (via DX feed): if the leading sector is already rolling over, ES follows" accent="info" />
          <StrategyCheckbox label="Gold vs AUD, Oil vs CAD — intermarket correlations shift, verify they're active" accent="warn" />

          <StrategyDivider label="Hedging / Pairs Play" />
          <StrategyCheckbox label="Don't have to be directional: can hedge ES long with NQ short (or vice versa)" accent="purple" />
          <StrategyCheckbox label="If NQ shows stronger setup: take the trade there instead (or in addition)" accent="purple" />
          <StrategyCheckbox label="Spread trades: buy one, sell the other — betting on the correlation normalizing" accent="purple" />
        </StrategySection>
      </template>

      <!-- ENTRY -->
      <template #entry>
        <StrategySection title="Entry — Limit Order at Low Volume Node" color="long" icon="⚡" default-open>
          <StrategyInfoBox color="long">
            <span>Unlike Momentum (market order), Pullback uses a <strong>limit order</strong> placed in advance. Set it immediately after you see the break and volume cluster form. The pullback comes to you.</span>
          </StrategyInfoBox>

          <StrategyDivider label="Limit Order Placement" />
          <StrategyCheckbox label="Set limit order immediately after you see the break and volume cluster" accent="long" />
          <StrategyCheckbox label="Place at the low volume node — where price moved quickly through on the break" accent="long" />
          <StrategyCheckbox label="Be aggressive: place 1 tick INTO the low volume node (closer to the cluster side)" sublabel="Pullbacks often don't fully retrace — if you're 1 tick too far, you miss it" accent="warn" />
          <StrategyCheckbox label="Consider layering: 2-3 orders across the LVN zone if it's wider than 2 ticks" accent="info" />
          <StrategyCheckbox label="Not many orders trade during the pullback (it's low volume) — fills can be tight" accent="warn" />

          <StrategyDivider label="Alternative: Scale Back In" />
          <StrategyCheckbox label="If already in a Momentum position: this is the add-back opportunity" accent="long" />
          <StrategyCheckbox label="Reversal → T1 → Momentum add → this Pullback = full position chain" accent="info" />
        </StrategySection>

        <StrategySection title="Stop Placement — Two Options" color="warn" icon="⛊" default-open>
          <StrategyDivider label="Aggressive Stop" />
          <StrategyCheckbox label="Just above the low volume node (longs below the LVN)" sublabel="Tighter: if price re-enters the range, the pullback failed" accent="warn" />
          <StrategyCheckbox label="This gives you the best R:R but less room for noise" accent="warn" />

          <StrategyDivider label="Conservative Stop" />
          <StrategyCheckbox label="Above the prior range / above the point of control of the prior balance" sublabel="More room — the pullback can overshoot the LVN without stopping you out" accent="info" />
          <StrategyCheckbox label="Use this if the LVN is very thin (1-2 ticks) and you need breathing room" accent="info" />

          <StrategyDivider label="Hard Limits" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven" accent="long" />
        </StrategySection>

        <StrategySection title="Targets" color="info" icon="🎯" default-open>
          <StrategyCheckbox label="T1: front-run the nearest high liquidity below (downtrend) / above (uptrend) by 1-2 ticks" accent="info" />
          <StrategyCheckbox label="T1 sizing: take partial — this is trend continuation, expect more" accent="long" />
          <StrategyCheckbox label="T2: next structural level, prior day low/high, or next volume cluster" accent="info" />
          <StrategyCheckbox label="Watch for: them pulling liquidity from your target = adjust, follow them" accent="warn" />
          <StrategyCheckbox label="This play is repeatable: after T1, look for ANOTHER pullback to the next LVN" accent="orange" />
          <StrategyInfoBox color="orange">
            <span>The pullback is fractal — chain them: </span>
            <StrategyRefTag card="PULLBACK STRATEGY (this card, again)" color="info" />
          </StrategyInfoBox>
        </StrategySection>
      </template>

      <!-- MANAGE -->
      <template #manage>
        <StrategySection title="Post-Entry — Trend Continuation" color="long" icon="◧" default-open>
          <StrategyDivider label="Immediate Confirmation" />
          <StrategyCheckbox label="Price rotates back in the trend direction immediately after filling your limit" accent="long" />
          <StrategyCheckbox label="Volume picks up in the trend direction as price leaves the LVN" accent="long" />
          <StrategyCheckbox label="CVD resumes trending (no more pullback divergence)" accent="long" />
          <StrategyCheckbox label="The pullback was the retest — trend resumes" accent="long" />

          <StrategyDivider label="Repeating the Pattern" />
          <StrategyCheckbox label="After T1: look for the NEXT break → cluster → pullback sequence" accent="info" />
          <StrategyCheckbox label="Trend days produce 3-5 pullback opportunities — this is your business, repeat it" accent="info" />
          <StrategyCheckbox label="Each repetition validates your read — confidence compounds" accent="long" />
        </StrategySection>

        <StrategySection title="Invalidation & Exit" color="short" icon="⚠" default-open>
          <StrategyCheckbox label="Pullback exceeds the LVN and re-enters the prior range = failed retest" accent="short" />
          <StrategyCheckbox label="Volume picks up AGAINST the trend during the pullback = not exhaustion, it's a reversal" accent="short" />
          <StrategyCheckbox label="CVD flips direction and holds (pullback divergence resolves in counter-trend direction)" accent="short" />
          <StrategyCheckbox label="Counter-trend icebergs or large lots appear at the pullback level = defense forming the wrong way" accent="short" />
          <StrategyCheckbox label="Correlated market (NQ) breaks above its pullback level = correlation confirming failure" accent="short" />
          <StrategyCheckbox label="Time stop: price sits in the LVN for 3+ minutes with no resolution → scratch, reassess" accent="warn" />
        </StrategySection>

        <StrategySection title="Regime Filters — No Trade" color="warn" icon="🚫">
          <StrategyCheckbox label="Within ±2 min of scheduled news" accent="warn" />
          <StrategyCheckbox label="No clear trend established — range/chop environment ≠ pullback environment" accent="short" />
          <StrategyCheckbox label="Volume cluster has wrong delta (green cluster in downtrend) = mixed signal, stand aside" accent="short" />
          <StrategyCheckbox label="LVN is too wide (> 6 ticks) — stop distance becomes unacceptable" accent="warn" />
          <StrategyCheckbox label="Pullback is on HEAVY volume = this isn't a pullback, it's a reversal forming" accent="short" />
        </StrategySection>
      </template>

      <!-- LOG -->
      <template #log>
        <StrategySection title="Trade Log Entry" color="purple" icon="📋" default-open>
          <UCard variant="subtle" color="neutral">
            <p>Trend Direction</p>
            <div>
              <UButton
                v-for="d in directions"
                :key="d"
                :label="d.toUpperCase()"
                :color="logForm.direction === d ? (d.startsWith('short') ? 'error' : 'success') : 'neutral'"
                :variant="logForm.direction === d ? 'solid' : 'outline'"
                size="sm"
                @click="logForm.direction = d"
              />
            </div>

            <p>Stop Type</p>
            <div>
              <UButton
                v-for="s in stopTypes"
                :key="s"
                :label="s.toUpperCase()"
                :color="logForm.stopType === s ? (s === 'aggressive' ? 'error' : 'info') : 'neutral'"
                :variant="logForm.stopType === s ? 'solid' : 'outline'"
                size="xs"
                @click="logForm.stopType = s"
              />
            </div>

            <p>Result</p>
            <div>
              <UButton
                v-for="r in results"
                :key="r"
                :label="r.toUpperCase()"
                :color="logForm.result === r ? (r === 'stop' ? 'error' : (r === 'scratch' || r === 'no fill') ? 'warning' : 'success') : 'neutral'"
                :variant="logForm.result === r ? 'solid' : 'outline'"
                size="xs"
                @click="logForm.result = r"
              />
            </div>

            <p>Confluences Present</p>
            <div>
              <StrategyCheckbox v-for="c in confluences" :key="c" :label="c" accent="cyan" />
            </div>
          </UCard>
        </StrategySection>

        <StrategySection title="Pattern Review Questions" color="info" icon="🔍">
          <StrategyCheckbox label="Was there a clear trend with broken structure, or was I forcing a pullback in chop?" accent="info" />
          <StrategyCheckbox label="Did the volume cluster have the correct delta?" accent="info" />
          <StrategyCheckbox label="Was my limit order at the LVN, or did I place it too far / too close?" accent="warn" />
          <StrategyCheckbox label="Did I get the aggressive or conservative stop right for this situation?" accent="warn" />
          <StrategyCheckbox label="Was the pullback on low volume (correct) or heavy volume (reversal signal I missed)?" accent="warn" />
          <StrategyCheckbox label="Did I check the correlation tracker for cross-market confirmation?" accent="info" />
          <StrategyCheckbox label="After T1, did I look for the next pullback opportunity?" accent="info" />
          <StrategyCheckbox label="How many pullbacks did I catch in this trend?" accent="long" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'pullback',
  title: 'PULLBACK STRATEGY',
  subtitle: 'COMPOSITE PLAY · TREND CONTINUATION + LOW VOLUME NODE ENTRY',
  icon: '↩',
  iconGradient: 'linear-gradient(135deg, #58a6ff 0%, #1f6feb 50%, #0d419d 100%)',
  cardType: 'composite',
  tabs: [
    { id: 'context', label: 'CONTEXT', icon: '🗺', color: 'info' },
    { id: 'confluence', label: 'CONFLUENCE', icon: '◈', color: 'cyan' },
    { id: 'entry', label: 'ENTRY', icon: '⚡', color: 'long' },
    { id: 'manage', label: 'MANAGE', icon: '◧', color: 'warn' },
    { id: 'log', label: 'LOG', icon: '📋', color: 'purple' },
  ],
  composesFrom: [
    { text: 'Volume Profile → Low Volume Node Target', color: 'neutral' },
    { text: 'Volume Bubbles → Correct Delta Cluster', color: 'orange' },
    { text: 'CVD Card → Pullback Exhaustion', color: 'long' },
    { text: 'Iceberg Card → Hidden Flow Context', color: 'purple' },
    { text: 'Imbalance Card → Directional Skew', color: 'warn' },
    { text: 'Correlation Tracker → Cross-Market Confirm', color: 'cyan' },
  ],
  playSequence: 'Trend established → structure breaks to new level → big volume cluster with correct delta → price pulls back on low volume → ENTRY: limit order at low volume node → continuation to new lows/highs',
  highConviction: [
    { text: 'Correct delta cluster + CVD exhaustion on pullback = high probability continuation', color: 'long' },
    { text: 'NQ leading the pullback reversal before ES = early entry signal', color: 'cyan' },
    { text: 'Iceberg aggregate skewed toward trend direction = hidden institutional positioning', color: 'purple' },
    { text: 'Fractal pattern: chain pullback → pullback → pullback on trend days', color: 'orange' },
    { text: 'Low volume pullback into LVN + limit fill = optimal R:R entry', color: 'info' },
  ],
  footerTools: 'COMPOSITE: VOL PROFILE + VOL BUBBLES + CVD + ICEBERG + IMBALANCE + CORRELATION',
  footerChains: 'Chains from: MOMENTUM (continuation) · Self-chains: PULLBACK → PULLBACK (fractal) · Source: Bookmap Education Part 4',
}

const directions = ['short (sell PB)', 'long (buy PB)'] as const
const stopTypes = ['aggressive', 'conservative'] as const
const results = ['T1', 'T2', 'chained PB', 'scratch', 'stop', 'no fill'] as const
const confluences = ['Vol Cluster OK', 'Correct Delta', 'CVD Exhaust', 'Iceberg Context', 'Large Lots', 'Imbalance', 'NQ Correlation']

const logForm = reactive({
  direction: 'short (sell PB)' as string,
  stopType: '' as string,
  result: '' as string,
})
</script>
