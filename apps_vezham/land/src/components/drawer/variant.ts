import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'bg-white backdrop-blur-md dark:bg-white/5',
    drawerContent: 'mb-5 w-full',
    drawerHeader: 'text-lg font-semibold',
    drawerBody: '',
    subItem:
      'cursor-pointer rounded-lg p-4 transition hover:bg-black/5 dark:hover:bg-white/5',
    subItemTitle: 'font-medium',
    subItemDescription: 'text-sm opacity-70'
  },
  variants: {
    size: {
      sm: {
        drawerContent: 'mb-3',
        drawerHeader: 'text-base',
        subItem: 'p-3'
      },
      md: {
        drawerContent: 'mb-5',
        drawerHeader: 'text-lg',
        subItem: 'p-4'
      },
      lg: {
        drawerContent: 'mb-6',
        drawerHeader: 'text-xl',
        subItem: 'p-5'
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
