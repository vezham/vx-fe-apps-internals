import type { Ref } from 'react'

import {
  PropGetter,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  variant?: 'default' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  className?: string
  ref?: Ref<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const { as, id, ref, children, className, classNames, ...otherProps } = props

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    ref: domRef,
    className: cn(slots.wrapper({ class: classNames?.wrapper }), className),
    ...otherProps
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getInputContainerProps: PropGetter = () => ({
    className: slots.inputContainer({ class: classNames?.inputContainer })
  })

  const getInputWrapperProps: PropGetter = () => ({
    className: slots.inputWrapper({ class: classNames?.inputWrapper })
  })

  const getIconProps: PropGetter = () => ({
    className: slots.icon({ class: classNames?.icon })
  })

  return {
    getBaseProps,
    getContentProps,
    getTitleProps,
    getInputContainerProps,
    getInputWrapperProps,
    getIconProps,
    inputClasses: tva.inputClasses
  }
}

export { useProps }
export type { Props }
