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

export type App = {
  id: string
  title: string
  description: string
  icon: string
  iconColor: string
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

export interface AppDetailModalProps {
  isOpen: boolean
  onClose: () => void
  app: AppDetail | null
  navigatePath: string // '/apps/explore' or '/apps/explore-1'
}
