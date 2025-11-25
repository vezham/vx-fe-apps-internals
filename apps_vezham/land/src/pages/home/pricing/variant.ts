import { VariantProps, tv } from '@vezham/react-utils'

const pricingTva = tv({
  slots: {
    // Head
    Bg: 'bg-default-50',
    titleBase: '',
    spotlight: 'text-primary-300 pt-10 pb-6 text-center text-sm font-medium',
    titlewrap: 'flex flex-col items-center justify-center gap-2 px-4',
    title: 'text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl',
    desc: 'flex flex-col items-center justify-center text-sm sm:flex-row',

    coupon: 'text-default-500 text-base font-semibold',

    base: 'mx-auto flex max-w-4xl flex-col items-center pb-10',
    loading: 'text-default-400 p-10 text-center',

    tabsContainer: 'flex w-full items-center justify-center px-6 py-8',
    tabs: 'flex w-full items-center justify-center',
    tabList: 'no-scrollbar flex-nowrap overflow-x-auto',
    tab: 'whitespace-nowrap data-[hover-unselected=true]:opacity-90',

    radioGroup:
      'grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 md:pt-8 lg:gap-6',

    comparisonTable: 'isolate hidden lg:block',
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
    featureCheckIcon: 'text-primary mx-auto',
    featureCloseIcon: 'text-default-400 mx-auto',

    discountContainer:
      'mb-4 flex flex-col items-center justify-center gap-2 sm:flex-row',
    discountText: 'text-default-400',
    discountLink: '',

    priceContainer: 'flex flex-col gap-2',
    priceRow: 'flex items-baseline gap-2 pt-2',
    priceAmount:
      'from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-3xl leading-7 font-semibold tracking-tight text-transparent',
    priceSuffix: 'text-tiny text-default-400 font-medium',
    priceDescription: 'text-default-400'
  },
  variants: {
    size: {
      sm: {
        base: 'max-w-3xl xl:max-w-4xl',
        featureGroupHeader: 'text-medium',

        priceAmount: 'text-2xl'
      },
      md: {
        base: 'max-w-4xl xl:max-w-5xl',
        featureGroupHeader: 'text-large',

        priceAmount: 'text-3xl'
      },
      lg: {
        base: 'max-w-5xl xl:max-w-6xl',
        featureGroupHeader: 'text-xl',

        priceAmount: 'text-4xl'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const pricingRadioItemTva = tv({
  slots: {
    base: [
      'bg-content1 hover:bg-content2 relative m-0 inline-flex w-[280px] max-w-full items-center justify-between',
      'border-default-200 cursor-pointer flex-row-reverse gap-4 rounded-lg border p-4',
      'data-[selected=true]:border-primary'
    ],
    label: 'static',
    chipBase: 'absolute -top-4 left-1/2 -translate-x-1/2',
    chipContent: 'font-medium'
  },
  variants: {
    size: {
      sm: {
        base: 'w-[240px] p-3',
        chipBase: '-top-3'
      },
      md: {
        base: 'w-[280px] p-4',
        chipBase: '-top-4'
      },
      lg: {
        base: 'w-[320px] p-5',
        chipBase: '-top-5'
      }
    },
    variant: {
      default: {
        base: 'border-default-200'
      },
      featured: {
        base: 'border-primary border-2'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type PricingTvProps = VariantProps<typeof pricingTva>
type PricingTvSlots = keyof ReturnType<typeof pricingTva>

type PricingRadioItemTvProps = VariantProps<typeof pricingRadioItemTva>
type PricingRadioItemTvSlots = keyof ReturnType<typeof pricingRadioItemTva>

export { pricingTva, pricingRadioItemTva }
export type {
  PricingTvProps,
  PricingTvSlots,
  PricingRadioItemTvProps,
  PricingRadioItemTvSlots
}
