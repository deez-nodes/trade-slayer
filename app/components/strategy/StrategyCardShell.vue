<template>
  <UCard>
    <template #header>
      <h1>{{ meta.icon }} {{ meta.title }}</h1>
      <p>{{ meta.subtitle }}</p>

      <!-- Composes From (composite cards) -->
      <UCard v-if="meta.composesFrom" variant="subtle" color="neutral">
        <p>COMPOSES FROM</p>
        <StrategyPill
          v-for="(s, i) in meta.composesFrom"
          :key="i"
          :text="s.text"
          :color="s.color"
        />
      </UCard>

      <!-- Play Sequence (composite cards) -->
      <UAlert v-if="meta.playSequence" title="PLAY SEQUENCE" :description="meta.playSequence" color="success" variant="subtle" />

      <!-- High-Conviction Signals -->
      <UCard variant="subtle" color="neutral">
        <p>HIGH-CONVICTION SIGNALS</p>
        <StrategyPill
          v-for="(s, i) in meta.highConviction"
          :key="i"
          :text="s.text"
          :color="s.color"
        />
      </UCard>
    </template>

    <!-- TABS + CONTENT -->
    <UTabs :items="tabItems" :default-value="meta.tabs[0]?.id">
      <template v-for="tab in meta.tabs" :key="tab.id" #[tab.id]>
        <slot :name="tab.id" />
      </template>
    </UTabs>

    <template #footer>
      <p>{{ meta.footerTools }}</p>
      <p>TradeSlayer Pro &middot; {{ meta.cardType === 'composite' ? 'Composite Strategy Card' : 'Strategy Reference Card' }}</p>
      <p v-if="meta.footerChains">{{ meta.footerChains }}</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { CardMeta } from '~/types/strategy'

const props = defineProps<{ meta: CardMeta }>()

const tabItems = computed(() =>
  props.meta.tabs.map(tab => ({
    label: `${tab.icon} ${tab.label}`,
    value: tab.id,
    slot: tab.id,
  }))
)
</script>
