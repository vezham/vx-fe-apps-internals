import { VariantProps } from 'tailwind-variants'

import {
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import {
  dropdownProps,
  dropdownVariants,
  mobileNavOverlayVariants,
  mobileSubmenuVariants,
  navSlots,
  navVariants,
  navbarProps,
  navbarVariants,
  themeSwitcherVariants
} from './variant'

export interface SubMenuItems {
  icon: string
  name: string
  description: string
  link: string
}

export interface SubMenus {
  title: string
  items: SubMenuItems[]
  learn_more?: { label: string; link: string }
  more?: { label: string; link: string }
}

export interface NavItems {
  id: number
  label: string
  link?: string
  subMenus?: SubMenus[]
}

interface navProps extends navbarProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<navSlots>
  showPromoBanner?: boolean
}

export type SubMenusItem = {
  name: string
  description: string
  icon: string
  link: string
}

export type LinkInfo = {
  label: string
  link: string
}

export type SubMenu = {
  title: string
  more?: LinkInfo
  learn_more?: LinkInfo
  items: SubMenusItem[]
}

export type NavbarItem = {
  id: number
  label: string
  link?: string
  subMenus?: SubMenu[]
}

export type SubMenusItems = {
  name: string
  description?: string
  icon: string
  link: string
}

export type MobNavItems = {
  more?: { link?: string; label?: string }
  learn_more?: { link?: string; label?: string }
  title: string
  items: SubMenusItems[]
}

export interface NavbarProps {
  children: React.ReactNode
  className?: string
}

export interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
  onMouseLeave?: () => void
}

export interface NavItemsProps {
  items: { name: string; link: string }[]
  className?: string
  onItemClick?: () => void
}

export interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

export interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export interface NavbarButtonProps {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export interface NavbarLogoProps {
  visible?: boolean
}

interface MobileSubmenuProps
  extends VariantProps<typeof mobileSubmenuVariants> {
  subMenus: MobNavItems[]
  theme?: 'light' | 'dark'
}

interface dropdownProps extends VariantProps<typeof dropdownVariants> {
  navItems: NavbarItem[]
}

interface MobileNavOverlayProps
  extends VariantProps<typeof mobileNavOverlayVariants> {
  isOpen: boolean
  onClick: () => void
}

interface ThemeSwitcherProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'light' | 'dark'
}

export type IconProps = React.SVGProps<SVGSVGElement>

const useNavProps = (originalProps: navProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    navVariants.variantKeys
  )
  const { as, id, ref, className, classNames, showPromoBanner, ...otherProps } =
    props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)

  const slots = navVariants(variantProps)

  const getContainerProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.container({ class: cn(classNames?.container, className) }),
    ...otherProps
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    showPromoBanner,
    getContainerProps,

    getBodyProps: () => ({
      className: slots.body({ class: classNames?.body })
    }),
    getLogoWrapperProps: () => ({
      className: slots.logoWrapper({ class: classNames?.logoWrapper })
    }),
    getCenterProps: () => ({
      className: slots.center({ class: classNames?.center })
    }),
    getActionsProps: () => ({
      className: slots.actions({ class: classNames?.actions })
    }),
    getOverlayProps: () => ({
      className: slots.overlay({ class: classNames?.overlay })
    }),
    getMenuProps: () => ({
      className: slots.menu({ class: classNames?.menu })
    }),
    getMenuScrollProps: () => ({
      className: slots.menuScroll({ class: classNames?.menuScroll })
    }),
    getMenuItemWrapperProps: () => ({
      className: slots.menuItemWrapper({ class: classNames?.menuItemWrapper })
    }),
    getMenuItemProps: () => ({
      className: slots.menuItem({ class: classNames?.menuItem })
    }),
    getMenuFooterProps: () => ({
      className: slots.menuFooter({ class: classNames?.menuFooter })
    }),
    getIconChevronProps: () => ({
      className: slots.iconChevron({ class: classNames?.iconChevron })
    }),
    getTitleProps: () => ({
      className: slots.title({ class: classNames?.title })
    }),
    getLinkProps: () => ({
      className: slots.link({ class: classNames?.link })
    })
  }
}

const useDropdownProps = (props: dropdownProps) => {
  const slots = dropdownVariants(props)

  return {
    ...slots,
    navItems: props.navItems,
    getContainerProps: () => ({ className: slots.container() }),
    getInnerWrapperProps: () => ({ className: slots.innerWrapper() }),
    getNavListProps: () => ({ className: slots.navList() }),
    getNavButtonProps: () => ({ className: slots.navButton() }),
    getDropdownMenuProps: () => ({ className: slots.dropdownMenu() }),
    getMenuContentProps: () => ({ className: slots.menuContent() }),
    getMenuContentMoreProps: () => ({ className: slots.menuContentMore() }),
    getSubmenuWrapperProps: () => ({ className: slots.submenuWrapper() }),
    getSubmenuTitleProps: () => ({ className: slots.submenuTitle() }),
    getSubmenuItemProps: () => ({ className: slots.submenuItem() }),
    getSubmenuIconProps: () => ({ className: slots.submenuIcon() }),
    getSubmenuNameProps: () => ({ className: slots.submenuName() }),
    getSubmenuDescProps: () => ({ className: slots.submenuDesc() }),
    getExploreAllWrapperProps: () => ({ className: slots.exploreAllWrapper() }),
    getExploreAllLinkProps: () => ({ className: slots.exploreAllLink() }),
    getExploreAllIconProps: () => ({ className: slots.exploreAllIcon() }),
    getExploreAllNameProps: () => ({ className: slots.exploreAllName() }),
    getMoreItemLinkProps: () => ({ className: slots.moreItemLink() }),
    getMoreItemLabelProps: () => ({ className: slots.moreItemLabel() })
  }
}

const useMobOverlayProps = (originalProps: MobileNavOverlayProps) => {
  const { isOpen, onClick, variant, size } = originalProps
  const styles = mobileNavOverlayVariants({ variant, size })

  return {
    isOpen,
    onClick,
    getOverlayProps: () => ({
      className: styles.overlay,
      onClick,
      'aria-hidden': true
    })
  }
}

const useMobileSubmenuProps = (props: MobileSubmenuProps) => {
  const slots = mobileSubmenuVariants({ theme: props.theme })

  return {
    subMenus: props.subMenus,
    getContainerProps: () => ({ className: slots.container() }),
    getSectionProps: () => ({ className: slots.section() }),
    getTitleProps: () => ({ className: slots.title() }),
    getListProps: () => ({ className: slots.list() }),
    getLinkProps: () => ({ className: slots.link() }),
    getIconWrapperProps: () => ({ className: slots.iconWrapper() }),
    getIconProps: () => ({ className: slots.icon() }),
    getLabelProps: () => ({ className: slots.label() }),
    getDescriptionProps: () => ({ className: slots.description() }),
    getDividerProps: () => ({ className: slots.divider() })
  }
}

const useNavbarProps = (props: {
  navbarClass?: string
  navBodyClass?: string
  mobileNavClass?: string
}) => {
  const slots = navbarVariants

  return {
    getWrapperProps: () => ({
      className: slots.base.wrapper + ' ' + (props.navbarClass || '')
    }),
    getNavBodyProps: (visible?: boolean) => ({
      className:
        slots.base.navBody +
        ' ' +
        (visible ? slots.variants.navBody.visible : '') +
        ' ' +
        (props.navBodyClass || '')
    }),
    getNavItemsProps: () => ({ className: slots.base.navItems }),
    getNavItemProps: () => ({ className: slots.base.navItem }),
    getMobileNavProps: (visible?: boolean) => ({
      className:
        slots.base.mobileNav +
        ' ' +
        (visible ? slots.variants.mobileNav.visible : '') +
        ' ' +
        (props.mobileNavClass || '')
    }),
    getMobileNavHeaderProps: () => ({ className: slots.base.mobileNavHeader }),
    getMobileNavMenuProps: () => ({ className: slots.base.mobileNavMenu }),
    getMobileNavToggleProps: () => ({ className: slots.base.mobileNavToggle }),
    getNavbarLogoProps: () => ({ className: slots.base.navbarLogo }),
    getButtonProps: (
      variant?: keyof typeof navbarVariants.variants.button.variant,
      size?: keyof typeof navbarVariants.variants.button.size,
      className?: string
    ) => {
      const v = variant || navbarVariants.defaultVariants.button.variant
      const s = size || navbarVariants.defaultVariants.button.size

      return {
        className: [
          navbarVariants.base.buttonBase,
          navbarVariants.variants.button.variant[v],
          navbarVariants.variants.button.size[s],
          className
        ]
          .filter(Boolean)
          .join(' ')
      }
    },
    getNavItemHoverProps: () => ({ className: slots.variants.navItemHover }),
    getNavbarLogoHeight: (visible?: boolean) =>
      visible
        ? navbarVariants.variants.navbarLogoHeight.small
        : navbarVariants.variants.navbarLogoHeight.large
  }
}

const useThemeSwitcherProps = (props: {
  size?: keyof typeof themeSwitcherVariants.variants.size
  color?: keyof typeof themeSwitcherVariants.variants.color
}) => {
  const size = props.size || themeSwitcherVariants.defaultVariants.size
  const color = props.color || themeSwitcherVariants.defaultVariants.color

  return {
    getWrapperProps: (className?: string) => ({
      className: [
        themeSwitcherVariants.base.wrapper,
        themeSwitcherVariants.variants.size[size].wrapper,
        themeSwitcherVariants.variants.color[color].wrapper,
        className
      ]
        .filter(Boolean)
        .join(' ')
    }),
    getSwitchProps: (className?: string) => ({
      className: [
        themeSwitcherVariants.base.switch,
        themeSwitcherVariants.variants.size[size].switch,
        themeSwitcherVariants.variants.color[color].switch,
        className
      ]
        .filter(Boolean)
        .join(' ')
    })
  }
}

export {
  useNavProps,
  useDropdownProps,
  useMobOverlayProps,
  useMobileSubmenuProps,
  useNavbarProps,
  useThemeSwitcherProps
}
export type {
  navProps,
  dropdownProps,
  MobileNavOverlayProps,
  MobileSubmenuProps,
  ThemeSwitcherProps
}
