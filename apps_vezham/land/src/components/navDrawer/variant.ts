import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: '',
    drawerContent: '',
    drawerHeader: 'flex items-center justify-between gap-4',
    headerTitle: 'text-lg font-semibold',
    drawerBody: 'px-6 pb-6',
    grid: 'grid grid-cols-1 gap-6 md:grid-cols-2',
    section: 'space-y-3',
    sectionTitle: 'text-sm font-semibold',
    itemsGrid: 'grid grid-cols-1 gap-2',
    item: 'flex items-start gap-3 rounded-md p-3 transition hover:bg-neutral-100 dark:hover:bg-neutral-800',
    itemIcon: 'flex-shrink-0',
    itemContent: 'min-w-0',
    itemName: 'truncate text-sm font-medium',
    itemDescription: 'text-muted-foreground truncate text-xs'
  },
  variants: {
    size: {
      sm: {
        drawerBody: 'px-4 pb-4',
        grid: 'gap-4',
        section: 'space-y-2',
        item: 'p-2'
      },
      md: {
        drawerBody: 'px-6 pb-6',
        grid: 'gap-6',
        section: 'space-y-3',
        item: 'p-3'
      },
      lg: {
        drawerBody: 'px-8 pb-8',
        grid: 'gap-8',
        section: 'space-y-4',
        item: 'p-4'
      }
    },
    columns: {
      1: {
        grid: 'grid-cols-1'
      },
      2: {
        grid: 'grid-cols-1 md:grid-cols-2'
      },
      3: {
        grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      },
      4: {
        grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    columns: 3
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
