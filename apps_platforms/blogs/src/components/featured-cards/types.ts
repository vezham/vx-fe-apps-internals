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

interface EditorialItem {
  label: string
  articles: any[]
  api_handle: string
}

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  editorials?: EditorialItem[]
  titleVariant?: 'title' | 'subtitle' | 'caption'
  titleVc?: 'primary' | 'secondary' | 'tertiary'
  linkSize?: 'sm' | 'md' | 'lg'
  linkColor?: 'default' | 'primary' | 'secondary'
  cardOrientation?: 'vertical' | 'horizontal'
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
    titleVariant = 'title',
    titleVc = 'secondary',
    linkSize = 'md',
    linkColor = 'default',
    cardOrientation = 'vertical',
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

  const getSectionProps: PropGetter = () => ({
    className: slots.section({ class: classNames?.section })
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getIconProps: PropGetter = () => ({
    className: slots.icon({ class: classNames?.icon })
  })

  const getTitleProps: PropGetter = () => ({
    variant: titleVariant,
    vc: titleVc,
    className: slots.title({ class: classNames?.title })
  })

  // Fixed: Create a function that returns link props for a specific item
  const getLinkProps = (item: EditorialItem) => ({
    size: linkSize,
    color: linkColor,
    href: `/editorials/${item.api_handle}`,
    className: slots.link({ class: classNames?.link })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getSectionProps,
    getHeaderProps,
    getTitleProps,
    getLinkProps,
    getIconProps,

    // Data & configuration props
    titleVariant,
    titleVc,
    linkSize,
    linkColor,
    cardOrientation
  }
}

export { useProps }
export type { Props, EditorialItem }
