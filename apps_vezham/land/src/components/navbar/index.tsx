import { useRouter } from '@tanstack/react-router'
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

import { usePersonalize } from '../../store/useHomeSection'
import { NavDrawer } from '../navDrawer'
import { MegaSection } from '../navDrawer/types'
import { TabDrawer } from '../tabDrawer'
import { NavbarTabs } from '../tabs'
import { ThemeSwitcher } from '../toggle'
import { NavbarLogo } from './navbar-logo'
import { Props, useProps } from './types'

const AppsIcon = ({ width = 18 }: { width?: number }) => (
  <svg width={width} height={width} viewBox="0 0 20 20" fill="currentColor">
    {[4, 10, 16].map(x =>
      [4, 10, 16].map(y => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />)
    )}
  </svg>
)

const SearchIcon = ({ size = 18 }: { size?: number }) => (
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

const Chevron = ({ open }: { open: boolean }) => (
  <motion.svg
    initial={false}
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor">
    <path
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8l4 4 4-4"
    />
  </motion.svg>
)

const AppNavbar = forwardRef<'div', Props>((props, ref) => {
  const { data: personal } = usePersonalize.list({})
  const router = useRouter()
  const Items = personal?.navItems ?? []

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
    onDrawerClose,
    children
  } = useProps({ ...props, ref })

  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchSectionRef = useRef<HTMLDivElement>(null) // Add this ref

  const [areTabsCollapsed, setAreTabsCollapsed] = useState(false)

  // drawer state (for any navItem with subItems)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerSections, setDrawerSections] = useState<MegaSection[]>([])
  const [activeDropdownKey, setActiveDropdownKey] = useState<string | null>(
    null
  )
  const [activeNavItemKey, setActiveNavItemKey] = useState<string | null>(null)

  const closeSearch = () => {
    if (filterValue) {
      setFilterValue('')
    } else {
      setIsSearchExpanded(false)
      setAreTabsCollapsed(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (isSearchExpanded) {
        closeSearch()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isSearchExpanded])

  const toggleSearch = useCallback(() => {
    setIsSearchExpanded(true)
    setAreTabsCollapsed(true)
  }, [])

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 80)
    }
  }, [isSearchExpanded])

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If search is expanded and click is outside search section, close search
      if (isSearchExpanded && searchSectionRef.current) {
        if (!searchSectionRef.current.contains(event.target as Node)) {
          closeSearch()
        }
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchExpanded])

  const toggleTabs = () => {
    setAreTabsCollapsed(prev => !prev)

    if (areTabsCollapsed) {
      setIsSearchExpanded(false)
    }
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const handleNavItemClick = (item: any) => {
    const hasSub = Array.isArray(item.subItems) && item.subItems.length > 0

    if (hasSub) {
      if (activeDropdownKey === item.key) {
        setActiveDropdownKey(null)
        setDrawerOpen(false)
        setDrawerSections([])
        setActiveNavItemKey(null)
      } else {
        setActiveDropdownKey(item.key)
        setDrawerSections(item.subItems as MegaSection[])
        setDrawerOpen(true)
        setActiveNavItemKey(item.key)
      }
    } else {
      if (item.href) {
        router.navigate({ to: item.href })
      }

      onNavbarItemClick?.(item.key)

      setActiveDropdownKey(null)
      setDrawerOpen(false)
      setDrawerSections([])
      setActiveNavItemKey(null)
    }
  }

  const handleDrawerOpenChange = (open: boolean) => {
    setDrawerOpen(open)
    if (!open) {
      setActiveDropdownKey(null)
      setDrawerSections([])
    }
  }

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
          {navItems.map((item: any) => {
            const hasSub = !!item.subItems && Array.isArray(item.subItems)
            const isActive =
              activeNavbarItem === item.key || activeDropdownKey === item.key
            return (
              <NavbarItem
                key={item.key}
                onClick={() => handleNavItemClick(item)}
                {...getNavbarItemProps(activeNavbarItem === item.key)()}
                className="flex items-center gap-2">
                <span
                  className={
                    isActive
                      ? 'text-primary scale-115 cursor-pointer font-bold'
                      : 'cursor-pointer'
                  }>
                  {item.label}
                </span>
                {hasSub && (
                  <span className="flex items-center">
                    <Chevron open={activeDropdownKey === item.key} />
                  </span>
                )}
              </NavbarItem>
            )
          })}
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          <ThemeSwitcher />

          <div {...getNavbarEndItemProps()}>
            <NavbarItem>
              <Button as={Link} href="/login" variant="light" size="sm">
                Sign In
              </Button>

              <Button
                className="ml-2"
                as={Link}
                href="/signup"
                variant="solid"
                color="primary"
                size="sm">
                SignUp Now
              </Button>
            </NavbarItem>
          </div>
        </NavbarContent>

        <NavbarMenu>
          {navItems.map((item: any) => (
            <NavbarMenuItem
              key={item.key}
              onClick={() => handleNavItemClick(item)}
              {...getNavbarItemProps(activeNavbarItem === item.key)()}>
              {item.label}
            </NavbarMenuItem>
          ))}

          <NavbarItem {...getNavbarMenuEndItemProps()}>
            <Button
              className="sm:w-1/2"
              as={Link}
              href="/login"
              variant="flat"
              size="sm">
              Sign In
            </Button>

            <Button
              className="sm:w-1/2"
              as={Link}
              href="/signup"
              variant="solid"
              color="primary"
              size="sm">
              SignUp Now
            </Button>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>

      <TabDrawer
        isOpen={isDrawerOpen}
        onOpenChange={onDrawerOpenChange}
        activeItem={activeItem}
        onClose={onDrawerClose}
      />

      <NavDrawer
        isOpen={drawerOpen}
        onOpenChange={handleDrawerOpenChange}
        sections={drawerSections}
        navitems={Items}
        activeItemKey={activeNavItemKey}
      />

      <div>{children}</div>

      <div {...getFloatingTabsProps()}>
        <motion.div
          animate={{
            width: areTabsCollapsed ? 40 : isMobile ? 435 : 435
          }}
          className={
            areTabsCollapsed
              ? ''
              : 'no-scrollbar scrollbar-hide overflow-x-auto overflow-y-hidden rounded-full whitespace-nowrap'
          }>
          {areTabsCollapsed ? (
            <Button
              isIconOnly
              variant="flat"
              onPress={toggleTabs}
              className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-neutral-800">
              <AppsIcon width={16} />
            </Button>
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

        {/* Add ref to the search section */}
        <motion.div
          ref={searchSectionRef} // Add the ref here
          animate={{
            width: isSearchExpanded ? (isMobile ? '100%' : 435) : 40
          }}>
          {isSearchExpanded ? (
            <Input
              ref={searchInputRef}
              size="md"
              radius="full"
              placeholder="Search"
              value={filterValue}
              variant="flat"
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
              variant="flat"
              onPress={toggleSearch}
              className="h-10 w-10 rounded-full dark:bg-neutral-800">
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
