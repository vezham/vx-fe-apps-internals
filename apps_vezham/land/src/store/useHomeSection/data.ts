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
            href: ''
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
        href: '/vezham/products',
        subItems: [
          {
            title: 'Apps',
            Items: [
              {
                icon: 'lucide:zap',
                name: 'Vezham One',
                description: 'All-in-one suite for Personal use and Family',
                link: '/vezham one',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image: 'https://vezham.com/img/AboutUs.bbd5631b.jpg',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
              },
              {
                icon: 'lucide:building',
                name: 'Vezham HQ',
                description:
                  'Enterprise-grade suite for Businesses and Organizations',
                link: '/vezham-hq',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image:
                      'https://img.heroui.chat/image/dashboard?w=600&h=400&u=crm-dashboard',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
              },
              {
                icon: 'lucide:building',
                name: 'Enterprises',
                description: 'For large organizations',
                link: '/enterprises',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image:
                      'https://img.heroui.chat/image/dashboard?w=600&h=400&u=crm-dashboard',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
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
                name: 'Vezham Suites',
                description: 'All-in-one suite for Personal use and Family',
                link: '/suites/vezham-one',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image:
                      'https://buildfire.com/wp-content/uploads/2025/09/build-easily.png',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
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
                name: 'Vezham CRM Platforms',
                description: 'All-in-one suite for Personal use and Family',
                link: '/platforms/vezham-one',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image: 'https://heroui.com/images/card-example-2.jpeg',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
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
                link: 'https://help.vezham.com',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image: 'https://heroui.com/images/card-example-3.jpeg',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
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
                link: '/solutions/industries/education',
                detailedItems: [
                  {
                    detailedDescription:
                      'Our CRM solution empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
                    image: 'https://heroui.com/images/card-example-4.jpeg',
                    features: [
                      {
                        icon: 'lucide:database',
                        title: 'Robust IT Infrastructure',
                        description:
                          'Integrated systems and platforms for seamless customer relationship management'
                      },
                      {
                        icon: 'lucide:workflow',
                        title: 'Workflow Automation',
                        description:
                          'Automated processes to reduce manual intervention and improve efficiency'
                      },
                      {
                        icon: 'lucide:brain',
                        title: 'AI/ML-Based Smart Solutions',
                        description:
                          'Predictive analytics and intelligent systems for data-driven customer insights'
                      }
                    ],
                    metrics: [
                      {
                        value: 40,
                        title: 'Increased Efficiency',
                        description:
                          'Streamlined processes and reduced processing times for sales operations'
                      },
                      {
                        value: 65,
                        title: 'Enhanced Decision-Making',
                        description:
                          'Data-driven insights enabling better policy and sales strategy decisions'
                      }
                    ],
                    pricing: [
                      {
                        name: 'Starter',
                        price: '$5',
                        period: 'per user/month',
                        features: [
                          '3 users',
                          '5GB storage',
                          'Email support',
                          'Basic features'
                        ],
                        isPopular: false
                      },
                      {
                        name: 'Growth',
                        price: '$15',
                        period: 'per user/month',
                        features: [
                          '10 users',
                          '20GB storage',
                          'Email & chat support',
                          'All features'
                        ],
                        isPopular: true
                      },
                      {
                        name: 'Business',
                        price: '$25',
                        period: 'per user/month',
                        features: [
                          '20 users',
                          '50GB storage',
                          'Priority support',
                          'Advanced features',
                          'API access'
                        ],
                        isPopular: false
                      }
                    ],
                    // Add support data
                    support: [
                      {
                        icon: 'lucide:mail',
                        title: 'Email Support',
                        description: 'Get help via email within 24 hours'
                      },
                      {
                        icon: 'lucide:help-circle',
                        title: 'Knowledge Base',
                        description: 'Find answers to common questions'
                      },
                      {
                        icon: 'lucide:users',
                        title: 'Community Forum',
                        description: 'Connect with other users and share tips'
                      }
                    ]
                  }
                ]
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
