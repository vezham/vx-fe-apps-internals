// import { VariantProps, tv } from '@vezham/react-utils'
// const tva = tv({
//   slots: {
//     base: 'vrating relative flex items-center',
//     title: 'text-default-400',
//     rating: 'flex'
//   },
//   variants: {
//     spacer: {
//       none: {
//         base: ''
//       },
//       sm: {
//         base: 'py-5'
//       },
//       md: {
//         base: 'py-10'
//       },
//       lg: {
//         base: 'py-16'
//       }
//     }
//   },
//   defaultVariants: {
//     spacer: 'none'
//   }
// })
// type tvProps = VariantProps<typeof tva>
// type tvSlots = keyof ReturnType<typeof tva>
// export { tvProps, tvSlots, tva }
import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'relative flex items-center',
    title: 'text-default-400',
    rating: [
      'flex flex-row items-center',
      'sm:flex-col sm:items-start',
      'md:flex-row md:items-center'
    ]
  },
  variants: {
    spacer: {
      none: {
        base: ''
      },
      sm: {
        base: 'py-5'
      },
      md: {
        base: 'py-10'
      },
      lg: {
        base: 'py-16'
      }
    },
    scale: {
      2: {
        rating: 'flex-row items-center'
      },
      3: {
        rating: [
          'flex flex-row items-center',
          'sm:flex-col sm:items-start',
          'md:flex-row md:items-center'
        ]
      },
      5: {
        rating: [
          'flex flex-row items-center',
          'sm:flex-col sm:items-start',
          'md:flex-row md:items-center'
        ]
      }
    },
    type: {
      star: {
        rating: 'gap-1'
      },
      heart: {
        rating: 'gap-1'
      },
      like: {
        rating: 'gap-3'
      },
      emoji: {
        rating: 'gap-2'
      }
    }
  },
  defaultVariants: {
    spacer: 'none',
    scale: 3,
    type: 'emoji'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
