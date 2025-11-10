import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-col items-center pt-0',
    postHeader: '',
    cardFeatured: ''
  },
  variants: {
    size: {
      sm: {
        base: 'py-2',
        postHeader: 'text-sm'
      },
      md: {
        base: 'py-4',
        postHeader: 'text-base'
      },
      lg: {
        base: 'py-6',
        postHeader: 'text-lg'
      }
    },
    alignment: {
      left: {
        base: 'items-start'
      },
      center: {
        base: 'items-center'
      },
      right: {
        base: 'items-end'
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
    alignment: 'center',
    spacing: 'normal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
