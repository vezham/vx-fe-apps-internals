import { VariantProps, tv } from '@vezham/react-utils'

const featuresTva = tv({
  slots: {
    base: 'flex flex-col items-center gap-4 py-8 text-center',

    header: '',
    featureTag: 'text-primary-300 pt-10 pb-6 text-sm font-medium',
    title: 'mb-2 text-lg font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl',
    subtitle: 'text-default-400 mb-6',

    marqueeContainer: 'w-full max-w-6xl py-4',
    scrollShadow: 'w-full overflow-x-auto',
    marquee: '',

    buttonContainer: 'mt-6',
    button: '',
    buttonIcon: '',

    featureCard:
      'relative mx-4 h-full w-64 overflow-hidden border-none transition-all',
    featureImage: 'opacity-8',
    featureCardHeader: 'absolute top-2 left-2 z-20 flex-col items-start',
    featureCategory: 'text-xs text-white/70 uppercase',
    featureName: 'text-lg font-semibold text-white',
    featureDescription: 'text-sm text-white/60',
    featureCardFooter: [
      'rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)]',
      'justify-between overflow-hidden border-1 border-white/30 py-2',
      'transition-all duration-300 before:rounded-xl before:bg-white/20',
      'translate-y-4 opacity-0'
    ],
    featureCardFooterHovered: 'translate-y-0 opacity-100',
    featureButton: 'w-full bg-black/30 text-white'
  },
  variants: {
    size: {
      sm: {
        featureTag: 'text-xs',
        title: 'text-base sm:text-2xl md:text-3xl',
        subtitle: 'text-lg',
        featureName: 'text-base',
        featureDescription: 'text-xs',
        featureCard: 'w-56'
      },
      md: {
        featureTag: 'text-sm',
        title: 'text-xl sm:text-3xl md:text-4xl lg:text-5xl',
        subtitle: 'text-base',
        featureName: 'text-lg',
        featureDescription: 'text-sm',
        featureCard: 'w-64'
      },
      lg: {
        featureTag: 'text-base',
        title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
        subtitle: 'text-base',
        featureName: 'text-xl',
        featureDescription: 'text-base',
        featureCard: 'w-72'
      }
    },
    variant: {
      default: {
        button: 'bg-default-100 text-default-900',
        featureCard: 'bg-default-50'
      },
      primary: {
        button: 'bg-primary-100 text-primary-900',
        featureCard: 'bg-primary-50'
      },
      modern: {
        button: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
        featureCard:
          'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type FeaturesTvProps = VariantProps<typeof featuresTva>
type FeaturesTvSlots = keyof ReturnType<typeof featuresTva>

export { featuresTva }
export type { FeaturesTvProps, FeaturesTvSlots }
