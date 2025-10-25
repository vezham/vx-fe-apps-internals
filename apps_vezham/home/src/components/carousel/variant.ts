import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'relative w-full',
    scrollContainer:
      'flex w-full cursor-pointer snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6',
    card: 'group relative z-10 flex h-[30rem] w-[18rem] flex-none snap-start flex-col items-start justify-start overflow-hidden rounded-3xl transition-transform duration-300 lg:h-[40rem] lg:w-96',
    overlay:
      'pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/90 via-black/25 to-transparent',
    contentWrapper:
      'relative z-40 flex h-full w-full flex-col pt-[25px] pr-[19px] pb-[435px] pl-[25px]',
    headerWrapper: 'ml-[-11px] flex items-center',
    headerTitle:
      'text-[21px] font-medium text-white md:text-[24px] lg:text-[28px]',
    description: 'mb-3 text-[14px] font-normal text-white md:text-[17px]',
    buttonGroup: 'mb-auto flex items-center gap-4',
    openButton:
      'cursor-pointer rounded-full bg-white/90 px-2.5 py-0.75 text-[12px] font-medium text-black hover:bg-white',
    learnMoreButton:
      'hover:text-primary flex cursor-pointer items-center text-[14px] text-white',
    footerWrapper:
      'absolute bottom-[25px] left-[25px] z-50 flex flex-col items-start gap-1',
    footerTitle: 'text-[14px] font-semibold text-white/90',
    footerIcons: 'flex gap-2',
    mainImage:
      'absolute inset-0 z-10 h-full w-full transform bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
  },
  variants: {
    variant: {
      default: {},
      compact: {
        card: 'h-[25rem] w-[16rem] lg:h-[30rem] lg:w-[20rem]'
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
