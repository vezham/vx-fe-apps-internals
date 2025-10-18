export type Subcategory = {
  id: string
  name: string
  hasChildren?: boolean
}

export type Category = {
  id: string
  name: string
  subcategories?: Subcategory[]
}

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

// Add PricingPlan type
export type PricingPlan = {
  name: string
  price: string
  period: string
  features: string[]
  isPopular: boolean
}

// Add SupportOption type
export type SupportOption = {
  icon: string
  title: string
  description: string
}

export type footeritems = {
  icon: string
}

// Modify App type to include all the detailed fields
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
  pricing?: PricingPlan[] // Add pricing
  support?: SupportOption[] // Add support
}

// Keep CategoryContent the same
export type CategoryContent = {
  title: string
  hero?: boolean
  apps: App[] // This now contains all app details
}

// Keep AppDetail for backward compatibility
// FIX: Changed empty interface to a type alias.
export type AppDetail = App

export interface PainPoint {
  title: string
  description: string
}
