import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'bg-background text-foreground min-h-screen w-full',

    notFoundContainer: 'flex min-h-screen items-center justify-center',
    notFoundText: 'text-center',
    backButton: 'mt-4',

    headerInner:
      'border-divider bg-content1 mx-auto mt-24 flex items-center justify-between border-b px-2 py-4 md:px-6',
    headerTitle: 'text-md ml-2 font-bold md:text-xl',
    mainContainer: 'container mx-auto px-4 py-8',
    section: 'mb-12 p-6',
    overviewTitle: 'mb-4 text-3xl font-bold',
    overviewDescription: 'text-default-600 text-lg',
    imageSection: 'mb-16 grid grid-cols-1 gap-8 md:grid-cols-2',
    featureList: 'mt-6 space-y-3',
    featureItem: 'flex items-start',
    featureIconWrapper: 'bg-primary/10 mr-3 rounded-full p-1',
    featuresGrid: 'mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
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
    cardsGrid: 'mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3',
    cardBase: 'p-6',
    resultsWrapper: 'mb-4 space-y-6 text-xl font-bold',
    resultsItem: 'mb-6 flex gap-4',
    resultCircle: 'relative h-16 w-16 flex-shrink-0',
    resultText: 'fill-foreground text-xs font-bold',
    supportWrapper: 'mb-4 space-y-6 text-xl font-bold',
    supportItem: 'mb-6 flex gap-4',
    supportIconWrapper:
      'bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md',
    supportTitle: 'text-foreground mb-1 font-semibold',
    supportDescription: 'text-default-500 text-sm',
    supportButton: 'mt-6',
    contentAreaBase: 'bg-background text-foreground min-h-screen w-full',

    sectionBase: 'p-8',
    headerBase: 'mb-4 flex items-center justify-between',
    title: 'flex items-center gap-2 text-xl font-bold',
    grid: 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
    subGrid:
      'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 md:pb-0 lg:grid-cols-3',
    categoryWrapper: 'min-h-[auto] scroll-mt-20 pb-5',
    sidebarButton:
      'text-foreground-500 hover:text-foreground transition-all duration-200 lg:hidden',
    sidebarWrapper: 'mb-4 flex items-center gap-3',
    seeAllButton:
      'text-foreground-500 hover:text-foreground mt-1.25 text-sm font-medium transition-all duration-200',
    seeAllSingleButton:
      'text-foreground-500 hover:text-foreground mt-1.25 text-sm font-medium transition-all duration-200 lg:hidden',
    scrollSection: 'scroll-mt-20 p-6',
    headerGap: 'mb-4',
    headerSection: ' ',
    headerMenuSection: 'mb-4 flex items-center gap-3'
  },
  variants: {},
  defaultVariants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
