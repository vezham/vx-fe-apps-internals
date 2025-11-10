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
  slugId?: string
  title?: string
  subtitle?: string
  posts?: any[]
  collectionId?: string
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
    slugId,
    title = 'Related posts',
    subtitle = 'More posts from this Author, and in this sector.',
    posts,
    collectionId,
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
    subtitle,
    className: slots.postHeader({ class: classNames?.postHeader })
  })

  const getCardFeaturedProps: PropGetter = () => ({
    posts,
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
    slugId,
    title,
    subtitle,
    posts,
    collectionId
  }
}

export { useProps }
export type { Props }
