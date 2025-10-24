import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: `border-default-200 cursor-pointer justify-start border text-start transition-all duration-200 hover:scale-105 hover:shadow-md`,
    iconWrapper: 'mb-3 sm:mb-4',
    title: 'text-foreground text-md mb-1 font-bold sm:mb-2',
    description: 'text-default-500 text-sm'
  },
  variants: {
    variant: {
      default: {
        base: 'bg-content1 border-divider',
        title: 'text-foreground',
        description: 'text-default-500'
      },
      outlined: {
        base: 'border-primary hover:bg-primary/5 bg-transparent',
        title: 'text-primary',
        description: 'text-primary/80'
      },
      filled: {
        base: 'bg-primary border-primary hover:bg-primary/90 text-white',
        title: 'text-white',
        description: 'text-white/80'
      }
    },
    size: {
      sm: {
        base: 'p-3',
        title: 'text-sm',
        description: 'text-xs',
        iconWrapper: 'mb-2'
      },
      md: {
        base: 'p-5',
        title: 'text-md',
        description: 'text-sm',
        iconWrapper: 'mb-3 sm:mb-4'
      },
      lg: {
        base: 'p-7',
        title: 'text-lg',
        description: 'text-base',
        iconWrapper: 'mb-5'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
