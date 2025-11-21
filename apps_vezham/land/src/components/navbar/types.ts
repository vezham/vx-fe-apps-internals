import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { DropdownItem } from '../tabDrawer/types'
import { TabItem } from '../tabs/types'
import { tvProps, tvSlots, tva } from './variant'

interface NavbarItem {
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
    }>
  }>
}

interface NavbarLogoProps {
  visible: boolean
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  navItems?: NavbarItem[]
  tabItems?: TabItem[]
  isMenuOpen?: boolean
  onMenuOpenChange?: (open: boolean) => void
  activeNavbarItem?: string

  selectedTab?: string
  activeItem?: {
    href?: string
    label: string
    subItems?: DropdownItem[]
  }
  isDrawerOpen?: boolean
  onNavbarItemClick?: (key: string) => void
  onTabClick?: (item: TabItem) => void
  onSelectionChange?: (key: string) => void
  onDrawerOpenChange?: (open: boolean) => void
  onDrawerClose?: () => void
  children?: React.ReactNode
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
    navItems = [],
    tabItems = [],
    isMenuOpen = false,
    onMenuOpenChange,
    activeNavbarItem = '',
    selectedTab = '',
    activeItem,
    isDrawerOpen = false,
    onNavbarItemClick,
    onTabClick,
    onSelectionChange,
    onDrawerOpenChange,
    onDrawerClose,
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

  const getNavbarProps: PropGetter = () => ({
    isMenuOpen,
    onMenuOpenChange,
    className: slots.navbar({ class: classNames?.navbar })
  })

  const getNavbarContentProps: PropGetter = () => ({
    className: slots.navbarContent({ class: classNames?.navbarContent })
  })

  const getNavbarEndItemProps: PropGetter = () => ({
    className: slots.navbarContent({ class: classNames?.navbarEnd })
  })

  const getNavbarMenuEndItemProps: PropGetter = () => ({
    className: slots.navbarMenuEnd({ class: classNames?.navbarMenuEnd })
  })

  const getNavbarItemProps = (isActive: boolean): PropGetter => {
    return (props = {}) => ({
      ...props,
      className: slots.navbarItem({
        class: cn(
          isActive ? slots.activeNavbarItem() : slots.inactiveNavbarItem(),
          classNames?.navbarItem,
          props.className
        )
      })
    })
  }

  const getFloatingTabsProps: PropGetter = () => ({
    className: slots.floatingTabs({ class: classNames?.floatingTabs })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getNavbarProps,
    getNavbarContentProps,
    getNavbarItemProps,
    getNavbarEndItemProps,
    getNavbarMenuEndItemProps,
    getFloatingTabsProps,
    navItems,
    tabItems,
    isMenuOpen,
    onMenuOpenChange,
    activeNavbarItem,
    selectedTab,
    activeItem,
    isDrawerOpen,
    onNavbarItemClick,
    onTabClick,
    onSelectionChange,
    onDrawerOpenChange,
    onDrawerClose
  }
}

export { useProps }

export type { NavbarItem, NavbarLogoProps, Props, TabItem }
