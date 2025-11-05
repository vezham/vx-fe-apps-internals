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

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // otherProps
    label,
    super_title,
    title,
    description,
    cover
  }
}

export { useProps }
export type { Props }
