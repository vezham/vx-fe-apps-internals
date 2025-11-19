import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'mt-20 mr-6 mb-6 ml-6 flex h-max items-center justify-center rounded-3xl',
    wrapper:
      'flex flex-col items-center justify-center gap-4 p-5 text-center text-white',
    content: 'flex flex-col items-center justify-center sm:leading-[30px]',
    wrapper_super_title:
      'mt-4 text-[30px] font-[900] tracking-tight sm:text-[54px]',
    wrapper_title:
      'max-w-[650px] text-[30px] font-[900] tracking-tight sm:mt-4 sm:text-[54px] sm:leading-[58px]',
    wrapper_subtitle:
      'mt-4 max-w-[500px] text-[16px] sm:text-[24px] sm:leading-6',
    wrapper_description:
      'mt-4 max-w-[500px] text-[12px] sm:text-[16px] sm:leading-6',
    footer: 'mt-4 flex w-full flex-col justify-center gap-4 sm:flex-row'
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
    spacer: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
