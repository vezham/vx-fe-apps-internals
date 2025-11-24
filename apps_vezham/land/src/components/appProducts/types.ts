import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import {
  ProductCompTvProps,
  ProductCompTvSlots,
  productCompTva
} from './variant'

interface ProductItem {
  name: string
  description?: string
  icon: string
  detailedItems?: Array<{
    image: string
  }>
}

interface NavSubItem {
  title: string
  key: string
  Items: ProductItem[]
}

interface PersonalizeData {
  navItems?: Array<{
    key: string
    subItems: NavSubItem[]
  }>
}

interface ProductCompProps extends ProductCompTvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<ProductCompTvSlots>
}

const useProductCompProps = (originalProps: ProductCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    productCompTva.variantKeys
  )

  const { as, id, ref, children, className, classNames, ...otherProps } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = productCompTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  // Floating Navigation
  const getFloatingNavProps: PropGetter = () => ({
    className: slots.floatingNav({ class: classNames?.floatingNav })
  })

  const getTabsButtonProps: PropGetter = () => ({
    className: slots.tabsButton({ class: classNames?.tabsButton }),
    isIconOnly: true,
    variant: 'flat'
  })

  const getTabsContentWrapProps: PropGetter = () => ({
    className: slots.tabsContentWrap({ class: classNames?.tabsContentWrap })
  })

  // Search Section
  const getSearchSectionProps: PropGetter = () => ({
    className: slots.searchSection({ class: classNames?.searchSection })
  })

  const getSearchInputProps: PropGetter = () => ({
    className: slots.searchInput({ class: classNames?.searchInput }),
    size: 'md',
    radius: 'full',
    placeholder: 'Search products...',
    variant: 'flat'
  })

  const getSearchCloseButtonProps: PropGetter = () => ({
    className: slots.searchCloseButton({ class: classNames?.searchCloseButton })
  })

  const getSearchButtonProps: PropGetter = () => ({
    className: slots.searchButton({ class: classNames?.searchButton }),
    isIconOnly: true,
    radius: 'full',
    variant: 'flat'
  })

  // Products Container
  const getProductsContainerProps: PropGetter = () => ({
    className: slots.productsContainer({ class: classNames?.productsContainer })
  })

  const getCategoryTitleProps: PropGetter = () => ({
    className: slots.categoryTitle({ class: classNames?.categoryTitle })
  })

  const getCategoryNameProps: PropGetter = () => ({
    className: slots.categoryName({ class: classNames?.categoryName })
  })

  const getCategoryDescriptionProps: PropGetter = () => ({
    className: slots.categoryDescription({
      class: classNames?.categoryDescription
    })
  })

  // Products Grid
  const getProductsGridProps: PropGetter = () => ({
    className: slots.productsGrid({ class: classNames?.productsGrid })
  })

  // Product Card
  const getProductCardProps: PropGetter = () => ({
    className: slots.productCard({ class: classNames?.productCard }),
    isPressable: true
  })

  const getProductImageContainerProps: PropGetter = () => ({
    className: slots.productImageContainer({
      class: classNames?.productImageContainer
    })
  })

  const getProductImageProps: PropGetter = () => ({
    className: slots.productImage({ class: classNames?.productImage })
  })

  const getProductGradientProps: PropGetter = () => ({
    className: slots.productGradient({ class: classNames?.productGradient })
  })

  const getProductCardHeaderProps: PropGetter = () => ({
    className: slots.productCardHeader({ class: classNames?.productCardHeader })
  })

  const getProductIconProps: PropGetter = () => ({
    className: slots.productIcon({ class: classNames?.productIcon }),
    width: 20,
    height: 20
  })

  const getProductCategoryProps: PropGetter = () => ({
    className: slots.productCategory({ class: classNames?.productCategory })
  })

  const getProductTitleProps: PropGetter = () => ({
    className: slots.productTitle({ class: classNames?.productTitle })
  })

  // Search Not Found
  const getSearchNotFoundProps: PropGetter = () => ({
    className: slots.searchNotFound({ class: classNames?.searchNotFound })
  })

  const getSearchNotFoundIconProps: PropGetter = () => ({
    className: slots.searchNotFoundIcon({
      class: classNames?.searchNotFoundIcon
    }),
    width: 48
  })

  const getSearchNotFoundTitleProps: PropGetter = () => ({
    className: slots.searchNotFoundTitle({
      class: classNames?.searchNotFoundTitle
    })
  })

  const getSearchNotFoundDescriptionProps: PropGetter = () => ({
    className: slots.searchNotFoundDescription({
      class: classNames?.searchNotFoundDescription
    })
  })

  // Empty State
  const getEmptyStateProps: PropGetter = () => ({
    className: slots.emptyState({ class: classNames?.emptyState })
  })

  const getEmptyStateIconProps: PropGetter = () => ({
    className: slots.emptyStateIcon({ class: classNames?.emptyStateIcon }),
    width: 48,
    height: 48
  })

  const getEmptyStateTitleProps: PropGetter = () => ({
    className: slots.emptyStateTitle({ class: classNames?.emptyStateTitle })
  })

  const getEmptyStateDescriptionProps: PropGetter = () => ({
    className: slots.emptyStateDescription({
      class: classNames?.emptyStateDescription
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getFloatingNavProps,
    getTabsContentWrapProps,
    getTabsButtonProps,

    getSearchSectionProps,
    getSearchInputProps,
    getSearchCloseButtonProps,
    getSearchButtonProps,
    getProductsContainerProps,
    getCategoryTitleProps,
    getCategoryNameProps,
    getCategoryDescriptionProps,
    getProductsGridProps,
    getProductCardProps,
    getProductImageContainerProps,
    getProductImageProps,
    getProductGradientProps,
    getProductCardHeaderProps,
    getProductIconProps,
    getProductCategoryProps,
    getProductTitleProps,
    getSearchNotFoundProps,
    getSearchNotFoundIconProps,
    getSearchNotFoundTitleProps,
    getSearchNotFoundDescriptionProps,
    getEmptyStateProps,
    getEmptyStateIconProps,
    getEmptyStateTitleProps,
    getEmptyStateDescriptionProps
  }
}

export { useProductCompProps }
export type { ProductCompProps, ProductItem, NavSubItem, PersonalizeData }
