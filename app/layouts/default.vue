
<template>
    <UDashboardGroup>
        <UDashboardSidebar>
            <template #header>
                <span :class="$style.logo">
                    TradeSlayer
                </span>
            </template>
            <UNavigationMenu :items="nav" orientation="vertical" />
        </UDashboardSidebar>

        <UDashboardPanel>
            <template #header>
                <UDashboardNavbar :title="pageTitle" />
            </template>
            <template #body>
                <slot />
            </template>
        </UDashboardPanel>
    </UDashboardGroup>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'

    const route = useRoute()

    const pageTitle = computed(() => {
        const titles: Record<string, string> = {
            '/': 'Dashboard',
            '/journal': 'Journal',
            '/strategies': 'Strategies',
        }
        return titles[route.path] || 'Dashboard'
    })

    const nav = computed<NavigationMenuItem[]>(() => [
        { label: 'Dashboard', icon: 'i-lucide-chart-candlestick', to: '/'},
        { label: 'Journal', icon: 'i-lucide-notebook-pen', to: '/journal'},
        { label: 'Strategies', icon: 'i-lucide-sword', to: '/strategies'}
    ])
</script>

<style module>
.logo {
    font-family: var(--font-mono, 'IBM Plex Mono', monospace);
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--ts-accent, #ecff57);
    position: relative;
    display: inline-block;
    padding: 2px 0;
}

.logo::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--ts-muted, #6b7d8e) 15%, var(--ts-muted, #6b7d8e) 85%, transparent 100%);
    opacity: 0.35;
}
</style>
