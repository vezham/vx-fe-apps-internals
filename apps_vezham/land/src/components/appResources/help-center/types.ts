import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { CardProps } from '@vx-oss/react'

import { tvProps, tvSlots, tva } from './variant'

interface HelpInfo {
  title?: string
  description?: string
  subdescription?: string
  lists?: string[]
}

interface ReviewType {
  user: {
    name: string
    avatar: string
  }
  createdAt: string
  rating: number
  title: string
  content: string
}

interface Faqs {
  title: string
  content: string
}

interface FeatureCardProps extends CardProps {
  title?: string
  descriptions?: string[]
  icon: string
}

type CardReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType
type ReviewProps = React.HTMLAttributes<HTMLDivElement> & ReviewType

interface HelpCenterData {
  faqs: Faqs[]
  reviews: ReviewType[]
  helpDesk: HelpInfo[]
  features: FeatureCardProps[]
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  helpCenterData?: HelpCenterData
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
    helpCenterData,
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

  // Popular Topics Section
  const getPopularTopicsTitleProps: PropGetter = () => ({
    className: slots.popularTopicsTitle({
      class: classNames?.popularTopicsTitle
    })
  })

  const getFeaturesGridProps: PropGetter = () => ({
    className: slots.featuresGrid({ class: classNames?.featuresGrid })
  })

  // Feature Card
  const getFeatureCardProps: PropGetter = () => ({
    className: slots.featureCard({ class: classNames?.featureCard })
  })

  const getFeatureCardHeaderProps: PropGetter = () => ({
    className: slots.featureCardHeader({ class: classNames?.featureCardHeader })
  })

  const getFeatureCardIconProps: PropGetter = () => ({
    className: slots.featureCardIcon({ class: classNames?.featureCardIcon })
  })

  const getFeatureCardTitleProps: PropGetter = () => ({
    className: slots.featureCardTitle({ class: classNames?.featureCardTitle })
  })

  const getFeatureCardBodyProps: PropGetter = () => ({
    className: slots.featureCardBody({ class: classNames?.featureCardBody })
  })

  const getFeatureCardDescriptionProps: PropGetter = () => ({
    className: slots.featureCardDescription({
      class: classNames?.featureCardDescription
    })
  })

  const getFeatureCardDescriptionTextProps: PropGetter = () => ({
    className: slots.featureCardDescriptionText({
      class: classNames?.featureCardDescriptionText
    })
  })

  // Help Desk Section
  const getHelpDeskSectionProps: PropGetter = () => ({
    className: slots.helpDeskSection({ class: classNames?.helpDeskSection })
  })

  const getHelpDeskItemProps: PropGetter = () => ({
    className: slots.helpDeskItem({ class: classNames?.helpDeskItem })
  })

  const getHelpDeskTitleProps: PropGetter = () => ({
    className: slots.helpDeskTitle({ class: classNames?.helpDeskTitle })
  })

  const getHelpDeskDescriptionProps: PropGetter = () => ({
    className: slots.helpDeskDescription({
      class: classNames?.helpDeskDescription
    })
  })

  const getHelpDeskSubdescriptionProps: PropGetter = () => ({
    className: slots.helpDeskSubdescription({
      class: classNames?.helpDeskSubdescription
    })
  })

  const getHelpDeskListProps: PropGetter = () => ({
    className: slots.helpDeskList({ class: classNames?.helpDeskList })
  })

  // FAQ Section
  const getFaqSectionProps: PropGetter = () => ({
    className: slots.faqSection({ class: classNames?.faqSection })
  })

  const getFaqContainerProps: PropGetter = () => ({
    className: slots.faqContainer({ class: classNames?.faqContainer })
  })

  const getFaqTitleProps: PropGetter = () => ({
    className: slots.faqTitle({ class: classNames?.faqTitle })
  })

  const getFaqTitleMobileProps: PropGetter = () => ({
    className: slots.faqTitleMobile({ class: classNames?.faqTitleMobile })
  })

  const getFaqTitleDesktopProps: PropGetter = () => ({
    className: slots.faqTitleDesktop({ class: classNames?.faqTitleDesktop })
  })

  const getContactButtonProps: PropGetter = () => ({
    className: slots.contactButton({ class: classNames?.contactButton })
  })

  const getAccordionBaseProps: PropGetter = () => ({
    className: slots.accordionBase({ class: classNames?.accordionBase })
  })

  const getAccordionTitleProps: PropGetter = () => ({
    className: slots.accordionTitle({ class: classNames?.accordionTitle })
  })

  const getAccordionTriggerProps: PropGetter = () => ({
    className: slots.accordionTrigger({ class: classNames?.accordionTrigger })
  })

  const getAccordionContentProps: PropGetter = () => ({
    className: slots.accordionContent({ class: classNames?.accordionContent })
  })

  const getAccordionIndicatorProps: PropGetter = () => ({
    className: slots.accordionIndicator({
      class: classNames?.accordionIndicator
    })
  })

  const getAccordionIconProps: PropGetter = () => ({
    className: slots.accordionIcon({ class: classNames?.accordionIcon })
  })

  // Reviews Section
  const getReviewsSectionProps: PropGetter = () => ({
    className: slots.reviewsSection({ class: classNames?.reviewsSection })
  })

  const getReviewsTitleProps: PropGetter = () => ({
    className: slots.reviewsTitle({ class: classNames?.reviewsTitle })
  })

  const getReviewsHeaderProps: PropGetter = () => ({
    className: slots.reviewsHeader({ class: classNames?.reviewsHeader })
  })

  const getReviewsHeaderTitleProps: PropGetter = () => ({
    className: slots.reviewsHeaderTitle({
      class: classNames?.reviewsHeaderTitle
    })
  })

  const getReviewsMainTitleProps: PropGetter = () => ({
    className: slots.reviewsMainTitle({ class: classNames?.reviewsMainTitle })
  })

  const getReviewsRatingProps: PropGetter = () => ({
    className: slots.reviewsRating({ class: classNames?.reviewsRating })
  })

  const getReviewsStarProps: PropGetter = () => ({
    className: slots.reviewsStar({ class: classNames?.reviewsStar })
  })

  const getReviewsRatingNumberProps: PropGetter = () => ({
    className: slots.reviewsRatingNumber({
      class: classNames?.reviewsRatingNumber
    })
  })

  const getReviewsCountProps: PropGetter = () => ({
    className: slots.reviewsCount({ class: classNames?.reviewsCount })
  })

  const getReviewsControlsProps: PropGetter = () => ({
    className: slots.reviewsControls({ class: classNames?.reviewsControls })
  })

  const getSearchInputProps: PropGetter = () => ({
    className: slots.searchInput({ class: classNames?.searchInput })
  })

  const getSearchIconProps: PropGetter = () => ({
    className: slots.searchIcon({ class: classNames?.searchIcon })
  })

  const getSelectProps: PropGetter = () => ({
    className: slots.select({ class: classNames?.select })
  })

  const getReviewsGridProps: PropGetter = () => ({
    className: slots.reviewsGrid({ class: classNames?.reviewsGrid })
  })

  // Review Component
  const getReviewProps: PropGetter = () => ({
    className: slots.review({ class: classNames?.review })
  })

  const getReviewHeaderProps: PropGetter = () => ({
    className: slots.reviewHeader({ class: classNames?.reviewHeader })
  })

  const getReviewUserProps: PropGetter = () => ({
    className: slots.reviewUser({ class: classNames?.reviewUser })
  })

  const getReviewRatingProps: PropGetter = () => ({
    className: slots.reviewRating({ class: classNames?.reviewRating })
  })

  const getReviewStarProps: PropGetter = (isSelected: boolean) => ({
    className: slots.reviewStar({
      class: cn(
        isSelected ? slots.reviewStarSelected() : slots.reviewStarDefault(),
        classNames?.reviewStar
      )
    })
  })

  const getReviewContentProps: PropGetter = () => ({
    className: slots.reviewContent({ class: classNames?.reviewContent })
  })

  const getReviewTitleProps: PropGetter = () => ({
    className: slots.reviewTitle({ class: classNames?.reviewTitle })
  })

  const getReviewTextProps: PropGetter = () => ({
    className: slots.reviewText({ class: classNames?.reviewText })
  })

  // Card Review
  const getCardReviewProps: PropGetter = () => ({
    className: slots.cardReview({ class: classNames?.cardReview })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getPopularTopicsTitleProps,
    getFeaturesGridProps,
    getFeatureCardProps,
    getFeatureCardHeaderProps,
    getFeatureCardIconProps,
    getFeatureCardTitleProps,
    getFeatureCardBodyProps,
    getFeatureCardDescriptionProps,
    getFeatureCardDescriptionTextProps,
    getHelpDeskSectionProps,
    getHelpDeskItemProps,
    getHelpDeskTitleProps,
    getHelpDeskDescriptionProps,
    getHelpDeskSubdescriptionProps,
    getHelpDeskListProps,
    getFaqSectionProps,
    getFaqContainerProps,
    getFaqTitleProps,
    getFaqTitleMobileProps,
    getFaqTitleDesktopProps,
    getContactButtonProps,
    getAccordionBaseProps,
    getAccordionTitleProps,
    getAccordionTriggerProps,
    getAccordionContentProps,
    getAccordionIndicatorProps,
    getAccordionIconProps,
    getReviewsSectionProps,
    getReviewsTitleProps,
    getReviewsHeaderProps,
    getReviewsHeaderTitleProps,
    getReviewsMainTitleProps,
    getReviewsRatingProps,
    getReviewsStarProps,
    getReviewsRatingNumberProps,
    getReviewsCountProps,
    getReviewsControlsProps,
    getSearchInputProps,
    getSearchIconProps,
    getSelectProps,
    getReviewsGridProps,
    getReviewProps,
    getReviewHeaderProps,
    getReviewUserProps,
    getReviewRatingProps,
    getReviewStarProps,
    getReviewContentProps,
    getReviewTitleProps,
    getReviewTextProps,
    getCardReviewProps,
    helpCenterData
  }
}

export { useProps }
export type {
  Props,
  HelpInfo,
  ReviewType,
  Faqs,
  FeatureCardProps,
  CardReviewProps,
  ReviewProps,
  HelpCenterData
}
