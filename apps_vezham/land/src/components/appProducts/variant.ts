import { VariantProps, tv } from '@vezham/react-utils'

const productCompTva = tv({
  slots: {
    base: ' ',

    floatingNav:
      'sticky top-20 right-0 left-0 z-20 flex items-center justify-center gap-2 px-5',

    tabsContentWrap:
      'no-scrollbar scrollbar-hide overflow-x-auto overflow-y-hidden rounded-full whitespace-nowrap',
    tabsButton:
      'flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-neutral-800',

    searchSection: '',
    searchInput: '',
    searchCloseButton: 'focus:outline-none',
    searchButton: 'h-10 w-10 rounded-full bg-white dark:bg-neutral-800',

    productsContainer:
      'container mx-auto mt-24 max-w-5xl px-4 py-8 text-center 2xl:max-w-6xl',
    categoryTitle: 'mb-8',
    categoryName: 'text-foreground text-3xl font-bold',
    categoryDescription: 'text-default-600 mt-2',

    productsGrid:
      'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',

    productCard:
      'group relative overflow-hidden transition-transform duration-200 hover:scale-105',
    productImageContainer: 'relative h-[250px] w-full overflow-hidden',
    productImage: 'z-0 h-full w-full object-cover',
    productGradient: [
      'absolute inset-0 z-0',
      'bg-gradient-to-b from-black/30 via-black/70 to-black/90'
    ],
    productCardHeader: 'absolute top-0 right-0 left-0 flex-col items-start p-4',
    productIcon: 'mb-4 text-white',
    productCategory: 'text-tiny text-default-500 font-bold uppercase',
    productTitle: 'text-large line-clamp-2 font-medium text-white',

    searchNotFound:
      'flex flex-col items-center justify-center py-12 text-center',
    searchNotFoundIcon: 'text-default-400 mb-4',
    searchNotFoundTitle: 'text-foreground mb-2 text-lg font-semibold',
    searchNotFoundDescription: 'text-default-600 max-w-md',

    emptyState: 'py-12 text-center',
    emptyStateIcon: 'text-default-400 mx-auto mb-4',
    emptyStateTitle: 'text-foreground mb-2 text-xl font-semibold',
    emptyStateDescription: 'text-default-500'
  },
  variants: {
    size: {
      sm: {
        categoryName: 'text-2xl',
        productTitle: 'text-medium',
        searchNotFoundTitle: 'text-base',
        emptyStateTitle: 'text-lg'
      },
      md: {
        categoryName: 'text-3xl',
        productTitle: 'text-large',
        searchNotFoundTitle: 'text-lg',
        emptyStateTitle: 'text-xl'
      },
      lg: {
        categoryName: 'text-4xl',
        productTitle: 'text-xl',
        searchNotFoundTitle: 'text-xl',
        emptyStateTitle: 'text-2xl'
      }
    },
    variant: {
      default: {
        productCard: 'bg-content1',
        tabsButton: 'bg-default-100',
        searchButton: 'bg-default-100'
      },
      elevated: {
        productCard: 'bg-content1 shadow-medium',
        tabsButton: 'bg-content1 shadow-small',
        searchButton: 'bg-content1 shadow-small'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type ProductCompTvProps = VariantProps<typeof productCompTva>
type ProductCompTvSlots = keyof ReturnType<typeof productCompTva>

export { productCompTva }
export type { ProductCompTvProps, ProductCompTvSlots }
