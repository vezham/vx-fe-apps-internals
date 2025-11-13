'use client'

import { Icon } from '@iconify/react'
import React from 'react'

import type { NavbarProps } from '@vx-oss/react'
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
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

import MobileSubmenu from './mobile-submenu'
import { AcmeIcon } from './social'

const menuItems = ['Home', 'Features', 'Customers', 'About Us']

// Add submenu data
const productSubmenu = [
  {
    title: 'GLOBAL PAYMENTS',
    items: [
      {
        name: 'Payments',
        description: 'Online payments',
        icon: 'lucide:credit-card'
      },
      {
        name: 'Terminal',
        description: 'In-person payments',
        icon: 'lucide:terminal'
      },
      { name: 'Radar', description: 'Fraud prevention', icon: 'lucide:shield' },
      {
        name: 'Authorization',
        description: 'Acceptance optimisations',
        icon: 'lucide:check-circle'
      }
    ]
  },
  {
    title: 'MONEY MANAGEMENT',
    items: [
      {
        name: 'Connect',
        description: 'Payments for platforms',
        icon: 'lucide:network'
      },
      {
        name: 'Global Payouts',
        description: 'Send money to third parties',
        icon: 'lucide:globe'
      }
    ]
  },
  {
    title: 'REVENUE AND FINANCE AUTOMATION',
    items: [
      {
        name: 'Billing',
        description: 'Subscriptions and usage-based',
        icon: 'lucide:calendar'
      },
      {
        name: 'Revenue Recognition',
        description: 'Accounting automation',
        icon: 'lucide:bar-chart'
      },
      {
        name: 'Tax',
        description: 'Sales tax & VAT automation',
        icon: 'lucide:receipt'
      },
      {
        name: 'Invoicing',
        description: 'Online invoices',
        icon: 'lucide:file-text'
      },
      {
        name: 'Sigma',
        description: 'Custom reports',
        icon: 'lucide:pie-chart'
      },
      {
        name: 'Data Pipeline',
        description: 'Data sync',
        icon: 'lucide:database'
      }
    ]
  },
  {
    title: 'MORE',
    items: [
      { name: 'Payment methods', description: '', icon: 'lucide:credit-card' },
      { name: 'Link', description: '', icon: 'lucide:link' },
      { name: 'Financial Connections', description: '', icon: 'lucide:link-2' },
      { name: 'Identity', description: '', icon: 'lucide:fingerprint' },
      { name: 'Atlas', description: '', icon: 'lucide:map' },
      { name: 'Climate', description: '', icon: 'lucide:leaf' }
    ]
  }
]

const solutionsSubmenu = [
  {
    title: 'BY STAGE',
    items: [
      { name: 'Enterprises', description: '', icon: 'lucide:building-2' },
      { name: 'Startups', description: '', icon: 'lucide:rocket' }
    ]
  },
  {
    title: 'BY BUSINESS MODEL',
    items: [
      { name: 'E-commerce', description: '', icon: 'lucide:shopping-bag' },
      { name: 'SaaS', description: '', icon: 'lucide:layers' },
      { name: 'Platforms', description: '', icon: 'lucide:server' },
      { name: 'Marketplaces', description: '', icon: 'lucide:store' },
      { name: 'Retail', description: '', icon: 'lucide:shopping' }
    ]
  },
  {
    title: 'BY USE CASE',
    items: [
      {
        name: 'Finance automation',
        description: '',
        icon: 'lucide:calculator'
      },
      { name: 'Embedded finance', description: '', icon: 'lucide:puzzle' },
      { name: 'Global businesses', description: '', icon: 'lucide:globe' },
      { name: 'Crypto', description: '', icon: 'lucide:bitcoin' },
      { name: 'Creator economy', description: '', icon: 'lucide:palette' },
      { name: 'AI companies', description: '', icon: 'lucide:cpu' }
    ]
  },
  {
    title: 'ECOSYSTEM',
    items: [
      { name: 'Stripe App Marketplace', description: '', icon: 'lucide:grid' },
      { name: 'Partners', description: '', icon: 'lucide:users' },
      {
        name: 'Professional services',
        description: '',
        icon: 'lucide:briefcase'
      }
    ]
  }
]

const developersSubmenu = [
  {
    title: '',
    items: [
      {
        name: 'Documentation',
        description: "Start integrating Stripe's products and tools",
        icon: 'lucide:book-open'
      }
    ]
  },
  {
    title: 'GET STARTED',
    items: [
      {
        name: 'Pre-built checkout',
        description: '',
        icon: 'lucide:shopping-cart'
      },
      { name: 'Libraries and SDKs', description: '', icon: 'lucide:library' },
      { name: 'App integrations', description: '', icon: 'lucide:puzzle' },
      { name: 'Code samples', description: '', icon: 'lucide:code' }
    ]
  },
  {
    title: 'GUIDES',
    items: [
      {
        name: 'Accept online payments',
        description: '',
        icon: 'lucide:credit-card'
      },
      { name: 'Manage subscriptions', description: '', icon: 'lucide:repeat' },
      { name: 'Send payments', description: '', icon: 'lucide:send' },
      {
        name: 'Set up in-person payments',
        description: '',
        icon: 'lucide:store'
      }
    ]
  },
  {
    title: '',
    items: [
      { name: 'Full API reference', description: '', icon: 'lucide:file-text' },
      { name: 'API status', description: '', icon: 'lucide:activity' },
      { name: 'API changelog', description: '', icon: 'lucide:history' },
      { name: 'Build on Stripe Apps', description: '', icon: 'lucide:layers' }
    ]
  }
]

const resourcesSubmenu = [
  {
    title: '',
    items: [
      {
        name: 'Support center',
        description: 'Get your questions answered',
        icon: 'lucide:help-circle'
      },
      {
        name: 'Support plans',
        description: 'Dedicated help for your business',
        icon: 'lucide:headphones'
      },
      {
        name: 'Guides',
        description: 'In-depth lessons about Stripe',
        icon: 'lucide:book'
      },
      {
        name: 'Blog',
        description: 'Updates and stories from Stripe',
        icon: 'lucide:file-text'
      }
    ]
  },
  {
    title: '',
    items: [
      {
        name: 'Customer stories',
        description: 'See how companies use Stripe',
        icon: 'lucide:users'
      },
      {
        name: 'Annual conference',
        description: 'Watch sessions from Stripe Sessions',
        icon: 'lucide:video'
      },
      {
        name: 'Contact sales',
        description: 'Get in touch with our sales team',
        icon: 'lucide:phone'
      },
      {
        name: 'Become a partner',
        description: "Join Stripe's partner ecosystem",
        icon: 'lucide:handshake'
      }
    ]
  }
]

const CenteredNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    { classNames: { base, wrapper, ...otherClassNames } = {}, ...props },
    ref
  ) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
      <Navbar
        ref={ref}
        classNames={{
          base: cn(
            'bg-default-foreground top-12 mx-auto max-w-xs rounded-full px-1.5 py-[5px] pr-[18px] shadow-[0_4px_15px_0_rgba(0,0,0,0.25)] sm:max-w-md md:max-w-(--breakpoint-sm) md:pr-1.5',
            base
          ),
          wrapper: cn('px-0', wrapper),
          ...otherClassNames
        }}
        height="40px"
        isMenuOpen={isMenuOpen}
        position="static"
        onMenuOpenChange={setIsMenuOpen}
        {...props}>
        <NavbarBrand>
          <div className="bg-background rounded-full">
            <AcmeIcon className="text-default-foreground" size={34} />
          </div>
          <span className="text-small text-background ml-2 font-medium">
            ACME
          </span>
        </NavbarBrand>

        <NavbarContent className="hidden md:flex" justify="center">
          <NavbarItem
            isActive
            className="data-[active='true']:font-medium[date-active='true']">
            <Link
              aria-current="page"
              className="text-background"
              href="#"
              size="sm">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem>
            <Button
              className="bg-background text-default-foreground font-medium"
              endContent={
                <Icon
                  className="pointer-events-none"
                  icon="solar:alt-arrow-right-linear"
                />
              }
              radius="full">
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle className="text-default-400 md:hidden" />

        <NavbarMenu
          className="bg-default-200/50 shadow-medium top-[initial] bottom-0 max-h-[80vh] overflow-y-auto rounded-t-2xl pt-6 pb-6 backdrop-blur-md backdrop-saturate-150"
          motionProps={{
            initial: { y: '100%' },
            animate: { y: 0 },
            exit: { y: '100%' },
            transition: { type: 'spring', bounce: 0, duration: 0.3 }
          }}>
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

          <NavbarMenuItem>
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
            <Button
              fullWidth
              as={Link}
              className="bg-foreground text-background"
              href="/#">
              Get Started
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    )
  }
)

CenteredNavbar.displayName = 'CenteredNavbar'

export default CenteredNavbar
