import { VariantProps, tv } from '@vezham/react-utils'

const solutionsTva = tv({
  slots: {
    // Base container
    base: 'flex min-h-screen flex-col items-center justify-center px-4 py-12 dark:bg-black',

    // Hero Section
    heroSection: 'mb-12 text-center',
    heroTag: 'text-primary-300 pb-6 text-sm font-medium',
    heroTitle: 'mb-4 text-4xl font-bold md:text-5xl',
    heroDescription: 'text-default-200 text-lg md:text-xl',

    // Cards Grid
    cardsGrid: 'grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2',

    // Card
    card: 'border-default-200 flex items-center justify-center border p-8 text-center shadow-none',
    cardEnterprise: '',
    cardStartup: '',
    cardIcon: 'h-16 w-16',
    cardTitle: 'mb-2 text-2xl font-semibold',
    cardDescription: 'mb-4 text-gray-600',
    cardButton: '',

    // Modal
    modal: '',
    modalContent: '',
    modalHeader: 'flex flex-col gap-1',
    modalBody: 'space-y-4 text-[15px] leading-relaxed text-gray-700',
    modalSection: 'text-default-800',
    modalSectionTitle: 'text-default-500 mt-2 text-lg font-semibold',
    modalList: 'text-default-300 ml-5 list-disc space-y-2',
    modalListItem: '',
    modalListItemText: '',
    modalFooter: '',
    modalCloseButton: ''
  },
  variants: {
    size: {
      sm: {
        base: 'py-8',
        heroTitle: 'text-3xl md:text-4xl',
        heroDescription: 'text-base md:text-lg',
        card: 'p-6',
        cardTitle: 'text-xl',
        cardDescription: 'text-sm',
        cardIcon: 'h-12 w-12'
      },
      md: {
        base: 'py-12',
        heroTitle: 'text-4xl md:text-5xl',
        heroDescription: 'text-lg md:text-xl',
        card: 'p-8',
        cardTitle: 'text-2xl',
        cardDescription: 'text-base',
        cardIcon: 'h-16 w-16'
      },
      lg: {
        base: 'py-16',
        heroTitle: 'text-5xl md:text-6xl',
        heroDescription: 'text-xl md:text-2xl',
        card: 'p-10',
        cardTitle: 'text-3xl',
        cardDescription: 'text-lg',
        cardIcon: 'h-20 w-20'
      }
    },
    variant: {
      default: {
        base: 'bg-background dark:bg-black',
        card: 'border-default-200 bg-content1',
        heroDescription: 'text-default-500'
      },
      modern: {
        base: 'from-default-50 to-primary-50 dark:from-default-950 dark:to-primary-950 bg-gradient-to-br',
        card: 'border-primary/20 dark:bg-default-900/50 bg-white/50 backdrop-blur-sm',
        heroDescription: 'text-primary-600 dark:text-primary-400'
      },
      minimal: {
        base: 'bg-transparent',
        card: 'border-transparent bg-transparent shadow-none',
        heroDescription: 'text-foreground/80'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type SolutionsTvProps = VariantProps<typeof solutionsTva>
type SolutionsTvSlots = keyof ReturnType<typeof solutionsTva>

export { solutionsTva }
export type { SolutionsTvProps, SolutionsTvSlots }
