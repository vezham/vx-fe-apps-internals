export interface HeroBannerProps {
  variant?: 'default' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export interface HeroBannerSlots {
  wrapper: string
  content: string
  title: string
  inputContainer: string
  inputWrapper: string
  icon: string
}

export interface HeroBannerVariants {
  base: HeroBannerSlots
  variants: {
    variant: Record<'default' | 'dark', Partial<HeroBannerSlots>>
    size: Record<'sm' | 'md' | 'lg', Partial<HeroBannerSlots>>
  }
  getClasses: (
    variant: 'default' | 'dark',
    size: 'sm' | 'md' | 'lg'
  ) => HeroBannerSlots
  inputClasses: {
    base: string
    inputWrapper: string
    input: string
  }
}
