import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex w-full flex-col',
    title: 'my-4 px-4',
    scroll: 'h-full w-full p-4'
  },
  variants: {
    size: {
      sm: {
        base: 'gap-2',
        title: 'text-lg',
        scroll: 'p-2'
      },
      md: {
        base: 'gap-4',
        title: 'text-xl',
        scroll: 'p-4'
      },
      lg: {
        base: 'gap-6',
        title: 'text-2xl',
        scroll: 'p-6'
      }
    },
    align: {
      left: {
        base: 'items-start text-left',
        title: 'text-left'
      },
      center: {
        base: 'items-center text-center',
        title: 'text-center'
      },
      right: {
        base: 'items-end text-right',
        title: 'text-right'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    align: 'left'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
