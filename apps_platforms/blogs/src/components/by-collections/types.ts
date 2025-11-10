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
  title?: string
  titleVariant?: 'title' | 'subtitle' | 'caption'
  titleVc?: 'primary' | 'secondary' | 'tertiary'

  showTrack?: boolean
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
    title,
    titleVariant = 'title',
    titleVc = 'secondary',

    showTrack = true,

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

  const getTitleProps: PropGetter = () => ({
    variant: titleVariant,
    vc: titleVc,
    className: slots.title({ class: classNames?.title })
  })

  const getScrollProps: PropGetter = () => ({
    orientation: 'horizontal' as const,
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
    getTitleProps,
    getScrollProps,

    // Data props
    id,
    title,
    titleVariant,
    titleVc,
    showTrack
  }
}

export { useProps }
export type { Props }
