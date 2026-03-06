<template>
    <UPageGrid>
        <StrategyCard
            v-for="(s, i) in strategies"
            :key="i"
            :strategy="s"
        />
    </UPageGrid>
</template>

<script setup lang="ts">
function createStrategy() {
    return {
        title: 'Bullish Breakout Day Trader',
        execution: [
            { label: 'Price breaks above 20-day moving average with high volume', checked: false },
            { label: 'Volume exceeds 1.5x average volume for the past 5 days', checked: false },
            { label: 'RSI below 70 indicating not overbought', checked: false },
        ],
        invalidators: [
            { label: 'Price closes below breakout level by end of day', checked: false },
            { label: 'Volume fails to confirm breakout with low volume', checked: false },
            { label: 'Market opens 1% or more below previous close', checked: false },
        ],
        indicators: [
            { label: '20-period simple moving average', checked: false },
            { label: 'Average True Range for volatility filtering', checked: false },
            { label: 'Volume weighted average price for confirmation', checked: false },
        ],
    }
}

const strategies = ref(Array.from({ length: 3 }, createStrategy))
</script>
