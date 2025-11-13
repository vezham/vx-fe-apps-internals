// import { tv } from '@vx-oss/use-theme'
// export const Variants = tv({
//   slots: {
//     base: 'flex flex-col gap-2',
//     wrapper: 'vtrending-wrapper grid h-full w-full gap-4 p-4'
//     // wrapper_trending:
//     //   'vplatform-wrapper-trending mx-4 flex h-max flex-row gap-2 overflow-hidden bg-transparent p-4',
//     // wrapper_left: 'flex px-2',
//     // wrapper_right: 'flex w-full flex-col',
//     // wrapper_right_footer: 'flex items-center gap-2 p-0'
//   }
// })
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'md:1/6 flex flex-col gap-2',
    header: 'flex items-center gap-2',
    wrapper: 'vtrending-wrapper grid h-full w-full gap-4 p-4',
    scroll: 'h-full w-full'
  },
  variants: {
    orientation: {
      horizontal: {
        wrapper: 'auto-cols-max grid-flow-col overflow-x-auto',
        scroll: 'overflow-x-auto'
      },
      vertical: {
        wrapper: 'grid-flow-row overflow-y-auto',
        scroll: 'overflow-y-auto'
      }
    },
    spacing: {
      sm: {
        base: 'gap-1',
        header: 'gap-1',
        wrapper: 'gap-2 p-2'
      },
      md: {
        base: 'gap-2',
        header: 'gap-2',
        wrapper: 'gap-4 p-4'
      },
      lg: {
        base: 'gap-3',
        header: 'gap-3',
        wrapper: 'gap-6 p-6'
      }
    },
    layout: {
      grid: {
        wrapper: 'grid'
      },
      flex: {
        wrapper: 'flex'
      }
    }
  },
  defaultVariants: {
    orientation: 'vertical',
    spacing: 'md',
    layout: 'grid'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
