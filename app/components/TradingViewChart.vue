<template>
    <div :class="$style.container" ref="chartContainer"></div>
</template>

<script setup lang="ts">
interface Props {
    symbol?: string
    interval?: string
}

const props = withDefaults(defineProps<Props>(), {
    symbol: 'CME_MINI:ES1!',
    interval: 'D',
})

const chartContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!chartContainer.value) return

    const widgetDiv = document.createElement('div')
    widgetDiv.classList.add('tradingview-widget-container__widget')
    widgetDiv.style.height = '100%'
    widgetDiv.style.width = '100%'
    chartContainer.value.appendChild(widgetDiv)

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.async = true
    script.textContent = JSON.stringify({
        autosize: true,
        symbol: props.symbol,
        interval: props.interval,
        timezone: 'America/New_York',
        theme: 'dark',
        style: '1',
        locale: 'en',
        backgroundColor: 'rgba(8, 10, 12, 1)',
        gridColor: 'rgba(232, 255, 71, 0.04)',
        hide_side_toolbar: false,
        allow_symbol_change: true,
        calendar: false,
        support_host: 'https://www.tradingview.com',
    })
    chartContainer.value.appendChild(script)
})
</script>

<style module>
.container {
    width: 100%;
    height: 100%;
    min-height: 400px;
    flex: 1;
}
</style>
