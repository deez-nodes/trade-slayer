<template>
  <StrategyCardShell :meta="meta">
      <!-- CONTEXT -->
      <template #context>
        <StrategySection title="1. Higher Time Frame Level" color="info" icon="🗺" default-open>
          <StrategyDivider label="Required — The Anchor" />
          <StrategyCheckbox label="Identify HTF level: prior-day high/low, multi-day swing, weekly level" sublabel="This is non-negotiable. No HTF level = no reversal setup." accent="info" />
          <StrategyCheckbox label="Price has tapped or is within 2 ticks of the HTF level" accent="info" />
          <StrategyCheckbox label="Level has history: prior bounces, volume clusters, or heatmap memory at this price" accent="info" />
          <StrategyCheckbox label="Check: did we trap the other side first? (broke structure before reaching HTF)" sublabel="A structure break that knocks out weak hands before the level tap = higher probability reversal" accent="orange" />
          <StrategyInfoBox color="orange">
            <span>Full level identification workflow: </span>
            <StrategyRefTag card="S/R CARD" color="info" />
            <StrategyRefTag card="LT PRO CARD" color="cyan" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="2. Structure & Trend Context" color="orange" icon="📐" default-open>
          <StrategyDivider label="Current Micro Structure" />
          <StrategyCheckbox label="Identify the current micro trend line — is price still within bearish/bullish structure?" accent="orange" />
          <StrategyCheckbox label="Note the last swing high/low that defines the micro structure" accent="orange" />
          <StrategyCheckbox label="Structure has NOT broken yet (that's the setup trigger, not the context)" sublabel="You want to see: still in downtrend structure at a HTF support, or still in uptrend at HTF resistance" accent="warn" />
          <StrategyCheckbox label="Higher time frame context: is this a range day (trapped both sides) or a trend day?" sublabel="Range days with double-trap are highest conviction for reversals" accent="info" />
        </StrategySection>

        <StrategySection title="3. Volume & Liquidity Context" color="neutral" icon="📊">
          <StrategyDivider label="Volume Profile Read" />
          <StrategyCheckbox label="Volume profile tapering / drying up at the extreme = finished auction edge" accent="neutral" />
          <StrategyCheckbox label="Low volume at current price compared to prior range = selling/buying exhaustion" accent="neutral" />
          <StrategyCheckbox label="Volume dots at extreme: small dots at the very tip = exhaustion confirmed" sublabel="You want to see very little trading at the extreme. Big dots at extreme = continuation likely." accent="neutral" />
          <StrategyInfoBox color="neutral">
            <span>Full volume analysis: </span>
            <StrategyRefTag card="VOLUME PROFILE CARD" color="neutral" />
            <StrategyRefTag card="VOLUME BUBBLES CARD" color="neutral" />
          </StrategyInfoBox>

          <StrategyDivider label="Heatmap Liquidity" />
          <StrategyCheckbox label="Note liquidity distribution: is there high liquidity on the aggressive side (pressing price)?" accent="warn" />
          <StrategyCheckbox label="Check for liquidity on the opposite side of the reversal = your targets" accent="info" />
          <StrategyInfoBox color="info">
            <span>Heatmap reading: </span>
            <StrategyRefTag card="LT PRO CARD" color="cyan" />
            <StrategyRefTag card="LIQUIDITY REGIME CARD" color="info" />
          </StrategyInfoBox>
        </StrategySection>
      </template>

      <!-- CONFLUENCE -->
      <template #confluence>
        <StrategyInfoBox color="orange">
          <span>These confluences <strong>precede</strong> the setup trigger. They build conviction BEFORE micro structure breaks. Each is implemented on its own atomic card — use this tab to track which fired.</span>
        </StrategyInfoBox>

        <StrategySection title="CVD Divergence" color="long" icon="📈" default-open>
          <StrategyCheckbox label="Price making lower lows but CVD making higher lows = bullish divergence" sublabel="More buying than selling in the aggregate despite lower prices — sellers exhausting" accent="long" />
          <StrategyCheckbox label="OR: price making higher highs but CVD making lower highs = bearish divergence" accent="short" />
          <StrategyCheckbox label="CVD divergence confirms: selling pressure is beginning to exhaust" accent="long" />
          <StrategyInfoBox color="long">
            <span>Full CVD divergence workflow: </span>
            <StrategyRefTag card="CVD CARD → DIVERGE TAB" color="long" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Iceberg Absorption" color="purple" icon="🧊" default-open>
          <StrategyCheckbox label="Significant iceberg detected at/near the HTF level" sublabel="More contracts traded than visible in the book = hidden orders absorbing aggression" accent="purple" />
          <StrategyCheckbox label="Iceberg is on the DEFENSIVE side (bid-side iceberg at support, ask-side at resistance)" accent="purple" />
          <StrategyCheckbox label="Iceberg refilling: hidden order reloads after being hit = persistent institutional defense" accent="purple" />
          <StrategyCheckbox label="Aggressive selling hitting the level, but iceberg absorbing it → price holds" accent="purple" />
          <StrategyInfoBox color="purple">
            <span>Full iceberg detection: </span>
            <StrategyRefTag card="ICEBERG CARD → READ TAB" color="purple" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Large Lot Defense" color="orange" icon="🎯" default-open>
          <StrategyCheckbox label="Large lot tracker shows individual actor holding significant % of book liquidity at the level" sublabel="15-20%+ of total depth at a single price = institutional commitment" accent="orange" />
          <StrategyCheckbox label="Multiple large lots appearing at the level or slightly behind it" accent="orange" />
          <StrategyCheckbox label="Large lots holding (not pulling) = genuine intent to defend" accent="orange" />
          <StrategyCheckbox label="⚠ Watch for spoof: if large lot pulls → vacuum created → could accelerate against you" accent="warn" />
          <StrategyInfoBox color="orange">
            <span>Full large lot analysis: </span>
            <StrategyRefTag card="LARGE LOTS CARD → READ TAB" color="orange" />
            <StrategyRefTag card="ABSORPTION CARD → SPOOF TAB" color="warn" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Confluence Scorecard" color="cyan" icon="✦">
          <UCard variant="subtle" color="neutral">
            <p>Minimum: HTF Level + 2 confluences. Ideal: 4+</p>
            <StrategyCheckbox label="HTF Level Tap [REQUIRED]" accent="short" />
            <StrategyCheckbox label="Volume Exhaustion (Profile + Dots)" accent="cyan" />
            <StrategyCheckbox label="CVD Divergence" accent="cyan" />
            <StrategyCheckbox label="Iceberg Absorption" accent="cyan" />
            <StrategyCheckbox label="Large Lot Defense" accent="cyan" />
            <StrategyCheckbox label="Imbalance Skew (bid > ask or vice versa)" accent="cyan" />
          </UCard>
        </StrategySection>
      </template>

      <!-- ENTRY -->
      <template #entry>
        <StrategySection title="Setup Trigger — Micro Structure Break" color="long" icon="⚡" default-open>
          <StrategyDivider label="The Confirmation You Wait For" />
          <StrategyCheckbox label="Micro structure breaks in reversal direction" sublabel="This is the trigger — NOT the confluences above. Confluences build conviction, this confirms." accent="long" />
          <StrategyCheckbox label="Initiated buying/selling volume breaks above/below the micro structure" accent="long" />
          <StrategyCheckbox label="Bid starts building higher (longs) / offer starts pulling (longs)" accent="long" />
          <StrategyCheckbox label="OR: offer starts building lower (shorts) / bid starts pulling (shorts)" accent="short" />
        </StrategySection>

        <StrategySection title="Entry Execution" color="long" icon="▲" default-open>
          <StrategyDivider label="Primary Entry — Pullback to Break Point" />
          <StrategyCheckbox label="After micro structure breaks, wait for pullback to the break zone" sublabel="This is the lowest-risk entry: broken support becomes resistance (or vice versa)" accent="long" />
          <StrategyCheckbox label="Set limit order at the zone where initiated buying/selling occurred" accent="long" />
          <StrategyCheckbox label="If move is very aggressive: pullback may only reach a flurry of activity at a higher area" sublabel="Consider layering orders across the zone rather than a single price" accent="warn" />
          <StrategyCheckbox label="If no pullback at all: market order to join the initiated flow (accept wider stop)" accent="warn" />

          <StrategyDivider label="Stop Placement" />
          <StrategyCheckbox label="Stop below the initiated buying cluster (longs) / above initiated selling (shorts)" sublabel="If the initiators are serious, price won't come back through their zone" accent="warn" />
          <StrategyCheckbox label="Very tight risk: the distance from pullback entry to below the initiation zone" accent="long" />
          <StrategyCheckbox label="Hard MAX: 6 ticks (1.5 pts ES / $75 per MES)" accent="short" />
        </StrategySection>

        <StrategySection title="Targets" color="info" icon="🎯" default-open>
          <StrategyCheckbox label="T1: front-run the nearest high liquidity on the heatmap by 1-2 ticks" sublabel="Don't try to get the exact tick — front-run and take partial" accent="info" />
          <StrategyCheckbox label="T1 sizing: take 50% off at this target to reduce risk" accent="long" />
          <StrategyCheckbox label="T2: opposite side of the prior range (if range day) or next structural level" accent="info" />
          <StrategyCheckbox label="Runner: trail with 4-tick stop if momentum continues" accent="info" />
          <StrategyCheckbox label="Watch for: them pulling liquidity from your target level = follow them, adjust target" accent="warn" />
          <StrategyInfoBox color="info">
            <span>Liquidity targeting: </span>
            <StrategyRefTag card="LT PRO CARD" color="cyan" />
          </StrategyInfoBox>
        </StrategySection>
      </template>

      <!-- MANAGE -->
      <template #manage>
        <StrategySection title="After Entry — Position Management" color="warn" icon="◧" default-open>
          <StrategyDivider label="Immediate Post-Entry" />
          <StrategyCheckbox label="Confirm: initiated volume continues in your direction after entry" accent="long" />
          <StrategyCheckbox label="Large lots still holding at the defense level (or new ones appearing higher/lower)" accent="long" />
          <StrategyCheckbox label="Offers pulling from above (longs) / bids pulling from below (shorts)" accent="long" />
          <StrategyCheckbox label="Time check: if no +2 tick move within 90 sec → consider scratching" accent="warn" />

          <StrategyDivider label="Scale & Trail" />
          <StrategyCheckbox label="T1 hit → move stop to breakeven" accent="long" />
          <StrategyCheckbox label="T1 hit → this is now a momentum strategy continuation candidate" accent="info" />
          <StrategyCheckbox label="After T1: monitor for momentum strategy add-on opportunity" accent="info" />
          <StrategyInfoBox color="info">
            <span>After T1, consider scaling with: </span>
            <StrategyRefTag card="MOMENTUM STRATEGY CARD" color="long" />
          </StrategyInfoBox>
        </StrategySection>

        <StrategySection title="Invalidation & Exit" color="short" icon="⚠" default-open>
          <StrategyCheckbox label="Micro structure re-breaks against you → exit immediately" accent="short" />
          <StrategyCheckbox label="CVD divergence resolves (catches back up with price direction) → thesis gone" accent="short" />
          <StrategyCheckbox label="Iceberg at your defense level stops refilling → defender pulled out" accent="short" />
          <StrategyCheckbox label="Large lots pull from the level → vacuum → get out" accent="short" />
          <StrategyCheckbox label="New aggressive large lots appear against your position → institutional counter" accent="short" />
          <StrategyCheckbox label="Volume spikes through your level on heavy trade → full invalidation, stop and reverse possible" accent="short" />
        </StrategySection>

        <StrategySection title="Regime Filters — No Trade" color="warn" icon="🚫">
          <StrategyCheckbox label="Within ±2 min of scheduled news (FOMC, CPI, NFP)" accent="warn" />
          <StrategyCheckbox label="First 5 min RTH: opening rotation, all signals unreliable" accent="warn" />
          <StrategyCheckbox label="Low volume (< 50% avg): exhaustion signals exaggerated, icebergs sparse" accent="warn" />
          <StrategyCheckbox label="VIX > 35: divergences resolve less reliably, stops get run" accent="warn" />
          <StrategyCheckbox label="No HTF level identified = no reversal trade. Period." accent="short" />
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

            <p>Confluences Present (check all that fired)</p>
            <div>
              <StrategyCheckbox v-for="c in confluenceChecks" :key="c" :label="c" accent="cyan" />
            </div>

            <p>What worked / what to improve</p>
            <UTextarea placeholder="Capture your notes in TradeSlayer journal" color="neutral" variant="subtle" />
          </UCard>
        </StrategySection>

        <StrategySection title="Pattern Review Questions" color="info" icon="🔍">
          <StrategyCheckbox label="Did the reversal occur at a HTF level, or did I force a random level?" accent="info" />
          <StrategyCheckbox label="How many confluences fired before the structure break?" accent="info" />
          <StrategyCheckbox label="Did I wait for the structure break, or did I front-run it?" accent="warn" />
          <StrategyCheckbox label="Was my entry on the pullback, or did I chase?" accent="warn" />
          <StrategyCheckbox label="Did I take partial at T1, or did I get greedy?" accent="warn" />
          <StrategyCheckbox label="After T1, did I transition to the Momentum Strategy card for continuation?" accent="info" />
          <StrategyCheckbox label="Did any invalidation signal fire that I ignored?" accent="short" />
        </StrategySection>
      </template>
  </StrategyCardShell>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const meta: CardMeta = {
  id: 'reversal',
  title: 'REVERSAL STRATEGY',
  subtitle: 'COMPOSITE PLAY · HTF LEVEL + EXHAUSTION + CONFLUENCE STACK',
  icon: '🔄',
  iconGradient: 'linear-gradient(135deg, #f0883e 0%, #da3633 50%, #8b1a10 100%)',
  cardType: 'composite',
  tabs: [
    { id: 'context', label: 'CONTEXT', icon: '🗺', color: 'info' },
    { id: 'confluence', label: 'CONFLUENCE', icon: '◈', color: 'cyan' },
    { id: 'entry', label: 'ENTRY', icon: '⚡', color: 'long' },
    { id: 'manage', label: 'MANAGE', icon: '◧', color: 'warn' },
    { id: 'log', label: 'LOG', icon: '📋', color: 'purple' },
  ],
  composesFrom: [
    { text: 'S/R Card → HTF Level', color: 'info' },
    { text: 'Absorption/Exhaustion → Selling Exhaustion', color: 'cyan' },
    { text: 'CVD Card → Divergence', color: 'long' },
    { text: 'Iceberg Card → Hidden Absorption', color: 'purple' },
    { text: 'Large Lots → Institutional Defense', color: 'orange' },
    { text: 'Volume Profile → Drying Volume', color: 'neutral' },
  ],
  playSequence: 'HTF level tap → exhaustion detected → CVD divergence precedes → iceberg absorbs at level → large lots defend → micro structure breaks → ENTRY on pullback to break point',
  highConviction: [
    { text: 'HTF level + CVD divergence + iceberg absorption = triple confluence reversal', color: 'long' },
    { text: 'Large lot defense at HTF level + structure break = institutional-backed entry', color: 'orange' },
    { text: 'Volume exhaustion at extreme + range day double-trap = highest conviction', color: 'cyan' },
    { text: 'Pullback entry to break point = optimal risk/reward with tight stop', color: 'info' },
    { text: 'After T1: chain into Momentum Strategy for continuation', color: 'long' },
  ],
  footerTools: 'COMPOSITE: S/R + ABSORPTION + CVD + ICEBERG + LARGE LOTS + VOL PROFILE',
  footerChains: 'Chains to: MOMENTUM STRATEGY (after T1) · Source: Bookmap Education Part 4',
}

const directions = ['long', 'short'] as const
const results = ['T1', 'T2', 'runner', 'scratch', 'stop'] as const
const confluenceChecks = ['HTF Level', 'Vol Exhaustion', 'CVD Diverge', 'Iceberg', 'Large Lot', 'Imbalance', 'Structure Break']

const logForm = reactive({
  direction: 'long' as string,
  result: '' as string,
})
</script>
