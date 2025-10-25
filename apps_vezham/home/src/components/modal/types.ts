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

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Metric {
  value: number
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  isPopular: boolean
}

export interface SupportOption {
  icon: string
  title: string
  description: string
}

export interface App {
  id: string
  title: string
  description: string
  icon: string
  iconColor: string
  detailedDescription?: string
  image?: string
  features?: Feature[]
  metrics?: Metric[]
  pricing?: PricingPlan[]
  support?: SupportOption[]
}

export type AppDetail = App

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  isOpen: boolean
  onClose: () => void
  app: AppDetail | null
  navigatePath: string
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    className,
    classNames,
    isOpen,
    onClose,
    app,
    navigatePath,
    ...otherProps
  } = props

  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  const getModalProps: PropGetter = () => ({
    id,
    ref: domRef,
    isOpen,
    onClose,
    ...otherProps,
    // Merge properly: className = slot classes + user overrides
    className: cn(slots.modal(), classNames?.modal, className)
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getHeaderInnerProps: PropGetter = () => ({
    className: slots.headerInner({ class: classNames?.headerInner })
  })
  const getIconProps: PropGetter = () => ({
    className: slots.icon({ class: classNames?.icon })
  })
  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })
  const getBodyProps: PropGetter = () => ({
    className: slots.body({ class: classNames?.body })
  })
  const getColumnsProps: PropGetter = () => ({
    className: slots.columns({ class: classNames?.columns })
  })
  const getLeftColumnProps: PropGetter = () => ({
    className: slots.leftColumn({ class: classNames?.leftColumn })
  })
  const getRightColumnProps: PropGetter = () => ({
    className: slots.rightColumn({ class: classNames?.rightColumn })
  })
  const getImageWrapperProps: PropGetter = () => ({
    className: slots.imageWrapper({ class: classNames?.imageWrapper })
  })
  const getMainImageProps: PropGetter = () => ({
    className: slots.mainImage({ class: classNames?.mainImage })
  })
  const getDescriptionProps: PropGetter = () => ({
    className: slots.description({ class: classNames?.description })
  })
  const getBuiltByProps: PropGetter = () => ({
    className: slots.builtBySection({ class: classNames?.builtBySection })
  })
  const getLogoProps: PropGetter = () => ({
    className: slots.logo({ class: classNames?.logo })
  })
  const getFreeIconProps: PropGetter = () => ({
    className: slots.freeIcon({ class: classNames?.freeIcon })
  })
  const getSectionProps: PropGetter = () => ({
    className: slots.section({ class: classNames?.section })
  })
  const getSectionTitleProps: PropGetter = () => ({
    className: slots.sectionTitle({ class: classNames?.sectionTitle })
  })
  const getSectionContentProps: PropGetter = () => ({
    className: slots.sectionContent({ class: classNames?.sectionContent })
  })

  const getFeatureItemProps: PropGetter = () => ({
    className: slots.featureItem({ class: classNames?.featureItem })
  })
  const getSubTextProps: PropGetter = () => ({
    className: slots.subText({ class: classNames?.subText })
  })
  const getCategoriesProps: PropGetter = () => ({
    className: slots.categories({ class: classNames?.categories })
  })
  const getCategoryItemProps: PropGetter = () => ({
    className: slots.categoryItem({ class: classNames?.categoryItem })
  })
  const getTermsProps: PropGetter = () => ({
    className: slots.terms({ class: classNames?.terms })
  })
  const getLinkProps: PropGetter = () => ({
    className: slots.link({ class: classNames?.link })
  })
  const getViewDetailsButtonProps: PropGetter = () => ({
    className: slots.viewDetailsButton({ class: classNames?.viewDetailsButton })
  })
  const getSectionHeaderProps: PropGetter = () => ({
    className: slots.sectionHeader({ class: classNames?.sectionHeader })
  })
  const getFeaturesGridProps: PropGetter = () => ({
    className: slots.featuresGrid({ class: classNames?.featuresGrid })
  })
  const getFeatureItemWrapperProps: PropGetter = () => ({
    className: slots.featureItemWrapper({
      class: classNames?.featureItemWrapper
    })
  })
  const getFeatureIconWrapperProps: PropGetter = () => ({
    className: slots.featureIconWrapper({
      class: classNames?.featureIconWrapper
    })
  })
  const getFeatureIconProps: PropGetter = () => ({
    className: slots.featureIcon({ class: classNames?.featureIcon })
  })
  const getFeatureTitleProps: PropGetter = () => ({
    className: slots.featureTitle({ class: classNames?.featureTitle })
  })
  const getFeatureDescriptionProps: PropGetter = () => ({
    className: slots.featureDescription({
      class: classNames?.featureDescription
    })
  })
  const getMetricWrapperProps: PropGetter = () => ({
    className: slots.metricWrapper({ class: classNames?.metricWrapper })
  })
  const getMetricSvgProps: PropGetter = () => ({
    className: slots.metricSvg({ class: classNames?.metricSvg })
  })
  const getMetricBgProps: PropGetter = () => ({
    className: slots.metricBg({ class: classNames?.metricBg })
  })
  const getMetricFgProps: PropGetter = () => ({
    className: slots.metricFg({ class: classNames?.metricFg })
  })
  const getMetricTextProps: PropGetter = () => ({
    className: slots.metricText({ class: classNames?.metricText })
  })
  const getImagesGridProps: PropGetter = () => ({
    className: slots.imagesGrid({ class: classNames?.imagesGrid })
  })

  return {
    Component: as || 'div',
    domRef,
    slots,
    classNames,
    isOpen,
    onClose,
    app,
    navigatePath,
    getModalProps,
    getHeaderProps,
    getHeaderInnerProps,
    getIconProps,
    getTitleProps,
    getBodyProps,
    getColumnsProps,
    getLeftColumnProps,
    getRightColumnProps,
    getImageWrapperProps,
    getMainImageProps,
    getDescriptionProps,
    getBuiltByProps,
    getLogoProps,
    getFreeIconProps,
    getSectionProps,
    getSectionTitleProps,
    getSectionContentProps,
    getFeatureItemProps,
    getSubTextProps,
    getCategoriesProps,
    getCategoryItemProps,
    getTermsProps,
    getLinkProps,
    getViewDetailsButtonProps,
    getSectionHeaderProps,
    getFeaturesGridProps,
    getFeatureItemWrapperProps,
    getFeatureIconWrapperProps,
    getFeatureIconProps,
    getFeatureTitleProps,
    getFeatureDescriptionProps,
    getMetricWrapperProps,
    getMetricSvgProps,
    getMetricBgProps,
    getMetricFgProps,
    getMetricTextProps,
    getImagesGridProps
  }
}

export { useProps }
export type { Props }
