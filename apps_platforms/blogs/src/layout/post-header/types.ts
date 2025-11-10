import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div', 'lang'> {
  id?: string
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  title: string
  subtitle?: string
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    title,
    subtitle,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getSubtitleProps: PropGetter = () => ({
    className: slots.subtitle({ class: classNames?.subtitle })
  })

  const getContentWrapperProps: PropGetter = () => ({
    className: slots.content_wrapper({ class: classNames?.content_wrapper })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getWrapperProps,

    // otherProps
    title,
    subtitle,
    getTitleProps,
    getContentWrapperProps,
    getSubtitleProps
  }
}

export { useProps }
export type { Props }
