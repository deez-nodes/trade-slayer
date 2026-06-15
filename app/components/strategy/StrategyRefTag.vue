<template>
  <UBadge :label="`↗ ${card}`" :color="uiColor(color)" variant="subtle" size="xs" />
</template>

<script setup lang="ts">
import type { StrategyColor } from '~/types/strategy'

defineProps<{
  card: string
  color: StrategyColor
}>()

const { uiColor } = useStrategyColors()
</script>
