<template>
  <UPageGrid>
    <UCard v-for="card in cards" :key="card.id" :to="`/strategies/${card.id}`" as="NuxtLink">
      <template #header>
        <span>{{ card.icon }}</span>
        <UBadge v-if="card.type === 'composite'" label="COMPOSITE" color="success" variant="subtle" size="xs" />
        <UBadge v-else label="ATOMIC" color="neutral" variant="subtle" size="xs" />
      </template>
      <p><strong>{{ card.title }}</strong></p>
      <p>{{ card.subtitle }}</p>
    </UCard>
  </UPageGrid>
</template>

<script setup lang="ts">
const cards = [
  { id: 'reversal', icon: '🔄', title: 'Reversal Strategy', subtitle: 'HTF level + structure break + confluence', type: 'composite' },
  { id: 'momentum', icon: '🚀', title: 'Momentum Strategy', subtitle: 'Breakout continuation + aggressive flow', type: 'composite' },
  { id: 'pullback', icon: '↩', title: 'Pullback Strategy', subtitle: 'Trend continuation after retracement', type: 'composite' },
  { id: 'imbalance', icon: '⚖', title: 'Imbalance Indicator', subtitle: 'Bid/ask volume imbalance · footprint', type: 'atomic' },
  { id: 'cvd', icon: '📊', title: 'CVD Strategy', subtitle: 'Cumulative volume delta analysis', type: 'atomic' },
  { id: 'absorption-exhaustion-spoof', icon: '🛡', title: 'Absorption / Exhaustion / Spoof', subtitle: 'Passive vs aggressive flow detection', type: 'atomic' },
  { id: 'iceberg', icon: '🧊', title: 'Iceberg Strategy', subtitle: 'Hidden order detection', type: 'atomic' },
  { id: 'large-lots', icon: '🐋', title: 'Large Lots Strategy', subtitle: 'Institutional print tracking', type: 'atomic' },
  { id: 'stop-run', icon: '🎯', title: 'Stop Run Strategy', subtitle: 'Stop hunt patterns · fade vs join', type: 'atomic' },
  { id: 'volume-bubbles', icon: '🫧', title: 'Volume Bubbles', subtitle: 'Visual initiated volume prints', type: 'atomic' },
  { id: 'support-resistance', icon: '🏗', title: 'Support & Resistance', subtitle: 'Multi-tier level identification', type: 'atomic' },
  { id: 'session-volume-profile', icon: '📈', title: 'Session Volume Profile', subtitle: 'Profile shapes · VPOC · value area', type: 'atomic' },
  { id: 'liquidity-regime', icon: '💧', title: 'Liquidity Regime', subtitle: 'Regime identification · strategy adaptation', type: 'atomic' },
  { id: 'liquidity-tracker-pro', icon: '📖', title: 'Liquidity Tracker Pro', subtitle: 'Order book reads · bid/ask lines', type: 'atomic' },
]
</script>
