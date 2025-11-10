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
  separator?: string
  onHomePress?: () => void
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
    separator = '/',
    onHomePress,
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

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getBreadcrumbsProps,
    getHomeIconProps,
    editorialsId,
    separator,
    onHomePress
  }
}

export { useProps }
export type { Props }
