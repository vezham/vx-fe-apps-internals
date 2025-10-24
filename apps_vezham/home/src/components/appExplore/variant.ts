export const styles = {
  page: 'bg-background text-foreground min-h-screen',
  notFoundContainer: 'flex min-h-screen items-center justify-center',
  notFoundText: 'text-center',
  backButton: 'mt-4',

  headerSection: 'border-divider bg-content1 border-b py-4',
  headerInner: 'container mx-auto flex items-center justify-between px-4',
  headerTitle: 'ml-2 text-xl font-bold',

  mainContainer: 'container mx-auto px-4 py-8',

  overviewSection: 'mb-12',
  overviewTitle: 'mb-4 text-3xl font-bold',
  overviewDescription: 'text-default-600 text-lg',

  imageSection: 'mb-16 grid grid-cols-1 gap-8 md:grid-cols-2',
  featureList: 'mt-6 space-y-3',
  featureItem: 'flex items-start',
  featureIconWrapper: 'bg-primary/10 mr-3 rounded-full p-1',

  featuresSection: 'mb-16',
  featuresTitle: 'mb-6 text-2xl font-bold',
  featuresGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
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

  plan: 'rounded-lg border p-4',
  pricingCard: 'rounded-lg border p-4',
  pricingPopular: 'border-primary bg-primary/5',
  pricingLabel: 'text-primary mb-2 text-xs font-medium',
  pricingName: 'mb-2 text-lg font-bold',
  pricingValue: 'mb-3 text-2xl font-bold',
  pricingPeriod: 'text-default-500',
  pricingFeature: 'flex items-center',
  pricingFeatureIcon: 'text-success mr-2',

  resultsWrapper: 'space-y-6',
  resultsItem: 'flex gap-4',
  resultCircle: 'relative h-16 w-16 flex-shrink-0',
  resultText: 'fill-foreground text-xs font-bold',

  supportWrapper: 'space-y-6',
  supportItem: 'flex gap-4',
  supportIconWrapper:
    'bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md',
  supportTitle: 'text-foreground mb-1 font-semibold',
  supportDescription: 'text-default-500 text-sm',
  supportButton: 'mt-6'
}

export const contentAreaVariants = {
  base: 'bg-background text-foreground min-h-screen w-full pb-20',
  section: 'p-8',
  header: 'mb-4 flex items-center justify-between',
  title: 'mb-1 text-xl font-bold sm:mb-2',
  grid: 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3',
  subGrid:
    'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 md:pb-0 lg:grid-cols-3',
  categoryWrapper: 'min-h-[auto] scroll-mt-20 pb-5',
  backButton:
    'mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-black/[0.1] lg:hidden',
  seeAllButton:
    'text-foreground-500 hover:text-foreground flex items-center text-sm font-medium transition-all duration-200',
  continuousScroll: 'pb-20',
  scrollSection: 'scroll-mt-20 p-8'
}
