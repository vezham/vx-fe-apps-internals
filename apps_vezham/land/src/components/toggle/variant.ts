import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex items-center gap-2',
    switch: 'mx-1'
  },
  variants: {
    size: {
      sm: {
        base: 'gap-1',
        switch: 'mx-0'
      },
      md: {
        base: 'gap-2',
        switch: 'mx-1'
      },
      lg: {
        base: 'gap-3',
        switch: 'mx-2'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
