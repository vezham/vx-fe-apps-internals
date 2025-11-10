import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-col gap-4 pb-0',
    breadcrumbs: '',
    separator: 'px-2',
    homeIcon: 'cursor-pointer transition-all duration-200 hover:scale-110'
  },
  variants: {
    size: {
      sm: {
        base: 'py-2',
        homeIcon: 'h-4 w-4'
      },
      md: {
        base: 'py-4',
        homeIcon: 'h-5 w-5'
      },
      lg: {
        base: 'py-6',
        homeIcon: 'h-6 w-6'
      }
    },
    spacing: {
      tight: {
        base: 'gap-2'
      },
      normal: {
        base: 'gap-4'
      },
      loose: {
        base: 'gap-6'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    spacing: 'normal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
