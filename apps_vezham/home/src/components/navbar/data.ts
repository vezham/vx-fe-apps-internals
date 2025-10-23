import { NavItems } from './types'

export const NAV_ITEMS: NavItems[] = [
  {
    id: 1,
    label: 'Products',
    subMenus: [
      {
        title: 'Suites',
        items: [
          {
            icon: 'lucide:zap',
            name: 'Vezham One',
            description: 'All-in-one suite for Personal use and Family',
            link: '/suites/vezham-one'
          },
          {
            icon: 'lucide:building',
            name: 'Vezham HQ',
            description:
              'Enterprise-grade suite for Businesses and Organizations',
            link: '/suites/vezham-hq'
          }
        ]
      },
      {
        title: 'CX Platforms',
        items: [
          {
            icon: 'lucide:graduation-cap',
            name: 'Academy',
            description: 'Step-by-step instructions',
            link: '/platforms/academy'
          },
          {
            icon: 'lucide:file-text',
            name: 'Blogs',
            description: 'Posts & Insights',
            link: '/platforms/blogs'
          },
          {
            icon: 'lucide:help-circle',
            name: 'Help Center',
            description: 'KB for products & tools',
            link: '/platforms/help-center'
          },
          {
            icon: 'lucide:shield',
            name: 'Policy Center',
            description: 'Ethics & Compliance',
            link: '/platforms/policy-center'
          },
          {
            icon: 'lucide:list',
            name: "What's New",
            description: 'Latest updates & changes',
            link: '/platforms/whats-new'
          }
        ]
      },
      {
        title: 'Apps',
        learn_more: {
          label: 'Explore All Products',
          link: '/apps/explore'
        },
        more: {
          label: 'Explore-1 All Products',
          link: '/apps/explore-1'
        },
        items: [
          {
            icon: 'lucide:layers',
            name: 'CRM',
            description: 'Step-by-step instructions',
            link: '/apps/vezham-crm'
          },
          {
            icon: 'lucide:layers',
            name: 'Books',
            description: 'Posts & Insights',
            link: '/apps/vezham-books'
          },
          {
            icon: 'lucide:layers',
            name: 'ERP',
            description: 'KB for products & tools',
            link: '/apps/vezham-erp'
          },
          {
            icon: 'lucide:layers',
            name: 'People',
            description: 'Ethics & Compliance',
            link: '/apps/vezham-people'
          },
          {
            icon: 'lucide:layers',
            name: 'Drive',
            description: 'Latest updates & changes',
            link: '/apps/vezham-drive'
          },
          {
            icon: 'lucide:layers',
            name: 'CMS',
            description: 'Latest updates & changes',
            link: '/apps/vezham-cms'
          },
          {
            icon: 'lucide:layers',
            name: 'Explore All Products',
            description: 'Latest updates & changes',
            link: '/apps/vezham-cms'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Solutions',
    subMenus: [
      {
        title: 'By Stage',
        items: [
          {
            icon: 'lucide:building',
            name: 'Enterprises',
            description: 'For large organizations',
            link: '/solutions/stages/enterprises'
          },
          {
            icon: 'lucide:rocket',
            name: 'Startups',
            description: 'For growing businesses',
            link: '/solutions/stages/startups'
          }
        ]
      },
      {
        title: 'By Business Model',
        items: [
          {
            icon: 'lucide:shopping-bag',
            name: 'E-commerce',
            description: 'Online retail solutions',
            link: '/solutions/use-cases/e-commerce'
          },
          {
            icon: 'lucide:layers',
            name: 'SaaS',
            description: 'Software-as-a-Service businesses',
            link: '/solutions/use-cases/saas'
          },
          {
            icon: 'lucide:store',
            name: 'Retail',
            description: 'Physical store solutions',
            link: '/solutions/use-cases/retail'
          },
          {
            icon: 'lucide:server',
            name: 'Platforms',
            description: 'Multi-sided platform businesses',
            link: '/solutions/use-cases/platforms'
          },
          {
            icon: 'lucide:shopping-cart',
            name: 'Marketplaces',
            description: 'Online marketplace solutions',
            link: '/solutions/use-cases/marketplaces'
          }
        ]
      },
      {
        title: 'By Industry Verticals',
        items: [
          {
            icon: 'lucide:graduation-cap',
            name: 'Education',
            description: 'Solutions for AI-driven EdTech',
            link: '/solutions/industries/education'
          },
          {
            icon: 'lucide:heart-pulse',
            name: 'Healthcare',
            description: 'Health solutions and patient care',
            link: '/solutions/industries/healthcare'
          },
          {
            icon: 'lucide:factory',
            name: 'Manufacturing',
            description: 'Industry 4.0 solutions',
            link: '/solutions/industries/manufacturing'
          },
          {
            icon: 'lucide:credit-card',
            name: 'Finance',
            description: 'For banking, insurance, and investment sectors',
            link: '/solutions/industries/finance'
          },
          {
            icon: 'lucide:shopping-bag',
            name: 'Retail',
            description: 'Tools for Omnichannel CX',
            link: '/solutions/industries/retail'
          },
          {
            icon: 'lucide:truck',
            name: 'Logistics',
            description: 'Next-Gen ERP',
            link: '/solutions/industries/logistics'
          }
        ]
      }
    ]
  },
  {
    id: 25,
    label: 'Developers',
    subMenus: [
      {
        title: 'Get Started',
        items: [
          {
            icon: 'lucide:book-open',
            name: 'Documentation',
            description: "Start integrating Vezham's products and tools",
            link: 'https://developers.vezham.com'
          },

          {
            icon: 'lucide:shopping-cart',
            name: 'Pre-built template',
            description: 'Quick implementation solutions',
            link: 'https://developers.vezham.com/resources/templates'
          },
          {
            icon: 'lucide:library',
            name: 'Libraries and SDKs',
            description: 'Development tools for all platforms',
            link: 'https://developers.vezham.com/libraries'
          },
          {
            icon: 'lucide:puzzle',
            name: 'App integrations',
            description: 'Connect with other services',
            link: 'https://marketplace.vezham.com'
          },
          {
            icon: 'lucide:code',
            name: 'Code samples',
            description: 'Example implementations',
            link: 'https://developers.vezham.com/resources/code-samples'
          }
        ]
      },
      {
        title: 'Developer Tools',
        items: [
          {
            icon: 'lucide:file-text',
            name: 'Full API reference',
            description: 'Complete documentation',
            link: 'https://developers.vezham.com/api'
          },
          {
            icon: 'lucide:list',
            name: 'API changelog',
            description: 'Latest updates and changes',
            link: 'https://developers.vezham.com/api/changelog'
          },
          {
            icon: 'lucide:activity',
            name: 'API status',
            description: 'System performance and uptime',
            link: 'https://status.vezham.com'
          },
          {
            icon: 'lucide:box',
            name: 'Build on Vezham Apps',
            description: 'Extend our platform',
            link: 'https://developers.vezham.com/apps'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    label: 'Resources',
    subMenus: [
      {
        title: 'Support',
        items: [
          {
            icon: 'lucide:help-circle',
            name: 'Help center',
            description: 'Get help with your questions',
            link: 'https://help.vezham.com'
          },
          {
            icon: 'lucide:tag',
            name: 'Support plans',
            description: 'Choose the right support level',
            link: '/support-plans'
          },
          {
            icon: 'lucide:book',
            name: 'Guides',
            description: 'Step-by-step instructions',
            link: 'https://academy.vezham.com/resources/guides'
          },
          {
            icon: 'lucide:users',
            name: 'Customer stories',
            description: 'See how others use our platform',
            link: '/customers'
          },
          {
            icon: 'lucide:search',
            name: 'Partner Finder',
            description: 'Get help from solution partners',
            link: '/partners'
          }
        ]
      },
      {
        title: 'Learn & Success',
        items: [
          {
            icon: 'lucide:file-text',
            name: 'Blog',
            description: 'Articles and insights',
            link: 'https://blog.vezham.com'
          },
          {
            icon: 'lucide:calendar',
            name: 'Sessions',
            description: 'Events and webinars',
            link: 'https://academy.vezham.com/resources/sessions'
          },
          {
            icon: 'lucide:mail',
            name: 'Contact sales',
            description: 'Talk to our team',
            link: '/contact/sales'
          },
          {
            icon: 'lucide:handshake',
            name: 'Become a partner',
            description: 'Join our partner network',
            link: '/partners/become-a-partner'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    label: 'Company',
    subMenus: [
      {
        title: 'About us',
        items: [
          {
            icon: 'lucide:info',
            name: 'About Vezham',
            description: 'Our mission and vision',
            link: 'https://about.vezham.com'
          },
          {
            icon: 'lucide:users',
            name: 'Leadership',
            description: 'Meet our team',
            link: 'https://about.vezham.com/company-info/leadership'
          },
          {
            icon: 'lucide:briefcase',
            name: 'Careers',
            description: 'Join our team',
            link: 'https://careers.vezham.com?utm_source=about-vezham&utm_medium=referral&utm_campaign=company-info'
          },
          {
            icon: 'lucide:globe',
            name: 'Locations',
            description: 'Our offices worldwide',
            link: 'https://about.vezham.com/company-info/locations'
          }
        ]
      },
      {
        title: 'Resources',
        items: [
          {
            icon: 'lucide:shield',
            name: 'Security',
            description: 'How we protect your data',
            link: 'https://policies.vezham.com'
          },
          {
            icon: 'lucide:heart',
            name: 'Brand Resource Center',
            description: 'To use our brand assets',
            link: 'https://about.vezham.com/brand-resource-center'
          },
          {
            icon: 'lucide:book',
            name: 'Press',
            description: 'Publications and media',
            link: 'https://about.vezham.com/press'
          },
          {
            icon: 'lucide:newspaper',
            name: 'Newsroom',
            description: 'Latest company news',
            link: 'https://blog.vezham.com/news'
          },
          {
            icon: 'lucide:award',
            name: 'Awards',
            description: 'Recognition and achievements',
            link: 'https://blog.vezham.com/awards'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    label: 'Enterprise',
    link: '#'
  },
  {
    id: 6,
    label: 'Pricing',
    link: '#'
  }
]
