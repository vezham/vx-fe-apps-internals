// import { VariantProps, tv } from '@vezham/react-utils'
// const tva = tv({
//   slots: {
//     base: 'vcard-collections-wrapper grid grid-cols-1 gap-6',
//     wrapper: 'border-small border-default-100 p-2',
//     header: 'flex items-center justify-between gap-2',
//     body: 'px-2 pb-1',
//     icon: 'flex max-w-[100%] items-center gap-2',
//     title: 'text-base font-semibold',
//     description: 'text-small text-default-500 pt-4 text-left rtl:text-right'
//   },
//   variants: {}
// })
// type tvProps = VariantProps<typeof tva>
// type tvSlots = keyof ReturnType<typeof tva>
// export { tva }
// export type { tvProps, tvSlots }
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-4',
    wrapper: 'border-small border-default-100 p-2',
    header: 'flex items-center justify-between gap-2',
    body: 'px-2 pb-1',
    icon: 'flex max-w-[100%] items-center gap-2',
    title: 'text-base font-semibold',
    description: 'text-small text-default-500 pt-4 text-left rtl:text-right'
  },
  variants: {
    columns: {
      1: { base: 'grid-cols-1' },
      2: { base: 'grid-cols-2' },
      3: { base: 'grid-cols-3' },
      4: { base: 'grid-cols-4' }
    },
    spacing: {
      sm: {
        base: 'gap-3',
        wrapper: 'p-1',
        body: 'px-1',
        header: 'gap-1'
      },
      md: {
        base: 'gap-6',
        wrapper: 'p-2',
        body: 'px-2',
        header: 'gap-2'
      },
      lg: {
        base: 'gap-8',
        wrapper: 'p-3',
        body: 'px-3',
        header: 'gap-3'
      }
    },
    shadow: {
      none: { wrapper: 'shadow-none' },
      sm: { wrapper: 'shadow-sm' },
      md: { wrapper: 'shadow-md' },
      lg: { wrapper: 'shadow-lg' }
    },
    device: {
      mobile: { base: 'grid-cols-1' },
      tablet: { base: 'grid-cols-2' },
      laptop: { base: 'grid-cols-2' },
      desktop: { base: 'grid-cols-3' }
    }
  },
  compoundVariants: [
    {
      device: 'mobile',
      class: {
        base: 'sm:grid-cols-2'
      }
    },

    {
      device: ['tablet', 'laptop'],
      class: {
        base: 'md:grid-cols-3'
      }
    }
  ],
  defaultVariants: {
    spacing: 'md',
    shadow: 'sm',
    device: 'desktop'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
