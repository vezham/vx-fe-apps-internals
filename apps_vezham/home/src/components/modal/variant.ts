import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    modal: '',
    header: 'flex flex-col gap-1',
    headerInner: 'flex items-center gap-4',
    icon: 'h-5 w-5',
    title: 'text-foreground text-xl font-semibold',
    body: 'pb-6',
    columns: 'flex flex-col gap-6 md:flex-row',
    leftColumn: 'flex flex-col md:w-1/3',
    rightColumn: 'flex flex-col md:w-2/3',
    imageWrapper:
      'mb-4 flex h-30 items-center justify-center overflow-hidden rounded-xl',
    mainImage: 'h-full w-full object-cover',
    description: 'text-foreground-500 text-sm leading-relaxed',
    builtBySection: 'my-4 flex items-center gap-4',
    logo: 'h-5 w-auto',
    freeIcon: 'text-success',
    section: 'mb-4',
    sectionTitle: 'text-foreground-600 mb-2 text-sm font-semibold',
    sectionContent: 'flex flex-col gap-2',
    featureItem: 'text-foreground flex items-center gap-2 text-sm',
    subText: 'text-default-500 text-sm',
    categories: 'flex flex-wrap gap-2',
    categoryItem: 'bg-default-100 rounded-md px-3 py-1 text-sm',
    terms: 'text-default-500 flex flex-col gap-1 text-sm',
    link: 'hover:text-primary underline',
    viewDetailsButton: 'mb-4 font-medium',
    sectionHeader: 'mb-4 text-xl font-bold',
    featuresGrid: 'mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2',
    featureItemWrapper: 'flex gap-4',
    featureIconWrapper:
      'bg-primary/10 flex h-10 w-20 items-center justify-center rounded-md',
    featureIcon: 'text-primary',
    featureTitle: 'text-foreground text-md mb-1 font-semibold',
    featureDescription: 'text-foreground-500 text-xs',
    metricWrapper: 'relative h-16 w-16 flex-shrink-0 p-2',
    metricSvg: 'h-full w-full',
    metricBg: 'stroke-default-200',
    metricFg: 'stroke-primary',
    metricText: 'fill-foreground text-xs font-semibold',
    imagesGrid: 'space-y-4'
  },
  defaultVariants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
