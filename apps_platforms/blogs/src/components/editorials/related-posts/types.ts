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
  editorialsId?: string
  title?: string
  posts?: any[]
  responsiveness?: boolean
  children?: React.ReactNode
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
    editorialsId,
    title,
    posts,
    responsiveness = true,
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

  const getPostHeaderProps: PropGetter = () => ({
    title,
    className: slots.postHeader({ class: classNames?.postHeader })
  })

  const getCardFeaturedProps: PropGetter = () => ({
    posts,
    responsiveness,
    className: slots.cardFeatured({ class: classNames?.cardFeatured })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getPostHeaderProps,
    getCardFeaturedProps,
    editorialsId,
    title,
    posts,
    responsiveness
  }
}

export { useProps }
export type { Props }
