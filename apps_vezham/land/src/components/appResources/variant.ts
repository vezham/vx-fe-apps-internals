import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    // Resources Component
    resourcesBase: 'mx-auto flex max-w-2xl flex-col gap-4 px-5',
    resourcesTitle: 'text-xl',

    // Prompt Suggestions
    suggestionsBase:
      'flex flex-row flex-wrap items-center justify-center gap-2',
    suggestionButton: [
      'border-default-200 text-default-foreground',
      'hover:border-default-400 hover:text-foreground',
      'data-[hover=true]:border-default-400 data-[hover=true]:text-foreground',
      'h-8 gap-2 rounded-full border-1 px-3 transition-colors duration-150'
    ],
    suggestionButtonIcon: 'text-default-500',

    // Prompt Input Full Line
    promptInputFullLineBase:
      'rounded-medium bg-default-100 dark:bg-default-100 flex w-full flex-col items-start gap-0',
    assetsContainer: 'group flex gap-2 pr-3 pl-5',
    assetsContainerWithAssets: 'pt-4',
    inputWrapper: [
      'bg-transparent! shadow-none',
      'group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0',
      'pt-3 pr-3 pb-4 pl-5'
    ],
    input: '',
    innerWrapper: '',
    bottomBar: 'flex w-full flex-row items-center justify-between px-3 pb-3',
    fileButton: '',
    submitButton: 'cursor-pointer',
    submitButtonIcon: '[&>path]:stroke-[2px]',
    searchButton: 'cursor-pointer',
    searchButtonIcon: '[&>path]:stroke-[2px]',
    ButtonEnabled: 'text-primary-foreground',
    ButtonDisabled: 'text-default-600',
    badge: 'opacity-0 group-hover:opacity-100',
    badgeButton: '',
    image:
      'rounded-small border-small border-default-200/50 h-14 w-14 object-cover',
    tab: 'flex items-center justify-center py-8',
    btn: 'flex gap-2'
  },
  variants: {
    size: {
      sm: {
        resourcesBase: 'mt-6 max-w-lg',
        resourcesTitle: 'text-lg md:text-2xl',
        suggestionButton: 'h-7 gap-1 px-2 text-sm',
        suggestionButtonIcon: 'h-4 w-4',
        promptInputFullLineBase: 'rounded-md',
        assetsContainer: 'pr-2 pl-4',
        inputWrapper: 'pt-2 pr-2 pb-3 pl-4',
        bottomBar: 'px-2 pb-2',
        image: 'h-12 w-12'
      },
      md: {
        resourcesBase: 'mt-12 max-w-2xl',
        resourcesTitle: 'text-xl font-semibold md:text-3xl',
        suggestionButton: 'h-8 gap-2 px-3',
        suggestionButtonIcon: 'h-4.5 w-4.5',
        promptInputFullLineBase: 'rounded-medium',
        assetsContainer: 'pr-3 pl-5',
        inputWrapper: 'pt-3 pr-3 pb-4 pl-5',
        bottomBar: 'px-3 pb-3',
        image: 'h-14 w-14'
      },
      lg: {
        resourcesBase: 'mt-20 max-w-3xl',
        resourcesTitle: 'text-2xl',
        suggestionButton: 'h-9 gap-3 px-4',
        suggestionButtonIcon: 'h-5 w-5',
        promptInputFullLineBase: 'rounded-large',
        assetsContainer: 'pr-4 pl-6',
        inputWrapper: 'pt-4 pr-4 pb-5 pl-6',
        bottomBar: 'px-4 pb-4',
        image: 'h-16 w-16'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
