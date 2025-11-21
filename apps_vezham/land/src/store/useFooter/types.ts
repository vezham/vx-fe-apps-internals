import { IconProps } from '@iconify/react'
import { FC } from 'react'

export type FooterLink = {
  name: string
  href: string
}

export type SocialIconProps = IconProps

export type SocialItem = {
  name: string
  href: string
  icon: FC<SocialIconProps>
}

export interface FooterNavigation {
  services: FooterLink[]
  resources: FooterLink[]
  aboutUs: FooterLink[]
  legal: FooterLink[]
  social: SocialItem[]
}

type RQFooter = object

export type { RQFooter }
