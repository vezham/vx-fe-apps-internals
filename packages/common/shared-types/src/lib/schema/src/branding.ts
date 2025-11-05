import { ReactNode } from 'react'

// {
//   brandTitle: 'Vezham',
//   brandUrl: 'https://vezham.com',
//   brandTarget: '_self'
// }
export type BrandIcon = {
  icon: ReactNode
  label?: string
}
export type BrandUrl = string

export type Logo = BrandIcon | BrandUrl

export interface Brand {
  logo: Logo
  title?: string
  url?: string
  target?: '_self'
}

export type Platform =
  | 'clipboard'
  | 'share_link'
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'twitter'
  | 'x'
  | 'facebook'
  | 'instagram'
  | 'threads'
  | 'whatsapp'
  | 'tiktok'
  | 'mastodon'
  | 'bluesky'
  | string

export type SocialMediaHandle = {
  name: Platform
  handle?: string
  target?: '_self'
}

export type Lang = {
  data: string[]
  value: string
}

export type People = {
  name: string
  image_url?: string
  company: string
  designation: string
}
