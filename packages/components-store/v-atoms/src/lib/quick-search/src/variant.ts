import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex items-center',
    button: 'text-default-400 bg-default-100 w-full text-sm font-normal',
    searchIcon: 'pointer-events-none flex-shrink-0 text-base',
    kbd: 'text-default-400 gap-1'
  },
  variants: {
    size: {
      sm: {
        button: 'text-xs sm:w-64',
        kbd: 'text-xs'
      },
      md: {
        button: 'text-sm sm:w-96',
        kbd: 'text-sm'
      },
      lg: {
        button: 'text-base sm:w-112',
        kbd: 'text-base'
      }
    },
    variant: {
      default: {
        button: 'bg-default-100 text-default-400'
      },
      filled: {
        button: 'bg-primary-100 text-primary-600'
      },
      bordered: {
        button: 'border-default-200 border bg-transparent'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
