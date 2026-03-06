<script setup>
const strategies = [
  {
    title: 'Heatmap Absorption (Long)',
    execution: [
      'Large market sell bubbles hit a high-liquidity limit buy zone',
      'Price stabilizes despite aggressive selling',
      'Aggressive buying outpaces selling at the floor'
    ],
    invalidators: [
      'High-liquidity limit buy orders are pulled (spoofing)',
      'Price breaks and stays below zone for > 30s',
      'Cumulative Delta tanks without price recovery'
    ],
    indicators: [
      'Bookmap Heatmap (Resting Limit Orders)',
      'Volume Bubbles (Market Order size)',
      'Cumulative Delta (Net aggressive pressure)'
    ]
  },
  {
    title: 'Liquidity Flip (Breakout)',
    execution: [
      'Heavy sell wall is tested and fully absorbed',
      'Sell wall disappears and reappears as a buy wall',
      'Price retests the new buy wall and holds'
    ],
    invalidators: [
      'Flipped buy wall is pulled as price approaches',
      'Price falls below flip level with high-volume red bubbles',
      'Heatmap shows new, heavier resistance forming above'
    ],
    indicators: [
      'Bookmap Heatmap (Historical vs. Current liquidity)',
      'DOM (Depth of Market) level shifts',
      'Price Action (Break and Retest confirmation)'
    ]
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#0f172a] p-8">
    <h1 class="text-white text-2xl font-bold mb-8">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard 
        v-for="strategy in strategies" 
        :key="strategy.title" 
        class="bg-[#1e293b] border-gray-800 ring-0 shadow-lg"
        :ui="{ header: { base: 'border-b border-gray-800' } }"
      >
        <template #header>
          <h2 class="text-lg font-semibold text-white">{{ strategy.title }}</h2>
        </template>

        <div class="space-y-6">
          <div>
            <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Execution</h3>
            <div class="space-y-3">
              <UCheckbox v-for="item in strategy.execution" :key="item" :label="item" />
            </div>
          </div>

          <div>
            <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Invalidators</h3>
            <div class="space-y-3">
              <UCheckbox v-for="item in strategy.invalidators" :key="item" :label="item" />
            </div>
          </div>

          <div>
            <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Indicators</h3>
            <div class="space-y-3">
              <UCheckbox v-for="item in strategy.indicators" :key="item" :label="item" />
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>