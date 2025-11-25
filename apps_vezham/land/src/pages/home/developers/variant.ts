import { VariantProps, tv } from '@vezham/react-utils'

const developersTva = tv({
  slots: {
    // Base container
    base: 'bg-default-50 w-full py-20',

    // Container
    container: 'mx-auto max-w-5xl px-6 text-center',

    // Title
    title: 'text-foreground text-3xl font-bold md:text-5xl',

    // GitHub Link
    githubLink:
      'text-foreground/70 hover:text-foreground mt-4 inline-flex items-center gap-3 text-sm',
    githubIcon: 'text-xl',
    githubText: '',

    // Features Grid
    featuresGrid: 'mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4',

    // Feature Item
    featureItem:
      'hover:bg-default-100 flex flex-col items-center rounded-lg p-3 text-center',
    featureIcon: 'text-foreground mb-2 text-2xl',
    featureTitle: 'text-foreground font-medium',
    featureSubtitle: 'text-foreground/60 text-sm'
  },
  variants: {
    size: {
      sm: {
        base: 'py-12',
        container: 'max-w-4xl',
        title: 'text-2xl md:text-3xl',
        githubLink: 'text-xs',
        featuresGrid: 'mt-8 gap-6',
        featureItem: 'p-2',
        featureIcon: 'text-xl',
        featureTitle: 'text-sm',
        featureSubtitle: 'text-xs'
      },
      md: {
        base: 'py-20',
        container: 'max-w-5xl',
        title: 'text-3xl md:text-5xl',
        githubLink: 'text-sm',
        featuresGrid: 'mt-12 gap-10',
        featureItem: 'p-3',
        featureIcon: 'text-2xl',
        featureTitle: 'text-base',
        featureSubtitle: 'text-sm'
      },
      lg: {
        base: 'py-24',
        container: 'max-w-6xl',
        title: 'text-4xl md:text-6xl',
        githubLink: 'text-base',
        featuresGrid: 'mt-16 gap-12',
        featureItem: 'p-4',
        featureIcon: 'text-3xl',
        featureTitle: 'text-lg',
        featureSubtitle: 'text-base'
      }
    },
    variant: {
      default: {
        base: 'bg-default-50',
        featureItem: 'hover:bg-default-100',
        title: 'text-foreground',
        featureTitle: 'text-foreground'
      },
      primary: {
        base: 'bg-primary-50',
        featureItem: 'hover:bg-primary-100',
        title: 'text-primary-900',
        featureTitle: 'text-primary-900',
        featureSubtitle: 'text-primary-700'
      },
      modern: {
        base: 'from-default-100 to-primary-100 bg-gradient-to-br',
        featureItem: 'backdrop-blur-sm hover:bg-white/50',
        title: 'text-foreground',
        featureTitle: 'text-foreground'
      },
      dark: {
        base: 'bg-default-900',
        featureItem: 'hover:bg-default-800',
        title: 'text-white',
        featureTitle: 'text-white',
        featureSubtitle: 'text-default-300',
        githubLink: 'text-default-300 hover:text-white'
      }
    },
    alignment: {
      left: {
        container: 'text-left',
        featureItem: 'items-start'
      },
      center: {
        container: 'text-center',
        featureItem: 'items-center'
      },
      right: {
        container: 'text-right',
        featureItem: 'items-end'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    alignment: 'center'
  }
})

type DevelopersTvProps = VariantProps<typeof developersTva>
type DevelopersTvSlots = keyof ReturnType<typeof developersTva>

export { developersTva }
export type { DevelopersTvProps, DevelopersTvSlots }
