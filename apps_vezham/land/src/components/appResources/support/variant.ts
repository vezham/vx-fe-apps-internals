import { VariantProps, tv } from '@vezham/react-utils'

const pricingTva = tv({
  slots: {
    // Base
    base: 'mx-auto',

    // Hero Sections
    heroContainer:
      'mx-auto max-w-[800px] px-5 py-5 text-justify md:text-center',
    heroGrid: 'grid gap-4',
    heroTitle: 'text-center text-3xl font-bold md:text-4xl',
    heroDescription: 'text-default-500',

    // Services Grid
    servicesGrid:
      'mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-5 md:grid-cols-2 xl:grid-cols-4',
    serviceCard: 'cursor-pointer',
    serviceCardHeader: 'flex gap-3',
    serviceHeaderContent: 'flex flex-col',
    serviceHeaderTitle: 'text-md',
    serviceHeaderSubtitle: 'text-small text-default-500',
    serviceCardBody: 'text-justify',
    serviceBodyTitle: 'mb-4 text-base font-semibold',
    serviceBodyDescription: 'text-default-500 text-sm',
    serviceCardFooter: '',

    // Plans Section
    plansContainer:
      'mx-auto max-w-[650px] px-5 py-5 text-justify md:pt-16 md:text-center',
    plansGrid: 'grid gap-4',

    // Tiers Section
    tiersContainer:
      'relative mx-auto flex max-w-4xl flex-col items-center px-5',
    tiersSubContainer:
      'px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36',
    tiersBackground: [
      'mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#FF71D7] to-[#C9A9E9] opacity-30',
      '[clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]'
    ],
    tiersGrid: 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
    tierCard: 'bg-background/60 dark:bg-default-100/50 p-3',
    tierCardPopular: 'border-small! border-secondary/50',
    tierChip: 'absolute top-4 right-4',
    tierCardHeader: 'flex flex-col items-start gap-2 pb-6',
    tierHeaderTitle: 'text-large font-medium',
    tierHeaderDescription: 'text-medium text-default-500',
    tierCardBody: 'gap-8',
    tierPriceContainer: 'flex items-baseline gap-1 pt-2',
    tierPrice:
      'from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-4xl leading-7 font-semibold tracking-tight text-transparent',
    tierPriceSuffix: 'text-small text-default-400 font-medium',
    tierFeatureList: 'flex flex-col gap-2',
    tierFeatureItem: 'flex items-center gap-2',
    tierFeatureIcon: 'text-secondary',
    tierFeatureText: 'text-default-500',
    tierCardFooter: '',

    // Tabs
    tabsContainer: 'flex w-full items-center justify-center pb-6',
    tabs: 'flex w-full items-center justify-center',
    tabList: 'no-scrollbar flex-nowrap overflow-x-auto',
    tab: 'whitespace-nowrap data-[hover-unselected=true]:opacity-90',
    tabContent: 'flex items-center gap-2',

    // Comparison Table
    comparisonTable: 'isolate mx-auto hidden max-w-6xl md:block',
    tableContainer: 'relative',
    table: 'w-full table-fixed border-separate border-spacing-x-4 text-left',
    tableCol: 'w-1/4',
    featureGroupHeader: 'text-large text-foreground pt-12 pb-4 font-semibold',
    featureGroupHeaderFirst: 'pt-16',
    featureGroupDivider: 'bg-default-600/10 absolute -inset-x-4 mt-2',
    featureTitle: 'text-medium text-default-700 py-4 font-normal',
    featureTitleWithHelp: 'flex items-center gap-1',
    featureHelpIcon: 'text-default-600',
    featureCell: 'px-6 py-4 xl:px-8',
    featureText: 'text-medium text-default-500 text-center',
    featureCheckIcon: 'text-secondary mx-auto',
    featureCloseIcon: 'text-default-400 mx-auto',

    // FAQ
    faqContainer: 'mx-auto max-w-6xl px-5 py-16',
    faqGroup: 'space-y-4',
    faqGroupTitle: 'pb-6 font-bold',
    faqShadow: 'border-default-300 border shadow-none dark:border-none',
    faqItemDescription: 'text-default-600 text-sm',

    // Discount
    discountContainer:
      'flex flex-col items-center justify-center gap-2 sm:flex-row',
    discountText: 'text-default-400',
    discountLink: 'text-secondary',

    // Team Section
    teamSection: 'mx-auto flex max-w-6xl flex-col items-center px-5',
    teamHeader: 'flex max-w-xl flex-col text-center',
    teamSubtitle: 'text-primary font-medium',
    teamTitle: 'text-4xl font-medium tracking-tight',
    teamGrid:
      'mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4',

    // Team Member Card
    teamMemberCard:
      'rounded-large bg-content1 shadow-small flex flex-col items-center px-4 py-6 text-center',
    teamMemberAvatar: 'h-20 w-20',
    teamMemberName: 'mt-2 font-medium',
    teamMemberRole: 'text-small text-default-500',
    teamMemberBio: 'text-default-600 mt-2 mb-4',
    teamSocialLinks: 'flex gap-4',
    teamSocialIcon: 'text-default-400'
  },
  variants: {
    size: {
      sm: {
        heroTitle: 'text-2xl md:text-3xl',
        featureGroupHeader: 'text-medium',
        faqGroupTitle: 'text-base md:text-2xl',
        teamTitle: 'text-3xl'
      },
      md: {
        heroTitle: 'text-3xl md:text-4xl',
        featureGroupHeader: 'text-large',
        faqGroupTitle: 'text-xl md:text-3xl',
        teamTitle: 'text-4xl'
      },
      lg: {
        heroTitle: 'text-4xl md:text-5xl',
        featureGroupHeader: 'text-xl',
        faqGroupTitle: 'text-xl md:text-4xl',
        teamTitle: 'text-5xl'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type PricingTvProps = VariantProps<typeof pricingTva>
type PricingTvSlots = keyof ReturnType<typeof pricingTva>

export { pricingTva }
export type { PricingTvProps, PricingTvSlots }
