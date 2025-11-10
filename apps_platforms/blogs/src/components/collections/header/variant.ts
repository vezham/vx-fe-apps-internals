import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'pb-10',
    breadcrumbs: 'flex items-center gap-2',
    homeIcon: 'cursor-pointer transition-all duration-200 hover:scale-110'
  },
  variants: {
    size: {
      sm: {
        homeIcon: 'h-4 w-4'
      },
      md: {
        homeIcon: 'h-5 w-5'
      },
      lg: {
        homeIcon: 'h-6 w-6'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
