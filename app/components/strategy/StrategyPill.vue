<template>
  <UBadge :label="text" :color="uiColor(color)" variant="subtle" size="xs" />
</template>

<script setup lang="ts">
import type { StrategyColor } from '~/types/strategy'

defineProps<{
  text: string
  color: StrategyColor
}>()

const { uiColor } = useStrategyColors()
</script>
