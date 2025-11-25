import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    // Resources Component
    resourcesBase: 'mx-auto flex max-w-2xl flex-col px-5',
    resourcesTitle: 'text-xl',
    tab: 'flex items-center justify-center py-8'
  },
  variants: {
    size: {
      sm: {
        resourcesBase: 'mt-6 max-w-lg',
        resourcesTitle: 'text-lg md:text-2xl'
      },
      md: {
        resourcesBase: 'mt-12 max-w-2xl',
        resourcesTitle: 'text-xl font-semibold md:text-3xl'
      },
      lg: {
        resourcesBase: 'mt-20 max-w-3xl',
        resourcesTitle: 'text-2xl'
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
