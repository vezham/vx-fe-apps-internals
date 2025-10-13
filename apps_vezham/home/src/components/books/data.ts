export interface MenuItem {
  name: string
  description?: string
  icon: string
  href?: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

export const productSubmenu: MenuSection[] = [
  {
    title: 'GLOBAL PAYMENTS',
    items: [
      {
        name: 'Payments',
        description: 'Online payments',
        icon: 'heroui:credit-card',
        href: '#'
      },
      {
        name: 'Terminal',
        description: 'In-person payments',
        icon: 'heroui:terminal',
        href: '#'
      },
      {
        name: 'Radar',
        description: 'Fraud prevention',
        icon: 'heroui:shield',
        href: '#'
      },
      {
        name: 'Authorization',
        description: 'Acceptance optimisations',
        icon: 'heroui:check-circle',
        href: '#'
      }
    ]
  },
  {
    title: 'MONEY MANAGEMENT',
    items: [
      {
        name: 'Connect',
        description: 'Payments for platforms',
        icon: 'heroui:network',
        href: '#'
      },
      {
        name: 'Global Payouts',
        description: 'Send money to third parties',
        icon: 'heroui:globe',
        href: '#'
      }
    ]
  },
  {
    title: 'REVENUE AND FINANCE AUTOMATION',
    items: [
      {
        name: 'Billing',
        description: 'Subscriptions and usage-based',
        icon: 'heroui:calendar',
        href: '#'
      },
      {
        name: 'Revenue Recognition',
        description: 'Accounting automation',
        icon: 'heroui:bar-chart',
        href: '#'
      },
      {
        name: 'Tax',
        description: 'Sales tax & VAT automation',
        icon: 'heroui:receipt',
        href: '#'
      },
      {
        name: 'Invoicing',
        description: 'Online invoices',
        icon: 'heroui:file-text',
        href: '#'
      },
      {
        name: 'Sigma',
        description: 'Custom reports',
        icon: 'heroui:pie-chart',
        href: '#'
      },
      {
        name: 'Data Pipeline',
        description: 'Data sync',
        icon: 'heroui:database',
        href: '#'
      }
    ]
  },
  {
    title: 'MORE',
    items: [
      {
        name: 'Payment methods',
        description: '',
        icon: 'heroui:credit-card',
        href: '#'
      },
      { name: 'Link', description: '', icon: 'heroui:link', href: '#' },
      {
        name: 'Financial Connections',
        description: '',
        icon: 'heroui:link-2',
        href: '#'
      },
      {
        name: 'Identity',
        description: '',
        icon: 'heroui:fingerprint',
        href: '#'
      },
      { name: 'Atlas', description: '', icon: 'heroui:map', href: '#' },
      { name: 'Climate', description: '', icon: 'heroui:leaf', href: '#' }
    ]
  }
]

export const solutionsSubmenu: MenuSection[] = [
  {
    title: 'BY STAGE',
    items: [
      {
        name: 'Enterprises',
        description: '',
        icon: 'heroui:building-2',
        href: '#'
      },
      { name: 'Startups', description: '', icon: 'heroui:rocket', href: '#' }
    ]
  },
  {
    title: 'BY BUSINESS MODEL',
    items: [
      {
        name: 'E-commerce',
        description: '',
        icon: 'heroui:shopping-bag',
        href: '#'
      },
      { name: 'SaaS', description: '', icon: 'heroui:layers', href: '#' },
      { name: 'Platforms', description: '', icon: 'heroui:server', href: '#' },
      {
        name: 'Marketplaces',
        description: '',
        icon: 'heroui:store',
        href: '#'
      },
      { name: 'Retail', description: '', icon: 'heroui:shopping', href: '#' }
    ]
  },
  {
    title: 'BY USE CASE',
    items: [
      {
        name: 'Finance automation',
        description: '',
        icon: 'heroui:calculator',
        href: '#'
      },
      {
        name: 'Embedded finance',
        description: '',
        icon: 'heroui:puzzle',
        href: '#'
      },
      {
        name: 'Global businesses',
        description: '',
        icon: 'heroui:globe',
        href: '#'
      },
      { name: 'Crypto', description: '', icon: 'heroui:bitcoin', href: '#' },
      {
        name: 'Creator economy',
        description: '',
        icon: 'heroui:palette',
        href: '#'
      },
      { name: 'AI companies', description: '', icon: 'heroui:cpu', href: '#' }
    ]
  },
  {
    title: 'ECOSYSTEM',
    items: [
      {
        name: 'App Marketplace',
        description: '',
        icon: 'heroui:grid',
        href: '#'
      },
      { name: 'Partners', description: '', icon: 'heroui:users', href: '#' },
      {
        name: 'Professional services',
        description: '',
        icon: 'heroui:briefcase',
        href: '#'
      }
    ]
  }
]

export const developersSubmenu: MenuSection[] = [
  {
    title: '',
    items: [
      {
        name: 'Documentation',
        description: 'Start integrating our products and tools',
        icon: 'heroui:book-open',
        href: '#'
      }
    ]
  },
  {
    title: 'GET STARTED',
    items: [
      {
        name: 'Pre-built checkout',
        description: '',
        icon: 'heroui:shopping-cart',
        href: '#'
      },
      {
        name: 'Libraries and SDKs',
        description: '',
        icon: 'heroui:library',
        href: '#'
      },
      {
        name: 'App integrations',
        description: '',
        icon: 'heroui:puzzle',
        href: '#'
      },
      { name: 'Code samples', description: '', icon: 'heroui:code', href: '#' }
    ]
  },
  {
    title: 'GUIDES',
    items: [
      {
        name: 'Accept online payments',
        description: '',
        icon: 'heroui:credit-card',
        href: '#'
      },
      {
        name: 'Manage subscriptions',
        description: '',
        icon: 'heroui:repeat',
        href: '#'
      },
      {
        name: 'Send payments',
        description: '',
        icon: 'heroui:send',
        href: '#'
      },
      {
        name: 'Set up in-person payments',
        description: '',
        icon: 'heroui:store',
        href: '#'
      }
    ]
  },
  {
    title: '',
    items: [
      {
        name: 'Full API reference',
        description: '',
        icon: 'heroui:file-text',
        href: '#'
      },
      {
        name: 'API status',
        description: '',
        icon: 'heroui:activity',
        href: '#'
      },
      {
        name: 'API changelog',
        description: '',
        icon: 'heroui:history',
        href: '#'
      },
      {
        name: 'Build on Apps',
        description: '',
        icon: 'heroui:layers',
        href: '#'
      }
    ]
  }
]

export const resourcesSubmenu: MenuSection[] = [
  {
    title: '',
    items: [
      {
        name: 'Support center',
        description: 'Get your questions answered',
        icon: 'heroui:help-circle',
        href: '#'
      },
      {
        name: 'Support plans',
        description: 'Dedicated help for your business',
        icon: 'heroui:headphones',
        href: '#'
      },
      {
        name: 'Guides',
        description: 'In-depth lessons',
        icon: 'heroui:book',
        href: '#'
      },
      {
        name: 'Blog',
        description: 'Updates and stories',
        icon: 'heroui:file-text',
        href: '#'
      }
    ]
  },
  {
    title: '',
    items: [
      {
        name: 'Customer stories',
        description: 'See how companies use our products',
        icon: 'heroui:users',
        href: '#'
      },
      {
        name: 'Annual conference',
        description: 'Watch sessions from our conference',
        icon: 'heroui:video',
        href: '#'
      },
      {
        name: 'Contact sales',
        description: 'Get in touch with our sales team',
        icon: 'heroui:phone',
        href: '#'
      },
      {
        name: 'Become a partner',
        description: 'Join our partner ecosystem',
        icon: 'heroui:handshake',
        href: '#'
      }
    ]
  }
]

export const mainMenuItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Customers', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Pricing', href: '#' }
]

export const bannerItems = [
  {
    id: 1,
    title: 'New Feature Release',
    description: 'Check out our latest updates and improvements',
    ctaText: 'Learn More',
    ctaLink: '#',
    variant: 'primary'
  },
  {
    id: 2,
    title: 'Join Our Webinar',
    description: 'Learn how to maximize your productivity',
    ctaText: 'Register Now',
    ctaLink: '#',
    variant: 'secondary'
  },
  {
    id: 3,
    title: 'Limited Time Offer',
    description: 'Get 20% off on all premium plans',
    ctaText: 'Get Started',
    ctaLink: '#',
    variant: 'success'
  }
]

export const logoItems = [
  { key: 'logo-1', name: 'Company 1' },
  { key: 'logo-2', name: 'Company 2' },
  { key: 'logo-3', name: 'Company 3' },
  { key: 'logo-4', name: 'Company 4' },
  { key: 'logo-5', name: 'Company 5' },
  { key: 'logo-6', name: 'Company 6' },
  { key: 'logo-7', name: 'Company 7' },
  { key: 'logo-8', name: 'Company 8' },
  { key: 'logo-9', name: 'Company 9' },
  { key: 'logo-10', name: 'Company 10' }
]
