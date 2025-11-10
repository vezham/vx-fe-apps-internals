import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-col items-center',
    wrapper: 'py-16 sm:text-center',
    title:
      'mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-200',
    subtitle: 'text-default-500 text-lg',
    content_wrapper: 'flex flex-col items-center'
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
