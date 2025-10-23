import React from 'react'

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

// =========================================================================================

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

export interface DropdownNavigationProps {
  navItems: NavbarItem[]
}

// ==================================================================================

export interface MobileNavOverlayProps {
  isOpen: boolean
  onClick: () => void
  variant?: 'light' | 'dark' | 'blur' // optional theme variant
}

// =================================================================================

export type SubMenuItem = {
  name: string
  description?: string
  icon: string
  link: string
}

export type NavItem = {
  more?: {
    link?: string
    label?: string
  }
  learn_more?: {
    link?: string
    label?: string
  }
  title: string
  items: SubMenuItem[]
}

export interface MobileSubmenuProps {
  subMenus: NavItem[]
}

// ============================================================================================

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

// ================================================================================================================================

export interface ThemeSwitcherProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'light' | 'dark'
}

export type IconProps = React.SVGProps<SVGSVGElement>
