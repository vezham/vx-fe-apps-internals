import { title } from 'process'

import { Personalize } from './types'

export const personalizationsData: Personalize[] = [
  {
    cards: {
      newsletter: {
        __type: 'newsletter',
        title: 'Subscribe to our newsletter!',
        description:
          'Get weekly updates delivered right to your email, featuring the latest insights, trends, and tools.',
        actions: {
          submit: {
            label: 'Subscribe'
          },
          input: {
            placeholder: 'stark@v.corp'
          }
        }
      },
      welcome_message: {
        __type: 'welcome_message',
        super_title: 'Comprehensive',
        title: ' accounting platform for growing businesses',
        description:
          'Manage end-to-end accounting—from banking & e-invoicing to inventory & payroll with the best accounting software in India.',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png'
        },
        chip_label: 'GST compliant accounting software',
        actions: {
          submit: {
            label: 'Request a demo',
            href: '#'
          },
          trial: {
            placeholder: 'Book your trial',
            href: '/signup'
          }
        }
      }
    },
    navItems: [
      {
        label: 'Home',
        key: 'home',
        href: '/'
      },
      {
        label: 'Blogs',
        key: 'blogs',
        href: '/vezham/blogs'
      },
      {
        label: 'Company',
        key: 'company',
        href: '/vezham/company'
      },
      {
        label: 'All Products',
        key: 'allproducts',
        href: '/vezham/all_products',
        subItems: [
          {
            title: 'Apps',
            Items: [
              {
                icon: 'lucide:zap',
                name: 'Vezham One',
                description: 'All-in-one suite for Personal use and Family',
                link: '/apps/vezham-one'
              },
              {
                icon: 'lucide:building',
                name: 'Vezham HQ',
                description:
                  'Enterprise-grade suite for Businesses and Organizations',
                link: '/apps/vezham-hq'
              },
              {
                icon: 'lucide:building',
                name: 'Enterprises',
                description: 'For large organizations',
                link: '/apps/enterprises'
              },
              {
                icon: 'lucide:rocket',
                name: 'Startups',
                description: 'For growing businesses',
                link: '/apps/startups'
              },
              {
                icon: 'lucide:users',
                name: 'Customer stories',
                description: 'See how others use our platform',
                link: '/apps/customers'
              },
              {
                icon: 'lucide:search',
                name: 'Partner Finder',
                description: 'Get help from solution partners',
                link: '/apps/partners'
              }
            ]
          },
          {
            title: 'Suites',
            Items: [
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
              },
              {
                icon: 'lucide:building',
                name: 'Enterprises',
                description: 'For large organizations',
                link: '/suites/enterprises'
              },
              {
                icon: 'lucide:rocket',
                name: 'Startups',
                description: 'For growing businesses',
                link: '/suites/startups'
              },
              {
                icon: 'lucide:users',
                name: 'Customer stories',
                description: 'See how others use our platform',
                link: '/suites/customers'
              },
              {
                icon: 'lucide:search',
                name: 'Partner Finder',
                description: 'Get help from solution partners',
                link: '/suites/partners'
              }
            ]
          },
          {
            title: 'Platforms',
            Items: [
              {
                icon: 'lucide:zap',
                name: 'Vezham One',
                description: 'All-in-one suite for Personal use and Family',
                link: '/platforms/vezham-one'
              },
              {
                icon: 'lucide:building',
                name: 'Vezham HQ',
                description:
                  'Enterprise-grade suite for Businesses and Organizations',
                link: '/platforms/vezham-hq'
              },
              {
                icon: 'lucide:building',
                name: 'Enterprises',
                description: 'For large organizations',
                link: '/platforms/enterprises'
              },
              {
                icon: 'lucide:rocket',
                name: 'Startups',
                description: 'For growing businesses',
                link: '/platforms/startups'
              },
              {
                icon: 'lucide:users',
                name: 'Customer stories',
                description: 'See how others use our platform',
                link: '/platforms/customers'
              },
              {
                icon: 'lucide:search',
                name: 'Partner Finder',
                description: 'Get help from solution partners',
                link: '/platforms/partners'
              }
            ]
          },
          {
            title: 'Support',
            Items: [
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
            title: 'By Industry Verticals',
            Items: [
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
      }
    ],
    tabItems: [
      {
        label: 'Features',
        key: 'features',
        href: '/vezham/features',
        subItems: [
          {
            key: 'popular',
            label: 'Popular',
            description:
              'Our solution empowers popular teams to streamline operations',
            href: '#'
          },
          {
            key: 'new',
            label: 'New',
            description: 'Automated processes to new manual interventions',
            href: '#'
          },
          {
            key: 'free-install',
            label: 'Free Install',
            description: 'Easily receive and reply to apps from store',
            href: '#'
          },
          {
            key: 'support-teams',
            label: 'Support Teams',
            description:
              'Our solution empowers support teams to streamline operations',
            href: '#'
          },
          {
            key: 'sales',
            label: 'Sales',
            description: 'Integrated systems and platforms for sales',
            href: '#'
          },
          {
            key: 'marketing',
            label: 'Marketing',
            description:
              'Streamlined process and reduced processing times to improve sales ',
            href: '#'
          },
          {
            key: 'e-commerce',
            label: 'E-Commerce',
            description:
              'Connect your Shopify store for better customer suppor',
            href: '#'
          },
          {
            key: 'service',
            label: 'Service',
            description:
              'Customer service software for exceptional customer support',
            href: '#'
          },
          {
            key: 'finance',
            label: 'Finance',
            description:
              'View customer payment details and subscription status',
            href: '#'
          }
        ],
        icon: 'mdi:star-circle' // Example icon
      },
      {
        label: 'Pricing',
        key: 'pricing',
        href: '/vezham/pricing',
        subItems: [],
        icon: 'mdi:connection' // Example icon
      },
      {
        label: 'Solutions',
        key: 'solutions',
        subItems: [
          {
            key: 'enterprises',
            label: 'Enterprises',
            description: 'See how For large organizations',
            href: '#'
          },
          {
            key: 'startups',
            label: 'Startups',
            description: 'For growing businesses',
            href: '#'
          }
        ],
        icon: 'mdi:account-group' // Example icon
      },

      {
        label: 'Developers',
        key: 'developers',
        subItems: [
          {
            key: 'documentation',
            label: 'Documentation',
            description: 'Start integrating Vezham products and tools',
            href: '#'
          },
          {
            key: 'api-intergrations',
            label: 'Api Integrations',
            description: 'Connect with other services',
            href: '#'
          }
        ],
        icon: 'mdi:account' // Example icon
      },
      {
        label: 'Resources',
        key: 'resources',
        href: '/vezham/resources',
        subItems: [
          {
            key: 'help-center',
            label: 'Help Center',
            description: 'To use our brand assets',
            href: '#'
          },
          {
            key: 'support',
            label: 'Support Plans',
            description: 'View and manage your helpsupport',
            href: '#'
          }
        ],
        icon: 'mdi:account' // Example icon
      }
    ]
  }
]
