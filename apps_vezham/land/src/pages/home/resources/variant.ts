import { VariantProps, tv } from '@vezham/react-utils'

const contactusTva = tv({
  slots: {
    // Base container
    base: 'mx-auto flex min-h-screen max-w-full flex-col gap-8 px-5 py-16 text-justify md:flex-row',

    // Left Column
    leftColumn: 'top-20 self-start md:sticky lg:w-1/3',
    leftColumnLink:
      'text-foreground mb-4 flex justify-center text-4xl font-bold md:justify-start',
    leftColumnTitle:
      'text-foreground mb-4 flex justify-center text-4xl font-bold md:justify-start',
    leftColumnDescription: 'text-gray-600',

    // Right Column
    rightColumn: 'flex gap-8',
    cardsContainer: 'grid w-full gap-8 sm:flex',
    cardColumn: 'align-center flex flex-1 flex-col justify-center gap-6',

    // Card
    card: [
      'flex h-[300px] flex-col justify-between border shadow-none',
      'transition hover:scale-105',
      'bg-cover bg-no-repeat'
    ],
    cardBody: 'p-5',
    cardTitle: 'text-xl font-semibold text-white',
    cardDescription: 'text-gray-500',
    cardFooter: '',
    cardButton: 'text-tiny w-full'
  },
  variants: {
    size: {
      sm: {
        base: 'gap-6 py-6',
        leftColumnLink: 'text-xl',
        cardTitle: 'text-base',
        cardDescription: 'text-xs',
        card: 'h-[250px]'
      },
      md: {
        base: 'py-8',
        leftColumnLink: 'text-2xl lg:text-4xl',
        cardTitle: 'text-lg',
        cardDescription: 'text-sm',
        card: 'h-[300px]'
      },
      lg: {
        base: 'gap-10 py-12',
        leftColumnLink: 'text-3xl',
        cardTitle: 'text-xl',
        cardDescription: 'text-base',
        card: 'h-[350px]'
      }
    },
    layout: {
      default: {
        base: 'flex-col md:flex-row',
        leftColumn: 'md:w-1/3 lg:w-2/3',
        rightColumn: 'md:w-2/3 lg:w-3/3'
      },
      centered: {
        base: 'flex-col items-center',
        leftColumn: 'w-full text-center md:text-start',
        rightColumn: 'w-full justify-center'
      },
      stacked: {
        base: 'flex-col',
        leftColumn: 'w-full',
        rightColumn: 'w-full'
      }
    },
    variant: {
      default: {
        card: 'border-default-100',
        leftColumnDescription: 'text-default-600'
      },
      modern: {
        card: 'border-primary/20 from-primary/5 to-secondary/5 bg-gradient-to-br',
        leftColumnDescription: 'text-primary-600'
      },
      minimal: {
        card: 'border-transparent bg-transparent shadow-none',
        leftColumnDescription: 'text-foreground/80'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    layout: 'default',
    variant: 'default'
  }
})

type ContactusTvProps = VariantProps<typeof contactusTva>
type ContactusTvSlots = keyof ReturnType<typeof contactusTva>

export { contactusTva }
export type { ContactusTvProps, ContactusTvSlots }
