import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'text-foreground h-full w-full shrink-0',
    container: 'pt-20 pb-10 lg:pt-4 lg:pb-4',
    categoryWrapper: 'mb-1',
    categoryHeader:
      'hover:bg-default-100 sticky top-0 flex cursor-pointer items-center justify-between overflow-y-auto px-5 py-3 text-sm backdrop-blur-sm transition-all duration-200 ease-out sm:text-base',
    activeCategory: 'text-foreground font-medium',
    inactiveCategory: 'text-foreground-500',
    categoryName: 'font-medium select-none',
    chevron: 'transition-transform duration-300',
    subcategoriesWrapper: 'transition-all duration-300 ease-in-out',
    subcategory:
      'relative my-3 flex cursor-pointer items-center px-5 py-3 text-sm transition-all duration-200 ease-out',
    activeSubcategory: 'bg-default-100 text-primary font-medium',
    inactiveSubcategory: 'text-foreground-400 hover:bg-default-100'
  },
  variants: {
    variant: {
      default: {},
      compact: {
        container: 'pt-10 pb-3',
        categoryHeader: 'px-3 py-2 text-sm'
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
