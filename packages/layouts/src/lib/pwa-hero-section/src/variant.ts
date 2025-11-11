// import { VariantProps, tv } from '@vezham/react-utils'
// import { SheetSection } from '@vx/shared-variants'
// const tva = tv({
//   extend: SheetSection,
//   slots: {
//     base: 'vpwa-hero-section bg-vcontainer-primary m-6 flex h-max flex-col items-center gap-4 rounded-3xl !bg-cover p-20',
//     wrapper: 'vpwa-hero-wrapper flex flex-col sm:text-center',
//     wrapper_super_title: 'mb-4 text-sm leading-6 font-semibold',
//     wrapper_title: 'tracking-tight',
//     wrapper_description: 'text-base md:text-lg md:leading-6'
//   },
//   variants: {
//     title_size: {
//       sm: {
//         wrapper_title: 'mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'
//       },
//       md: {
//         wrapper_title:
//           'mt-6 mb-4 text-[clamp(2.125rem,1.142rem+3.659vw,4rem)] leading-none font-bold'
//       }
//     },
//     spacer: {
//       sm: {
//         wrapper: 'py-5'
//       },
//       md: {
//         wrapper: 'py-10'
//       },
//       lg: {
//         wrapper: 'py-16'
//       }
//     }
//   },
//   defaultVariants: {
//     title_size: 'sm',
//     spacer: 'md'
//   }
// })
// type tvProps = VariantProps<typeof tva>
// type tvSlots = keyof ReturnType<typeof tva>
// export { tva }
// export type { tvProps, tvSlots }
import { VariantProps, tv } from '@vezham/react-utils'

// import { SheetSection } from '@vx/shared-variants'
const tva = tv({
  // extend: SheetSection,
  slots: {
    base: 'm-10 flex flex-col items-center gap-6 rounded-4xl bg-cover p-24',
    wrapper: 'flex flex-col sm:text-center',
    wrapper_super_title: 'mb-4 text-3xl leading-6 font-semibold sm:text-4xl',
    wrapper_title: 'tracking-tight',
    wrapper_description: 'text-base md:text-lg md:leading-6'
  },
  variants: {
    title_size: {
      sm: {
        wrapper_title: 'mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'
      },
      md: {
        wrapper_title: 'mt-6 mb-4 text-4xl leading-none font-bold sm:text-5xl'
      }
    },
    spacer: {
      sm: {
        wrapper: 'py-5'
      },
      md: {
        wrapper: 'py-10'
      },
      lg: {
        wrapper: 'py-16'
      }
    }
  },
  defaultVariants: {
    title_size: 'md',
    spacer: 'lg'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
