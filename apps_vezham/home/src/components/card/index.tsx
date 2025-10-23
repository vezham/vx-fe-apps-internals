import { Icon } from '@iconify/react'
import React from 'react'

import { Card } from '@vx-oss/react'

import type { AppCardProps } from './types'
import { appCardVariants as av } from './variant'

const getAppCardClasses = (
  variant: 'default' | 'outlined' | 'filled' = 'default',
  size: 'sm' | 'md' | 'lg' = 'md'
): {
  card: string
  iconWrapper: string
  title: string
  description: string
} => ({
  card: `${av.base.card} ${av.variants.variant[variant].card ?? ''} ${av.variants.size[size].card ?? ''}`,
  iconWrapper: `${av.base.iconWrapper} ${av.variants.variant[variant].iconWrapper ?? ''} ${av.variants.size[size].iconWrapper ?? ''}`,
  title: `${av.base.title} ${av.variants.variant[variant].title ?? ''} ${av.variants.size[size].title ?? ''}`,
  description: `${av.base.description} ${av.variants.variant[variant].description ?? ''} ${av.variants.size[size].description ?? ''}`
})

export const AppCard: React.FC<AppCardProps> = ({
  icon,
  iconColor,
  title,
  description,
  onPress,
  variant = 'default',
  size = 'md'
}) => {
  const cls = getAppCardClasses(variant, size)

  return (
    <Card
      className={cls.card}
      shadow="none"
      disableRipple
      isPressable
      onPress={onPress}>
      <div className={cls.iconWrapper}>
        <Icon icon={icon} className={iconColor} width={32} height={32} />
      </div>
      <h3 className={cls.title}>{title}</h3>
      <p className={cls.description}>{description}</p>
    </Card>
  )
}
