<template>
  <component :is="cardComponent" v-if="cardComponent" />
  <UEmpty v-else title="Strategy card not found" :description="String(route.params.id)" />
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import AbsorptionExhaustionSpoofCard from '~/components/strategy/AbsorptionExhaustionSpoofCard.vue'
import CvdStrategyCard from '~/components/strategy/CvdStrategyCard.vue'
import IcebergStrategyCard from '~/components/strategy/IcebergStrategyCard.vue'
import ImbalanceStrategyCard from '~/components/strategy/ImbalanceStrategyCard.vue'
import LargeLotsStrategyCard from '~/components/strategy/LargeLotsStrategyCard.vue'
import LiquidityRegimeCard from '~/components/strategy/LiquidityRegimeCard.vue'
import LiquidityTrackerProCard from '~/components/strategy/LiquidityTrackerProCard.vue'
import MomentumStrategyCard from '~/components/strategy/MomentumStrategyCard.vue'
import PullbackStrategyCard from '~/components/strategy/PullbackStrategyCard.vue'
import ReversalStrategyCard from '~/components/strategy/ReversalStrategyCard.vue'
import SessionVolumeProfileCard from '~/components/strategy/SessionVolumeProfileCard.vue'
import StopRunStrategyCard from '~/components/strategy/StopRunStrategyCard.vue'
import SupportResistanceStrategyCard from '~/components/strategy/SupportResistanceStrategyCard.vue'
import VolumeBubblesStrategyCard from '~/components/strategy/VolumeBubblesStrategyCard.vue'

const route = useRoute()

const cardMap: Record<string, Component> = {
  'absorption-exhaustion-spoof': AbsorptionExhaustionSpoofCard,
  'cvd': CvdStrategyCard,
  'iceberg': IcebergStrategyCard,
  'imbalance': ImbalanceStrategyCard,
  'large-lots': LargeLotsStrategyCard,
  'liquidity-regime': LiquidityRegimeCard,
  'liquidity-tracker-pro': LiquidityTrackerProCard,
  'momentum': MomentumStrategyCard,
  'pullback': PullbackStrategyCard,
  'reversal': ReversalStrategyCard,
  'session-volume-profile': SessionVolumeProfileCard,
  'stop-run': StopRunStrategyCard,
  'support-resistance': SupportResistanceStrategyCard,
  'volume-bubbles': VolumeBubblesStrategyCard,
}

const cardComponent = computed(() => {
  const id = route.params.id as string
  return cardMap[id] ?? null
})
</script>
