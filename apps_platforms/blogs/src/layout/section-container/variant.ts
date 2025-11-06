// import { VariantProps, tv } from '@vezham/react-utils'
// const tva = tv({
//   slots: {
//     base: 'vsection-container mx-auto px-8 pb-20 pt-10'
//   },
//   variants: {}
// })
// type tvProps = VariantProps<typeof tva>
// type tvSlots = keyof ReturnType<typeof tva>
// export { tva }
// export type { tvProps, tvSlots }
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: [
      'vsection-container',
      'mx-auto px-8 pt-10 pb-20',
      'w-full md:w-9/12'
    ].join(' ')
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
