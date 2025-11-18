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
        title: 'Comprehensive accounting platform for growing businesses',
        description:
          'Manage end-to-end accounting—from banking & e-invoicing to inventory & payroll with the best accounting software in India.',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
        },
        chip_label: 'GST compliant accounting software',
        actions: {
          submit: {
            label: 'Request a demo'
          },
          trial: {
            placeholder: 'Start my free trial'
          }
        }
      }
    },
    navItems: [
      {
        label: 'Inventory',
        key: 'inventory',
        href: '/vezham/inventory'
      },
      {
        label: 'CRM',
        key: 'crm',
        href: '/vezham/crm'
      },
      {
        label: 'Payroll',
        key: 'payroll',
        href: '/vezham/payroll'
      },
      {
        label: 'Mail',
        key: 'mail',
        href: '/vezham/mail'
      },
      {
        label: 'Expense',
        key: 'expense',
        href: '/vezham/expense'
      },
      {
        label: 'Billing',
        key: 'billing',
        href: 'vezham/billing'
      },
      {
        label: 'All Products',
        key: 'allproducts',
        href: '#',
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
        subItems: [
          {
            key: 'autoscaling',
            label: 'Autoscaling',
            description: 'ACME scales apps based on demand and load',
            href: '#'
          },
          {
            key: 'usage_metrics',
            label: 'Usage Metrics',
            description: 'Real-time metrics to debug issues',
            href: '#'
          },
          {
            key: 'production_ready',
            label: 'Production Ready',
            description: 'ACME runs on ACME, join us at web scale',
            href: '#'
          },
          {
            key: '99_uptime',
            label: '+99% Uptime',
            description: 'High availability and uptime guarantees',
            href: '#'
          },
          {
            key: 'supreme_support',
            label: 'Supreme Support',
            description: 'Support team ready to respond',
            href: '#'
          }
        ],
        icon: 'mdi:star-circle' // Example icon
      },
      {
        label: 'Pricing',
        key: 'pricing',
        subItems: [
          {
            key: 'api_docs',
            label: 'API Documentation',
            description: 'Integrate with our API',
            href: '#'
          },
          {
            key: 'webhooks',
            label: 'Webhooks',
            description: 'Set up webhook integrations',
            href: '#'
          }
        ],
        icon: 'mdi:connection' // Example icon
      },
      {
        label: 'Customers',
        key: 'customers',
        subItems: [
          {
            key: 'customer_stories',
            label: 'Customer Stories',
            description: 'See how companies use ACME',
            href: '#'
          },
          {
            key: 'testimonials',
            label: 'Testimonials',
            description: 'What our customers say about us',
            href: '#'
          }
        ],
        icon: 'mdi:account-group' // Example icon
      },

      {
        label: 'Solution',
        key: 'solution',
        subItems: [
          {
            key: 'account_settings',
            label: 'Account Settings',
            description: 'Manage your account preferences',
            href: '#'
          },
          {
            key: 'billing',
            label: 'Billing',
            description: 'View and manage your billing',
            href: '#'
          }
        ],
        icon: 'mdi:account' // Example icon
      },
      {
        label: 'Partner with us',
        key: 'partnerwithus',
        subItems: [
          {
            key: 'support',
            label: 'Support',
            description: 'Get help from our support team',
            href: '#'
          },
          {
            key: 'sales',
            label: 'Sales',
            description: 'Talk to our sales team',
            href: '#'
          }
        ],
        icon: 'mdi:email' // Example icon
      },
      {
        label: 'Resources',
        key: 'resources',
        subItems: [
          {
            key: 'account_settings',
            label: 'Account Settings',
            description: 'Manage your account preferences',
            href: '#'
          },
          {
            key: 'billing',
            label: 'Billing',
            description: 'View and manage your billing',
            href: '#'
          }
        ],
        icon: 'mdi:account' // Example icon
      }
    ]
  }
]
