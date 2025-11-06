import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'mx-auto w-full px-8 pt-10 pb-20',
    section: 'mb-8 last:mb-0',
    header: 'flex items-center gap-4 px-4 pb-4',
    title: 'cursor-default',
    link: 'flex items-center gap-1',
    icon: 'h-4 w-4 rtl:rotate-180'
  },
  variants: {
    spacing: {
      sm: {
        base: 'px-4 pt-6 pb-12',
        section: 'mb-6 last:mb-0',
        header: 'pb-3'
      },
      md: {
        base: 'px-8 pt-10 pb-20',
        section: 'mb-8 last:mb-0',
        header: 'pb-4'
      },
      lg: {
        base: 'px-12 pt-14 pb-24',
        section: 'mb-10 last:mb-0',
        header: 'pb-5'
      }
    },
    align: {
      left: {
        header: 'justify-start',
        title: 'text-left'
      },
      center: {
        header: 'justify-center',
        title: 'text-center'
      },
      between: {
        header: 'justify-between',
        title: 'text-left'
      }
    }
  },
  defaultVariants: {
    spacing: 'md',
    align: 'left'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
