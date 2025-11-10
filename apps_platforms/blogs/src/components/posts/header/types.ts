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
  platforms?: string[]
  onHomePress?: () => void
  separator?: string
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
    title = '',
    platforms = [
      'linkedin',
      'twitter',
      'facebook',
      'instagram',
      'whatsapp',
      'mail'
    ],
    onHomePress,
    separator = '/',
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

  const getBreadcrumbsProps: PropGetter = () => ({
    separator,
    itemClasses: {
      separator: slots.separator({ class: classNames?.separator })
    },
    className: slots.breadcrumbs({ class: classNames?.breadcrumbs })
  })

  const getHomeIconProps: PropGetter = () => ({
    className: slots.homeIcon({ class: classNames?.homeIcon })
  })

  const getHeadingProps: PropGetter = () => ({
    className: slots.heading({ class: classNames?.heading })
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getUserDescriptionProps: PropGetter = () => ({
    className: slots.userDescription({ class: classNames?.userDescription })
  })

  const getDotProps: PropGetter = () => ({
    className: slots.dot({ class: classNames?.dot })
  })

  const getReadTimeProps: PropGetter = () => ({
    className: slots.readTime({ class: classNames?.readTime })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getBreadcrumbsProps,
    getHomeIconProps,
    getHeadingProps,
    getWrapperProps,
    getUserDescriptionProps,
    getDotProps,
    getReadTimeProps,
    slugId,
    title,
    platforms,
    onHomePress,
    separator
  }
}

export { useProps }
export type { Props }
