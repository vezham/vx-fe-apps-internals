import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { Trends } from '@vx/shared-types'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>

  showTrack?: boolean
  isMobileView?: boolean
  onTrendsLoad?: (trends: Trends[]) => void
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

    showTrack,
    isMobileView
  }
}

export { useProps }
export type { Props }
