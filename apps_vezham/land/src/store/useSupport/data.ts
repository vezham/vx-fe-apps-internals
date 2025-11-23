import { FrequencyEnum, Personalize, TiersEnum, supportData } from './types'

export const support: supportData = {
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
  info: [
    {
      title: 'Our Services',
      description:
        'Enhance your customer support plan with our expanded services. We offer a full range of support options that provide flexibility for customers who need dedicated resources to manage their support requests.'
    }
  ],
  plan: [
    {
      title: 'Support Plans',
      description:
        'From providing guided onboarding to round-the-clock technical assistance, our wide range of support plans cover businesses of all sizes.'
    }
  ],

  services: [
    {
      logotitle: 'Vezham',
      logourl: 'support@vezham.com',
      title: 'Global Support Services',
      description:
        'Find Global and Premium Support numbers, account, legacy and other related services',
      site: 'Global support',
      siteurl: '#'
    },
    {
      logotitle: 'Vezham',
      logourl: 'support@vezham.com',
      title: 'Premium Support Services',
      description:
        'Access Premium Support for flexible, personalized support and dedicated resources and experts familiar with your environment.',
      site: 'Premium support',
      siteurl: '#'
    },
    {
      logotitle: 'Vezham',
      logourl: 'support@vezham.com',
      title: 'Subscription Renewal Services',
      description:
        'Increase productivity with perpetual, software as a service and subscription renewal services to ensure your team is working with the highest quality support.',
      site: 'Renewal support',
      siteurl: '#'
    },
    {
      logotitle: 'Vezham',
      logourl: 'desk@vezham.com',
      title: 'Customer Portal Services',
      description:
        'Set up your support portal, populate it with useful solutions and create a dedicated community for your customers.',
      site: 'Customer support',
      siteurl: '#'
    }
  ],

  features: [
    {
      title: 'Services',
      items: [
        {
          title: 'Knowledge base',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Enjoy over 1,000+ screens uploaded every week. Get notified via email whenever new screens are added.'
        },
        {
          title: 'Community forums',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Access to latest screenshots of an app cataloged by expert curators.'
        },
        {
          title: 'Access to previous versions',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Premium]: 'Unlimited',
            [TiersEnum.Enterprise]: 'Unlimited'
          },
          helpText: 'Version travel across versions of an app cataloged.'
        },
        {
          title: 'Access to flows of apps',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Premium]: 'Unlimited',
            [TiersEnum.Enterprise]: 'Unlimited'
          },
          helpText:
            'Access to screens organized by flows like onboarding or login.'
        },
        {
          title: 'Filter & search results',
          tiers: {
            [TiersEnum.Free]: 'Limited to 3 rows',
            [TiersEnum.Premium]: 'Unlimited',
            [TiersEnum.Enterprise]: 'Unlimited'
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
            [TiersEnum.Premium]: 'Unlimited',
            [TiersEnum.Enterprise]: 'Unlimited'
          },
          helpText:
            'Save apps, screens or flows into collections for later viewing.'
        },
        {
          title: 'Copy to clipboard',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Quickly copy screens into your clipboard to be pasted into other tools.'
        },
        {
          title: 'Screen download',
          tiers: {
            [TiersEnum.Free]: true,
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText: 'Download screens as PNG.'
        },
        {
          title: 'Batch download',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
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
            [TiersEnum.Premium]: 'Just you',
            [TiersEnum.Enterprise]: 'Unlimited'
          },
          helpText: 'Collaborate with other users in a team.'
        },
        {
          title: 'Team collections',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Premium]: false,
            [TiersEnum.Enterprise]: true
          },
          helpText: 'Create collections shared across your team.'
        },
        {
          title: 'Team administration',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Premium]: false,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Add or remove members from your team to manage access to membership and collections.'
        },
        {
          title: 'Flexible seat-based licensing',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Premium]: false,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Membership licenses are purchased by seats, which can be Premiumvisioned to or removed from users.'
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
            [TiersEnum.Premium]: false,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Option to pay via invoice and bank transfers on a net 30, 45 or 60 payment term. Available upon request.'
        },
        {
          title: 'Custom agreement',
          tiers: {
            [TiersEnum.Free]: false,
            [TiersEnum.Premium]: false,
            [TiersEnum.Enterprise]: true
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
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText:
            'Browse our articles in our knowledge base to find answers to your questions regarding the platform.'
        },
        {
          title: 'Email support',
          tiers: {
            [TiersEnum.Free]: 'Best effort basis',
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText: 'Get help via email.'
        },
        {
          title: 'Live-chat support',
          tiers: {
            [TiersEnum.Free]: '8 hours, 5days/week',
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText: 'Get help via email.'
        },
        {
          title: 'Phone support',
          tiers: {
            [TiersEnum.Free]: '8 hours, 5days/week',
            [TiersEnum.Premium]: true,
            [TiersEnum.Enterprise]: true
          },
          helpText: 'Get help via email.'
        }
      ]
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
      key: TiersEnum.Premium,
      title: 'Premium',
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
      key: TiersEnum.Enterprise,
      title: 'Enterprise',
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

  faqs: [
    {
      label: 'Frequently Asked Questions ',
      subItems: [
        {
          title: 'What is a ticket?',
          description:
            'Each customer query - be it an email, or a phone call that comes into your account is a ticket. The agent would then be able to click on the ticket to respond to the customer about their query..'
        },
        {
          title: 'If you cant find what you are looking for?',
          description:
            'Raise a ticket and detail what you need help with. Our support team will be happy to lend a helping hand!'
        },

        {
          title: 'How do I create a ticket on behalf of a customer?',
          description:
            'At times, there might be instances where you need to create a ticket on behalf of a customer who reached out to you directly, or for proactive support.'
        },
        {
          title: 'If switch plans according to needs ?',
          description: 'Yes, you can switch plans any time...'
        },
        {
          title: 'Visit our forum for technical support ?',
          description:
            'Experiencing issues with a product you are already using ? Browse through our help docs, videos, and tutorials, or engage with experts'
        }
      ]
    }
  ],
  teamMembers: [
    {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
      role: 'Privacy Concerns',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      social: {
        phone: '@john-doe',
        linkedin: 'john-doe',
        github: '@john-doe',
        mail: '@john-doe'
      }
    },
    {
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?u=a04258ab4e29066708c',
      role: 'HelpDesk ',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      social: {
        phone: '@jane-doe',
        linkedin: 'jane-doe',
        github: '@jane-doe',
        mail: '@jane-doe'
      }
    },
    {
      name: 'Robert Doe',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29066708c',
      role: 'HR',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      social: {
        phone: '@robert-doe',
        linkedin: 'robert-doe',
        github: '@robert-doe',
        mail: '@robert-doe'
      }
    },
    {
      name: 'Milan Doe',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29326708c',
      role: 'Customer Support',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      social: {
        phone: '@milan-doe',
        linkedin: 'milan-doe',
        github: '@milan-doe',
        mail: '@milan-doe'
      }
    }
  ]
}

export const personalizationsData: Personalize[] = [
  {
    cards: {
      welcome_message: {
        __type: 'welcome_message',
        super_title: 'Welcome to Support Center',
        title: '',
        subtitle: 'We are hear to assist ',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
        },
        actions: {
          submit: {
            label: 'Contact us',
            href: '#'
          },
          trial: {
            placeholder: 'Raise Ticket',
            href: '#'
          }
        }
      }
    }
  }
]
