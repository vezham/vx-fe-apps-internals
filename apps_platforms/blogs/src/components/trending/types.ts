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

interface TrendItem {
  id?: string
  title?: string
  [key: string]: any
}

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>

  title?: string
  titleVariant?: 'title' | 'subtitle' | 'caption'
  titleVc?: 'primary' | 'secondary' | 'tertiary'
  showTrack?: boolean
  isMobileView?: boolean
  onTrendsLoad?: (trends: TrendItem[]) => void
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

    title = 'Top Trending',
    titleVariant = 'title',
    titleVc = 'secondary',
    showTrack = true,
    isMobileView = false,
    onTrendsLoad,
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

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getScrollProps: PropGetter = () => ({
    orientation: isMobileView ? ('horizontal' as const) : ('vertical' as const),
    show_track: showTrack,
    className: slots.scroll({ class: classNames?.scroll })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getHeaderProps,
    getWrapperProps,
    getScrollProps,

    // Data & configuration props

    title,
    titleVariant,
    titleVc,
    showTrack,
    isMobileView
  }
}

export { useProps }
export type { Props, TrendItem }
