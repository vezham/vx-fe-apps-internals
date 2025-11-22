import { ReactNode } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

type coverType = {
  type?: string
  alt_text?: string
  url?: string
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  label?: string
  super_title?: string | ReactNode
  name?: string
  chip_label?: string
  icon?: React.ReactNode | string
  actions?: {
    submit?: {
      label?: React.ReactNode | string
      href?: string
    }
    trial?: {
      placeholder?: React.ReactNode | string
      href?: string
    }
  }

  description?: string | ReactNode
  cover?: coverType
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
    label,
    super_title,
    title,
    description,
    chip_label,
    actions,
    cover,
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
    className: slots.wrapper({ class: cn(classNames?.wrapper, className) })
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: cn(classNames?.content, className) })
  })

  const getSuperTitleProps: PropGetter = () => ({
    className: slots.wrapper_super_title({
      class: cn(classNames?.wrapper_super_title, className)
    })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.wrapper_title({
      class: cn(classNames?.wrapper_title, className)
    })
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.wrapper_description({
      class: cn(classNames?.wrapper_description, className)
    })
  })

  const getFooterProps: PropGetter = () => ({
    className: slots.footer({
      class: cn(classNames?.footer, className)
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getSuperTitleProps,
    getTitleProps,
    getDescriptionProps,
    getWrapperProps,
    getFooterProps,
    getContentProps,
    // otherProps
    label,
    super_title,
    title,
    chip_label,
    description,
    actions,
    cover
  }
}

export { useProps }
export type { Props }
