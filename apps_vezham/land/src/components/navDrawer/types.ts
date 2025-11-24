import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface MegaSectionItem {
  icon?: string
  name: string
  description?: string
  link: string
}

export type Feature = {
  icon: string
  title: string
  description: string
}

export type Metric = {
  value: number
  title: string
  description: string
}

export type PricingPlan = {
  name: string
  price: string
  period: string
  features: string[]
  isPopular: boolean
}

export type SupportOption = {
  icon: string
  title: string
  description: string
}

export type NavbarItem = {
  key?: string
  label?: string
  href?: string
  subItems?: Array<{
    title?: string
    Items?: Array<{
      icon: string
      name: string
      description: string
      link: string
      detailedItems?: Array<{
        detailedDescription?: string
        image?: string
        features?: Feature[]
        metrics?: Metric[]
        pricing?: PricingPlan[]
        support?: SupportOption[]
      }>
    }>
  }>
}

interface MegaSection {
  title: string
  Items: MegaSectionItem[]
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  navitems?: NavbarItem[]
  activeItemKey?: string | null

  sections?: MegaSection[]
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    isOpen = false,
    onOpenChange,
    navitems = [],
    activeItemKey,
    sections = [],
    placement = 'top',
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getDrawerHeaderProps: PropGetter = () => ({
    className: slots.drawerHeader({ class: classNames?.drawerHeader })
  })

  const getHeaderTitleProps: PropGetter = () => ({
    className: slots.headerTitle({ class: classNames?.headerTitle })
  })

  const getDrawerBodyProps: PropGetter = () => ({
    className: slots.drawerBody({ class: classNames?.drawerBody })
  })

  const getGridProps: PropGetter = () => ({
    className: slots.grid({ class: classNames?.grid })
  })

  const getSectionProps: PropGetter = () => ({
    className: slots.section({ class: classNames?.section })
  })

  const getSectionTitleProps: PropGetter = () => ({
    className: slots.sectionTitle({ class: classNames?.sectionTitle })
  })

  const getItemsGridProps: PropGetter = () => ({
    className: slots.itemsGrid({ class: classNames?.itemsGrid })
  })

  const getItemProps: PropGetter = () => ({
    className: slots.item({ class: classNames?.item })
  })

  const getItemIconProps: PropGetter = () => ({
    className: slots.itemIcon({ class: classNames?.itemIcon })
  })

  const getItemContentProps: PropGetter = () => ({
    className: slots.itemContent({ class: classNames?.itemContent })
  })

  const getItemNameProps: PropGetter = () => ({
    className: slots.itemName({ class: classNames?.itemName })
  })

  const getItemDescriptionProps: PropGetter = () => ({
    className: slots.itemDescription({ class: classNames?.itemDescription })
  })

  // New getters for additional elements
  const getMobileMenuToggleProps: PropGetter = () => ({
    className: slots.mobileMenuToggle({ class: classNames?.mobileMenuToggle })
  })

  const getHeaderContainerProps: PropGetter = () => ({
    className: slots.headerContainer({ class: classNames?.headerContainer })
  })

  const getMobileHeaderProps: PropGetter = () => ({
    className: slots.mobileHeader({ class: classNames?.mobileHeader })
  })

  const getMobileMenuContainerProps: PropGetter = () => ({
    className: slots.mobileMenuContainer({
      class: classNames?.mobileMenuContainer
    })
  })

  const getMobileTitleProps: PropGetter = () => ({
    className: slots.mobileTitle({ class: classNames?.mobileTitle })
  })

  const getMobileSpacerProps: PropGetter = () => ({
    className: slots.mobileSpacer({ class: classNames?.mobileSpacer })
  })

  const getSearchContainerProps: PropGetter = () => ({
    className: slots.searchContainer({ class: classNames?.searchContainer })
  })

  const getSearchWrapperProps: PropGetter = () => ({
    className: slots.searchWrapper({ class: classNames?.searchWrapper })
  })

  const getSearchIconProps: PropGetter = () => ({
    className: slots.searchIcon({ class: classNames?.searchIcon })
  })

  const getSearchInputProps: PropGetter = () => ({
    className: slots.searchInput({ class: classNames?.searchInput })
  })

  const getDesktopTitleProps: PropGetter = () => ({
    className: slots.desktopTitle({ class: classNames?.desktopTitle })
  })

  const getContentContainerProps: PropGetter = () => ({
    className: slots.contentContainer({ class: classNames?.contentContainer })
  })

  const getMobileSidebarProps: PropGetter = () => ({
    className: slots.mobileSidebar({ class: classNames?.mobileSidebar })
  })

  const getMobileSectionListProps: PropGetter = () => ({
    className: slots.mobileSectionList({ class: classNames?.mobileSectionList })
  })

  const getMobileSectionButtonProps: PropGetter = (
    props: { isActive?: boolean } = {}
  ) => ({
    className: slots.mobileSectionButton({
      class: cn(
        props.isActive
          ? slots.mobileSectionButtonActive()
          : slots.mobileSectionButtonInactive(),
        classNames?.mobileSectionButton
      )
    })
  })

  const getSectionCountProps: PropGetter = () => ({
    className: slots.sectionCount({ class: classNames?.sectionCount })
  })

  const getDesktopSidebarProps: PropGetter = () => ({
    className: slots.desktopSidebar({ class: classNames?.desktopSidebar })
  })

  const getDesktopSearchContainerProps: PropGetter = () => ({
    className: slots.desktopSearchContainer({
      class: classNames?.desktopSearchContainer
    })
  })

  const getDesktopNavigationProps: PropGetter = () => ({
    className: slots.desktopNavigation({ class: classNames?.desktopNavigation })
  })

  const getDesktopSectionButtonProps: PropGetter = (
    props: { isActive?: boolean } = {}
  ) => ({
    className: slots.desktopSectionButton({
      class: cn(
        props.isActive
          ? slots.desktopSectionButtonActive()
          : slots.desktopSectionButtonInactive(),
        classNames?.desktopSectionButton
      )
    })
  })

  const getContentAreaProps: PropGetter = () => ({
    className: slots.contentArea({ class: classNames?.contentArea })
  })

  const getContentHeaderProps: PropGetter = () => ({
    className: slots.contentHeader({ class: classNames?.contentHeader })
  })

  const getContentTitleProps: PropGetter = () => ({
    className: slots.contentTitle({ class: classNames?.contentTitle })
  })

  const getCardProps: PropGetter = () => ({
    className: slots.card({ class: classNames?.card })
  })

  const getCardHeaderProps: PropGetter = () => ({
    className: slots.cardHeader({ class: classNames?.cardHeader })
  })

  const getCardTitleProps: PropGetter = () => ({
    className: slots.cardTitle({ class: classNames?.cardTitle })
  })

  const getCardBodyProps: PropGetter = () => ({
    className: slots.cardBody({ class: classNames?.cardBody })
  })

  const getEmptyStateProps: PropGetter = () => ({
    className: slots.emptyState({ class: classNames?.emptyState })
  })

  const getEmptyStateIconProps: PropGetter = () => ({
    className: slots.emptyStateIcon({ class: classNames?.emptyStateIcon })
  })

  const getEmptyStateTextProps: PropGetter = () => ({
    className: slots.emptyStateText({ class: classNames?.emptyStateText })
  })

  const getClearSearchButtonProps: PropGetter = () => ({
    className: slots.clearSearchButton({ class: classNames?.clearSearchButton })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getDrawerHeaderProps,
    getHeaderTitleProps,
    getDrawerBodyProps,
    getGridProps,
    getSectionProps,
    getSectionTitleProps,
    getItemsGridProps,
    getItemProps,
    getItemIconProps,
    getItemContentProps,
    getItemNameProps,
    getItemDescriptionProps,
    getMobileMenuToggleProps,
    getHeaderContainerProps,
    getMobileHeaderProps,
    getMobileMenuContainerProps,
    getMobileTitleProps,
    getMobileSpacerProps,
    getSearchContainerProps,
    getSearchWrapperProps,
    getSearchIconProps,
    getSearchInputProps,
    getDesktopTitleProps,
    getContentContainerProps,
    getMobileSidebarProps,
    getMobileSectionListProps,
    getMobileSectionButtonProps,
    getSectionCountProps,
    getDesktopSidebarProps,
    getDesktopSearchContainerProps,
    getDesktopNavigationProps,
    getDesktopSectionButtonProps,
    getContentAreaProps,
    getContentHeaderProps,
    getContentTitleProps,
    getCardProps,
    getCardHeaderProps,
    getCardTitleProps,
    getCardBodyProps,
    getEmptyStateProps,
    getEmptyStateIconProps,
    getEmptyStateTextProps,
    getClearSearchButtonProps,

    // otherprops
    isOpen,
    onOpenChange,
    navitems,
    activeItemKey,
    sections,
    placement
  }
}

export { useProps }
export type { Props, MegaSection, MegaSectionItem }
