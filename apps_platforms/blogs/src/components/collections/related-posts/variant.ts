import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: '',
    sectionContainer: '',
    heroSection: ''
  },
  variants: {
    size: {
      sm: {
        sectionContainer: 'py-4'
      },
      md: {
        sectionContainer: 'py-6'
      },
      lg: {
        sectionContainer: 'py-8'
      }
    },
    spacing: {
      tight: {
        sectionContainer: 'space-y-4'
      },
      normal: {
        sectionContainer: 'space-y-6'
      },
      loose: {
        sectionContainer: 'space-y-8'
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
