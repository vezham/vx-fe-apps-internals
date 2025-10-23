import { Icon } from '@iconify/react'
import { Link as RouterLink } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { Accordion, AccordionItem } from '@vx-oss/react'

import { NAV_ITEMS } from './data'
import { DropdownNavigation } from './dropdown-navigation'
import MobileSubmenu from './mobile-submenu'
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
import { navVariants as dv } from './variant'

interface NavbarDemoProps {
  showPromoBanner?: boolean
}

const Navbars = ({ showPromoBanner = false }: NavbarDemoProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
    <div className={dv.navbar.container}>
      <Navbar className={navbarTopClass}>
        {/* Desktop Navigation */}
        <NavBody className={dv.navbar.body}>
          <div className={dv.navbar.logoWrapper}>
            <NavbarLogo visible={isScrolled} />
          </div>

          <div className="flex flex-1 justify-center">
            <DropdownNavigation navItems={NAV_ITEMS} />
          </div>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <NavbarButton variant="secondary" className="hidden sm:flex">
              Sign in
            </NavbarButton>
            <NavbarButton variant="primary">Start free</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo visible={isScrolled} />
            <div className="flex items-center gap-2">
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
              className={dv.mobile.overlay}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}>
            <div className="max-h-[60vh] w-full overflow-y-auto">
              {NAV_ITEMS.map((navItem, index) =>
                navItem.subMenus ? (
                  <Accordion key={index} selectionMode="single">
                    <AccordionItem
                      key={navItem.label}
                      aria-label={navItem.label}
                      title={navItem.label}
                      classNames={{ title: 'text-base font-medium' }}
                      startContent={
                        <Icon
                          icon="lucide:chevron-right"
                          className="text-default-500"
                          width={16}
                        />
                      }>
                      <MobileSubmenu subMenus={navItem.subMenus} />
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <div
                    key={index}
                    className="mb-2 flex w-full flex-col gap-2 px-2">
                    <div className="bg-content1 rounded-medium px-4 py-4 shadow-xs">
                      {navItem.link ? (
                        <RouterLink
                          to={navItem.link}
                          className="text-foreground text-base font-medium">
                          {navItem.label}
                        </RouterLink>
                      ) : (
                        <p className="text-foreground text-base font-medium">
                          {navItem.label}
                        </p>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="mt-4 flex w-full flex-col gap-4">
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

export { Navbars }
