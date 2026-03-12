export type StrategyColor = 'long' | 'short' | 'warn' | 'info' | 'neutral' | 'cyan' | 'purple' | 'orange'

export type CardType = 'atomic' | 'composite'

export interface StrategyTab {
  id: string
  label: string
  icon: string
  color: StrategyColor
}

export interface HighConvictionSignal {
  text: string
  color: StrategyColor
}

export interface ComposesFromEntry {
  text: string
  color: StrategyColor
}

export interface CardMeta {
  id: string
  title: string
  subtitle: string
  icon: string
  iconGradient: string
  cardType: CardType
  tabs: StrategyTab[]
  highConviction: HighConvictionSignal[]
  composesFrom?: ComposesFromEntry[]
  playSequence?: string
  footerTools: string
  footerChains?: string
}
