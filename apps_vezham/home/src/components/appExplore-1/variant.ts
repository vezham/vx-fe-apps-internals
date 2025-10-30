import { VariantProps, tv } from '@vezham/react-utils'

export const tva = tv({
  slots: {
    wrapper: 'bg-background text-foreground min-h-screen',
    container: 'pt-20',
    main: 'container mx-auto px-4 py-8',

    // Header
    headerBase: 'border-divider bg-content1 border-b py-4',
    headerInner: 'container mx-auto flex items-center justify-between px-2',
    headerTitleWrap: 'flex items-center px-2',
    headerTitle: 'text-md ml-2 font-bold md:text-xl',

    // Not Found
    notFoundWrapper: 'flex min-h-screen items-center justify-center',
    notFoundInner: 'text-center',
    notFoundTitle: 'text-2xl font-bold',
    notFoundDesc: 'text-default-500 mt-2',
    notFoundButton: 'mt-4',

    // Hero
    heroSection: 'mb-12',
    heroTitle: 'mb-4 text-3xl font-bold',
    heroDesc: 'text-default-600 text-lg',

    // Overview
    overviewSection: 'mb-16 flex flex-col gap-8 md:flex-row',
    overviewImageWrap: 'md:w-1/3',
    overviewImage: 'h-auto w-full rounded-lg shadow-md',
    overviewContent: 'md:w-2/3',
    overviewHeading: 'my-6 text-2xl font-bold',
    overviewAccordion: 'mt-6',
    overviewFeatureList: 'my-6 space-y-3',
    overviewFeatureItem: 'flex items-start',
    overviewFeatureIcon: 'bg-primary/10 mr-3 rounded-full p-1',

    // Features Grid
    featuresTitle: 'mb-6 text-2xl font-bold',
    featuresGrid: 'mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    featureCard:
      'group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
    featureCardLeft: 'lg:border-l dark:border-neutral-800',
    featureCardBottom: 'lg:border-b dark:border-neutral-800',
    featureIcon:
      'relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400',
    featureTitleWrapper: 'relative z-10 mb-2 px-10 text-lg font-bold',
    featureTitleHighlight:
      'absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-[#a91d44] dark:bg-neutral-700 dark:group-hover/feature:bg-[#df4861]',
    featureTitle:
      'inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100',
    featureDescription:
      'relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300',

    // Cards / Pricing / Results / Support
    cardsGrid: 'mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3',
    cardBase: 'p-6',
    plan: 'px-4 text-xl font-bold',
    pricingCard: 'rounded-lg p-4',
    pricingPopular: 'border-primary bg-primary/5',
    pricingLabel: 'text-primary mb-2 text-xs font-medium',
    pricingName: 'mb-2 text-lg font-bold',
    pricingValue: 'mb-3 text-2xl font-bold',
    pricingPeriod: 'text-default-500',
    pricingFeature: 'flex items-center',
    pricingFeatureIcon: 'text-success mr-2',

    resultsTitle: 'mb-4 text-xl font-bold',
    resultsWrapper: 'space-y-6',
    resultsItem: 'flex gap-4',
    resultCircle: 'relative h-16 w-16 flex-shrink-0',
    resultText: 'fill-foreground text-xs font-bold',

    supportHead: 'mb-4 text-xl font-bold',
    supportWrapper: 'space-y-6',
    supportItem: 'flex gap-4',
    supportIconWrapper:
      'bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md',
    supportTitle: 'text-foreground mb-1 font-semibold',
    supportDescription: 'text-default-500 text-sm',
    supportButton: 'mt-6',

    // ContentArea
    contentWrapper:
      'bg-background text-foreground min-h-screen w-full p-6 lg:p-8',
    continuousContainer: 'space-y-0',
    section: 'scroll-mt-20 py-2',
    sectionHeader: 'mb-5 flex items-center justify-between',
    sectionTitle: 'text-[28px] font-medium md:text-[40px] lg:text-[48px]',
    controls: 'flex gap-3',
    controlBtn:
      'dark:bg-content1 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300',
    controlBtnDisabled: 'cursor-not-allowed opacity-40',

    allCollectionsHeader: 'flex items-center',
    backButton:
      '-ml-2 flex h-10 w-10 items-center rounded-md transition-colors lg:hidden'
  },
  variants: {},
  defaultVariants: {}
})

export type tvProps = VariantProps<typeof tva>
export type tvSlots = keyof ReturnType<typeof tva>
