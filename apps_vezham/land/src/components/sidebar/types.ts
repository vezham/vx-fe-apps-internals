import {
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

export type Subcategory = {
  id: string
  name: string
}

export type Category = {
  id: string
  name: string
  subcategories?: Subcategory[]
}

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  categories: Category[]
  activeCategory: string
  activeSubcategory: string
  onCategoryClick: (categoryId: string) => void
  onSubcategoryClick: (subcategoryId: string) => void
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    className,
    classNames,
    categories,
    activeCategory,
    activeSubcategory,
    onCategoryClick,
    onSubcategoryClick,
    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  // === Slot Getters ===
  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getContainerProps: PropGetter = () => ({
    className: slots.container({ class: classNames?.container })
  })

  const getCategoryWrapperProps: PropGetter = () => ({
    className: slots.categoryWrapper({ class: classNames?.categoryWrapper })
  })

  const getCategoryHeaderProps =
    (isActive: boolean): PropGetter =>
    () => ({
      className: cn(
        slots.categoryHeader(),
        isActive ? slots.activeCategory() : slots.inactiveCategory()
      )
    })

  const getSubcategoriesWrapperProps: PropGetter = () => ({
    className: slots.subcategoriesWrapper({
      class: classNames?.subcategoriesWrapper
    })
  })

  const getSubcategoryProps =
    (isActive: boolean): PropGetter =>
    () => ({
      className: cn(
        slots.subcategory(),
        isActive ? slots.activeSubcategory() : slots.inactiveSubcategory()
      )
    })

  return {
    Component,
    domRef,
    slots,
    classNames,
    categories,
    activeCategory,
    activeSubcategory,
    onCategoryClick,
    onSubcategoryClick,
    getBaseProps,
    getContainerProps,
    getCategoryWrapperProps,
    getCategoryHeaderProps,
    getSubcategoriesWrapperProps,
    getSubcategoryProps
  }
}

export { useProps }
export type { Props as SidebarProps }
