// import { VariantProps, tv } from '@vezham/react-utils'
// const tva = tv({
//   slots: {
//     base: 'vcard-wrapper-trending flex h-40 flex-row gap-2 overflow-hidden bg-transparent p-4',
//     left: 'flex flex-col px-2',
//     right: 'flex w-80 flex-col',
//     content: 'line-clamp-2 text-ellipsis',
//     right_footer: 'flex items-center gap-2 p-0'
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
    base: 'flex h-40 flex-row gap-2 overflow-hidden bg-transparent p-4',
    left: 'flex flex-col px-2',
    right: 'flex flex-col',
    content: 'line-clamp-2 text-ellipsis',
    right_footer: 'flex items-center gap-2 p-0'
  },
  variants: {
    orientation: {
      horizontal: {
        base: 'flex-row'
      },
      vertical: {
        base: 'h-auto flex-col'
      }
    },
    size: {
      sm: {
        base: 'h-32 gap-1 p-2',
        left: 'px-1',
        right: 'w-64'
      },
      md: {
        base: 'h-40 gap-2 p-4',
        left: 'px-2',
        right: 'w-80'
      },
      lg: {
        base: 'h-48 gap-3 p-6',
        left: 'px-3',
        right: 'w-96'
      }
    },
    device: {
      mobile: {
        base: 'w-72 sm:w-80'
      },
      tablet: {
        base: 'md:w-72 lg:w-80'
      },
      laptop: {
        base: 'xl:w-96'
      },
      desktop: {
        base: '2xl:w-100'
      }
    }
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      size: 'sm',
      class: {
        base: 'h-auto'
      }
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: {
        base: 'h-auto'
      }
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: {
        base: 'h-auto'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
    device: 'desktop'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
