// components/appExplore-1/appDetailPage/variant.ts

export const styles = {
  wrapper: 'bg-background text-foreground min-h-screen',
  container: 'pt-20',
  header: {
    base: 'border-divider bg-content1 border-b py-4',
    inner: 'container mx-auto flex items-center justify-between px-4',
    titleWrap: 'flex items-center',
    title: 'ml-2 text-xl font-bold'
  },
  main: 'container mx-auto px-4 py-8',

  // Not Found
  notFound: {
    wrapper: 'flex min-h-screen items-center justify-center',
    inner: 'text-center',
    title: 'text-2xl font-bold',
    desc: 'text-default-500 mt-2',
    button: 'mt-4'
  },

  // Hero
  hero: {
    section: 'mb-12',
    title: 'mb-4 text-3xl font-bold',
    desc: 'text-default-600 text-lg'
  },

  // Overview
  overview: {
    section: 'mb-16 flex flex-col gap-8 md:flex-row',
    imageWrap: 'md:w-1/3',
    image: 'h-auto w-full rounded-lg shadow-md',
    content: 'md:w-2/3',
    heading: 'my-6 text-2xl font-bold',
    accordion: 'mt-6',
    featureList: 'my-6 space-y-3',
    featureItem: 'flex items-start',
    featureIcon: 'bg-primary/10 mr-3 rounded-full p-1'
  },

  // Features Grid
  features: {
    title: 'mb-6 text-2xl font-bold',
    grid: 'mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    card: 'group/feature relative flex flex-col py-10 lg:border-r dark:border-neutral-800',
    gradientTop:
      'pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#a91d44]/5 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-[#df4861]/15',
    gradientBottom:
      'pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-[#a91d44]/5 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-[#df4861]/15',
    icon: 'relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400',
    titleWrap: 'relative z-10 mb-2 px-10 text-lg font-bold',
    sideBar:
      'absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-[#a91d44] dark:bg-neutral-700 dark:group-hover/feature:bg-[#df4861]',
    head: 'inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100',
    desc: 'relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300'
  },

  // Sections
  cardsGrid: 'mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3',
  cardBase: 'p-6',

  plan: 'px-4 text-xl font-bold',
  pricingCard: 'rounded-lg  p-4',
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
  supportButton: 'mt-6'
}

// components/contentArea/variant.ts

export const contentAreaStyles = {
  wrapper: 'bg-background text-foreground min-h-screen w-full',
  continuousContainer: 'space-y-12',
  section: 'scroll-mt-20 py-2',
  sectionHeader: 'mb-5 flex items-center justify-between',
  sectionTitle: 'text-[28px] md:text-[40px] lg:text-[48px] font-medium',
  controls: 'flex gap-3',
  controlBtn:
    'flex h-9 w-9 items-center justify-center rounded-full dark:bg-content1 bg-gray-200 transition-colors hover:bg-gray-300',
  controlBtnDisabled: 'cursor-not-allowed opacity-40',

  allCollectionsWrapper: 'p-4 lg:p-6',
  allCollectionsHeader: 'mb-4 flex items-center justify-between',
  backButton:
    'mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] transition-colors hover:bg-black/[0.1] lg:hidden'
}
