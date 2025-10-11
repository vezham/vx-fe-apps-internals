import { Category, CategoryContent } from './types'

export const categories: Category[] = [
  {
    id: 'featured',
    name: 'Featured',
    subcategories: [
      {
        id: 'all-collections',
        name: 'All Collections',
        hasChildren: true
      },
      {
        id: 'popular',
        name: 'Popular',
        hasChildren: true
      },
      {
        id: 'new',
        name: 'New',
        hasChildren: true
      },
      {
        id: 'free-install',
        name: 'Free Install',
        hasChildren: true
      },
      {
        id: 'support-teams',
        name: 'Support Teams',
        hasChildren: true
      }
    ]
  },
  {
    id: 'categories',
    name: 'Categories',
    subcategories: [
      {
        id: 'sales',
        name: 'Sales',
        hasChildren: true
      },
      {
        id: 'marketing',
        name: 'Marketing',
        hasChildren: true
      },
      {
        id: 'e-commerce',
        name: 'E-commerce',
        hasChildren: true
      },
      {
        id: 'service',
        name: 'Service',
        hasChildren: true
      },
      {
        id: 'finance',
        name: 'Finance',
        hasChildren: true
      }
    ]
  }
]

// Update the category contents to match the new structure
export const categoryContents: Record<string, CategoryContent> = {
  featured: {
    title: 'Featured Apps',
    hero: true,
    apps: [
      // Featured apps will show all collections
    ]
  },

  // All Collections subcategories
  popular: {
    title: 'Popular',
    apps: [
      {
        id: 'whatsapp',
        title: 'WhatsApp',
        description:
          'Easily receive and reply to WhatsApp messages from your inbox',
        icon: 'logos:whatsapp',
        iconColor: 'text-green-500',
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
        ]
      },
      {
        id: 'jira',
        title: 'Jira for Tickets',
        description:
          'Create Jira Issues from Intercom and automate with Workflows',
        icon: 'logos:jira',
        iconColor: 'text-blue-500',
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
        ]
      },
      {
        id: 'salesforce',
        title: 'Salesforce',
        description:
          'Sync data and streamline workflows for sales, marketing and support',
        icon: 'logos:salesforce',
        iconColor: 'text-blue-500',
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
        ]
      },
      {
        id: 'instagram',
        title: 'Instagram',
        description:
          'Easily reply to Instagram private messages from your inbox',
        icon: 'logos:instagram-icon',
        iconColor: 'text-pink-500',
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
        ]
      },
      {
        id: 'slack',
        title: 'Slack',
        description:
          'Send messages and notifications directly to your Slack channels',
        icon: 'logos:slack-icon',
        iconColor: 'text-purple-500',
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
        ]
      },
      {
        id: 'zendesk',
        title: 'Zendesk',
        description:
          'Connect your Zendesk and Intercom accounts for seamless support',
        icon: 'logos:zendesk-icon',
        iconColor: 'text-green-500',
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
        ]
      }
    ]
  },
  new: {
    title: 'New & noteworthy',
    apps: [
      {
        id: 'delighted',
        title: 'Delighted Inc.',
        description:
          'Sync customer feedback and trigger surveys based on key events',
        icon: 'lucide:smile',
        iconColor: 'text-black',
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
        ]
      },
      {
        id: 'whatsapp-new',
        title: 'WhatsApp',
        description:
          'Easily receive and reply to WhatsApp messages from your inbox',
        icon: 'logos:whatsapp',
        iconColor: 'text-green-500',
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
        ]
      },
      {
        id: 'jira-new',
        title: 'Jira for Tickets',
        description:
          'Create Jira Issues from Intercom and automate with Workflows',
        icon: 'logos:jira',
        iconColor: 'text-blue-500',
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
        ]
      },
      {
        id: 'instagram-new',
        title: 'Instagram',
        description:
          'Easily reply to Instagram private messages from your inbox',
        icon: 'logos:instagram-icon',
        iconColor: 'text-pink-500',
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
        ]
      },
      {
        id: 'hubspot-new',
        title: 'HubSpot',
        description:
          'Sync contacts and conversations between Intercom and HubSpot',
        icon: 'logos:hubspot',
        iconColor: 'text-orange-500',
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
        ]
      },
      {
        id: 'stripe-new',
        title: 'Stripe',
        description: 'View customer payment details and subscription status',
        icon: 'logos:stripe',
        iconColor: 'text-blue-500',
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
        ]
      }
    ]
  },
  'free-install': {
    title: 'Free Install',
    apps: [
      {
        id: 'google-analytics',
        title: 'Google Analytics',
        description:
          'Measure the impact of your Messenger on website conversions',
        icon: 'logos:google-analytics',
        iconColor: 'text-yellow-500',
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
        ]
      },
      {
        id: 'mailchimp',
        title: 'Mailchimp',
        description: 'Sync your Intercom and Mailchimp contacts automatically',
        icon: 'logos:mailchimp-icon',
        iconColor: 'text-yellow-500'
      },
      {
        id: 'shopify',
        title: 'Shopify',
        description:
          'Connect your Shopify store to provide better customer support',
        icon: 'logos:shopify',
        iconColor: 'text-green-500'
      },
      {
        id: 'zapier',
        title: 'Zapier',
        description: 'Connect Intercom with 3,000+ apps without any code',
        icon: 'logos:zapier-icon',
        iconColor: 'text-orange-500'
      },
      {
        id: 'calendly',
        title: 'Calendly',
        description:
          'Skip the scheduling back and forth, with Calendly for Intercom',
        icon: 'logos:calendly-icon',
        iconColor: 'text-blue-500'
      },
      {
        id: 'google-calendar',
        title: 'Google Calendar',
        description: 'Let leads and customers book meetings in the Messenger',
        icon: 'logos:google-calendar',
        iconColor: 'text-blue-500'
      }
    ]
  },
  'support-teams': {
    title: 'Support Teams',
    apps: [
      {
        id: 'zendesk-support',
        title: 'Zendesk',
        description:
          'Connect your Zendesk and Intercom accounts for seamless support',
        icon: 'logos:zendesk-icon',
        iconColor: 'text-green-500'
      },
      {
        id: 'front',
        title: 'Front',
        description: 'Manage all your communication channels in one place',
        icon: 'lucide:inbox',
        iconColor: 'text-blue-500'
      },
      {
        id: 'helpscout',
        title: 'Help Scout',
        description: 'Connect Help Scout to provide seamless customer support',
        icon: 'lucide:help-circle',
        iconColor: 'text-blue-500'
      },
      {
        id: 'freshdesk',
        title: 'Freshdesk',
        description: 'Sync conversations between Intercom and Freshdesk',
        icon: 'lucide:headphones',
        iconColor: 'text-green-500'
      },
      {
        id: 'gorgias',
        title: 'Gorgias',
        description:
          'Helpdesk for ecommerce brands on Shopify, Magento and BigCommerce',
        icon: 'lucide:message-square',
        iconColor: 'text-purple-500'
      },
      {
        id: 'kustomer',
        title: 'Kustomer',
        description: 'Connect your Kustomer and Intercom accounts',
        icon: 'lucide:users',
        iconColor: 'text-blue-500'
      }
    ]
  },
  // Categories
  sales: {
    title: 'Sales',
    apps: [
      {
        id: 'crm',
        title: 'CRM',
        description: 'Comprehensive CRM platform for customer-facing teams.',
        icon: 'lucide:link',
        iconColor: 'text-blue-500',
        // Add detailed information
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
        ]
      },
      {
        id: 'bigin',
        title: 'Bigin',
        description:
          'Simple CRM for small businesses moving from spreadsheets.',
        icon: 'lucide:filter',
        iconColor: 'text-green-500',
        // Add detailed information
        detailedDescription:
          'Bigin is a simple yet powerful CRM designed specifically for small businesses transitioning from spreadsheets. Get up and running in minutes with an intuitive interface that requires no technical expertise.',
        image:
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=bigin-dashboard',
        features: [
          {
            icon: 'lucide:zap',
            title: 'Quick Setup',
            description:
              'Get started in minutes with no technical expertise required'
          },
          {
            icon: 'lucide:smartphone',
            title: 'Mobile-First Design',
            description:
              'Manage your customer relationships from anywhere on any device'
          },
          {
            icon: 'lucide:plug',
            title: 'Easy Integrations',
            description:
              'Connect with your favorite tools without complex configuration'
          }
        ],
        metrics: [
          {
            value: 80,
            title: 'Time Saved',
            description:
              'Small businesses report significant time savings compared to spreadsheets'
          },
          {
            value: 90,
            title: 'User Satisfaction',
            description:
              'High adoption rate due to intuitive interface and ease of use'
          }
        ]
      },
      {
        id: 'sign',
        title: 'Sign',
        description: 'Digital signature app for businesses.',
        icon: 'lucide:file-signature',
        iconColor: 'text-blue-500'
      },
      {
        id: 'salesforce-sales',
        title: 'Salesforce',
        description: 'Sync data and streamline workflows for sales teams',
        icon: 'logos:salesforce',
        iconColor: 'text-blue-500'
      },
      {
        id: 'hubspot-sales',
        title: 'HubSpot',
        description: 'Sync contacts and conversations between platforms',
        icon: 'logos:hubspot',
        iconColor: 'text-orange-500'
      },
      {
        id: 'pipedrive',
        title: 'Pipedrive',
        description: 'CRM designed to help small sales teams',
        icon: 'lucide:git-pull-request',
        iconColor: 'text-green-500'
      }
    ]
  },
  marketing: {
    title: 'Marketing',
    apps: [
      {
        id: 'campaigns',
        title: 'Campaigns',
        description:
          'Create, send, and track targeted email campaigns that drive sales.',
        icon: 'lucide:megaphone',
        iconColor: 'text-red-500',
        // Add detailed information
        detailedDescription:
          'Our Campaigns platform helps you create, send, and analyze email marketing campaigns that drive engagement and conversions. With powerful segmentation, beautiful templates, and detailed analytics.',
        image:
          'https://img.heroui.chat/image/dashboard?w=600&h=400&u=campaigns-dashboard',
        features: [
          {
            icon: 'lucide:target',
            title: 'Advanced Segmentation',
            description:
              'Target the right audience with powerful segmentation capabilities'
          },
          {
            icon: 'lucide:palette',
            title: 'Drag-and-Drop Editor',
            description:
              'Create beautiful emails with our intuitive drag-and-drop editor'
          },
          {
            icon: 'lucide:bar-chart',
            title: 'Detailed Analytics',
            description:
              'Track performance with comprehensive reporting and analytics'
          }
        ],
        metrics: [
          {
            value: 35,
            title: 'Higher Open Rates',
            description:
              'Customers see significantly higher open rates compared to industry averages'
          },
          {
            value: 42,
            title: 'Increased Conversions',
            description:
              'Better targeting and content leads to higher conversion rates'
          }
        ]
      },
      {
        id: 'mailchimp-marketing',
        title: 'Mailchimp',
        description: 'Sync your contacts automatically',
        icon: 'logos:mailchimp-icon',
        iconColor: 'text-yellow-500'
      },
      {
        id: 'hubspot-marketing',
        title: 'HubSpot Marketing',
        description: 'Connect your marketing automation platform',
        icon: 'logos:hubspot',
        iconColor: 'text-orange-500'
      },
      {
        id: 'marketo',
        title: 'Marketo',
        description: 'Engage customers with personalized marketing',
        icon: 'lucide:mail',
        iconColor: 'text-purple-500'
      },
      {
        id: 'salesiq',
        title: 'SalesIQ',
        description: 'Live chat app to engage and convert website visitors.',
        icon: 'lucide:target',
        iconColor: 'text-red-500'
      },
      {
        id: 'google-analytics-marketing',
        title: 'Google Analytics',
        description: 'Measure the impact of your campaigns',
        icon: 'logos:google-analytics',
        iconColor: 'text-yellow-500'
      }
    ]
  },
  'e-commerce': {
    title: 'E-commerce',
    apps: [
      {
        id: 'shopify-ecommerce',
        title: 'Shopify',
        description: 'Connect your Shopify store for better customer support',
        icon: 'logos:shopify',
        iconColor: 'text-green-500'
      },
      {
        id: 'woocommerce',
        title: 'WooCommerce',
        description: 'Connect your WooCommerce store to Intercom',
        icon: 'logos:woocommerce-icon',
        iconColor: 'text-purple-500'
      },
      {
        id: 'magento',
        title: 'Magento',
        description: 'Connect your Magento store for seamless integration',
        icon: 'logos:magento',
        iconColor: 'text-orange-500'
      },
      {
        id: 'stripe-ecommerce',
        title: 'Stripe',
        description: 'View customer payment details and subscription status',
        icon: 'logos:stripe',
        iconColor: 'text-blue-500'
      },
      {
        id: 'bigcommerce',
        title: 'BigCommerce',
        description: 'Connect your BigCommerce store to Intercom',
        icon: 'lucide:shopping-bag',
        iconColor: 'text-blue-500'
      },
      {
        id: 'gorgias-ecommerce',
        title: 'Gorgias',
        description: 'Helpdesk for ecommerce brands',
        icon: 'lucide:message-square',
        iconColor: 'text-purple-500'
      }
    ]
  },
  service: {
    title: 'Service',
    apps: [
      {
        id: 'desk',
        title: 'Desk',
        description:
          'Customer service software for exceptional customer support.',
        icon: 'lucide:headphones',
        iconColor: 'text-blue-500'
      },
      {
        id: 'assist',
        title: 'Assist',
        description: 'Remote support and screen sharing solution.',
        icon: 'lucide:life-buoy',
        iconColor: 'text-green-500'
      },
      {
        id: 'zendesk-service',
        title: 'Zendesk',
        description: 'Connect for seamless support',
        icon: 'logos:zendesk-icon',
        iconColor: 'text-green-500'
      },
      {
        id: 'freshdesk-service',
        title: 'Freshdesk',
        description: 'Sync conversations between platforms',
        icon: 'lucide:headphones',
        iconColor: 'text-green-500'
      },
      {
        id: 'helpscout-service',
        title: 'Help Scout',
        description: 'Connect to provide seamless customer support',
        icon: 'lucide:help-circle',
        iconColor: 'text-blue-500'
      },
      {
        id: 'front-service',
        title: 'Front',
        description: 'Manage all your communication channels in one place',
        icon: 'lucide:inbox',
        iconColor: 'text-blue-500'
      }
    ]
  },
  finance: {
    title: 'Finance',
    apps: [
      {
        id: 'books',
        title: 'Books',
        description: 'Accounting software for growing businesses.',
        icon: 'lucide:book',
        iconColor: 'text-green-500'
      },
      {
        id: 'invoice',
        title: 'Invoice',
        description: 'Create and send professional invoices.',
        icon: 'lucide:file-text',
        iconColor: 'text-blue-500'
      },
      {
        id: 'stripe-finance',
        title: 'Stripe',
        description: 'View customer payment details and subscription status',
        icon: 'logos:stripe',
        iconColor: 'text-blue-500'
      },
      {
        id: 'xero',
        title: 'Xero',
        description: 'Connect your accounting software to Intercom',
        icon: 'lucide:dollar-sign',
        iconColor: 'text-blue-500'
      },
      {
        id: 'quickbooks',
        title: 'QuickBooks',
        description: 'Sync your financial data with Intercom',
        icon: 'lucide:credit-card',
        iconColor: 'text-green-500'
      },
      {
        id: 'chargebee',
        title: 'Chargebee',
        description: 'Subscription billing and revenue management',
        icon: 'lucide:repeat',
        iconColor: 'text-purple-500'
      }
    ]
  }
}

// Add content for the featured section that includes all collections
categoryContents.featured = {
  title: 'Featured Apps',
  hero: true,
  apps: [
    // This will be populated dynamically in the component
  ]
}

// Add the missing appDetails export
export const appDetails: Record<string, any> = {
  crm: {
    id: 'crm',
    title: 'CRM',
    description: 'Comprehensive CRM platform for customer-facing teams.',
    icon: 'lucide:link',
    iconColor: 'text-blue-500',
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
        icon: 'lucide:users',
        title: 'Team Collaboration',
        description:
          'Tools for teams to work together seamlessly on customer relationships'
      },
      {
        icon: 'lucide:bar-chart',
        title: 'Advanced Analytics',
        description:
          'Comprehensive reporting and insights to drive business decisions'
      },
      {
        icon: 'lucide:smartphone',
        title: 'Mobile Access',
        description: 'Access your CRM data from anywhere on any device'
      },
      {
        icon: 'lucide:plug',
        title: 'API Integration',
        description: 'Connect with your existing tools and systems'
      },
      {
        icon: 'lucide:shield',
        title: 'Enterprise Security',
        description: 'Robust security features to protect your customer data'
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
      },
      {
        value: 78,
        title: 'Customer Satisfaction',
        description:
          'Improved customer experience through better relationship management'
      }
    ],
    // Add pricing data
    pricing: [
      {
        name: 'Basic',
        price: '$9',
        period: 'per user/month',
        features: [
          '5 users',
          '10GB storage',
          'Basic support',
          'Core CRM features'
        ],
        isPopular: false
      },
      {
        name: 'Professional',
        price: '$29',
        period: 'per user/month',
        features: [
          '25 users',
          '100GB storage',
          'Priority support',
          'Advanced analytics',
          'API access'
        ],
        isPopular: true
      },
      {
        name: 'Enterprise',
        price: '$99',
        period: 'per user/month',
        features: [
          'Unlimited users',
          '1TB storage',
          '24/7 support',
          'Custom features',
          'Dedicated account manager'
        ],
        isPopular: false
      }
    ],
    // Add support data
    support: [
      {
        icon: 'lucide:message-circle',
        title: 'Live Chat',
        description: 'Get instant help from our support team'
      },
      {
        icon: 'lucide:book-open',
        title: 'Documentation',
        description: 'Comprehensive guides and tutorials'
      },
      {
        icon: 'lucide:video',
        title: 'Webinars',
        description: 'Regular training sessions and demos'
      }
    ]
  },
  bigin: {
    id: 'bigin',
    title: 'Bigin',
    description: 'Simple CRM for small businesses moving from spreadsheets.',
    icon: 'lucide:filter',
    iconColor: 'text-green-500',
    detailedDescription:
      'Bigin is a simple yet powerful CRM designed specifically for small businesses transitioning from spreadsheets. Get up and running in minutes with an intuitive interface that requires no technical expertise.',
    image:
      'https://img.heroui.chat/image/dashboard?w=600&h=400&u=bigin-dashboard',
    features: [
      {
        icon: 'lucide:zap',
        title: 'Quick Setup',
        description:
          'Get started in minutes with no technical expertise required'
      },
      {
        icon: 'lucide:smartphone',
        title: 'Mobile-First Design',
        description:
          'Manage your customer relationships from anywhere on any device'
      },
      {
        icon: 'lucide:plug',
        title: 'Easy Integrations',
        description:
          'Connect with your favorite tools without complex configuration'
      },
      {
        icon: 'lucide:mail',
        title: 'Email Integration',
        description: 'Connect your email accounts for seamless communication'
      },
      {
        icon: 'lucide:calendar',
        title: 'Calendar Sync',
        description: 'Keep track of meetings and follow-ups in one place'
      },
      {
        icon: 'lucide:file-text',
        title: 'Document Management',
        description: 'Store and organize customer-related documents'
      },
      {
        icon: 'lucide:bell',
        title: 'Notifications',
        description: 'Stay on top of important customer interactions'
      },
      {
        icon: 'lucide:trending-up',
        title: 'Simple Reports',
        description: 'Easy-to-understand reports for business insights'
      }
    ],
    metrics: [
      {
        value: 80,
        title: 'Time Saved',
        description:
          'Small businesses report significant time savings compared to spreadsheets'
      },
      {
        value: 90,
        title: 'User Satisfaction',
        description:
          'High adoption rate due to intuitive interface and ease of use'
      },
      {
        value: 65,
        title: 'Sales Increase',
        description:
          'Average sales increase reported by users after implementation'
      }
    ],
    // Add pricing data
    pricing: [
      {
        name: 'Starter',
        price: '$5',
        period: 'per user/month',
        features: ['3 users', '5GB storage', 'Email support', 'Basic features'],
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
  },
  campaigns: {
    id: 'campaigns',
    title: 'Campaigns',
    description:
      'Create, send, and track targeted email campaigns that drive sales.',
    icon: 'lucide:megaphone',
    iconColor: 'text-red-500',
    detailedDescription:
      'Our Campaigns platform helps you create, send, and analyze email marketing campaigns that drive engagement and conversions. With powerful segmentation, beautiful templates, and detailed analytics.',
    image:
      'https://img.heroui.chat/image/dashboard?w=600&h=400&u=campaigns-dashboard',
    features: [
      {
        icon: 'lucide:target',
        title: 'Advanced Segmentation',
        description:
          'Target the right audience with powerful segmentation capabilities'
      },
      {
        icon: 'lucide:palette',
        title: 'Drag-and-Drop Editor',
        description:
          'Create beautiful emails with our intuitive drag-and-drop editor'
      },
      {
        icon: 'lucide:bar-chart',
        title: 'Detailed Analytics',
        description:
          'Track performance with comprehensive reporting and analytics'
      },
      {
        icon: 'lucide:clock',
        title: 'Scheduled Sending',
        description: 'Schedule campaigns to send at the optimal time'
      },
      {
        icon: 'lucide:mail',
        title: 'Email Templates',
        description: 'Choose from a library of professional email templates'
      },
      {
        icon: 'lucide:repeat',
        title: 'Automated Workflows',
        description: 'Set up automated email sequences based on user behavior'
      },
      {
        icon: 'lucide:smartphone',
        title: 'Mobile Optimization',
        description: 'Ensure your emails look great on all devices'
      },
      {
        icon: 'lucide:check-circle',
        title: 'Spam Testing',
        description: 'Test your emails against spam filters before sending'
      }
    ],
    metrics: [
      {
        value: 35,
        title: 'Higher Open Rates',
        description:
          'Customers see significantly higher open rates compared to industry averages'
      },
      {
        value: 42,
        title: 'Increased Conversions',
        description:
          'Better targeting and content leads to higher conversion rates'
      },
      {
        value: 28,
        title: 'Revenue Growth',
        description: 'Average increase in revenue attributed to email campaigns'
      }
    ],
    // Add pricing data
    pricing: [
      {
        name: 'Essential',
        price: '$19',
        period: 'per month',
        features: [
          'Up to 5,000 subscribers',
          'Basic templates',
          'Standard support',
          'Basic analytics'
        ],
        isPopular: false
      },
      {
        name: 'Professional',
        price: '$49',
        period: 'per month',
        features: [
          'Up to 25,000 subscribers',
          'Premium templates',
          'Priority support',
          'Advanced analytics',
          'A/B testing'
        ],
        isPopular: true
      },
      {
        name: 'Enterprise',
        price: '$149',
        period: 'per month',
        features: [
          'Unlimited subscribers',
          'Custom templates',
          'Dedicated support',
          'Advanced features',
          'API access'
        ],
        isPopular: false
      }
    ],
    // Add support data
    support: [
      {
        icon: 'lucide:headphones',
        title: 'Phone Support',
        description: 'Speak directly with our support team'
      },
      {
        icon: 'lucide:message-circle',
        title: 'Live Chat',
        description: 'Get instant help during business hours'
      },
      {
        icon: 'lucide:book-open',
        title: 'Resource Center',
        description: 'Access guides, tutorials, and best practices'
      }
    ]
  },
  // Add more app details with pricing and support data as needed
  whatsapp: {
    id: 'whatsapp',
    title: 'WhatsApp',
    description:
      'Easily receive and reply to WhatsApp messages from your inbox',
    icon: 'logos:whatsapp',
    iconColor: 'text-green-500',
    detailedDescription:
      'Integrate WhatsApp with your business communication channels to provide seamless customer support. Manage all your WhatsApp conversations alongside other communication channels in one unified inbox.',
    image:
      'https://img.heroui.chat/image/dashboard?w=600&h=400&u=whatsapp-integration',
    features: [
      {
        icon: 'lucide:inbox',
        title: 'Unified Inbox',
        description: 'Manage WhatsApp messages alongside other channels'
      },
      {
        icon: 'lucide:users',
        title: 'Team Collaboration',
        description: 'Multiple team members can handle WhatsApp conversations'
      },
      {
        icon: 'lucide:message-square',
        title: 'Rich Media Support',
        description: 'Send and receive images, videos, and documents'
      },
      {
        icon: 'lucide:tag',
        title: 'Conversation Tagging',
        description: 'Organize conversations with custom tags'
      }
    ],
    metrics: [
      {
        value: 60,
        title: 'Response Time Improvement',
        description: 'Faster response times to customer inquiries'
      },
      {
        value: 75,
        title: 'Customer Satisfaction',
        description: 'Higher satisfaction ratings for WhatsApp support'
      }
    ],
    pricing: [
      {
        name: 'Basic',
        price: '$15',
        period: 'per month',
        features: [
          '1 WhatsApp number',
          '500 messages/month',
          'Basic reporting',
          'Email support'
        ],
        isPopular: false
      },
      {
        name: 'Business',
        price: '$45',
        period: 'per month',
        features: [
          '3 WhatsApp numbers',
          '5,000 messages/month',
          'Advanced reporting',
          'Priority support'
        ],
        isPopular: true
      },
      {
        name: 'Enterprise',
        price: '$120',
        period: 'per month',
        features: [
          '10 WhatsApp numbers',
          'Unlimited messages',
          'Custom integrations',
          'Dedicated support'
        ],
        isPopular: false
      }
    ],
    support: [
      {
        icon: 'lucide:mail',
        title: 'Email Support',
        description: 'Get help via email within 24 hours'
      },
      {
        icon: 'lucide:message-circle',
        title: 'WhatsApp Support',
        description: 'Ironically, we offer support via WhatsApp too'
      },
      {
        icon: 'lucide:book-open',
        title: 'Knowledge Base',
        description: 'Comprehensive guides and tutorials'
      }
    ]
  }
}
