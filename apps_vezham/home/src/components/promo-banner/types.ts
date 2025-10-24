import {
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  onClose?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
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
    onClose,
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

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  const getTextProps: PropGetter = () => ({
    className: slots.text({ class: classNames?.text })
  })

  const getLinkProps: PropGetter = () => ({
    className: slots.link({ class: classNames?.link })
  })

  const getCloseButtonProps: PropGetter = () => ({
    className: slots.closeButton({ class: classNames?.closeButton }),
    'aria-label': 'Close banner'
  })

  const getCloseIconProps: PropGetter = () => ({
    className: slots.closeIcon({ class: classNames?.closeIcon })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    getBaseProps,
    getContentProps,
    getTextProps,
    getLinkProps,
    getCloseButtonProps,
    getCloseIconProps,
    onClose
  }
}

export { useProps }
export type { Props }
