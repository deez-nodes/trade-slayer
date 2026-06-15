<template>
  <UCollapsible :default-open="defaultOpen">
    <UButton :label="title" color="neutral" variant="ghost" block trailing-icon="i-lucide-chevron-down" />
    <template #content>
      <slot />
    </template>
  </UCollapsible>
</template>

<script setup lang="ts">
import type { StrategyColor } from '~/types/strategy'

withDefaults(defineProps<{
  title: string
  color: StrategyColor
  icon: string
  defaultOpen?: boolean
}>(), { defaultOpen: false })
</script>
