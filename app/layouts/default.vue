
<template>
    <UDashboardGroup>
        <UDashboardSidebar>
            <template #header>
                <span>
                    TradeSlayer
                </span>
            </template>
            <UNavigationMenu :items="nav" orientation="vertical" />
        </UDashboardSidebar>

        <UDashboardPanel>
            <template #header>
                <UDashboardNavbar title="Dashboard" />
            </template>
            <template #body>
                <slot />
            </template>
        </UDashboardPanel>
    </UDashboardGroup>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'
    
    const nav = computed<NavigationMenuItem[]>(() => [
        { label: 'Dashboard', icon: 'i-lucide-book-open', to: '/'},
        { label: 'Journal', icon: 'i-lucide-book-open', to: '/journal'},
        { label: 'Strategies', icon: 'i-lucide-book-open', to: '/strategies'}
    ])
</script>