import { IconProps } from '@iconify/react'
import { JSX } from 'react'

import {
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import { tvSlots, tva } from './variant'

interface SocialItem {
  name: string
  href: string
  icon: (props: Omit<IconProps, 'icon'>) => JSX.Element
}

interface Props extends v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  variant?: 'default' | 'outlined' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  social?: SocialItem[]
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)
  const { as, id, ref, className, classNames, social, ...otherProps } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getGradientProps = (side: 'left' | 'right') => ({
    className:
      side === 'left'
        ? slots.gradientLeft({ class: classNames?.gradientLeft })
        : slots.gradientRight({ class: classNames?.gradientRight })
  })

  const getContentWrapperProps = () => ({
    className: slots.contentWrapper({ class: classNames?.contentWrapper })
  })

  const getBannerTextProps = () => ({
    className: slots.bannerText({ class: classNames?.bannerText })
  })

  const getGradientTextProps = () => ({
    className: slots.gradientText({ class: classNames?.gradientText })
  })

  const getScheduleButtonProps = () => ({
    className: slots.scheduleButton({ class: classNames?.scheduleButton })
  })

  const getSpinningBackgroundProps = () => ({
    className: slots.spinningBackground({
      class: classNames?.spinningBackground
    })
  })

  const getScheduleInnerProps = () => ({
    className: slots.scheduleInner({ class: classNames?.scheduleInner })
  })

  const getSocialWrapperProps = () => ({
    className: slots.socialWrapper({ class: classNames?.socialWrapper })
  })

  const getSocialIconProps = () => ({
    className: slots.socialIcon({ class: classNames?.socialIcon })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    social,
    getBaseProps,
    getGradientProps,
    getContentWrapperProps,
    getBannerTextProps,
    getGradientTextProps,
    getScheduleButtonProps,
    getSpinningBackgroundProps,
    getScheduleInnerProps,
    getSocialWrapperProps,
    getSocialIconProps
  }
}

export { useProps }
export type { Props }
