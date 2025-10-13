import React, { useEffect, useState } from 'react'

import {
  Button,
  Chip,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@vx-oss/react'

import { NavbarLogo } from '../navbar/resizable-navbar'

interface NavbarDemoProps {
  showPromoBanner?: boolean
}

const BookNavbar = ({ showPromoBanner = false }: NavbarDemoProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState('Profile')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'Deployments',
    'My Settings'
  ]

  // const navbarTopClass = showPromoBanner ? ' md:top-15' : 'sm:top-45'

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={`fixed right-0 left-0 transition-all duration-500 ${
        scrolled
          ? 'fixed top-auto bottom-[-60px]' // 👈 fixed to screen bottom when scrolled
          : 'top-auto bottom-0 lg:top-[175px] lg:bottom-auto'
      } `}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          'cursor-pointer',
          'transition-colors',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary'
        ]
      }}>
      {/* Left side - Brand & toggle */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarBrand>
          <NavbarLogo />
          <Chip radius="sm">Invitation Only</Chip>
        </NavbarBrand>
      </NavbarContent>

      {/* Center - Nav links */}
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {menuItems.map(item => (
          <NavbarItem
            key={item}
            isActive={activeItem === item}
            onClick={() => setActiveItem(item)}>
            <Link
              color={activeItem === item ? 'primary' : 'foreground'}
              href="#"
              className="transition-colors">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export { BookNavbar }
