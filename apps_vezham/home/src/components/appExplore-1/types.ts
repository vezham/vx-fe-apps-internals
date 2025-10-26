import { PropGetter, ReactRef, cn, useDOMRef } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

// Subcategory and Category
export type Subcategory = {
  id: string
  name: string
  hasChildren?: boolean
}

export type Category = {
  id: string
  name: string
  subcategories?: Subcategory[]
}

// Feature, Metric, PricingPlan, SupportOption
export type Feature = {
  icon: string
  title: string
  description: string
}

export type Metric = {
  value: number
  title: string
  description: string
}

export type PricingPlan = {
  name: string
  price: string
  period: string
  features: string[]
  isPopular: boolean
}

export type SupportOption = {
  icon: string
  title: string
  description: string
}

// Footer items
export type FooterItem = {
  icon: string
}

// PainPoint
export interface PainPoint {
  title: string
  description: string
}

// App
export type App = {
  id: string
  category?: string
  title: string
  description: string
  icon: string
  iconColor: string
  footerItems: FooterItem[]
  painPoints?: PainPoint[]
  detailedDescription?: string
  image: string
  features?: Feature[]
  metrics?: Metric[]
  pricing?: PricingPlan[]
  support?: SupportOption[]
}

// Category content
export type CategoryContent = {
  title: string
  hero?: boolean
  apps: App[]
}

// AppDetail (alias for App for backward compatibility)
export type AppDetail = App

// ContentArea props
export interface ContentAreaProps {
  activeCategory: string
  activeSubcategory: string
  categoryContents: Record<string, CategoryContent>
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onBackClick?: () => void
  isMobileView?: boolean
  visibleContent: string
  onAppClick: (appId: string, app: App) => void
}

// SectionWithControls props
export interface SectionWithControlsProps {
  id: string
  title: string
  apps: App[]
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onAppClick: (appId: string, app: App) => void
}

export interface UsePropsArgs extends tvProps {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: Partial<Record<tvSlots, string>>
}

export const useProps = (props: UsePropsArgs) => {
  const domRef = useDOMRef(props.ref)
  const slots = tva({})

  const getSlotProps =
    (slot: tvSlots): PropGetter =>
    () => ({
      ref: slot === 'wrapper' ? domRef : undefined,
      className: cn(slots[slot]?.(), props.classNames?.[slot])
    })

  return {
    domRef,
    slots,
    getWrapperProps: getSlotProps('wrapper'),
    getContainerProps: getSlotProps('container'),
    getMainProps: getSlotProps('main'),
    getHeaderBaseProps: getSlotProps('headerBase'),
    getHeaderInnerProps: getSlotProps('headerInner'),
    getHeaderTitleWrapProps: getSlotProps('headerTitleWrap'),
    getHeaderTitleProps: getSlotProps('headerTitle'),

    // Not Found
    getNotFoundWrapperProps: getSlotProps('notFoundWrapper'),
    getNotFoundInnerProps: getSlotProps('notFoundInner'),
    getNotFoundTitleProps: getSlotProps('notFoundTitle'),
    getNotFoundDescProps: getSlotProps('notFoundDesc'),
    getNotFoundButtonProps: getSlotProps('notFoundButton'),

    // Hero
    getHeroSectionProps: getSlotProps('heroSection'),
    getHeroTitleProps: getSlotProps('heroTitle'),
    getHeroDescProps: getSlotProps('heroDesc'),

    // Overview
    getOverviewSectionProps: getSlotProps('overviewSection'),
    getOverviewImageWrapProps: getSlotProps('overviewImageWrap'),
    getOverviewImageProps: getSlotProps('overviewImage'),
    getOverviewContentProps: getSlotProps('overviewContent'),
    getOverviewHeadingProps: getSlotProps('overviewHeading'),
    getOverviewAccordionProps: getSlotProps('overviewAccordion'),
    getOverviewFeatureListProps: getSlotProps('overviewFeatureList'),
    getOverviewFeatureItemProps: getSlotProps('overviewFeatureItem'),
    getOverviewFeatureIconProps: getSlotProps('overviewFeatureIcon'),

    // Features
    getFeaturesTitleProps: getSlotProps('featuresTitle'),
    getFeaturesGridProps: getSlotProps('featuresGrid'),
    getFeatureCardProps: getSlotProps('featureCard'),
    getFeatureCardLeftProps: getSlotProps('featureCardLeft'),
    getFeatureCardBottomProps: getSlotProps('featureCardBottom'),
    getFeatureIconProps: getSlotProps('featureIcon'),
    getFeatureTitleWrapperProps: getSlotProps('featureTitleWrapper'),
    getFeatureTitleHighlightProps: getSlotProps('featureTitleHighlight'),
    getFeatureTitleProps: getSlotProps('featureTitle'),
    getFeatureDescProps: getSlotProps('featureDescription'),

    // Cards / Pricing / Results / Support
    getCardsGridProps: getSlotProps('cardsGrid'),
    getCardBaseProps: getSlotProps('cardBase'),
    getPlanProps: getSlotProps('plan'),
    getPricingCardProps: getSlotProps('pricingCard'),
    getPricingPopularProps: getSlotProps('pricingPopular'),
    getPricingLabelProps: getSlotProps('pricingLabel'),
    getPricingNameProps: getSlotProps('pricingName'),
    getPricingValueProps: getSlotProps('pricingValue'),
    getPricingPeriodProps: getSlotProps('pricingPeriod'),
    getPricingFeatureProps: getSlotProps('pricingFeature'),
    getPricingFeatureIconProps: getSlotProps('pricingFeatureIcon'),

    getResultsTitleProps: getSlotProps('resultsTitle'),
    getResultsWrapperProps: getSlotProps('resultsWrapper'),
    getResultsItemProps: getSlotProps('resultsItem'),
    getResultCircleProps: getSlotProps('resultCircle'),
    getResultTextProps: getSlotProps('resultText'),

    getSupportHeadProps: getSlotProps('supportHead'),
    getSupportWrapperProps: getSlotProps('supportWrapper'),
    getSupportItemProps: getSlotProps('supportItem'),
    getSupportIconWrapperProps: getSlotProps('supportIconWrapper'),
    getSupportTitleProps: getSlotProps('supportTitle'),
    getSupportDescProps: getSlotProps('supportDescription'),
    getSupportButtonProps: getSlotProps('supportButton'),

    // ContentArea
    getContentWrapperProps: getSlotProps('contentWrapper'),
    getContinuousContainerProps: getSlotProps('continuousContainer'),
    getSectionProps: getSlotProps('section'),
    getSectionHeaderProps: getSlotProps('sectionHeader'),
    getSectionTitleProps: getSlotProps('sectionTitle'),
    getControlsProps: getSlotProps('controls'),
    getControlBtnProps: getSlotProps('controlBtn'),
    getControlBtnDisabledProps: getSlotProps('controlBtnDisabled'),
    getAllCollectionsWrapperProps: getSlotProps('allCollectionsWrapper'),
    getAllCollectionsHeaderProps: getSlotProps('allCollectionsHeader'),
    getBackButtonProps: getSlotProps('backButton')
  }
}
