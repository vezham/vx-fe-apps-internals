import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'bg-primary flex min-h-screen items-center justify-center',
    wrapper:
      'm-auto flex max-w-[650px] flex-col items-center justify-center gap-4 p-5 text-center',
    wrapper_super_title: 'text-3xl leading-6 font-semibold sm:text-4xl',
    wrapper_title:
      'text-[30px] font-[900] tracking-tight sm:text-[54px] md:leading-[58px]',
    wrapper_description: 'text-base md:text-lg md:leading-6',
    footer: 'flex w-full flex-col justify-center gap-4 sm:flex-row'
  },
  variants: {
    spacer: {
      sm: {
        wrapper: 'py-6'
      },
      md: {
        wrapper: 'py-12'
      },
      lg: {
        wrapper: 'py-24'
      }
    }
  },
  defaultVariants: {
    spacer: 'lg'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
