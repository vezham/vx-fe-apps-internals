import { CardProps } from '@vx-oss/react'

export interface HelpInfo {
  title?: string
  description?: string
  subdescription?: string
  lists?: string[]
}

export type FeatureCardProps = CardProps & {
  title?: string
  descriptions?: string[]
  icon: string
}

export type CardReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType

export type ReviewType = {
  user: {
    name: string
    avatar: string
  }
  createdAt: string
  rating: number
  title: string
  content: string
}

export type ReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType

export type Faqs = {
  title: string
  content: string
}

export type HelpCenterProps = {
  faqs: Faqs[]
  reviews: ReviewType[]
  helpDesk: HelpInfo[]
  features: FeatureCardProps[]
}

export type Personalize = {
  cards: cards
}

export type cards = {
  welcome_message: welcomeData
}

export type welcomeData = {
  __type: string
  icon?: React.ReactNode
  chip_label?: string
  super_title?: string
  subtitle?: string
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

type RQHelpCenter = object
type RQPersonalize = object
export type { RQHelpCenter, RQPersonalize }
