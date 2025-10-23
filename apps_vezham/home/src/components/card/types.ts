import type { IconProps } from '@iconify/react'

export interface AppCardProps {
  icon: string
  iconColor: string
  title: string
  description: string
  onPress?: () => void
  variant?: 'default' | 'outlined' | 'filled'
  size?: 'sm' | 'md' | 'lg'
}

export interface AppCardSlots {
  card: string
  iconWrapper: string
  title: string
  description: string
}

export interface AppCardVariants {
  base: AppCardSlots
  variants: {
    variant: Record<'default' | 'outlined' | 'filled', Partial<AppCardSlots>>
    size: Record<'sm' | 'md' | 'lg', Partial<AppCardSlots>>
  }
}
