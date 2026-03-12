import type { StrategyColor } from '~/types/strategy'

const palette: Record<StrategyColor, string> = {
  long: '#3fb950',
  short: '#f85149',
  warn: '#d29922',
  info: '#58a6ff',
  neutral: '#8b949e',
  cyan: '#39d2c0',
  purple: '#bc8cff',
  orange: '#f0883e',
}

/** Maps StrategyColor → Nuxt UI component color prop value */
const uiColorMap: Record<StrategyColor, string> = {
  long: 'success',
  short: 'error',
  warn: 'warning',
  info: 'info',
  neutral: 'neutral',
  cyan: 'info',
  purple: 'primary',
  orange: 'warning',
}

export function useStrategyColors() {
  function hex(color: StrategyColor): string {
    return palette[color]
  }

  function hexAlpha(color: StrategyColor, alpha: string): string {
    return `${palette[color]}${alpha}`
  }

  function uiColor(color: StrategyColor): string {
    return uiColorMap[color]
  }

  return { hex, hexAlpha, uiColor, palette }
}
