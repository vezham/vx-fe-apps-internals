import { FrequencyEnum, Personalize, PricingData, TiersEnum } from './types'

export const personalizationsData: Personalize[] = [
  {
    cards: {
      welcome_message: {
        __type: 'welcome_message',
        title: 'Flexible and affordable.',
        subtitle: 'Scales with your business.',
        description:
          'View your plan information or switch plans according to your needs',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
        },
        actions: {
          submit: {
            label: ''
          },
          trial: {
            placeholder: ''
          }
        }
      }
    }
  }
]

export const pricingData: PricingData = {
  frequencies: [
    { key: FrequencyEnum.Yearly, label: 'Pay Yearly', priceSuffix: 'per year' },
    {
      key: FrequencyEnum.Quarterly,
      label: 'Pay Quarterly',
      priceSuffix: 'per quarter'
    },
    {
      key: FrequencyEnum.Monthly,
      label: 'Pay Monthly',
      priceSuffix: 'per month'
    }
  ],

  tiers: [
    {
      key: TiersEnum.Free,
      title: 'Free',
      price: 'Free',
      href: '#',
      featured: false,
      mostPopular: false,
      description: 'For starters and hobbyists that want to try out.',
      features: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support'
      ],
      buttonText: 'Continue with Free',
      buttonColor: 'default',
      buttonVariant: 'flat'
    },
    {
      key: TiersEnum.Pro,
      title: 'Pro',
      description: 'For small teams that have less that 10 members.',
      href: '#',
      mostPopular: true,
      price: {
        yearly: '$72',
        quarterly: '$49',
        monthly: '$24'
      },
      featured: false,
      features: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support'
      ],
      buttonText: 'Get started',
      buttonColor: 'primary',
      buttonVariant: 'solid'
    },
    {
      key: TiersEnum.Team,
      title: 'Team',
      href: '#',
      featured: true,
      mostPopular: false,
      description: 'For large teams that have more than 10 members.',
      price: {
        yearly: '$190',
        quarterly: '$120',
        monthly: '$60'
      },
      priceSuffix: 'per user',
      features: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support'
      ],
      buttonText: 'Contact us',
      buttonColor: 'default',
      buttonVariant: 'flat'
    }
  ],

  features: [
    {
      title: 'Content',
      items: [
        {
          title: 'New apps & screens releases',
          tiers: {
            [TiersEnum.Free]: 'Latest 4 apps',
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Enjoy over 1,000+ screens uploaded every week. Get notified via email whenever new screens are added.'
        },
        {
          title: 'Access to latest versions',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Access to latest screenshots of an app cataloged by expert curators.'
        },
        {
          title: 'Access to previous versions',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText: 'Version travel across versions of an app cataloged.'
        },
        {
          title: 'Access to flows of apps',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText:
            'Access to screens organized by flows like onboarding or login.'
        },
        {
          title: 'Filter & search results',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText:
            'Find apps, screens, or flows by filtering across 10,000+ screens.'
        }
      ]
    },

    {
      title: 'Features',
      items: [
        {
          title: 'Collections',
          tiers: {
            [TiersEnum.Free]: 'Up to 3 collections',
            [TiersEnum.Pro]: 'Unlimited',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText:
            'Save apps, screens or flows into collections for later viewing.'
        },
        {
          title: 'Copy to clipboard',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Quickly copy screens into your clipboard to be pasted into other tools.'
        },
        {
          title: 'Screen download',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText: 'Download screens as PNG.'
        },
        {
          title: 'Batch download',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Easily batch-download multiple screens at one go from apps, flows, your collections and more.'
        }
      ]
    },

    {
      title: 'Collaboration',
      items: [
        {
          title: 'Team members',
          tiers: {
            [TiersEnum.Free]: 'Just you',
            [TiersEnum.Pro]: 'Just you',
            [TiersEnum.Team]: 'Unlimited'
          },
          helpText: 'Collaborate with other users in a team.'
        },
        {
          title: 'Team collections',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText: 'Create collections shared across your team.'
        },
        {
          title: 'Team administration',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Add or remove members from your team to manage access to membership and collections.'
        },
        {
          title: 'Flexible seat-based licensing',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Membership licenses are purchased by seats, which can be provisioned to or removed from users.'
        }
      ]
    },

    {
      title: 'Security & Access',
      items: [
        {
          title: 'SAML Single Sign-On (SSO)',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Access through Okta, ADFS, Azure, Onelogin, or your own SAML identity provider (IdP).'
        },
        {
          title: 'SCIM user provisioning',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Sync user directories with Okta, Azure AD, Onelogin, or your own SCIM identity provider (IdP).'
        }
      ]
    },

    {
      title: 'Billing',
      items: [
        {
          title: 'Flexible payment options',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Option to pay via invoice and bank transfers on a net 30, 45 or 60 payment term. Available upon request.'
        },
        {
          title: 'Custom security assessment',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Our team will help answer security assessments or questionnaires for your organization. Available upon request.'
        },
        {
          title: 'Custom agreement',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Pro]: false,
            [TiersEnum.Team]: true
          },
          helpText:
            'Standardized SaaS agreement for your organization’s legal requirement. Available upon request.'
        }
      ]
    },

    {
      title: 'Support',
      items: [
        {
          title: 'Help center',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText:
            'Browse our articles in our knowledge base to find answers to your questions regarding the platform.'
        },
        {
          title: 'Email support',
          tiers: {
            [TiersEnum.Free]: 'Best effort basis',
            [TiersEnum.Pro]: true,
            [TiersEnum.Team]: true
          },
          helpText: 'Get help via email.'
        }
      ]
    }
  ],

  faqs: [
    {
      label: 'Frequently Asked Questions',
      subItems: [
        {
          title: 'I use the free plan. Can I get product support?',
          description:
            'Yes, basic support is available for all plans. The Free Plan comes with email support. Send your queries to freeplan-desk@vezham.com any time. We are available Monday to Saturday, 9 am to 7 pm.'
        },
        {
          title: 'What happens once I reach the included chats limit?',
          description:
            'You will first receive a heads up email when you reach 80% of your included limit. Once you have reached 100%, you will receive another email notification. After that, your chat limit be automatically upgraded to the next tier.'
        },
        {
          title: 'Can I cancel or change my subscription any time?',
          description:
            'Yes, you can cancel, upgrade or downgrade your subscription at any time. When you upgrade or downgrade your subscription, you will get access to the new options right away. Your next invoice will have a prorated amount.'
        },
        {
          title: 'If switch plans according to needs ?',
          description:
            'Yes, you can switch plans, upgrade or downgrade at any time, you will get access to the new options right away.'
        },
        {
          title: 'How does the Team & Organization plans work?',
          description:
            'Team plan allows you to invite up to 5 users, and the Organization plan up to 25 users, with each having their own separate account.'
        }
      ]
    }
  ]
}
