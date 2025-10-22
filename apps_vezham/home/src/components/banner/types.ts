import type { IconProps } from '@iconify/react'
import { JSX } from 'react'

export type SocialIconProps = Omit<IconProps, 'icon'>

export interface SocialItem {
  name: string
  href: string
  icon: (props: Omit<IconProps, 'icon'>) => JSX.Element
}

export interface BannerProps {
  social?: SocialItem[]
}
