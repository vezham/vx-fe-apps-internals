import { Icon } from '@iconify/react'
import React from 'react'

import { Card } from '@vx-oss/react'

interface AppCardProps {
  icon: string
  iconColor: string
  title: string
  description: string
  // Add new prop for handling click
  onPress?: () => void
}

export const AppCard: React.FC<AppCardProps> = ({
  icon,
  iconColor,
  title,
  description,
  // Add the onPress handler
  onPress
}) => {
  return (
    <Card
      className="border-divider bg-content1 cursor-pointer justify-start border p-5 text-start transition-all duration-200 hover:scale-105 hover:shadow-md"
      shadow="none"
      disableRipple
      isPressable
      onPress={onPress}>
      <div className="mb-3 sm:mb-4">
        <Icon icon={icon} className={iconColor} width={32} height={32} />
      </div>
      <h3 className="text-foreground text-md mb-1 font-bold sm:mb-2">
        {title}
      </h3>
      <p className="text-default-500 text-sm">{description}</p>
    </Card>
  )
}
