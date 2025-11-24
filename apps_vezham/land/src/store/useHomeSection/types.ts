export type NavbarItem = {
  key?: string
  label?: string
  href?: string
  subItems?: Array<{
    title?: string
    Items?: Array<{
      icon: string
      name: string
      description: string
      link: string
      detailedItems?: Array<{
        detailedDescription?: string
        image?: string
        features?: Feature[]
        metrics?: Metric[]
        pricing?: PricingPlan[]
        support?: SupportOption[]
      }>
    }>
  }>
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

export interface TabItem {
  key?: string
  label?: string
  href?: string
  icon?: string
  subItems?: Array<{
    key: string
    label: string
    description: string
    href: string
  }>
}

export type cards = {
  newsletter: newsletterData
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

export type newsletterData = {
  __type: string
  title: string
  description: string
  actions: newsLetterAction
}

export type coverType = {
  __type: string
  type?: string
  alt_text?: string
  url: string
}

export type input = {
  placeholder: string
}

export type submit = {
  label?: string
  href?: string
}

export type trial = {
  placeholder?: string
  href?: string
}

export type newsLetterAction = {
  submit: submit
  input: input
}

export type welcomeDataAction = {
  submit: submit
  trial: trial
}

export type Personalize = {
  navItems: NavbarItem[]
  tabItems: TabItem[]
  cards: cards
}

type RQPersonalize = object

export type { RQPersonalize }
