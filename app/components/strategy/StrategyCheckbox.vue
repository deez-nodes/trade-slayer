<template>
  <UCheckbox v-model="checked" :label="label" :description="sublabel" :color="uiColor(accent)" />
</template>

<script setup lang="ts">
import type { StrategyColor } from '~/types/strategy'

const props = withDefaults(defineProps<{
  label: string
  sublabel?: string
  accent?: StrategyColor
}>(), { accent: 'neutral' })

const checked = ref(false)
const { uiColor } = useStrategyColors()
</script>
