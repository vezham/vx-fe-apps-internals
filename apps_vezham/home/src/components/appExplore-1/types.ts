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

// Modify App type to include all the detailed fields
export type App = {
  id: string
  category: string
  title: string
  description: string
  icon: string
  iconColor: string
  // Add optional detailed fields
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

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface CaseStudy {
  title: string
  challenge: string
  solution: string
  results: {
    title: string
    value: string
    label?: boolean
    label_title?: string
  }[]
}

export interface PainPoint {
  title: string
  description: string
}

export interface Impact {
  title: string
  description: string
  value?: string
  icon?: string
  label?: boolean
  hideValueLabel?: boolean
}

export interface Technology {
  color?: string
  id: string
  category: string
  title: string
  description?: string
  shortDescription: string
  fullDescription: string
  icon: string
  image: string
  bannerImage?: string
  obstaclesImage?: string
  featuresImage?: string
  benefits?: Benefit[]
  caseStudy?: CaseStudy
  painPoints?: PainPoint[]
  features?: Feature[]
  impacts?: Impact[]
  impacts_skip?: boolean
  sections?: {
    title: string
    content: string
  }[]
}
