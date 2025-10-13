import { Icon } from '@iconify/react'
import React from 'react'

import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  cn
} from '@vx-oss/react'

// Import data from data folder
import {
  developersSubmenu,
  mainMenuItems,
  productSubmenu,
  resourcesSubmenu,
  solutionsSubmenu
} from './data'
import MobileSubmenu from './mobile-submenu'
import { AcmeIcon } from './social'
import ThemeSwitcher from './theme-switcher'

const FullScreenNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [hoveredMenu, setHoveredMenu] = React.useState<string | null>(null)

  // Function to handle menu hover
  const handleMenuHover = (menuName: string | null) => {
    setHoveredMenu(menuName)
  }

  // Handle menu toggle with custom body scroll locking
  const handleMenuToggle = (open: boolean) => {
    setIsMenuOpen(open)

    // Manually control body scroll behavior
    if (open) {
      // Get scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth

      // Apply styles to prevent body scrolling when menu is open
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`
    } else {
      // Remove styles when menu is closed
      document.documentElement.style.overflow = ''
      document.documentElement.style.paddingRight = ''
    }
  }

  // Clean up styles when component unmounts
  React.useEffect(() => {
    return () => {
      document.documentElement.style.overflow = ''
      document.documentElement.style.paddingRight = ''
    }
  }, [])

  return (
    <Navbar
      isBordered
      isBlurred={false}
      className="w-full"
      maxWidth="full"
      height="4rem"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuToggle}
      classNames={{
        wrapper: 'px-6 max-w-[1400px] mx-auto',
        base: 'bg-background dark:bg-background/90 backdrop-blur-md transition-all duration-200'
      }}>
      <NavbarBrand>
        <div className="flex items-center">
          <AcmeIcon size={36} />
          <p className="ml-2 font-bold text-inherit">ACME</p>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden gap-6 md:flex" justify="center">
        {/* Products Menu */}
        <div
          className="group relative"
          onMouseEnter={() => handleMenuHover('products')}
          onMouseLeave={() => handleMenuHover(null)}>
          <NavbarItem>
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={
                <Icon
                  icon="lucide:chevron-down"
                  width={16}
                  className={cn(
                    'transition-transform duration-200',
                    hoveredMenu === 'products' ? 'rotate-180' : 'rotate-0'
                  )}
                />
              }
              radius="sm"
              variant="light">
              Products
            </Button>
          </NavbarItem>

          {/* Submenu that shows on hover */}
          <div
            className={cn(
              'bg-background/95 dark:bg-default-50/95 border-default-200 absolute top-full left-0 z-50 w-screen border-t shadow-md backdrop-blur-md transition-all duration-200',
              hoveredMenu === 'products'
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            )}
            style={{ left: 0, right: 0, position: 'fixed', top: '4rem' }}>
            <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-6 p-6">
              {productSubmenu.map((section, index) => (
                <div key={index} className="space-y-4">
                  <p className="text-default-500 text-xs font-bold">
                    {section.title}
                  </p>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="hover:bg-default-100 dark:hover:bg-default-200/20 group flex items-start gap-3 rounded-md p-2 transition-colors">
                        <div className="bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors">
                          <Icon
                            className="text-primary"
                            icon={item.icon.replace('heroui', 'lucide')}
                            width={20}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-default-500 text-xs">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Menu */}
        <div
          className="group relative"
          onMouseEnter={() => handleMenuHover('solutions')}
          onMouseLeave={() => handleMenuHover(null)}>
          <NavbarItem>
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={
                <Icon
                  icon="lucide:chevron-down"
                  width={16}
                  className={cn(
                    'transition-transform duration-200',
                    hoveredMenu === 'solutions' ? 'rotate-180' : 'rotate-0'
                  )}
                />
              }
              radius="sm"
              variant="light">
              Solutions
            </Button>
          </NavbarItem>

          {/* Submenu that shows on hover */}
          <div
            className={cn(
              'bg-background/95 dark:bg-default-50/95 border-default-200 absolute top-full left-0 z-50 w-screen border-t shadow-md backdrop-blur-md transition-all duration-200',
              hoveredMenu === 'solutions'
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            )}
            style={{ left: 0, right: 0, position: 'fixed', top: '4rem' }}>
            <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-6 p-6">
              {solutionsSubmenu.map((section, index) => (
                <div key={index} className="space-y-4">
                  <p className="text-default-500 text-xs font-bold">
                    {section.title}
                  </p>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="hover:bg-default-100 dark:hover:bg-default-200/20 group flex items-start gap-3 rounded-md p-2 transition-colors">
                        <div className="bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors">
                          <Icon
                            className="text-primary"
                            icon={item.icon.replace('heroui', 'lucide')}
                            width={20}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-default-500 text-xs">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Developers Menu */}
        <div
          className="group relative"
          onMouseEnter={() => handleMenuHover('developers')}
          onMouseLeave={() => handleMenuHover(null)}>
          <NavbarItem>
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={
                <Icon
                  icon="lucide:chevron-down"
                  width={16}
                  className={cn(
                    'transition-transform duration-200',
                    hoveredMenu === 'developers' ? 'rotate-180' : 'rotate-0'
                  )}
                />
              }
              radius="sm"
              variant="light">
              Developers
            </Button>
          </NavbarItem>

          {/* Submenu that shows on hover */}
          <div
            className={cn(
              'bg-background/95 dark:bg-default-50/95 border-default-200 absolute top-full left-0 z-50 w-screen border-t shadow-md backdrop-blur-md transition-all duration-200',
              hoveredMenu === 'developers'
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            )}
            style={{ left: 0, right: 0, position: 'fixed', top: '4rem' }}>
            <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-6 p-6">
              {developersSubmenu.map((section, index) => (
                <div key={index} className="space-y-4">
                  {section.title && (
                    <p className="text-default-500 text-xs font-bold">
                      {section.title}
                    </p>
                  )}
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="hover:bg-default-100 dark:hover:bg-default-200/20 group flex items-start gap-3 rounded-md p-2 transition-colors">
                        <div className="bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors">
                          <Icon
                            className="text-primary"
                            icon={item.icon.replace('heroui', 'lucide')}
                            width={20}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-default-500 text-xs">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Menu */}
        <div
          className="group relative"
          onMouseEnter={() => handleMenuHover('resources')}
          onMouseLeave={() => handleMenuHover(null)}>
          <NavbarItem>
            <Button
              disableRipple
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              endContent={
                <Icon
                  icon="lucide:chevron-down"
                  width={16}
                  className={cn(
                    'transition-transform duration-200',
                    hoveredMenu === 'resources' ? 'rotate-180' : 'rotate-0'
                  )}
                />
              }
              radius="sm"
              variant="light">
              Resources
            </Button>
          </NavbarItem>

          {/* Submenu that shows on hover */}
          <div
            className={cn(
              'bg-background/95 dark:bg-default-50/95 border-default-200 absolute top-full left-0 z-50 w-screen border-t shadow-md backdrop-blur-md transition-all duration-200',
              hoveredMenu === 'resources'
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            )}
            style={{ left: 0, right: 0, position: 'fixed', top: '4rem' }}>
            <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 p-6">
              {resourcesSubmenu.map((section, index) => (
                <div key={index} className="space-y-4">
                  {section.title && (
                    <p className="text-default-500 text-xs font-bold">
                      {section.title}
                    </p>
                  )}
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="hover:bg-default-100 dark:hover:bg-default-200/20 group flex items-start gap-3 rounded-md p-2 transition-colors">
                        <div className="bg-primary/10 group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors">
                          <Icon
                            className="text-primary"
                            icon={item.icon.replace('heroui', 'lucide')}
                            width={20}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-default-500 text-xs">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="#">Sign In</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />

      <NavbarMenu className="pt-6 pb-20">
        <NavbarMenuItem className="mb-4">
          <ThemeSwitcher />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion selectionMode="single" variant="splitted">
            <AccordionItem
              key="products"
              aria-label="Products"
              title="Products"
              classNames={{
                title: 'text-base font-medium'
              }}
              startContent={
                <Icon
                  icon="lucide:chevron-right"
                  className="text-default-500"
                  width={16}
                />
              }>
              <MobileSubmenu sections={productSubmenu} />
            </AccordionItem>

            <AccordionItem
              key="solutions"
              aria-label="Solutions"
              title="Solutions"
              classNames={{
                title: 'text-base font-medium'
              }}
              startContent={
                <Icon
                  icon="lucide:chevron-right"
                  className="text-default-500"
                  width={16}
                />
              }>
              <MobileSubmenu sections={solutionsSubmenu} />
            </AccordionItem>

            <AccordionItem
              key="developers"
              aria-label="Developers"
              title="Developers"
              classNames={{
                title: 'text-base font-medium'
              }}
              startContent={
                <Icon
                  icon="lucide:chevron-right"
                  className="text-default-500"
                  width={16}
                />
              }>
              <MobileSubmenu sections={developersSubmenu} />
            </AccordionItem>

            <AccordionItem
              key="resources"
              aria-label="Resources"
              title="Resources"
              classNames={{
                title: 'text-base font-medium'
              }}
              startContent={
                <Icon
                  icon="lucide:chevron-right"
                  className="text-default-500"
                  width={16}
                />
              }>
              <MobileSubmenu sections={resourcesSubmenu} />
            </AccordionItem>

            <AccordionItem
              key="pricing"
              aria-label="Pricing"
              title="Pricing"
              classNames={{
                title: 'text-base font-medium'
              }}
              startContent={
                <Icon
                  icon="lucide:chevron-right"
                  className="text-default-500"
                  width={16}
                />
              }></AccordionItem>
          </Accordion>
        </NavbarMenuItem>

        <NavbarMenuItem className="mt-6">
          <Button
            fullWidth
            as={Link}
            className="border-0"
            href="/#"
            variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} color="primary" href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export { FullScreenNavbar }
