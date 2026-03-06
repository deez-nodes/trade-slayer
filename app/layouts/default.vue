
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
            <UDashboardNavbar title="Dashboard" />
            <slot />
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