import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { ButtonProps, RadioProps } from '@vx-oss/react'

import {
  PricingRadioItemTvProps,
  PricingRadioItemTvSlots,
  PricingTvProps,
  PricingTvSlots,
  pricingRadioItemTva,
  pricingTva
} from './variant'

// Enums
export enum FrequencyEnum {
  Yearly = 'yearly',
  Quarterly = 'quarterly',
  Monthly = 'monthly'
}

export enum TiersEnum {
  Free = 'free',
  Pro = 'pro',
  Team = 'team'
}

// Data Types
interface Frequency {
  key: FrequencyEnum
  label: string
  priceSuffix: string
}

interface Tier {
  key: TiersEnum
  title: string
  price:
    | {
        [FrequencyEnum.Yearly]: string
        [FrequencyEnum.Quarterly]: string
        [FrequencyEnum.Monthly]: string
      }
    | string
  priceSuffix?: string
  href: string
  description?: string
  mostPopular?: boolean
  featured?: boolean
  features?: string[]
  buttonText: string
  buttonColor?: ButtonProps['color']
  buttonVariant: ButtonProps['variant']
}

interface PricingFeatureItem {
  title: string
  tiers: {
    [key in TiersEnum]: boolean | string
  }
  helpText?: string
}

interface PricingFeatures {
  title: string
  items: PricingFeatureItem[]
}

interface FAQItem {
  title: string
  description: string
}

interface FAQGroup {
  label: string
  subItems?: FAQItem[]
}

interface PricingData {
  frequencies: Frequency[]
  tiers: Tier[]
  features: PricingFeatures[]
  faqs: FAQGroup[]
}

interface PricingCompProps extends PricingTvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<PricingTvSlots>
  pricingData?: PricingData
  isLoading?: boolean
  selectedFrequency?: Frequency
  selectedTier?: TiersEnum | null
  onFrequencyChange?: (frequency: Frequency) => void
  onTierChange?: (tier: TiersEnum) => void
}

interface PricingRadioItemProps
  extends PricingRadioItemTvProps,
    Omit<RadioProps, 'classNames'> {
  ref?: ReactRef<HTMLInputElement | null>
  classNames?: SlotsToClasses<PricingRadioItemTvSlots> &
    RadioProps['classNames']
}

const usePricingProps = (originalProps: PricingCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    pricingTva.variantKeys
  )

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    pricingData,
    isLoading = false,
    selectedFrequency,
    selectedTier = null,
    onFrequencyChange,
    onTierChange,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = pricingTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getTitleBaseProps: PropGetter = () => ({
    className: slots.titleBase({ class: classNames?.titleBase })
  })
  const getSpotlightProps: PropGetter = () => ({
    className: slots.spotlight({ class: classNames?.spotlight })
  })
  const getTitleWrapperProps: PropGetter = () => ({
    className: slots.titlewrap({ class: classNames?.titlewrap })
  })
  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })
  const getDescriptionProps: PropGetter = () => ({
    className: slots.desc({ class: classNames?.desc })
  })
  const getCouponProps: PropGetter = () => ({
    className: slots.coupon({ class: classNames?.coupon })
  })

  const getLoadingProps: PropGetter = () => ({
    className: slots.loading({ class: classNames?.loading })
  })

  const getTabsContainerProps: PropGetter = () => ({
    className: slots.tabsContainer({ class: classNames?.tabsContainer })
  })

  const getTabsProps: PropGetter = () => ({
    className: slots.tabs({ class: classNames?.tabs })
  })

  const getTabListProps: PropGetter = () => ({
    className: slots.tabList({ class: classNames?.tabList })
  })

  const getTabProps: PropGetter = () => ({
    className: slots.tab({ class: classNames?.tab })
  })

  const getRadioGroupProps: PropGetter = () => ({
    className: slots.radioGroup({ class: classNames?.radioGroup })
  })

  const getComparisonTableProps: PropGetter = () => ({
    className: slots.comparisonTable({ class: classNames?.comparisonTable })
  })

  const getTableContainerProps: PropGetter = () => ({
    className: slots.tableContainer({ class: classNames?.tableContainer })
  })

  const getTableProps: PropGetter = () => ({
    className: slots.table({ class: classNames?.table })
  })

  const getBgProps: PropGetter = () => ({
    className: slots.Bg({ class: classNames?.Bg })
  })

  const getTableColProps: PropGetter = () => ({
    className: slots.tableCol({ class: classNames?.tableCol })
  })

  const getFeatureGroupHeaderProps: PropGetter = (isFirst: boolean) => ({
    className: slots.featureGroupHeader({
      class: cn(
        isFirst && slots.featureGroupHeaderFirst(),
        classNames?.featureGroupHeader
      )
    })
  })

  const getFeatureGroupDividerProps: PropGetter = () => ({
    className: slots.featureGroupDivider({
      class: classNames?.featureGroupDivider
    })
  })

  const getFeatureTitleProps: PropGetter = (hasHelp: boolean) => ({
    className: slots.featureTitle({
      class: cn(
        hasHelp && slots.featureTitleWithHelp(),
        classNames?.featureTitle
      )
    })
  })

  const getFeatureHelpIconProps: PropGetter = () => ({
    className: slots.featureHelpIcon({ class: classNames?.featureHelpIcon })
  })

  const getFeatureCellProps: PropGetter = () => ({
    className: slots.featureCell({ class: classNames?.featureCell })
  })

  const getFeatureTextProps: PropGetter = () => ({
    className: slots.featureText({ class: classNames?.featureText })
  })

  const getFeatureCheckIconProps: PropGetter = () => ({
    className: slots.featureCheckIcon({ class: classNames?.featureCheckIcon })
  })

  const getFeatureCloseIconProps: PropGetter = () => ({
    className: slots.featureCloseIcon({ class: classNames?.featureCloseIcon })
  })

  const getFaqContainerProps: PropGetter = () => ({
    className: slots.faqContainer({ class: classNames?.faqContainer })
  })

  const getFaqGroupProps: PropGetter = () => ({
    className: slots.faqGroup({ class: classNames?.faqGroup })
  })

  const getFaqGroupTitleProps: PropGetter = () => ({
    className: slots.faqGroupTitle({ class: classNames?.faqGroupTitle })
  })

  const getFaqShadowProps: PropGetter = () => ({
    className: slots.faqShadow({ class: classNames?.faqShadow })
  })

  const getDiscountContainerProps: PropGetter = () => ({
    className: slots.discountContainer({
      class: classNames?.discountContainer
    })
  })

  const getDiscountTextProps: PropGetter = () => ({
    className: slots.discountText({ class: classNames?.discountText })
  })

  const getDiscountLinkProps: PropGetter = () => ({
    className: slots.discountLink({ class: classNames?.discountLink })
  })

  const getPriceContainerProps: PropGetter = () => ({
    className: slots.priceContainer({ class: classNames?.priceContainer })
  })

  const getPriceRowProps: PropGetter = () => ({
    className: slots.priceRow({ class: classNames?.priceRow })
  })

  const getPriceAmountProps: PropGetter = () => ({
    className: slots.priceAmount({ class: classNames?.priceAmount })
  })

  const getPriceSuffixProps: PropGetter = () => ({
    className: slots.priceSuffix({ class: classNames?.priceSuffix })
  })

  const getPriceDescriptionProps: PropGetter = () => ({
    className: slots.priceDescription({ class: classNames?.priceDescription })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getLoadingProps,
    getTabsContainerProps,
    getTabsProps,
    getTabListProps,
    getTabProps,
    getRadioGroupProps,
    getComparisonTableProps,
    getTableContainerProps,
    getTableProps,
    getTableColProps,
    getFeatureGroupHeaderProps,
    getFeatureGroupDividerProps,
    getFeatureTitleProps,
    getFeatureHelpIconProps,
    getFeatureCellProps,
    getFeatureTextProps,
    getFeatureCheckIconProps,
    getFeatureCloseIconProps,
    getFaqContainerProps,
    getFaqGroupProps,
    getFaqGroupTitleProps,
    getDiscountContainerProps,
    getDiscountTextProps,
    getDiscountLinkProps,
    getPriceContainerProps,
    getPriceRowProps,
    getPriceAmountProps,
    getPriceSuffixProps,
    getPriceDescriptionProps,
    getFaqShadowProps,
    getTitleBaseProps,
    getTitleProps,
    getCouponProps,
    getDescriptionProps,
    getTitleWrapperProps,
    getSpotlightProps,
    getBgProps,
    pricingData,
    isLoading,
    selectedFrequency,
    selectedTier,
    onFrequencyChange,
    onTierChange
  }
}

const usePricingRadioItemProps = (originalProps: PricingRadioItemProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    pricingRadioItemTva.variantKeys
  )

  const { as, id, ref, children, className, classNames, ...otherProps } = props

  const Component = as || 'input'

  const domRef = useDOMRef(ref)

  const slots = pricingRadioItemTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getLabelProps: PropGetter = () => ({
    className: slots.label({ class: classNames?.label })
  })

  const getChipBaseProps: PropGetter = () => ({
    className: slots.chipBase({ class: classNames?.chipBase })
  })

  const getChipContentProps: PropGetter = () => ({
    className: slots.chipContent({ class: classNames?.chipContent })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getLabelProps,
    getChipBaseProps,
    getChipContentProps
  }
}

export { usePricingProps, usePricingRadioItemProps }
export type {
  PricingCompProps,
  PricingRadioItemProps,
  Frequency,
  Tier,
  PricingFeatureItem,
  PricingFeatures,
  FAQItem,
  FAQGroup,
  PricingData
}
