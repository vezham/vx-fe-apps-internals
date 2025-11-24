import { PropGetter, ReactRef, cn, useDOMRef } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface ProductDetailProps extends tvProps {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: Partial<Record<tvSlots, string>>
}

const useProps = (props: ProductDetailProps) => {
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
    getHeaderMenuProps: getSlotProps('headerMenuSection'),
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
    getHeaderSectionProps: getSlotProps('headerGap'),
    getTitleProps: getSlotProps('title'),
    getGridProps: getSlotProps('grid'),
    getSubGridProps: getSlotProps('subGrid'),
    getCategoryWrapperProps: getSlotProps('categoryWrapper'),
    getSidebarButtonProps: getSlotProps('sidebarButton'),
    getSidebarWrapperProps: getSlotProps('sidebarWrapper'),
    getSeeAllSingleButtonProps: getSlotProps('seeAllSingleButton'),
    getSeeAllButtonProps: getSlotProps('seeAllButton'),
    getScrollSectionProps: getSlotProps('scrollSection')
  }
}

export { useProps }
export type { ProductDetailProps }
