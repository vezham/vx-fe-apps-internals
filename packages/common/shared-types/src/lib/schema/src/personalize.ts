import { Platform } from './branding'
import { Link } from './link'

type avatar = {
  url?: string
}

type brandData = {
  name: string
  label: string
  avatar?: avatar
}

type systemData = {
  status: string
  label: string
  url: string
  target: string
}

export type actionData = {
  __type?: 'button' | 'link'
  id?: string
  variant?: string
  label: string
  url?: string
  target?: string
}

type linksData = {
  label: string
  links: Link[]
}

type submit = {
  label: string
}
type input = {
  placeholder: string
}

type newsLetterAction = {
  submit: submit
  input: input
}

export type coverType = {
  type?: string
  alt_text?: string
  url: string
}

type welcomeData = {
  title?: string
  description?: string
  cover?: coverType
}

type newsletterData = {
  title: string
  description: string
  actions: newsLetterAction
}

type socialData = {
  name: Platform
  handle: string
}

type footerData = {
  backdrop: string
  links: linksData[]
}
type cards = {
  newsletter: newsletterData
  welcome_message: welcomeData
}

export type Personalize = {
  footer: footerData
  default_locale: string
  available_locales: []
  brand: brandData
  social_accounts: socialData[]
  system_status: systemData
  actions?: actionData[]
  cards: cards
}

export type Authors = {
  id: string
  name: string
  avatar: avatar
}

export type Tags = {
  id: string
  color: string
  name: string
  updated_at: string
  updated_by: string
}

export type Block = {
  text: string
}

export type Trends = {
  id: string
  url: string
  title: string
  description: string
  authors: Authors[]
  published_at: string
  pinned: boolean
  read_time: string
}
