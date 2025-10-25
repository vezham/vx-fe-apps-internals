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

export type footeritems = { icon: string }

export type App = {
  id: string
  category?: string
  title: string
  description: string
  icon: string
  iconColor: string
  footerItems: footeritems[]
  image?: string
}

export interface CardProps {
  id?: string
  title: string
  icon: string
  color?: string
  description: string
  image: string
  app?: App | null
  onPress?: () => void
}

export interface AppleStyleCarouselRef {
  scrollLeft: () => void
  scrollRight: () => void
  canScrollLeft: boolean
  canScrollRight: boolean
}

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  items: CardProps[]
  initialScroll?: number
  navigateBasePath: string
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    className,
    classNames,
    items,
    initialScroll,
    navigateBasePath,
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

  const getScrollContainerProps: PropGetter = () => ({
    className: slots.scrollContainer({ class: classNames?.scrollContainer }),
    style: {
      overflowY: 'hidden',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }
  })

  const getCardProps: PropGetter = () => ({
    className: slots.card({ class: classNames?.card })
  })

  const getOverlayProps: PropGetter = () => ({
    className: slots.overlay({ class: classNames?.overlay })
  })

  const getContentWrapperProps: PropGetter = () => ({
    className: slots.contentWrapper({ class: classNames?.contentWrapper })
  })

  const getHeaderWrapperProps: PropGetter = () => ({
    className: slots.headerWrapper({ class: classNames?.headerWrapper })
  })

  const getHeaderTitleProps: PropGetter = () => ({
    className: slots.headerTitle({ class: classNames?.headerTitle })
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.description({ class: classNames?.description })
  })

  const getButtonGroupProps: PropGetter = () => ({
    className: slots.buttonGroup({ class: classNames?.buttonGroup })
  })

  const getOpenButtonProps: PropGetter = () => ({
    className: slots.openButton({ class: classNames?.openButton })
  })

  const getLearnMoreButtonProps: PropGetter = () => ({
    className: slots.learnMoreButton({ class: classNames?.learnMoreButton })
  })

  const getFooterWrapperProps: PropGetter = () => ({
    className: slots.footerWrapper({ class: classNames?.footerWrapper })
  })

  const getFooterTitleProps: PropGetter = () => ({
    className: slots.footerTitle({ class: classNames?.footerTitle })
  })

  const getFooterIconsProps: PropGetter = () => ({
    className: slots.footerIcons({ class: classNames?.footerIcons })
  })

  const getMainImageProps: PropGetter = () => ({
    className: slots.mainImage({ class: classNames?.mainImage })
  })

  return {
    Component,
    domRef,
    items,
    initialScroll,
    navigateBasePath,
    getBaseProps,
    getScrollContainerProps,
    getCardProps,
    getOverlayProps,
    getContentWrapperProps,
    getHeaderWrapperProps,
    getHeaderTitleProps,
    getDescriptionProps,
    getButtonGroupProps,
    getOpenButtonProps,
    getLearnMoreButtonProps,
    getFooterWrapperProps,
    getFooterTitleProps,
    getFooterIconsProps,
    getMainImageProps
  }
}

export { useProps }
export type { Props as AppleStyleCarouselProps }
