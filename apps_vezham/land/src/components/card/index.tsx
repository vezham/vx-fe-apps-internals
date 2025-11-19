import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

import { Card } from '@vx-oss/react'

import { Props, useProps } from './types'

const AppCard = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getWrapperProps,
    title,
    description,
    onPress,
    icon,
    iconColor,
    getTitleProps,
    getDescriptionProps
  } = useProps({
    ...props,
    ref
  })

  return (
    <Card
      {...getBaseProps()}
      shadow="none"
      disableRipple
      isPressable
      onPress={onPress}>
      <div {...getWrapperProps()}>
        <Icon icon={icon} className={iconColor} width={32} height={32} />
      </div>
      <h3 {...getTitleProps()}>{title}</h3>
      <p {...getDescriptionProps()}>{description}</p>
    </Card>
  )
})

AppCard.displayName = 'AppCard'

export { AppCard }
