<template>
    <UCard :class="$style.card">
        <template #header>
            <h3 :class="$style.title">{{ strategy.title }}</h3>
        </template>

        <div :class="$style.section">
            <h4 :class="$style.sectionTitle">Execution</h4>
            <UCheckbox
                v-for="(item, i) in strategy.execution"
                :key="`exec-${i}`"
                v-model="item.checked"
                :label="item.label"
            />
        </div>

        <div :class="$style.section">
            <h4 :class="$style.sectionTitle">Invalidators</h4>
            <UCheckbox
                v-for="(item, i) in strategy.invalidators"
                :key="`inv-${i}`"
                v-model="item.checked"
                :label="item.label"
            />
        </div>

        <div :class="$style.section">
            <h4 :class="$style.sectionTitle">Indicators</h4>
            <UCheckbox
                v-for="(item, i) in strategy.indicators"
                :key="`ind-${i}`"
                v-model="item.checked"
                :label="item.label"
            />
        </div>
    </UCard>
</template>

<script setup lang="ts">
interface CheckItem {
    label: string
    checked: boolean
}

interface Strategy {
    title: string
    execution: CheckItem[]
    invalidators: CheckItem[]
    indicators: CheckItem[]
}

defineProps<{ strategy: Strategy }>()
</script>

<style module>
.card {
    height: 100%;
}

.title {
    font-size: 1.125rem;
    font-weight: 600;
}

.section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.section + .section {
    margin-top: 1rem;
}

.sectionTitle {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
</style>
