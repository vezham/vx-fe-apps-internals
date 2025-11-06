// import { ReactNode } from 'react'
// import { ReactRef, useDOMRef } from '@vezham/react-utils'
// import {
//   HTMLHeroUIProps,
//   PropGetter,
//   mapPropsVariants
// } from '@vezham/react-utils'
// import { cn } from '@vezham/react-utils'
// import { SlotsToClasses } from '@vezham/react-utils'
// import { tvProps, tvSlots, tva } from './variant'
// interface Props extends tvProps, HTMLHeroUIProps<'div', 'content'> {
//   ref?: ReactRef<HTMLDivElement | null>
//   classNames?: SlotsToClasses<tvSlots>
//   content?: string | ReactNode
// }
// const useProps = (originalProps: Props) => {
//   const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)
//   const {
//     as,
//     id,
//     ref,
//     children,
//     className,
//     classNames,
//     content,
//     ...otherProps
//   } = props
//   const Component = as || 'div'
//   const domRef = useDOMRef(ref)
//   const slots = tva(variantProps)
//   const getBaseProps: PropGetter = () => ({
//     id,
//     ref: domRef,
//     className: slots.base({ class: cn(classNames?.base, className) }),
//     children: content,
//     ...otherProps
//   })
//   return {
//     Component,
//     domRef,
//     slots,
//     classNames,
//     children,
//     getBaseProps,
//     // otherProps
//     content
//   }
// }
// export { useProps }
// export type { Props }
import { ReactNode } from 'react'

import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  content?: string | ReactNode
  disabled?: boolean
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
    content,
    disabled = false,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva({ ...variantProps, disabled })

  const getBaseProps: PropGetter = () => {
    const baseProps = {
      id,
      ref: domRef,
      className: slots.base({ class: cn(classNames?.base, className) }),
      'data-disabled': disabled ? '' : undefined,
      ...otherProps
    }

    // Use content prop if provided, otherwise use children
    if (content !== undefined) {
      return {
        ...baseProps,
        children: content
      }
    }

    return {
      ...baseProps,
      children
    }
  }

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // Data props
    content,
    disabled
  }
}

export { useProps }
export type { Props }
