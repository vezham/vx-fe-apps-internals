// types.ts
import type { IconProps } from '@iconify/react'

export type FooterLink = {
  name: string
  href: string
}

export type FooterSection = {
  title: string
  items: FooterLink[]
}

export type SocialIconProps = Omit<IconProps, 'icon'>

export interface SocialItem {
  name: string
  href: string
  icon: React.FC<SocialIconProps>
}

export interface FooterNavigation {
  services: FooterLink[]
  resources: FooterLink[]
  aboutUs: FooterLink[]
  legal: FooterLink[]
  social: SocialItem[]
}

export interface FooterProps {
  footerNavigation: FooterNavigation
}
