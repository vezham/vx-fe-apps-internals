import { VariantProps, tv } from '@vezham/react-utils'

const tva = tv({
  slots: {
    base: 'fixed top-0 right-0 left-0',
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
    itemDescription: 'text-muted-foreground truncate text-xs',

    // New slots for additional elements
    mobileMenuToggle:
      'rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
    headerContainer: 'w-full',
    mobileHeader: 'flex flex-col',
    mobileMenuContainer: 'mb-4 flex items-center justify-between lg:hidden',
    mobileTitle: 'cursor-pointer text-lg font-semibold',
    mobileSpacer: 'w-10',
    searchContainer:
      'border-b border-neutral-200 pb-4 lg:hidden dark:border-neutral-800',
    searchWrapper: 'relative',
    searchIcon:
      'absolute top-1/2 left-3 -translate-y-1/2 transform text-neutral-400',
    searchInput:
      'w-full rounded-lg border border-neutral-300 bg-transparent py-2 pr-4 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-neutral-700',
    desktopTitle: 'hidden cursor-pointer lg:block',
    contentContainer: 'flex h-full flex-col md:flex-row',
    mobileSidebar:
      'mb-4 w-full border-b border-neutral-200 pb-4 lg:hidden dark:border-neutral-800',
    mobileSectionList: 'space-y-1',
    mobileSectionButton:
      'w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors',
    mobileSectionButtonActive: 'bg-black/10 dark:bg-white/5',
    mobileSectionButtonInactive: 'hover:bg-black/10 dark:hover:bg-white/5',
    sectionCount: 'rounded bg-black/20 px-2 py-1 text-xs dark:bg-neutral-700',
    desktopSidebar:
      'hidden w-1/3 border-r border-neutral-200 pr-5 lg:block dark:border-neutral-800',
    desktopSearchContainer:
      'hidden border-b border-neutral-200 pb-4 md:block dark:border-neutral-800',
    desktopNavigation: 'p-2',
    desktopSectionButton:
      'my-1 w-full rounded-lg border border-transparent px-3 py-3 text-left text-sm font-medium transition-colors',
    desktopSectionButtonActive: 'bg-black/10 dark:bg-white/5',
    desktopSectionButtonInactive: 'hover:bg-black/10 dark:hover:bg-white/5',
    contentArea: 'flex-1 overflow-auto lg:px-4',
    contentHeader: 'mb-4',
    contentTitle:
      'text-xl font-semibold text-neutral-900 dark:text-neutral-100',
    card: 'bg-default-100 flex flex-col justify-between p-[28px]',
    cardHeader: 'flex flex-col gap-2 p-0',
    cardTitle: 'text-foreground-700 text-left text-2xl leading-9 font-medium',
    cardBody: 'text-default-500 flex flex-col items-end justify-end gap-2 p-0',
    emptyState: 'py-10 text-center',
    emptyStateIcon: 'mx-auto mb-4 text-neutral-400',
    emptyStateText: 'text-neutral-500 dark:text-neutral-400',
    clearSearchButton:
      'mt-2 text-sm font-medium text-blue-600 dark:text-blue-400'
  },
  variants: {
    size: {
      sm: {
        drawerBody: 'px-4 pb-4',
        grid: 'gap-4',
        section: 'space-y-2',
        item: 'p-2',
        searchInput: 'py-1 text-xs',
        mobileSectionButton: 'px-2 py-2 text-xs',
        desktopSectionButton: 'px-2 py-2 text-xs',
        card: 'p-4',
        cardTitle: 'text-lg'
      },
      md: {
        drawerBody: 'px-6 pb-6',
        grid: 'gap-6',
        section: 'space-y-3 overflow-y-auto',
        item: 'p-3',
        searchInput: 'py-2 text-sm',
        mobileSectionButton: 'px-3 py-3 text-sm',
        desktopSectionButton: 'px-3 py-3 text-sm',
        card: 'p-[28px]',
        cardTitle: 'text-2xl'
      },
      lg: {
        drawerBody: 'px-8 pb-8',
        grid: 'gap-8',
        section: 'space-y-4',
        item: 'p-4',
        searchInput: 'py-3 text-base',
        mobileSectionButton: 'px-4 py-4 text-base',
        desktopSectionButton: 'px-4 py-4 text-base',
        card: 'p-8',
        cardTitle: 'text-3xl'
      }
    },
    columns: {
      1: {
        grid: 'grid-cols-1'
      },
      2: {
        grid: 'grid-cols-1 md:grid-cols-3'
      },
      3: {
        grid: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
      },
      4: {
        grid: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
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
