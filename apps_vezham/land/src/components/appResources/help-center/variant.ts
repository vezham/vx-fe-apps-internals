import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: '',

    popularTopicsTitle: ': px-5 text-center text-2xl font-bold lg:text-4xl',
    featuresGrid:
      'mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:max-w-6xl',

    featureCard: 'bg-content2',
    featureCardHeader: 'flex flex-col gap-2 px-4 pt-6 pb-4',
    featureCardIcon: '',
    featureCardTitle: 'text-medium text-content2-foreground',
    featureCardBody: 'flex flex-col gap-2',
    featureCardDescription:
      'rounded-medium bg-content3 text-content3-foreground flex min-h-[50px] px-3 py-2',
    featureCardDescriptionText: 'text-small',

    helpDeskSection:
      'mx-auto max-w-5xl space-y-8 px-5 py-8 text-justify xl:max-w-6xl',
    helpDeskItem:
      'dark:border-default-200 rounded-lg border border-gray-200 p-6',
    helpDeskTitle: 'text-xl font-semibold',
    helpDeskDescription: 'mt-2 text-gray-600 dark:text-gray-400',
    helpDeskSubdescription: 'mt-2 text-gray-500 dark:text-gray-400',
    helpDeskList:
      'mt-4 list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400',

    faqSection: 'mx-auto w-full px-4 py-10',
    faqContainer: 'mx-auto flex w-full max-w-6xl flex-col items-center gap-8',
    faqTitle:
      'from-foreground to-foreground-600 w-full bg-linear-to-br bg-clip-text px-2 text-center text-3xl leading-7 font-bold tracking-tight md:text-4xl',
    faqTitleMobile: 'inline-block md:hidden',
    faqTitleDesktop: 'hidden md:inline-block',
    contactButton:
      'from-foreground to-foreground-600 text-background bg-linear-to-br font-medium',
    accordionBase: 'px-0 md:px-2 md:px-6',
    accordionTitle: 'font-medium',
    accordionTrigger: 'flex-row-reverse py-6',
    accordionContent: 'text-default-500 pt-0 pb-6 text-base',
    accordionIndicator: 'rotate-0 data-[open=true]:-rotate-45',
    accordionIcon: 'text-default',

    reviewsSection: 'mx-auto w-full max-w-6xl px-2 md:px-6',
    reviewsTitle:
      'pb-8 text-center text-xl font-semibold md:pb-16 md:text-3xl lg:text-4xl',
    reviewsHeader:
      'mb-8 flex flex-wrap items-center justify-between gap-4 px-5 lg:flex-nowrap',
    reviewsHeaderTitle: 'flex w-full items-center gap-2',
    reviewsMainTitle: 'text-medium md:text-large font-semibold',
    reviewsRating: 'flex items-center gap-1',
    reviewsStar: 'text-warning-500',
    reviewsRatingNumber: 'text-medium md:text-large font-semibold',
    reviewsCount: 'text-small text-default-500 lg:text-medium text-right',
    reviewsControls:
      'flex w-full items-center justify-center gap-4 lg:justify-end',
    searchInput: 'lg:w-72',
    searchIcon: '',
    select: 'lg:w-40',
    reviewsGrid: 'grid grid-cols-1 gap-4 px-5 sm:grid-cols-2',

    review: '',
    reviewHeader: 'flex items-center justify-between',
    reviewUser: 'flex items-center gap-2',
    reviewRating: 'flex items-center gap-1',
    reviewStar: 'text-lg sm:text-xl',
    reviewStarSelected: 'text-warning',
    reviewStarDefault: 'text-default-200',
    reviewContent: 'mt-4 w-full',
    reviewTitle: 'text-default-900 font-medium',
    reviewText: 'text-default-500 mt-2',

    cardReview: 'rounded-medium bg-content1 shadow-small p-5'
  },
  variants: {
    size: {
      sm: {
        popularTopicsTitle: 'px-4 py-4 text-xl lg:text-3xl',
        featuresGrid: 'gap-4 px-4',
        helpDeskItem: 'p-4',
        helpDeskTitle: 'text-lg',
        faqSection: 'px-3 py-8',
        faqTitle: 'text-2xl md:text-3xl',
        reviewsSection: 'px-2',
        reviewsTitle: 'text-lg md:text-2xl',
        reviewsGrid: 'gap-3 px-4',
        cardReview: 'p-4'
      },
      md: {
        popularTopicsTitle: 'px-5 py-6 text-3xl lg:text-4xl',
        featuresGrid: 'gap-6 px-5',
        helpDeskItem: 'p-6',
        helpDeskTitle: 'text-xl',
        faqSection: 'px-4 py-10',
        faqTitle: 'text-3xl md:text-4xl',
        reviewsSection: 'px-2 md:px-6',
        reviewsTitle: 'text-xl md:text-3xl lg:text-4xl',
        reviewsGrid: 'gap-4 px-5',
        cardReview: 'p-5'
      },
      lg: {
        popularTopicsTitle: 'px-6 py-8 text-3xl lg:text-5xl',
        featuresGrid: 'gap-8 px-6',
        helpDeskItem: 'p-8',
        helpDeskTitle: 'text-2xl',
        faqSection: 'px-6 py-12',
        faqTitle: 'text-4xl md:text-5xl',
        reviewsSection: 'px-4 md:px-8',
        reviewsTitle: 'text-2xl md:text-4xl lg:text-5xl',
        reviewsGrid: 'gap-6 px-6',
        cardReview: 'p-6'
      }
    },
    spacing: {
      tight: {
        featuresGrid: 'gap-4',
        helpDeskSection: 'space-y-6 py-6',
        faqContainer: 'gap-6',
        reviewsGrid: 'gap-3'
      },
      normal: {
        featuresGrid: 'gap-6',
        helpDeskSection: 'space-y-8 py-8',
        faqContainer: 'gap-8',
        reviewsGrid: 'gap-4'
      },
      loose: {
        featuresGrid: 'gap-8',
        helpDeskSection: 'space-y-10 py-10',
        faqContainer: 'gap-10',
        reviewsGrid: 'gap-6'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    spacing: 'normal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
