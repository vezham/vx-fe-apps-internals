import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: `bg-background border-divider relative isolate z-30 flex items-center gap-x-16 overflow-hidden border-b px-6 py-2 sm:px-3.5 sm:before:flex-0`,
    gradientLeft: `absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu bg-linear-to-r from-[#e4c2d1] to-[#9089fc] opacity-20 blur-2xl dark:from-[#F54180] dark:to-[#338EF7] dark:opacity-10 [&>div]:aspect-577/310 [&>div]:w-144.25`,
    gradientRight: `absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu bg-linear-to-r from-[#e4c2d1] to-[#9089fc] opacity-30 blur-2xl dark:from-[#F54180] dark:to-[#338EF7] dark:opacity-20 [&>div]:aspect-577/310 [&>div]:w-144.25`,
    contentWrapper: `flex w-3/4 items-center justify-between gap-x-3 md:justify-center`,
    bannerText: `text-small text-foreground flex items-end transition-opacity hover:opacity-80 sm:text-[0.93rem]`,
    gradientText: `animate-text-gradient inline-flex bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] bg-size-[200%_auto] bg-clip-text font-medium text-transparent [webkit-background-clip:text] md:ml-1 dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]`,
    scheduleButton: `group text-foreground focus-visible:outline-primary relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-px font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
    spinningBackground: `absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]`,
    scheduleInner: `bg-background group-hover:bg-background/70 transition-background text-foreground inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl`,
    socialWrapper: `hidden space-x-2 md:flex`,
    socialIcon: `text-default-400 hover:text-primary-500`
  },

  variants: {
    variant: {
      default: {},
      outlined: {
        base: 'border-primary',
        bannerText: 'text-primary'
      },
      filled: {
        base: 'bg-primary text-white',
        bannerText: 'text-white'
      }
    },
    size: {
      sm: { base: 'px-2 py-1 text-sm' },
      md: { base: 'px-3 py-2 text-base' },
      lg: { base: 'px-6 py-4 text-lg' }
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
