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

export interface ContentAreaProps {
  activeCategory: string
  activeSubcategory: string
  categoryContents: Record<string, CategoryContent>
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onBackClick?: () => void
  isMobileView?: boolean
  visibleContent: string
  onAppClick: (appId: string, app: App) => void
}

declare global {
  interface Window {
    handleSubcategoryClick?: (subcategoryId: string) => void
  }
}
