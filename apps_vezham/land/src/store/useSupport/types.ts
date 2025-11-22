import { ButtonProps } from '@vx-oss/react'

export interface NavbarLogoProps {
  visible: boolean
}

export type Info = {
  title?: string
  description?: string
}

export type SupportPlan = {
  title?: string
  description?: string
}

export type ServiceInfo = {
  logotitle?: string
  logourl?: string
  title?: string
  description?: string
  site?: string
  siteurl?: string
}

// Enums
export enum FrequencyEnum {
  Yearly = 'yearly',
  Quarterly = 'quarterly',
  Monthly = 'monthly'
}

export enum TiersEnum {
  Free = 'free',
  Premium = 'premium',
  Enterprise = 'enterprise'
}

export interface PricingFeatureItem {
  title: string
  tiers: {
    [key in TiersEnum]: boolean | string
  }
  helpText?: string
}

export interface PricingFeatures {
  title: string
  items: PricingFeatureItem[]
}

export interface faqData {
  label: string
  subItems?: Array<{
    title: string
    description: string
  }>
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

export type TeamMember = {
  name: string
  avatar: string
  role: string
  bio?: string
  social: {
    twitter: string
    linkedin: string
    github?: string
    mail?: string
  }
}

export interface supportData {
  info: Info[]
  plan: SupportPlan[]
  services: ServiceInfo[]
  tiers: Tier[]
  features: PricingFeatures[]
  faqs: faqData[]
  frequencies: Frequency[]
  teamMembers: TeamMember[]
}

type RQSupport = object
export type { RQSupport }
