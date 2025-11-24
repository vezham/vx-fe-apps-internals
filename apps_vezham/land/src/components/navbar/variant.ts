import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'h-screen',
    navbar: 'fixed bg-transparent [&>header]:w-full [&>header]:max-w-full',
    navbarContent: 'hidden gap-8 lg:flex',
    navbarItem: 'cursor-pointer transition',
    navbarEnd: 'hidden lg:flex',
    navbarMenuEnd:
      'mt-5 flex w-full flex-col gap-4 sm:flex-row sm:justify-center',
    activeNavbarItem: 'text-primary text-base font-bold',
    inactiveNavbarItem: 'opacity-50',
    floatingTabs:
      'fixed right-0 left-0 z-20 flex items-center justify-center gap-2 px-4'
  },
  variants: {
    size: {
      sm: {
        navbarItem: 'text-sm',
        floatingTabs: 'bottom-8'
      },
      md: {
        navbarItem: 'text-base',
        floatingTabs: 'bottom-10'
      },
      lg: {
        navbarItem: 'text-lg',
        floatingTabs: 'bottom-12'
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
