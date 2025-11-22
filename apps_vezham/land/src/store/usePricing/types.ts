import type { ButtonProps } from '@vx-oss/react'

export type cards = {
  welcome_message: welcomeData
}

export type welcomeData = {
  __type: string
  icon?: React.ReactNode
  chip_label?: string
  super_title?: string
  title?: string
  subtitle?: string
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
  label: string
}

export type trial = {
  placeholder: string
}

export type Personalize = {
  cards: cards
}

export enum FrequencyEnum {
  Yearly = 'yearly',
  Quarterly = 'quarterly',
  Monthly = 'monthly'
}

export enum TiersEnum {
  Free = 'free',
  Pro = 'pro',
  Team = 'team'
}

export type Frequency = {
  key: FrequencyEnum
  label: string
  priceSuffix: string
}

export type Tier = {
  key: TiersEnum
  title: string
  price:
    | {
        [FrequencyEnum.Yearly]: string
        [FrequencyEnum.Quarterly]: string
        [FrequencyEnum.Monthly]: string
      }
    | string
  priceSuffix?: string
  href: string
  description?: string
  mostPopular?: boolean
  featured?: boolean
  features?: string[]
  buttonText: string
  buttonColor?: ButtonProps['color']
  buttonVariant: ButtonProps['variant']
}

export type PricingFeatureItem = {
  title: string
  tiers: {
    [key in TiersEnum]: boolean | string
  }
  helpText?: string
}

export type PricingFeatures = Array<{
  title: string
  items: PricingFeatureItem[]
}>

export type faqData = Array<{
  label: string
  subItems?: Array<{
    title: string
    description: string
  }>
}>

export type PricingData = {
  frequencies: Frequency[]
  tiers: Tier[]
  features: PricingFeatures
  faqs: faqData
}

type RQPersonalize = object
type RQPricing = object

export type { RQPersonalize, RQPricing }
