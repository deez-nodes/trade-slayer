<template>
  <UAlert :color="uiColor(color)" variant="subtle">
    <template #description>
      <slot />
    </template>
  </UAlert>
</template>

<script setup lang="ts">
import type { StrategyColor } from '~/types/strategy'

defineProps<{ color: StrategyColor }>()

const { uiColor } = useStrategyColors()
</script>
