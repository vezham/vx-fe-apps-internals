import type { HeroBannerVariants } from './types'

export const heroBannerVariants: HeroBannerVariants = {
  base: {
    wrapper: `
      relative w-full text-white
      bg-gradient-to-br from-zoho-blue to-blue-800
      py-30
    `,
    content: `
      flex flex-col items-center justify-center px-4 text-center
    `,
    title: `
      mx-auto max-w-4xl text-3xl leading-tight font-bold md:text-5xl
    `,
    inputContainer: `
      right-0 bottom-0 left-0 z-10 translate-y-1/2 px-4
    `,
    inputWrapper: `
      mx-auto w-full max-w-3xl
    `,
    icon: 'text-default-400'
  },

  variants: {
    variant: {
      default: {
        wrapper: 'from-zoho-blue to-blue-800',
        title: 'text-white'
      },
      dark: {
        wrapper: 'from-gray-900 to-gray-800',
        title: 'text-gray-100'
      }
    },
    size: {
      sm: {
        wrapper: 'py-16',
        title: 'text-2xl md:text-4xl',
        inputWrapper: 'max-w-2xl'
      },
      md: {
        wrapper: 'py-30',
        title: 'text-3xl md:text-5xl',
        inputWrapper: 'max-w-3xl'
      },
      lg: {
        wrapper: 'py-40',
        title: 'text-4xl md:text-6xl',
        inputWrapper: 'max-w-4xl'
      }
    }
  },

  getClasses(variant = 'default', size = 'md') {
    const base = this.base
    const v = this.variants.variant[variant] || {}
    const s = this.variants.size[size] || {}

    return {
      wrapper: `${base.wrapper} ${v.wrapper ?? ''} ${s.wrapper ?? ''}`,
      content: `${base.content} ${v.content ?? ''} ${s.content ?? ''}`,
      title: `${base.title} ${v.title ?? ''} ${s.title ?? ''}`,
      inputContainer: `${base.inputContainer} ${v.inputContainer ?? ''} ${s.inputContainer ?? ''}`,
      inputWrapper: `${base.inputWrapper} ${v.inputWrapper ?? ''} ${s.inputWrapper ?? ''}`,
      icon: `${base.icon} ${v.icon ?? ''} ${s.icon ?? ''}`
    }
  },

  inputClasses: {
    base: 'shadow-lg',
    inputWrapper: 'h-14 bg-white',
    input: 'text-lg'
  }
}
