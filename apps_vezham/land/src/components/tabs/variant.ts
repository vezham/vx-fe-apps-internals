import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'overflow-x-auto rounded-full',
    tabList: 'inline-flex overflow-x-auto !p-1 px-2',
    tab: 'cursor-pointer rounded-full text-base'
  },
  variants: {
    size: {
      sm: {
        tabList: 'gap-4',
        tab: 'px-2 text-sm'
      },
      md: {
        tabList: 'gap-6',
        tab: 'px-3 text-base'
      },
      lg: {
        tabList: 'gap-8',
        tab: 'px-4 text-lg'
      }
    },
    radius: {
      none: {
        tabList: 'rounded-none',
        tab: 'rounded-none'
      },
      sm: {
        tabList: 'rounded-lg',
        tab: 'rounded-md'
      },
      full: {
        tabList: 'rounded-full',
        tab: 'rounded-full'
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    radius: 'full'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
