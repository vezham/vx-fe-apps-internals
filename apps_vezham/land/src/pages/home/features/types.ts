import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { FeaturesTvProps, FeaturesTvSlots, featuresTva } from './variant'

interface SubItem {
  title: string
  Items: Array<{
    name: string
    description: string
    icon: string
    link: string
    detailedItems: Array<{
      image: string
    }>
  }>
}

interface NavItem {
  subItems?: SubItem[]
}

interface PersonalizeData {
  navItems?: NavItem[]
}

interface FeaturesCompProps extends FeaturesTvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<FeaturesTvSlots>
}

const useFeaturesProps = (originalProps: FeaturesCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    featuresTva.variantKeys
  )

  const { as, id, ref, children, className, classNames, ...otherProps } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = featuresTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getBackgroundProps: PropGetter = () => ({
    className: slots.background({ class: classNames?.background })
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getFeatureTagProps: PropGetter = () => ({
    className: slots.featureTag({ class: classNames?.featureTag })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getSubtitleProps: PropGetter = () => ({
    className: slots.subtitle({ class: classNames?.subtitle })
  })

  const getMarqueeContainerProps: PropGetter = () => ({
    className: slots.marqueeContainer({ class: classNames?.marqueeContainer })
  })

  const getScrollShadowProps: PropGetter = () => ({
    className: slots.scrollShadow({ class: classNames?.scrollShadow }),
    orientation: 'horizontal',
    isEnabled: true,
    offset: -20,
    size: 100
  })

  const getMarqueeProps: PropGetter = () => ({
    className: slots.marquee({ class: classNames?.marquee }),
    pauseOnHover: true,
    speed: 35,
    gradient: false
  })

  const getButtonContainerProps: PropGetter = () => ({
    className: slots.buttonContainer({ class: classNames?.buttonContainer })
  })

  const getButtonProps: PropGetter = () => ({
    className: slots.button({ class: classNames?.button }),
    variant: 'flat',
    color: 'default',
    fullWidth: true
  })

  const getButtonIconProps: PropGetter = () => ({
    className: slots.buttonIcon({ class: classNames?.buttonIcon }),
    width: 18,
    height: 18
  })

  // Feature Card Props
  const getFeatureCardProps: PropGetter = () => ({
    className: slots.featureCard({ class: classNames?.featureCard }),
    isFooterBlurred: true,
    radius: 'lg'
  })

  const getFeatureImageProps: PropGetter = () => ({
    className: slots.featureImage({ class: classNames?.featureImage }),
    height: 200,
    width: '100%'
  })

  const getFeatureCardHeaderProps: PropGetter = () => ({
    className: slots.featureCardHeader({ class: classNames?.featureCardHeader })
  })

  const getFeatureCategoryProps: PropGetter = () => ({
    className: slots.featureCategory({ class: classNames?.featureCategory })
  })

  const getFeatureNameProps: PropGetter = () => ({
    className: slots.featureName({ class: classNames?.featureName })
  })

  const getFeatureDescriptionProps: PropGetter = () => ({
    className: slots.featureDescription({
      class: classNames?.featureDescription
    })
  })

  const getFeatureCardFooterProps: PropGetter = (props: {
    isHovered: boolean
  }) => ({
    className: slots.featureCardFooter({
      class: cn(
        classNames?.featureCardFooter,
        props.isHovered && slots.featureCardFooterHovered()
      )
    })
  })

  const getFeatureButtonProps: PropGetter = () => ({
    className: slots.featureButton({ class: classNames?.featureButton }),
    radius: 'lg',
    size: 'sm'
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getBackgroundProps,
    getHeaderProps,
    getFeatureTagProps,
    getTitleProps,
    getSubtitleProps,
    getMarqueeContainerProps,
    getScrollShadowProps,
    getMarqueeProps,
    getButtonContainerProps,
    getButtonProps,
    getButtonIconProps,
    getFeatureCardProps,
    getFeatureImageProps,
    getFeatureCardHeaderProps,
    getFeatureCategoryProps,
    getFeatureNameProps,
    getFeatureDescriptionProps,
    getFeatureCardFooterProps,
    getFeatureButtonProps
  }
}

export { useFeaturesProps }
export type { FeaturesCompProps, SubItem, NavItem, PersonalizeData }
