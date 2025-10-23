export const styles = {
  wrapper: 'text-foreground h-full w-full flex-shrink-0',
  container: 'pt-20 pb-5 lg:py-3 lg:pb-0',
  categoryWrapper: 'mb-1',
  categoryHeader:
    'sticky top-0 z-10 flex cursor-pointer items-center justify-between overflow-y-auto px-5 py-3 text-sm backdrop-blur-sm transition-all duration-200 ease-out sm:text-base hover:bg-default-100',
  activeCategory: 'text-foreground font-medium',
  inactiveCategory: 'text-foreground-500',
  categoryName: 'font-medium select-none',
  chevron: 'transition-transform duration-300',
  subcategoriesWrapper: 'transition-all duration-300 ease-in-out',
  subcategory:
    'relative my-3 flex cursor-pointer items-center px-5 py-3 text-sm transition-all duration-200 ease-out',
  activeSubcategory: 'bg-default-100 text-primary font-medium',
  inactiveSubcategory: 'text-foreground-400 hover:bg-default-100'
}
