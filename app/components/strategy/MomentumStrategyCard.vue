<template>
  <StrategyCardShell :meta="meta">
      <!-- CONTEXT -->
      <template #context>
        <StrategySection title="When to Use This Play" color="info" icon="🗺" default-open>
          <StrategyInfoBox color="info">
            <span>The Momentum Strategy is a <strong>continuation</strong> play. It fires AFTER structure has already broken. You are joining a move in progress, not catching a turn.</span>
          </StrategyInfoBox>
          <StrategyCheckbox label="Structure has already broken to the upside/downside" sublabel="This is prerequisite — if structure hasn't broken, you're looking at Reversal, not Momentum" accent="info" />
          <StrategyCheckbox label="Time & acceptance: price is holding above/below the prior structure" accent="info" />
          <StrategyCheckbox label="This is NOT the initial breakout entry — that was the Reversal card" accent="warn" />
        </StrategySection>

        <StrategySection title="Chaining from Reversal" color="orange" icon="🔗" default-open>
          <StrategyCheckbox label="Already in a Reversal position? → T1 was taken, stop is at breakeven" accent="long" />
          <StrategyCheckbox label="This is the scale-back-in point after taking partial profits" sublabel="Excellent R:R because your original position is now risk-free" accent="long" />
          <StrategyCheckbox label="OR: missed the Reversal entirely, now see aggressive initiated flow → fresh Momentum entry" accent="info" />
          <StrategyInfoBox color="orange">
            <span>Initial position: </span>
            <StrategyRefTag card="REVERSAL STRATEGY CARD" color="orange" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="What You're Looking For" color="long" icon="👁">
          <StrategyCheckbox label="Aggressive lifting of the offer (longs) / hitting the bid (shorts)" accent="long" />
          <StrategyCheckbox label="Large green dots (longs) or red dots (shorts) sweeping through price levels" accent="long" />
          <StrategyCheckbox label="The book is being swept — not a trickle, a FLOOD of initiated volume" accent="long" />
          <StrategyCheckbox label="Offers pulling ahead of the move (longs) / bids pulling (shorts)" accent="long" />
          <StrategyCheckbox label="This is the move where you pack along with the algos" accent="info" />
        </StrategySection>
      </template>

      <!-- CONFIRM -->
      <template #confirm>
        <StrategySection title="Volume Split Confirmation" color="cyan" icon="◧" default-open>
          <StrategyDivider label="Aggressor Volume — Zoomed In" />
          <StrategyCheckbox label="Reset volume column data at the bottom of the range (fresh read)" sublabel="Double-click the column to reset, then watch the delta build from zero" accent="cyan" />
          <StrategyCheckbox label="Buy volume overwhelms sell volume in the split view" sublabel="e.g., 665 sell vs 1679 buy — clear directional dominance" accent="long" />
          <StrategyCheckbox label="At multiple price levels, the buy/sell ratio is consistently skewed" accent="long" />
          <StrategyInfoBox color="cyan">
            <span>Volume split technique: </span>
            <StrategyRefTag card="VOLUME PROFILE CARD" color="neutral" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Time & Sales Filter" color="info" icon="📜" default-open>
          <StrategyCheckbox label="Filter T&S to 10+ lot minimum — ignore 1-2 lot noise" accent="info" />
          <StrategyCheckbox label="T&S showing overwhelming buy (green) vs sell (red) entries" accent="long" />
          <StrategyCheckbox label="Large prints (10+ lots) are stacking on the aggressive buy/sell side" accent="long" />
          <StrategyCheckbox label="The pace is fast — they're jumping in quickly and moving price" accent="long" />
        </StrategySection>

        <StrategySection title="Imbalance + CVD Confirmation" color="warn" icon="⚖" default-open>
          <StrategyCheckbox label="Volume imbalance indicator showing significant skew (e.g., 14%+ more buying)" accent="long" />
          <StrategyCheckbox label="Book imbalance: bid building / ask thinning (longs) — visible in the depth columns" accent="long" />
          <StrategyCheckbox label="CVD bumping up aggressively in the direction of the move" accent="long" />
          <StrategyCheckbox label="Sub-chart volume bars confirm: more buying than selling at each print" accent="long" />
          <StrategyInfoBox color="warn">
            <span>Full imbalance workflow: </span>
            <StrategyRefTag card="IMBALANCE CARD" color="warn" />
            <StrategyRefTag card="CVD CARD → CONFIRM TAB" color="long" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Liquidity Behavior" color="purple" icon="📖">
          <StrategyCheckbox label="Offers pulling from above (longs) — getting out of the way" sublabel="Check heatmap: liquidity fading at resistance levels ahead" accent="purple" />
          <StrategyCheckbox label="Offers being added at higher levels (longs) — they're retreating upward" accent="purple" />
          <StrategyCheckbox label="Bids building at the breakout level and behind the move" accent="long" />
          <StrategyCheckbox label="Book flip: what was resistance (ask wall) is now becoming support (bid wall)" accent="long" />
          <StrategyInfoBox color="purple">
            <span>Liquidity reads: </span>
            <StrategyRefTag card="LT PRO CARD" color="cyan" />
            <StrategyRefTag card="ABSORPTION CARD" color="cyan" />
          </StrategyInfoBox>
        </StrategySection>
      </template>

      <!-- ENTRY -->
      <template #entry>
        <StrategySection title="Entry — Market Order Join" color="long" icon="⚡" default-open>
          <StrategyInfoBox color="long">
            <span>This play often requires a <strong>market order</strong>. You will NOT get a pullback when the book is being swept. Trying to bid for a fill will miss the move entirely.</span>
          </StrategyInfoBox>

          <StrategyDivider label="Primary Entry" />
          <StrategyCheckbox label="Market buy/sell order when you witness large initiated volume sweeping the book" sublabel="You are packing along with the algos — join the initiated flow" accent="long" />
          <StrategyCheckbox label="Acceptable fill: you'll pay up 1-2 ticks vs the print level. That's the cost of momentum." accent="warn" />

          <StrategyDivider label="Scale-In Entry (Existing Position)" />
          <StrategyCheckbox label="If already long/short from Reversal: add to position at momentum confirmation" accent="long" />
          <StrategyCheckbox label="Original stop is at breakeven → this add-on has its own independent stop" accent="long" />
          <StrategyCheckbox label="Position sizing: same size or smaller than original reversal entry" accent="warn" />
        </StrategySection>

        <StrategySection title="Stop Placement" color="warn" icon="⛊" default-open>
          <StrategyCheckbox label="Stop below the initiated buying cluster (longs) / above initiated selling (shorts)" sublabel="If they're serious, they're not coming back" accent="warn" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
          <StrategyCheckbox label="Time & acceptance stop: if price re-enters the prior range → thesis is dead" accent="short" />
          <StrategyCheckbox label="After T1: move stop to breakeven on this tranche" accent="long" />
        </StrategySection>

        <StrategySection title="Targets" color="info" icon="🎯" default-open>
          <StrategyCheckbox label="T1: front-run nearest high liquidity on heatmap by 1-2 ticks" accent="info" />
          <StrategyCheckbox label="T1 sizing: take 50% off — you're in a continuation, not a reversal" accent="long" />
          <StrategyCheckbox label="T2: looking for trend continuation — next structural level or end-of-day range" accent="info" />
          <StrategyCheckbox label="If they pull liquidity from T1: follow them, adjust target higher/lower" accent="warn" />
          <StrategyCheckbox label="Runner: trail final portion with 4-tick stop — ride the trend" accent="long" />
          <StrategyInfoBox color="info">
            <span>Target identification: </span>
            <StrategyRefTag card="LT PRO CARD" color="cyan" />
            <StrategyRefTag card="S/R CARD" color="info" />
          </StrategyInfoBox>
        </StrategySection>
      </template>

      <!-- MANAGE -->
      <template #manage>
        <StrategySection title="Continuation Monitoring" color="long" icon="◧" default-open>
          <StrategyDivider label="Healthy Trend Signs" />
          <StrategyCheckbox label="Initiated volume continues sweeping in your direction" accent="long" />
          <StrategyCheckbox label="Each pullback is shallow and immediately bought/sold" accent="long" />
          <StrategyCheckbox label="CVD continuing to trend with price (no divergence)" accent="long" />
          <StrategyCheckbox label="Bids stepping up higher (longs) — supporting price on any dip" accent="long" />
          <StrategyCheckbox label="Large lot tracker: institutional presence continuing at higher levels" accent="long" />

          <StrategyDivider label="Another Momentum Add Opportunity" />
          <StrategyCheckbox label="No pullback at all → book flip confirms direction" accent="info" />
          <StrategyCheckbox label="Higher bids stacking, offers continuing to pull" accent="info" />
          <StrategyCheckbox label="This is where missing the pullback is OK — the trend is confirmed" accent="info" />
        </StrategySection>

        <StrategySection title="Invalidation & Exit" color="short" icon="⚠" default-open>
          <StrategyCheckbox label="Initiated volume dries up: prints get smaller, pace slows" accent="short" />
          <StrategyCheckbox label="CVD flattens or diverges while price pushes higher → exhaustion" accent="short" />
          <StrategyCheckbox label="Large opposing prints appear (big red in an uptrend) → new seller" accent="short" />
          <StrategyCheckbox label="Book flips against you: bids pull, offers stack → exit or tighten" accent="short" />
          <StrategyCheckbox label="Price re-enters the prior range → breakout failed" accent="short" />
          <StrategyCheckbox label="Time stop: no forward progress for 2+ minutes after entry → scratch" accent="warn" />
        </StrategySection>

        <StrategySection title="Regime Filters — No Trade" color="warn" icon="🚫">
          <StrategyCheckbox label="Within ±2 min of scheduled news" accent="warn" />
          <StrategyCheckbox label="Low volume sessions: momentum signals exaggerated in thin markets" accent="warn" />
          <StrategyCheckbox label="Already extended: if price has moved 10+ ticks without a pullback, momentum entry is late" accent="warn" />
          <StrategyCheckbox label="No visible initiated volume — if the sweep isn't obvious, it's not momentum" accent="short" />
        </StrategySection>
      </template>

      <!-- LOG -->
      <template #log>
        <StrategySection title="Trade Log Entry" color="purple" icon="📋" default-open>
          <UCard variant="subtle" color="neutral">
            <p>Direction</p>
            <div>
              <UButton
                v-for="d in directions"
                :key="d"
                :label="d.toUpperCase()"
                :color="logForm.direction === d ? (d === 'long' ? 'success' : 'error') : 'neutral'"
                :variant="logForm.direction === d ? 'solid' : 'outline'"
                size="sm"
                @click="logForm.direction = d"
              />
            </div>

            <p>Entry Type</p>
            <div>
              <UButton
                v-for="e in entryTypes"
                :key="e"
                :label="e.toUpperCase()"
                :color="logForm.entryType === e ? 'info' : 'neutral'"
                :variant="logForm.entryType === e ? 'solid' : 'outline'"
                size="xs"
                @click="logForm.entryType = e"
              />
            </div>

            <p>Result</p>
            <div>
              <UButton
                v-for="r in results"
                :key="r"
                :label="r.toUpperCase()"
                :color="logForm.result === r ? (r === 'stop' ? 'error' : r === 'scratch' ? 'warning' : 'success') : 'neutral'"
                :variant="logForm.result === r ? 'solid' : 'outline'"
                size="xs"
                @click="logForm.result = r"
              />
            </div>

            <p>Confirmations Present</p>
            <div>
              <StrategyCheckbox v-for="c in confirmations" :key="c" :label="c" accent="cyan" />
            </div>
          </UCard>
        </StrategySection>

        <StrategySection title="Pattern Review Questions" color="info" icon="🔍">
          <StrategyCheckbox label="Was this a scale-in from Reversal, or a fresh entry?" accent="info" />
          <StrategyCheckbox label="Was the initiated volume truly overwhelming, or was I forcing it?" accent="warn" />
          <StrategyCheckbox label="Did I use a market order, or did I try to bid and miss?" accent="warn" />
          <StrategyCheckbox label="Was my stop below the initiated cluster, or was it arbitrary?" accent="warn" />
          <StrategyCheckbox label="Did I take partial at T1?" accent="warn" />
          <StrategyCheckbox label="Could I have chained into a Pullback Strategy for the next leg?" accent="info" />
          <StrategyInfoBox color="info">
            <span>Next leg continuation: </span>
            <StrategyRefTag card="PULLBACK STRATEGY CARD" color="info" />
          </StrategyInfoBox>
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'momentum',
  title: 'MOMENTUM STRATEGY',
  subtitle: 'COMPOSITE PLAY · BREAKOUT CONTINUATION + AGGRESSIVE INITIATED FLOW',
  icon: '🚀',
  iconGradient: 'linear-gradient(135deg, #3fb950 0%, #238636 50%, #0a5c1c 100%)',
  cardType: 'composite',
  tabs: [
    { id: 'context', label: 'CONTEXT', icon: '🗺', color: 'info' },
    { id: 'confirm', label: 'CONFIRM', icon: '✦', color: 'cyan' },
    { id: 'entry', label: 'ENTRY', icon: '⚡', color: 'long' },
    { id: 'manage', label: 'MANAGE', icon: '◧', color: 'warn' },
    { id: 'log', label: 'LOG', icon: '📋', color: 'purple' },
  ],
  composesFrom: [
    { text: 'Volume Bubbles → Initiated Buy/Sell Prints', color: 'orange' },
    { text: 'Imbalance Card → Bid/Ask Skew', color: 'warn' },
    { text: 'CVD Card → Flow Confirmation', color: 'long' },
    { text: 'LT Pro → Offer Pull / Bid Stack', color: 'cyan' },
    { text: 'S/R Card → Time & Acceptance', color: 'info' },
  ],
  playSequence: 'Structure breaks → time & acceptance above/below → large initiated prints sweep the book → offers pull / bids stack → ENTRY: market order to join OR scale into existing reversal position',
  highConviction: [
    { text: 'Initiated volume sweep + book flip = strongest momentum signal', color: 'long' },
    { text: 'CVD trending with price + large lots continuing = healthy trend', color: 'cyan' },
    { text: 'Offers pulling ahead of move = path of least resistance', color: 'purple' },
    { text: 'Scale-in from Reversal at breakeven = risk-free add', color: 'long' },
    { text: 'No pullback + book flip confirms direction = momentum add', color: 'info' },
  ],
  footerTools: 'COMPOSITE: VOL BUBBLES + IMBALANCE + CVD + LT PRO + S/R',
  footerChains: 'Chains from: REVERSAL (after T1) · Chains to: PULLBACK (continuation) · Source: Bookmap Education Part 4',
}

const directions = ['long', 'short'] as const
const entryTypes = ['fresh', 'scale-in'] as const
const results = ['T1', 'T2', 'runner', 'scratch', 'stop'] as const
const confirmations = ['Vol Split Skew', 'T&S Flood', 'CVD Trending', 'Imbalance 10%+', 'Offer Pull', 'Book Flip', 'Large Lots']

const logForm = reactive({
  direction: 'long' as string,
  entryType: '' as string,
  result: '' as string,
})
</script>
