import React from 'react'

export type Feature = {
  icon: string
  title: string
  description: string
}

export type Metric = {
  value: number
  title: string
  description: string
}

export type PricingPlan = {
  name: string
  price: string
  period: string
  features: string[]
  isPopular: boolean
}

export type SupportOption = {
  icon: string
  title: string
  description: string
}

export type footeritems = {
  icon: string
}

export type App = {
  id: string
  category?: string
  title: string
  description: string
  icon: string
  iconColor: string
  footerItems: footeritems[]
  painPoints?: PainPoint[]
  detailedDescription?: string
  image?: string
  features?: Feature[]
  metrics?: Metric[]
  pricing?: PricingPlan[]
  support?: SupportOption[]
}

export type CategoryContent = {
  title: string
  hero?: boolean
  apps: App[]
}

export type AppDetail = App

export interface PainPoint {
  title: string
  description: string
}

export interface CardProps {
  id?: string
  title: string
  icon: string
  color?: string
  description: string
  image: string
  content?: React.ReactNode
  app?: AppDetail | null
  onPress?: () => void
}

export interface AppleStyleCarouselRef {
  scrollLeft: () => void
  scrollRight: () => void
  canScrollLeft: boolean
  canScrollRight: boolean
}

export interface AppleStyleCarouselProps {
  items: CardProps[]
  initialScroll?: number
  navigateBasePath: string
}
