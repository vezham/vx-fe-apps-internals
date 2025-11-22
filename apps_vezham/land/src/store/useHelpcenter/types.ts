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

type RQHelpCenter = object
export type { RQHelpCenter }
