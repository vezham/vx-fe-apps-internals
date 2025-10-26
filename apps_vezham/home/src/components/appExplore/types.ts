import { PropGetter, ReactRef, cn, useDOMRef } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

/* --------------------- DATA TYPES --------------------- */
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

export type App = {
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

export type CategoryContent = {
  title: string
  hero?: boolean
  apps: App[]
}

export type AppDetail = App

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

declare global {
  interface Window {
    handleSubcategoryClick?: (subcategoryId: string) => void
  }
}

/* --------------------- USEPROPS --------------------- */
export interface AppDetailProps extends tvProps {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: Partial<Record<tvSlots, string>>
}

const useProps = (props: AppDetailProps) => {
  const domRef = useDOMRef(props.ref)
  const slots = tva({})

  const getSlotProps =
    (slot: tvSlots): PropGetter =>
    () => ({
      ref: slot === 'base' ? domRef : undefined,
      className: cn(slots[slot]?.(), props.classNames?.[slot])
    })

  return {
    domRef,
    slots,
    getBaseProps: getSlotProps('base'),
    getHeaderProps: getSlotProps('headerSection'),
    getHeaderInnerProps: getSlotProps('headerInner'),
    getHeaderTitleProps: getSlotProps('headerTitle'),
    getMainProps: getSlotProps('mainContainer'),
    getSectionProps: getSlotProps('section'),
    getOverviewTitleProps: getSlotProps('overviewTitle'),
    getOverviewDescProps: getSlotProps('overviewDescription'),
    getImageSectionProps: getSlotProps('imageSection'),
    getFeatureListProps: getSlotProps('featureList'),
    getFeatureItemProps: getSlotProps('featureItem'),
    getFeatureIconWrapperProps: getSlotProps('featureIconWrapper'),
    getFeaturesGridProps: getSlotProps('featuresGrid'),
    getFeatureCardProps: getSlotProps('featureCard'),
    getFeatureCardLeftProps: getSlotProps('featureCardLeft'),
    getFeatureCardBottomProps: getSlotProps('featureCardBottom'),
    getFeatureIconProps: getSlotProps('featureIcon'),
    getFeatureTitleWrapperProps: getSlotProps('featureTitleWrapper'),
    getFeatureTitleHighlightProps: getSlotProps('featureTitleHighlight'),
    getFeatureTitleProps: getSlotProps('featureTitle'),
    getFeatureDescProps: getSlotProps('featureDescription'),
    getCardsGridProps: getSlotProps('cardsGrid'),
    getCardBaseProps: getSlotProps('cardBase'),
    getResultsWrapperProps: getSlotProps('resultsWrapper'),
    getResultsItemProps: getSlotProps('resultsItem'),
    getResultCircleProps: getSlotProps('resultCircle'),
    getResultTextProps: getSlotProps('resultText'),
    getSupportWrapperProps: getSlotProps('supportWrapper'),
    getSupportItemProps: getSlotProps('supportItem'),
    getSupportIconWrapperProps: getSlotProps('supportIconWrapper'),
    getSupportTitleProps: getSlotProps('supportTitle'),
    getSupportDescProps: getSlotProps('supportDescription'),
    getSupportButtonProps: getSlotProps('supportButton'),
    getContentAreaBaseProps: getSlotProps('contentAreaBase'),
    getSectionBaseProps: getSlotProps('sectionBase'),
    getHeaderBaseProps: getSlotProps('headerBase'),
    getTitleProps: getSlotProps('title'),
    getGridProps: getSlotProps('grid'),
    getSubGridProps: getSlotProps('subGrid'),
    getCategoryWrapperProps: getSlotProps('categoryWrapper'),
    getSidebarButtonProps: getSlotProps('sidebarButton'),
    getSeeAllButtonProps: getSlotProps('seeAllButton'),
    getContinuousScrollProps: getSlotProps('continuousScroll'),
    getScrollSectionProps: getSlotProps('scrollSection')
  }
}

export { useProps }
