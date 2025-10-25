import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'flex w-full flex-col pt-5',
    container: 'mx-auto max-w-7xl px-6 pb-8',
    gridWrapper: 'xl:grid xl:grid-cols-3 xl:gap-8',
    logoWrapper: 'flex flex-col items-start space-y-8 md:pr-8',
    tagline: 'text-small text-default-500 pt-5',
    socialWrapper: 'flex space-x-6',
    listTitle: 'text-small text-default-600 font-semibold',
    listUl: 'mt-6 space-y-4',
    listLink: 'text-default-400',
    subscribeWrapper:
      'rounded-medium bg-default-200/20 my-10 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2',
    subscribeTitle: 'text-small text-default-600 font-semibold',
    subscribeDesc: 'text-small text-default-400 mt-2',
    footerBottom: 'flex flex-wrap justify-center gap-2 pt-8',
    footerText: 'text-small text-default-400',
    alertWrapper: 'fixed right-4 bottom-4 z-50 w-full max-w-sm',
    alertTitle: 'text-green font-bold',
    alertDesc: 'text-green/80',
    socialIcon: 'text-default-400 hover:text-primary-500 w-6',
    gridTwoCol: 'mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0',
    gridInner: 'md:grid md:grid-cols-2 md:gap-8',
    colSpacing: 'mt-10 md:mt-0',
    form: 'mt-6 sm:flex sm:max-w-md lg:mt-0',
    inputWrapper: 'mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0'
  },
  variants: {
    theme: {
      light: {},
      dark: {}
    }
  },
  defaultVariants: {
    theme: 'dark'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
