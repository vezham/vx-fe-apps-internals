import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: [
      'cursor-pointer transition-all duration-200',
      'hover:scale-110 hover:opacity-80'
    ]
  },
  variants: {
    size: {
      sm: {
        base: 'h-4 w-4'
      },
      md: {
        base: 'h-5 w-5'
      },
      lg: {
        base: 'h-6 w-6'
      },
      xl: {
        base: 'h-8 w-8'
      }
    },
    hoverEffect: {
      none: {
        base: 'hover:scale-100 hover:opacity-100'
      },
      glow: {
        base: 'hover:scale-110 hover:drop-shadow-lg'
      },
      scale: {
        base: 'hover:scale-125'
      },
      opacity: {
        base: 'hover:opacity-70'
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    hoverEffect: 'glow'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
