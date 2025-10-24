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
  icon: string
  iconColor: string
  title: string
  description: string
  onPress?: () => void
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
    icon,
    iconColor,
    title,
    description,
    onPress,
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
    className: slots.iconWrapper({ class: classNames?.iconWrapper })
  })

  const getTitleProps = () => ({
    className: slots.title({ class: classNames?.title }),
    isPressable: true
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.description({ class: classNames?.description })
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
    icon,
    iconColor,
    title,
    description,
    onPress,
    getTitleProps,
    getDescriptionProps
  }
}

export { useProps }
export type { Props }
