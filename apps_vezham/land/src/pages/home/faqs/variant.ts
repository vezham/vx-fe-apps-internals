import { VariantProps, tv } from '@vezham/react-utils'

const faqsTva = tv({
  slots: {
    // Base container
    base: 'w-full px-0 py-4 sm:py-12 md:px-4 lg:py-16',

    // Container
    container: 'mx-auto flex w-full max-w-6xl flex-col items-center gap-6',

    // Title
    title: '',
    mobileTitle: 'inline-block md:hidden',
    desktopTitle: 'hidden md:inline-block',

    // Accordion
    accordion: 'gap-3',
    accordionItem: '',
    accordionIndicator: 'data-[open=true]:rotate-180'
  },
  variants: {
    size: {
      sm: {
        base: 'py-2 sm:py-8 md:px-2 lg:py-10',
        container: 'gap-4',
        mobileTitle: 'text-2xl',
        desktopTitle: 'text-2xl',
        accordion: 'gap-2'
      },
      md: {
        base: 'py-4 sm:py-12 md:px-4 lg:py-16',
        container: 'gap-6',
        mobileTitle: 'text-3xl',
        desktopTitle: 'text-3xl',
        accordion: 'gap-3'
      },
      lg: {
        base: 'py-6 sm:py-16 md:px-6 lg:py-20',
        container: 'gap-8',
        mobileTitle: 'text-4xl',
        desktopTitle: 'text-4xl',
        accordion: 'gap-4'
      }
    },
    variant: {
      default: {
        accordionItem: [
          'hover:bg-default-100! bg-transparent! px-5 shadow-none!',
          'data-[open=true]:bg-default-100!'
        ]
      },
      bordered: {
        accordionItem: [
          'border-default-200! border-1 bg-transparent! px-5',
          'hover:bg-default-50! data-[open=true]:bg-default-50!'
        ]
      },
      elevated: {
        accordionItem: [
          'bg-content1! shadow-small! px-5',
          'hover:shadow-medium! data-[open=true]:bg-default-100!'
        ]
      },
      minimal: {
        accordionItem: [
          'border-default-100! border-b-1 bg-transparent! px-0!',
          'hover:bg-transparent! data-[open=true]:bg-transparent!',
          'rounded-none!'
        ]
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type FAQsTvProps = VariantProps<typeof faqsTva>
type FAQsTvSlots = keyof ReturnType<typeof faqsTva>

export { faqsTva }
export type { FAQsTvProps, FAQsTvSlots }
