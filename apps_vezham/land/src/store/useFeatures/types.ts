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
  title?: string
  hero?: boolean
  apps?: App[]
}

export type AppDetail = App

export interface TabItem {
  key?: string
  label?: string
  href?: string
  icon?: string
  subItems?: Subcategory[]
}

export type cards = {
  welcome_message: welcomeData
}

export type welcomeData = {
  __type: string
  icon?: React.ReactNode
  chip_label?: string
  super_title?: string
  title?: string
  description?: string
  cover?: coverType
  actions: welcomeDataAction
}

export type welcomeDataAction = {
  submit: submit
  trial: trial
}

export type coverType = {
  __type: string
  type?: string
  alt_text?: string
  url: string
}

export type submit = {
  label?: string
  href?: string
}

export type trial = {
  placeholder?: string
  href?: string
}

export type Personalize = {
  cards: cards
}

type RQFeatures = object
type RQPersonalize = object

export type { RQFeatures, RQPersonalize }
