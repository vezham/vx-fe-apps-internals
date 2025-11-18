import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@vx-oss/react'

import { NavbarDrawer } from '../drawer'
import { NavbarTabs } from '../tabs'
import { ThemeSwitcher } from '../toggle'
import { NavbarLogo } from './navbar-logo'
import { Props, useProps } from './types'

const AppsIcon = ({ width = 18 }) => (
  <svg width={width} height={width} viewBox="0 0 20 20" fill="currentColor">
    {[4, 10, 16].map(x =>
      [4, 10, 16].map(y => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />)
    )}
  </svg>
)

const SearchIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5">
    <circle cx="11.5" cy="11.5" r="9.5" />
    <line x1="22" y1="22" x2="20" y2="20" strokeWidth="1.5" />
  </svg>
)

const AppNavbar = forwardRef<'div', Props>((props, ref) => {
  const [isMenuOpen] = useState(false)

  const {
    getBaseProps,
    getNavbarProps,
    getNavbarContentProps,
    getNavbarItemProps,
    getNavbarEndItemProps,
    getNavbarMenuEndItemProps,
    getFloatingTabsProps,
    navItems = [],
    tabItems = [],
    activeNavbarItem = '',
    selectedTab = '',
    activeItem,
    isDrawerOpen = false,
    onNavbarItemClick,
    onTabClick,
    onSelectionChange,
    onDrawerOpenChange,
    onDrawerClose
  } = useProps({ ...props, ref })

  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [areTabsCollapsed, setAreTabsCollapsed] = useState(false)

  const toggleSearch = useCallback(() => {
    setIsSearchExpanded(true)
    setAreTabsCollapsed(true)
  }, [])

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 80)
    }
  }, [isSearchExpanded])

  const closeSearch = () => {
    if (filterValue) {
      setFilterValue('')
    } else {
      setIsSearchExpanded(false)
      setAreTabsCollapsed(false)
    }
  }

  const toggleTabs = () => {
    setAreTabsCollapsed(prev => !prev)

    if (areTabsCollapsed) {
      setIsSearchExpanded(false)
    }
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div {...getBaseProps()} className="relative w-full">
      <Navbar {...getNavbarProps()}>
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close' : 'Open'} />
          <NavbarBrand>
            <NavbarLogo visible={false} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="start" className="hidden lg:flex">
          <NavbarBrand>
            <NavbarLogo visible={false} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center" {...getNavbarContentProps()}>
          {navItems.map(item => (
            <NavbarItem
              key={item.key}
              onClick={() => onNavbarItemClick?.(item.key)}
              {...getNavbarItemProps(activeNavbarItem === item.key)()}>
              <span>{item.label}</span>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="gap-1">
          <ThemeSwitcher />

          <div {...getNavbarEndItemProps()}>
            <NavbarItem>
              <Button as={Link} href="#" variant="light" size="sm">
                Login
              </Button>

              <Button as={Link} href="#" variant="flat" size="sm">
                Sign Up
              </Button>
            </NavbarItem>
          </div>
        </NavbarContent>

        {/* MOBILE MENU */}
        <NavbarMenu>
          {navItems.map(item => (
            <NavbarMenuItem
              key={item.key}
              onClick={() => onNavbarItemClick?.(item.key)}
              {...getNavbarItemProps(activeNavbarItem === item.key)()}>
              {item.label}
            </NavbarMenuItem>
          ))}

          <NavbarItem {...getNavbarMenuEndItemProps()}>
            <Button as={Link} href="#" variant="flat" size="sm">
              Login
            </Button>

            <Button as={Link} href="#" variant="solid" size="sm">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>

      <NavbarDrawer
        isOpen={isDrawerOpen}
        onOpenChange={onDrawerOpenChange}
        activeItem={activeItem}
        onClose={onDrawerClose}
      />

      <div {...getFloatingTabsProps()}>
        <motion.div
          animate={{
            width: areTabsCollapsed ? 40 : isMobile ? 450 : 450
          }}
          className={
            areTabsCollapsed
              ? ''
              : 'no-scrollbar scrollbar-hide overflow-x-auto overflow-y-hidden rounded-full whitespace-nowrap'
          }>
          {areTabsCollapsed ? (
            <button
              onClick={toggleTabs}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
              <AppsIcon width={18} />
            </button>
          ) : (
            <div>
              <NavbarTabs
                className="scrollbar-hide inline-flex"
                items={tabItems}
                selectedTab={selectedTab}
                onSelectionChange={onSelectionChange}
                onTabClick={onTabClick}
              />
            </div>
          )}
        </motion.div>

        <motion.div
          animate={{
            width: isSearchExpanded ? (isMobile ? '100%' : 400) : 40
          }}>
          {isSearchExpanded ? (
            <Input
              ref={searchInputRef}
              size="md"
              radius="full"
              placeholder="Search"
              value={filterValue}
              onValueChange={setFilterValue}
              endContent={
                <button onClick={closeSearch} className="focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              }
            />
          ) : (
            <Button
              isIconOnly
              radius="full"
              onPress={toggleSearch}
              className="h-10 w-10 rounded-full bg-black/10 dark:bg-white/10">
              <SearchIcon size={16} />
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  )
})

AppNavbar.displayName = 'AppNavbar'

export { AppNavbar }
