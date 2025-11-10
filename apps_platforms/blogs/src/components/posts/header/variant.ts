import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-col gap-4',
    breadcrumbs: '',
    separator: 'px-2',
    homeIcon: 'cursor-pointer transition-all duration-200 hover:scale-110',
    heading: '',
    wrapper: [
      'flex flex-col items-start gap-2',
      'sm:flex-row sm:items-center sm:justify-between',
      'md:flex-row md:items-center md:justify-between',
      'lg:flex-row lg:items-center lg:justify-between',
      'xl:flex-row xl:items-center xl:justify-between'
    ],
    userContainer: '',
    userDescription: 'flex h-4 flex-row items-center justify-center gap-2',
    dot: 'text-foreground-400 !mb-4 text-xl',
    readTime: 'text-foreground-400 text-xs'
  },
  variants: {
    size: {
      sm: {
        base: 'py-2',
        homeIcon: 'h-4 w-4',
        heading: 'text-sm'
      },
      md: {
        base: 'py-4',
        homeIcon: 'h-5 w-5',
        heading: 'text-base'
      },
      lg: {
        base: 'py-6',
        homeIcon: 'h-6 w-6',
        heading: 'text-lg'
      }
    },
    spacing: {
      tight: {
        base: 'gap-2',
        wrapper: 'gap-2'
      },
      normal: {
        base: 'gap-4',
        wrapper: 'gap-4'
      },
      loose: {
        base: 'gap-6',
        wrapper: 'gap-6'
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
