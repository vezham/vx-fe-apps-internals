const clipPathShape =
  'polygon(74.8% 41.9%,97.2% 73.2%,100% 34.9%,92.5% 0.4%,87.5% 0%,75% 28.6%,58.5% 54.6%,50.1% 56.8%,46.9% 44%,48.3% 17.4%,24.7% 53.9%,0% 27.9%,11.9% 74.2%,24.9% 54.1%,68.6% 100%,74.8% 41.9%)'

export const bannerWrapper = {
  base: `bg-background border-divider relative isolate z-30 flex items-center gap-x-16 overflow-hidden border-b px-6 py-2 sm:px-3.5 sm:before:flex-0`
}

const gradientBase = `absolute top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl`
const gradientSide = {
  left: 'left-[max(-7rem,calc(50%-52rem))]',
  right: 'left-[max(45rem,calc(50%+8rem))]'
} as const

const gradientTone = {
  light: `bg-gradient-to-r from-[#e4c2d1] to-[#9089fc] opacity-20 dark:from-[#F54180] dark:to-[#338EF7] dark:opacity-10`,
  medium: `bg-gradient-to-r from-[#e4c2d1] to-[#9089fc] opacity-30 dark:from-[#F54180] dark:to-[#338EF7] dark:opacity-20`
} as const

export const gradientContainer = {
  getClass(
    side: keyof typeof gradientSide = 'left',
    tone: keyof typeof gradientTone = 'light'
  ) {
    return `${gradientBase} ${gradientSide[side]} ${gradientTone[tone]} [&>div]:aspect-[577/310] [&>div]:w-[36.0625rem]`
  }
}

export const gradientShapeStyle = {
  clipPath: clipPathShape
}

export const contentWrapper = {
  base: `flex w-3/4 items-center justify-between gap-x-3 md:justify-center`
}

export const bannerText = {
  base: `text-small text-foreground flex items-end transition-opacity hover:opacity-80 sm:text-[0.93rem]`
}

export const gradientText = {
  base: `
    animate-text-gradient inline-flex
    bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)]
    bg-[length:200%_auto]
    [background-clip:text]
    [webkit-background-clip:text]
    text-transparent
    font-medium
    md:ml-1
    dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]
  `
}

export const scheduleButton = {
  base: `group text-foreground focus-visible:outline-primary relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-[1px] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`
}

export const spinningBackground = {
  base: `absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]`
}

export const scheduleInner = {
  base: `bg-background group-hover:bg-background/70 transition-background text-foreground inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl`
}

export const socialWrapper = {
  base: `hidden space-x-2 md:flex`
}

export const socialIcon = {
  base: `text-default-400 hover:text-primary-500`
}
