import { Link as RouterLink } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { Accordion, AccordionItem } from '@vx-oss/react'

import { NAV_ITEMS } from './data'
import { DropdownNavigation } from './dropdown-navigation'
import { MobileSubmenu } from './mobile-submenu'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo
} from './resizable-navbar'
import { ThemeSwitcher } from './theme-switcher'
import { useNavProps } from './types'

const Navbars = (originalProps: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const {
    getContainerProps,
    getBodyProps,
    getLogoWrapperProps,
    getCenterProps,
    getActionsProps,
    getOverlayProps,
    getMenuProps,
    getMenuScrollProps,
    getMenuItemWrapperProps,
    getMenuItemProps,
    getMenuFooterProps,
    getIconChevronProps,
    getTitleProps,
    getLinkProps,
    showPromoBanner
  } = useNavProps(originalProps)

  const navbarTopClass = showPromoBanner ? 'sm:top-30 md:top-25' : 'sm:top-13'

  useEffect(() => {
    document.documentElement.style.overflow = isMobileMenuOpen ? 'hidden' : ''
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div {...getContainerProps()}>
      <Navbar className={navbarTopClass}>
        <NavBody {...getBodyProps()}>
          <div {...getLogoWrapperProps()}>
            <NavbarLogo visible={isScrolled} />
          </div>

          <div {...getCenterProps()}>
            <DropdownNavigation navItems={NAV_ITEMS} />
          </div>

          <div {...getActionsProps()}>
            <ThemeSwitcher />
            <NavbarButton variant="secondary" className="hidden sm:flex">
              Sign in
            </NavbarButton>
            <NavbarButton variant="primary">Start free</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo visible={isScrolled} />
            <div {...getActionsProps()}>
              <NavbarButton variant="primary" size="sm" className="sm:hidden">
                Sign in
              </NavbarButton>
              <ThemeSwitcher />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          {isMobileMenuOpen && (
            <div
              {...getOverlayProps()}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          <MobileNavMenu
            {...getMenuProps()}
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}>
            <div {...getMenuScrollProps()}>
              {NAV_ITEMS.map((navItem, index) =>
                navItem.subMenus ? (
                  <Accordion key={index} selectionMode="single">
                    <AccordionItem
                      key={navItem.label}
                      aria-label={navItem.label}
                      title={navItem.label}
                      classNames={{ title: getTitleProps().className }}>
                      <MobileSubmenu subMenus={navItem.subMenus} />
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <div key={index} {...getMenuItemWrapperProps()}>
                    <div {...getMenuItemProps()}>
                      {navItem.link ? (
                        <RouterLink to={navItem.link} {...getLinkProps()}>
                          {navItem.label}
                        </RouterLink>
                      ) : (
                        <p {...getTitleProps()}>{navItem.label}</p>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            <div {...getMenuFooterProps()}>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full">
                Sign in
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Start free trial
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

Navbars.displayName = 'Navbars'

export { Navbars }
