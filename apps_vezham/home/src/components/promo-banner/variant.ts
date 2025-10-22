import { tv } from 'tailwind-variants'

export const promoBanner = tv({
  base: `relative z-30 mx-4 mb-4 rounded-lg px-6 py-2.5 shadow-sm`,
  variants: {
    variant: {
      primary: 'from-primary-100 to-primary-50 bg-gradient-to-r',
      secondary: 'from-secondary-100 to-secondary-50 bg-gradient-to-r',
      danger: 'from-danger-100 to-danger-50 bg-gradient-to-r'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const promoContent = tv({
  base: `mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 text-sm sm:text-base`
})

export const promoText = tv({
  base: `text-foreground font-medium`
})

export const promoLink = tv({
  base: `text-primary font-semibold hover:underline`
})

export const closeButton = tv({
  base: `text-foreground-500 hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2`
})

export const closeIcon = tv({
  base: `h-4 w-4`
})
