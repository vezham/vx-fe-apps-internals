import { VariantProps, tv } from 'tailwind-variants'

const tva = tv({
  slots: {
    wrapper: 'relative w-full bg-linear-to-br py-30 text-white',
    content: 'flex flex-col items-center justify-center px-4 text-center',
    title: 'mx-auto max-w-4xl text-3xl leading-tight font-bold md:text-5xl',
    inputContainer: 'right-0 bottom-0 left-0 z-10 translate-y-1/2 px-4',
    inputWrapper: 'mx-auto w-full max-w-3xl',
    icon: 'text-default-400'
  },

  variants: {
    variant: {
      default: { wrapper: 'from-zoho-blue to-blue-800', title: 'text-white' },
      dark: { wrapper: 'from-gray-900 to-gray-800', title: 'text-gray-100' }
    },
    size: {
      sm: {
        wrapper: 'py-16',
        title: 'text-2xl md:text-4xl',
        inputWrapper: 'max-w-2xl'
      },
      md: {
        wrapper: 'py-24',
        title: 'text-3xl md:text-5xl',
        inputWrapper: 'max-w-3xl'
      },
      lg: {
        wrapper: 'py-33',
        title: 'text-4xl md:text-6xl',
        inputWrapper: 'max-w-4xl'
      }
    }
  },

  defaultVariants: { variant: 'default', size: 'lg' }
})

tva.inputClasses = {
  base: 'shadow-lg',
  inputWrapper: 'h-14 bg-white',
  input: 'text-lg'
}

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
