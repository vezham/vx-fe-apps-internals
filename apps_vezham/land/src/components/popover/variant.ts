import { VariantProps, tv } from '@vezham/react-utils'

const shortcutTva = tv({
  slots: {
    base: 'fixed top-20 right-0 z-5 grid place-items-center',

    button: 'rounded-r-none',

    popoverInner: 'space-y-2 px-3 py-2',

    shortcutList: 'text-small block w-full cursor-pointer rounded-lg px-2 py-1'
  },
  variants: {
    size: {
      sm: {
        button: 'text-sm'
      },
      md: {
        button: 'text-base'
      },
      lg: {
        button: 'text-lg'
      }
    },
    variant: {
      primary: {
        button: 'faded'
      },
      secondary: {
        button: 'flat'
      },
      ghost: {
        button: 'light'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary'
  }
})

type ShortcutTvProps = VariantProps<typeof shortcutTva>
type ShortcutTvSlots = keyof ReturnType<typeof shortcutTva>

export { shortcutTva }
export type { ShortcutTvProps, ShortcutTvSlots }
