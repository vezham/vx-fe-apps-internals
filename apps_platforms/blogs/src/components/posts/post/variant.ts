import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex flex-col gap-6',
    image: 'z-0 h-full w-full object-cover',
    content: 'flex flex-col gap-4',
    footerWrapper: [
      'flex flex-col items-start gap-4',
      'lg:flex-row lg:items-center lg:justify-between',
      'md:flex-row md:items-center md:justify-between',
      'sm:flex-row sm:items-center sm:justify-between'
    ],
    tagsContainer: 'flex flex-wrap gap-2',
    chip: 'cursor-pointer',
    divider: 'my-4',
    peopleVcard: '',
    feedbackRating: 'mt-5 flex-col items-center gap-3 text-lg'
  },
  variants: {
    size: {
      sm: {
        base: 'gap-4',
        content: 'gap-3',
        footerWrapper: 'gap-3'
      },
      md: {
        base: 'gap-6',
        content: 'gap-4',
        footerWrapper: 'gap-4'
      },
      lg: {
        base: 'gap-8',
        content: 'gap-6',
        footerWrapper: 'gap-6'
      }
    },
    spacing: {
      tight: {
        base: 'gap-4',
        content: 'gap-3',
        tagsContainer: 'gap-1'
      },
      normal: {
        base: 'gap-6',
        content: 'gap-4',
        tagsContainer: 'gap-2'
      },
      loose: {
        base: 'gap-8',
        content: 'gap-6',
        tagsContainer: 'gap-3'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    spacing: 'normal'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
