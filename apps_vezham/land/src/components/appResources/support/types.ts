import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { ButtonProps } from '@vx-oss/react'

import { PricingTvProps, PricingTvSlots, pricingTva } from './variant'

export interface NavbarLogoProps {
  visible: boolean
}

export type Info = {
  title?: string
  description?: string
}

export type SupportPlan = {
  title?: string
  description?: string
}

export type ServiceInfo = {
  logotitle?: string
  logourl?: string
  title?: string
  description?: string
  site?: string
  siteurl?: string
}

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

type TeamMember = {
  name: string
  avatar: string
  role: string
  bio?: string
  social: {
    twitter: string
    linkedin: string
    github?: string
    mail?: string
  }
}

type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> & TeamMember

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

const useSupportProps = (originalProps: PricingCompProps) => {
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

  // Hero Sections
  const getHeroContainerProps: PropGetter = () => ({
    className: slots.heroContainer({ class: classNames?.heroContainer })
  })

  const getHeroGridProps: PropGetter = () => ({
    className: slots.heroGrid({ class: classNames?.heroGrid })
  })

  const getHeroTitleProps: PropGetter = () => ({
    className: slots.heroTitle({ class: classNames?.heroTitle })
  })

  const getHeroDescriptionProps: PropGetter = () => ({
    className: slots.heroDescription({ class: classNames?.heroDescription })
  })

  // Services
  const getServicesGridProps: PropGetter = () => ({
    className: slots.servicesGrid({ class: classNames?.servicesGrid })
  })

  const getServiceCardProps: PropGetter = () => ({
    className: slots.serviceCard({ class: classNames?.serviceCard })
  })

  const getServiceCardHeaderProps: PropGetter = () => ({
    className: slots.serviceCardHeader({ class: classNames?.serviceCardHeader })
  })

  const getServiceHeaderContentProps: PropGetter = () => ({
    className: slots.serviceHeaderContent({
      class: classNames?.serviceHeaderContent
    })
  })

  const getServiceHeaderTitleProps: PropGetter = () => ({
    className: slots.serviceHeaderTitle({
      class: classNames?.serviceHeaderTitle
    })
  })

  const getServiceHeaderSubtitleProps: PropGetter = () => ({
    className: slots.serviceHeaderSubtitle({
      class: classNames?.serviceHeaderSubtitle
    })
  })

  const getServiceCardBodyProps: PropGetter = () => ({
    className: slots.serviceCardBody({ class: classNames?.serviceCardBody })
  })

  const getServiceBodyTitleProps: PropGetter = () => ({
    className: slots.serviceBodyTitle({ class: classNames?.serviceBodyTitle })
  })

  const getServiceBodyDescriptionProps: PropGetter = () => ({
    className: slots.serviceBodyDescription({
      class: classNames?.serviceBodyDescription
    })
  })

  const getServiceCardFooterProps: PropGetter = () => ({
    className: slots.serviceCardFooter({ class: classNames?.serviceCardFooter })
  })

  // Plans
  const getPlansContainerProps: PropGetter = () => ({
    className: slots.plansContainer({ class: classNames?.plansContainer })
  })

  const getPlansGridProps: PropGetter = () => ({
    className: slots.plansGrid({ class: classNames?.plansGrid })
  })

  // Tiers
  const getTiersContainerProps: PropGetter = () => ({
    className: slots.tiersContainer({ class: classNames?.tiersContainer })
  })

  const getTiersSubContainerProps: PropGetter = () => ({
    className: slots.tiersSubContainer({ class: classNames?.tiersSubContainer })
  })

  const getTiersBackgroundProps: PropGetter = () => ({
    className: slots.tiersBackground({ class: classNames?.tiersBackground })
  })

  const getTiersGridProps: PropGetter = () => ({
    className: slots.tiersGrid({ class: classNames?.tiersGrid })
  })

  const getTierCardProps: PropGetter = (props: {
    isMostPopular?: boolean
  }) => ({
    className: slots.tierCard({
      class: cn(
        classNames?.tierCard,
        props.isMostPopular && slots.tierCardPopular()
      )
    })
  })

  const getTierChipProps: PropGetter = () => ({
    className: slots.tierChip({ class: classNames?.tierChip })
  })

  const getTierCardHeaderProps: PropGetter = () => ({
    className: slots.tierCardHeader({ class: classNames?.tierCardHeader })
  })

  const getTierHeaderTitleProps: PropGetter = () => ({
    className: slots.tierHeaderTitle({ class: classNames?.tierHeaderTitle })
  })

  const getTierHeaderDescriptionProps: PropGetter = () => ({
    className: slots.tierHeaderDescription({
      class: classNames?.tierHeaderDescription
    })
  })

  const getTierCardBodyProps: PropGetter = () => ({
    className: slots.tierCardBody({ class: classNames?.tierCardBody })
  })

  const getTierPriceContainerProps: PropGetter = () => ({
    className: slots.tierPriceContainer({
      class: classNames?.tierPriceContainer
    })
  })

  const getTierPriceProps: PropGetter = () => ({
    className: slots.tierPrice({ class: classNames?.tierPrice })
  })

  const getTierPriceSuffixProps: PropGetter = () => ({
    className: slots.tierPriceSuffix({ class: classNames?.tierPriceSuffix })
  })

  const getTierFeatureListProps: PropGetter = () => ({
    className: slots.tierFeatureList({ class: classNames?.tierFeatureList })
  })

  const getTierFeatureItemProps: PropGetter = () => ({
    className: slots.tierFeatureItem({ class: classNames?.tierFeatureItem })
  })

  const getTierFeatureIconProps: PropGetter = () => ({
    className: slots.tierFeatureIcon({ class: classNames?.tierFeatureIcon })
  })

  const getTierFeatureTextProps: PropGetter = () => ({
    className: slots.tierFeatureText({ class: classNames?.tierFeatureText })
  })

  const getTierCardFooterProps: PropGetter = () => ({
    className: slots.tierCardFooter({ class: classNames?.tierCardFooter })
  })

  // Tabs
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

  const getTabContentProps: PropGetter = () => ({
    className: slots.tabContent({ class: classNames?.tabContent })
  })

  const getRadioGroupProps: PropGetter = () => ({
    className: slots.radioGroup({ class: classNames?.radioGroup })
  })

  // Comparison Table
  const getComparisonTableProps: PropGetter = () => ({
    className: slots.comparisonTable({ class: classNames?.comparisonTable })
  })

  const getTableContainerProps: PropGetter = () => ({
    className: slots.tableContainer({ class: classNames?.tableContainer })
  })

  const getTableProps: PropGetter = () => ({
    className: slots.table({ class: classNames?.table })
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

  // FAQ
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

  const getFaqItemDescriptionProps: PropGetter = () => ({
    className: slots.faqItemDescription({
      class: classNames?.faqItemDescription
    })
  })

  // Discount
  const getDiscountContainerProps: PropGetter = () => ({
    className: slots.discountContainer({ class: classNames?.discountContainer })
  })

  const getDiscountTextProps: PropGetter = () => ({
    className: slots.discountText({ class: classNames?.discountText })
  })

  const getDiscountLinkProps: PropGetter = () => ({
    className: slots.discountLink({ class: classNames?.discountLink })
  })

  // Team Section
  const getTeamSectionProps: PropGetter = () => ({
    className: slots.teamSection({ class: classNames?.teamSection })
  })

  const getTeamHeaderProps: PropGetter = () => ({
    className: slots.teamHeader({ class: classNames?.teamHeader })
  })

  const getTeamSubtitleProps: PropGetter = () => ({
    className: slots.teamSubtitle({ class: classNames?.teamSubtitle })
  })

  const getTeamTitleProps: PropGetter = () => ({
    className: slots.teamTitle({ class: classNames?.teamTitle })
  })

  const getTeamGridProps: PropGetter = () => ({
    className: slots.teamGrid({ class: classNames?.teamGrid })
  })

  // Team Member Card
  const getTeamMemberCardProps: PropGetter = () => ({
    className: slots.teamMemberCard({ class: classNames?.teamMemberCard })
  })

  const getTeamMemberAvatarProps: PropGetter = () => ({
    className: slots.teamMemberAvatar({ class: classNames?.teamMemberAvatar })
  })

  const getTeamMemberNameProps: PropGetter = () => ({
    className: slots.teamMemberName({ class: classNames?.teamMemberName })
  })

  const getTeamMemberRoleProps: PropGetter = () => ({
    className: slots.teamMemberRole({ class: classNames?.teamMemberRole })
  })

  const getTeamMemberBioProps: PropGetter = () => ({
    className: slots.teamMemberBio({ class: classNames?.teamMemberBio })
  })

  const getTeamSocialLinksProps: PropGetter = () => ({
    className: slots.teamSocialLinks({ class: classNames?.teamSocialLinks })
  })

  const getTeamSocialIconProps: PropGetter = () => ({
    className: slots.teamSocialIcon({ class: classNames?.teamSocialIcon })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,

    // Base
    getBaseProps,

    // Hero
    getHeroContainerProps,
    getHeroGridProps,
    getHeroTitleProps,
    getHeroDescriptionProps,

    // Services
    getServicesGridProps,
    getServiceCardProps,
    getServiceCardHeaderProps,
    getServiceHeaderContentProps,
    getServiceHeaderTitleProps,
    getServiceHeaderSubtitleProps,
    getServiceCardBodyProps,
    getServiceBodyTitleProps,
    getServiceBodyDescriptionProps,
    getServiceCardFooterProps,

    // Plans
    getPlansContainerProps,
    getPlansGridProps,

    // Tiers
    getTiersContainerProps,
    getTiersSubContainerProps,
    getTiersBackgroundProps,
    getTiersGridProps,
    getTierCardProps,
    getTierChipProps,
    getTierCardHeaderProps,
    getTierHeaderTitleProps,
    getTierHeaderDescriptionProps,
    getTierCardBodyProps,
    getTierPriceContainerProps,
    getTierPriceProps,
    getTierPriceSuffixProps,
    getTierFeatureListProps,
    getTierFeatureItemProps,
    getTierFeatureIconProps,
    getTierFeatureTextProps,
    getTierCardFooterProps,

    // Tabs
    getTabsContainerProps,
    getTabsProps,
    getTabListProps,
    getTabProps,
    getTabContentProps,
    getRadioGroupProps,

    // Comparison Table
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

    // FAQ
    getFaqContainerProps,
    getFaqGroupProps,
    getFaqGroupTitleProps,
    getFaqShadowProps,
    getFaqItemDescriptionProps,

    // Discount
    getDiscountContainerProps,
    getDiscountTextProps,
    getDiscountLinkProps,

    // Team
    getTeamSectionProps,
    getTeamHeaderProps,
    getTeamSubtitleProps,
    getTeamTitleProps,
    getTeamGridProps,
    getTeamMemberCardProps,
    getTeamMemberAvatarProps,
    getTeamMemberNameProps,
    getTeamMemberRoleProps,
    getTeamMemberBioProps,
    getTeamSocialLinksProps,
    getTeamSocialIconProps,

    // Data and State
    pricingData,
    isLoading,
    selectedFrequency,
    selectedTier,
    onFrequencyChange,
    onTierChange
  }
}

export { useSupportProps }
export type {
  PricingCompProps,
  Frequency,
  Tier,
  PricingFeatureItem,
  PricingFeatures,
  FAQItem,
  FAQGroup,
  PricingData,
  TeamMember,
  TeamMemberCardProps
}
