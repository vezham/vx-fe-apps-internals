import { Category, CategoryContent, Technology } from './types'

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

export const categoryContents: Record<string, CategoryContent> = {
  // All Collections subcategories
  popular: {
    title: 'Popular',
    apps: [
      {
        id: 'whatsapp',
        category: 'Meta',
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
      },
      {
        id: 'jira',
        category: 'Meta',
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
      },
      {
        id: 'salesforce',
        title: 'Salesforce',
        category: 'Sales',
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
      },
      {
        id: 'instagram',
        title: 'Instagram',
        category: 'Meta',
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
      },
      {
        id: 'slack',
        title: 'Slack',
        category: 'Slack',
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
        ],
        category: 'Zendesk'
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

export const technologiesData: Technology[] = [
  {
    color: 'text-purple-600',
    category: 'Infrastructure',
    id: 'cloud-transformation',
    title: 'Cloud Transformation',
    description:
      'Seamless migration and optimization of your infrastructure with secure, scalable cloud solutions.',
    shortDescription:
      'Accelerate your business with next-generation cloud technology for enhanced agility, scalability, and security.',
    fullDescription:
      "In today's fast-paced digital landscape, businesses need agility, scalability, and security to stay ahead. RamInfosys delivers end-to-end cloud transformation services—helping enterprises migrate, modernize, and optimize their IT infrastructure for peak performance, cost efficiency, and innovation.",
    icon: 'lucide:cloud',
    image: '../images/services/cloud-1.jpg',
    bannerImage: '../images/services/cloud.jpg',
    obstaclesImage: '../images/services/cloud-2.jpg',
    sections: [
      {
        title: 'Why Cloud Transformation is Essential',
        content:
          'Legacy systems slow you down. Outdated infrastructure leads to high operational costs from maintaining physical servers, downtime risks during upgrades or failures, limited scalability, making it hard to handle traffic spikes, and security vulnerabilities in aging IT environments. Our cloud-first approach eliminates these barriers, enabling faster innovation with DevOps and CI/CD pipelines, elastic scalability to match business demand, predictable costs with pay-as-you-go models, and enterprise-grade security & compliance (GDPR, HIPAA, SOC 2).'
      },
      {
        title: 'Our Cloud Solutions: Migration, Modernization & Management',
        content:
          'We offer seamless cloud migration with zero-downtime transitions from on-premise to cloud (AWS, Azure, GCP), automated workload assessment for optimal cloud architecture, and legacy app modernization (containerization, serverless). Our smart cloud optimization includes AI-driven cost management to reduce waste with auto-scaling & reserved instances, performance tuning with high-availability architectures for mission-critical apps, and multi-cloud & hybrid strategies to avoid vendor lock-in. We also provide secure cloud operations with 24/7 monitoring & incident response, automated backups & disaster recovery, and identity & access management (IAM) for strict compliance.'
      }
    ],
    painPoints: [
      {
        title: 'Outdated infrastructure',
        description:
          "Legacy systems will slow's you down in this aging IT environments"
      },
      {
        title: 'High operational costs',
        description:
          'High operational costs from maintaining physical servers while comparing with cloud'
      },
      {
        title: 'Downtime risks',
        description:
          'Downtime risks during upgrades or failures & from cyber attacks'
      },
      {
        title: 'Limited scalability',
        description: 'Making it hard to handle traffic spikes'
      },
      {
        title: 'Security vulnerabilities',
        description: 'Open to security vulnerabilities in aging IT environments'
      }
    ],
    features: [
      {
        title: 'Zero-downtime cloud migration',
        description:
          'Seamless transitions from on-premise to cloud (AWS, Azure, GCP)',
        icon: 'lucide:check'
      },
      {
        title: 'Legacy app modernization',
        description:
          'Upgrade with latest tools like containerization, serverless',
        icon: 'lucide:check'
      },
      {
        title: 'AI-driven cost optimization',
        description: 'Reduce waste with auto-scaling & reserved instances',
        icon: 'lucide:check'
      },
      {
        title: 'Performance tuning',
        description:
          'High-availability architectures for mission-critical apps',
        icon: 'lucide:check'
      },
      {
        title: 'Multi-cloud & hybrid strategies',
        description:
          'Avoid vendor lock-in with 24/7 monitoring & incident response',
        icon: 'lucide:check'
      },
      {
        title: 'Secured Cloud Operations',
        description:
          'provides Identity & access management (IAM) for strict compliance with Automated backups & disaster recovery',
        icon: 'lucide:check'
      }
    ],
    impacts: [
      {
        title: '45%',
        description: 'Average Cost Reduction',
        value: '45%',
        hideValueLabel: true
      },
      {
        title: '60%',
        description: 'Deployment Speed Improvement',
        value: '60%',
        hideValueLabel: true
      },
      {
        title: 'Downtime',
        description: 'App Crash report',
        value: '<1%',
        label: true
      }
    ],
    impacts_skip: true,
    benefits: [
      {
        title: 'Faster Innovation',
        description: 'Accelerate development with DevOps and CI/CD pipelines',
        icon: 'lucide:rocket'
      },
      {
        title: 'Elastic Scalability',
        description: 'Scale resources up or down to match business demand',
        icon: 'lucide:expand'
      },
      {
        title: 'Predictable Costs',
        description: 'Pay-as-you-go models for better budget management',
        icon: 'lucide:wallet'
      },
      {
        title: 'Enterprise Security',
        description: 'Compliance with GDPR, HIPAA, SOC 2 standards',
        icon: 'lucide:shield'
      },
      {
        title: 'Certified Cloud Architects',
        description:
          'Certified partner with popular Cloud Providers (AWS, Azure, Google Cloud)',
        icon: 'lucide:check'
      }
    ],
    caseStudy: {
      title: 'Retail Giant Cuts Costs by 45%',
      challenge:
        'A leading retailer struggled with slow deployments and high infrastructure costs.',
      solution:
        'We migrated their systems to a hybrid AWS + Azure cloud, optimizing resource allocation.',
      results: [
        {
          title: 'Infrastructure Cost Reduction',
          value: '45%'
        },
        {
          title: 'Deployment Speed Improvement',
          value: '60%'
        },
        {
          title: 'Inventory Tracking Downtime',
          value: '<1%',
          label: true,
          label_title: 'Downtime'
        }
      ]
    }
  },
  {
    color: 'text-green-600',
    category: 'Artificial Intelligence',
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    shortDescription:
      'Transform data into actionable insights and automated actions for growth and efficiency.',
    fullDescription:
      'Our AI and Machine Learning solutions help businesses leverage their data to gain predictive insights, automate processes, and create personalized experiences that drive growth and efficiency.',
    icon: 'lucide:brain',
    image: '../images/services/ai.jpg',
    bannerImage: '../images/services/ai-1.jpg',
    obstaclesImage: '../images/services/ai-2.jpg',
    featuresImage: '../images/services/ai-3.jpg',
    // "https://img.heroui.chat/image/ai?w=1200&h=600&u=ai1",
    painPoints: [
      {
        title: 'Data Overload',
        description: 'Overwhelming amounts of data with no actionable insights'
      },
      {
        title: 'Manual Decision Making',
        description: 'Error-prone processes relying on human judgment alone'
      },
      {
        title: 'Personalization Gaps',
        description: 'Inability to deliver customized experiences to customers'
      }
    ],
    features: [
      {
        title: 'Predictive Analytics',
        description: 'Forecast trends and outcomes with advanced algorithms',
        icon: 'lucide:line-chart'
      },
      {
        title: 'NLP Chatbots',
        description:
          'Natural language processing for intelligent customer service',
        icon: 'lucide:message-circle'
      },
      {
        title: 'Computer Vision',
        description: 'Image recognition and processing for quality control',
        icon: 'lucide:eye'
      },
      {
        title: 'Anomaly Detection',
        description:
          'Real-time identification of unusual patterns or behaviors',
        icon: 'lucide:alert-triangle'
      }
    ],
    impacts: [
      {
        title: 'Prediction Accuracy',
        description:
          'ML algorithms achieved high accuracy in patient readmission risk prediction',
        value: '82%'
      },
      {
        title: 'Readmission Reduction',
        description: 'Healthcare provider reduced patient readmission rates',
        value: '28%'
      },
      {
        title: 'Response Time',
        description: 'Improved care response time for at-risk patients'
      }
    ]
  },
  {
    color: 'text-green-600',
    category: 'Infrastructure',
    id: 'blockchain',
    title: 'Blockchain',
    shortDescription:
      'Secure, transparent, and tamper-proof digital transactions',
    fullDescription:
      'Our blockchain solutions provide businesses with decentralized, immutable ledger technology that enhances security, transparency, and efficiency across various processes and transactions.',
    icon: 'lucide:link',
    image: '../images/services/blockchain.jpg',
    bannerImage: '../images/services/blockchain-1.jpg',
    obstaclesImage: '../images/services/blockchain-2.jpg',
    featuresImage: '../images/services/blockchain-3.jpg',
    painPoints: [
      {
        title: 'Transaction Transparency',
        description:
          'Lack of visibility and traceability in complex transactions'
      },
      {
        title: 'Data Tampering',
        description: 'Vulnerability to fraud and unauthorized modifications'
      },
      {
        title: 'Centralized Systems',
        description:
          'Single points of failure in traditional database architectures'
      }
    ],
    features: [
      {
        title: 'Decentralized Ledgers',
        description: 'Distributed and tamper-proof record-keeping',
        icon: 'lucide:database'
      },
      {
        title: 'Smart Contracts',
        description: 'Self-executing agreements with predefined conditions',
        icon: 'lucide:file-check'
      },
      {
        title: 'Asset Tokenization',
        description: 'Digital representation of assets for seamless exchange',
        icon: 'lucide:badge'
      },
      {
        title: 'Identity Verification',
        description: 'Secure authentication and comprehensive audit trails',
        icon: 'lucide:fingerprint'
      }
    ],
    impacts: [
      {
        title: 'Traceability Increase',
        description: 'Logistics firm improved shipment tracking across borders',
        value: '90%'
      },
      {
        title: 'Fraud Reduction',
        description: 'Significant decrease in fraudulent activities'
      },
      {
        title: 'Processing Time',
        description:
          'Reduced customs processing time for international shipments',
        value: '40%'
      }
    ]
  },
  {
    color: 'text-green-600',
    category: 'Productivity',
    id: 'internet-of-things',
    title: 'Internet of Things (IoT)',
    shortDescription:
      'Connect and optimize physical assets with intelligent monitoring',
    fullDescription:
      'Our IoT solutions connect devices, sensors, and systems to create intelligent networks that provide real-time insights, enable predictive maintenance, and optimize operational efficiency.',
    icon: 'lucide:wifi',
    image: '../images/services/iot-1.jpg',
    bannerImage: '../images/services/iot.jpg',
    obstaclesImage: '../images/services/iot-2.jpg',
    featuresImage: '../images/services/iot-3.jpg',
    painPoints: [
      {
        title: 'Equipment Downtime',
        description:
          'Unexpected failures leading to costly production interruptions'
      },
      {
        title: 'Operational Visibility',
        description: 'Limited real-time insights into equipment performance'
      },
      {
        title: 'Energy Consumption',
        description: 'Excessive and inefficient use of power resources'
      }
    ],
    features: [
      {
        title: 'Device Integration',
        description:
          'Seamless connection of sensors and equipment to central systems',
        icon: 'lucide:plug'
      },
      {
        title: 'Predictive Maintenance',
        description:
          'Early detection of potential failures through sensor data analysis',
        icon: 'lucide:alert-circle'
      },
      {
        title: 'Remote Monitoring',
        description: 'Real-time observation and control of distributed systems',
        icon: 'lucide:monitor'
      },
      {
        title: 'Energy Optimization',
        description:
          'Intelligent management of power consumption across facilities',
        icon: 'lucide:zap'
      }
    ],
    impacts: [
      {
        title: 'Downtime Reduction',
        description:
          'Manufacturing plant decreased unplanned equipment failures',
        value: '50%'
      },
      {
        title: 'Annual Savings',
        description: 'Cost reduction in maintenance and operational expenses',
        value: '$300K+',
        label: true
      },
      {
        title: 'Productivity Increase',
        description: 'Improved overall equipment effectiveness and output'
      }
    ]
  },
  {
    color: 'text-pink-600',
    category: 'Artificial Intelligence',
    id: 'data-analytics',
    title: 'Data Analytics & AI',
    description:
      'Transform raw data into actionable insights with advanced analytics and artificial intelligence.',
    // description: "Turn complex data into actionable business intelligence.",
    shortDescription:
      'Turn complex data into competitive advantage with real-time analytics and insights.',
    fullDescription:
      'Our data analytics solutions help organizations collect, process, and analyze data from multiple sources to uncover insights, identify trends, and make data-driven decisions that drive business growth.',
    icon: 'lucide:bar-chart-2',
    image: '../images/services/data-analytics.jpg',
    bannerImage: '../images/services/data-analytics-1.jpg',
    obstaclesImage: '../images/services/data-analytics-2.jpg',
    featuresImage: '../images/services/data-analytics-3.jpg',
    painPoints: [
      {
        title: 'Siloed Data',
        description:
          'Fragmented information across different systems and departments'
      },
      {
        title: 'Trend Identification',
        description:
          'Inability to recognize patterns in customer behavior and market changes'
      },
      {
        title: 'Reporting Delays',
        description: 'Time-consuming manual processes for generating insights'
      }
    ],
    features: [
      {
        title: 'Centralized Dashboards',
        description: 'Unified view of KPIs and metrics with real-time updates',
        icon: 'lucide:layout-dashboard'
      },
      {
        title: 'Prescriptive Analytics',
        description:
          'Advanced analysis to recommend optimal actions and strategies',
        icon: 'lucide:lightbulb'
      },
      {
        title: 'Data Integration',
        description:
          'Seamless connection of multiple data sources (ERP, CRM, etc.)',
        icon: 'lucide:database'
      },
      {
        title: 'Visualization Tools',
        description:
          'Interactive charts and graphs for intuitive data exploration',
        icon: 'lucide:pie-chart'
      }
    ],
    impacts: [
      {
        title: 'ROI Improvement',
        description: 'eCommerce company optimized advertising spend',
        value: '35%'
      },
      {
        title: 'Sales Increase',
        description: 'Enhanced campaign performance through better targeting',
        value: '22%'
      },
      {
        title: 'Customer Segmentation',
        description:
          'More accurate identification of customer groups and preferences'
      },
      {
        title: 'Decision Speed',
        description: 'Improvement in time to make data-driven decisions',
        value: '25-35%'
      },
      {
        title: 'Revenue Growth',
        description: 'Increase through more intelligent targeting',
        value: '20%'
      }
    ]
  },
  {
    color: 'text-blue-600',
    category: 'Product',
    id: 'enterprise-software-development',
    title: 'Enterprise Software Development',
    description:
      'Custom software solutions tailored to address your unique business challenges and streamline operations.',
    shortDescription:
      'Transform operations with purpose-built software tailored to your industry and workflows.',
    fullDescription:
      "We design and develop custom enterprise-grade software tailored to your industry, workflows, and long-term goals. Whether you're modernizing legacy systems or building from scratch, we focus on scalability, performance, and seamless integration.",
    icon: 'lucide:code-2',
    image: '../images/services/software-development.jpg',
    bannerImage: '../images/services/software-development-1.jpg',
    featuresImage: '../images/services/software-development-2.jpg',
    benefits: [
      {
        title: 'Custom-Fit Solutions',
        description: 'Perfectly aligned with your unique business model',
        icon: 'lucide:puzzle'
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamlined workflows and improved collaboration',
        icon: 'lucide:settings'
      },
      {
        title: 'System Integration',
        description: 'Seamless connection with ERP, CRM, and legacy systems',
        icon: 'lucide:plug'
      },
      {
        title: 'Scalable Architecture',
        description: 'Built to accommodate future growth and expansion',
        icon: 'lucide:layers'
      }
    ],
    impacts: [
      {
        title: 'Process Efficiency',
        description:
          'Reduction in operational inefficiencies through custom software',
        value: '40%'
      },
      {
        title: 'Time-to-Market',
        description: 'Faster deployment of new products and services',
        value: '30%'
      }
    ]
  },
  {
    color: 'text-teal-600',
    category: 'Productivity',
    id: 'it-consulting-n-strategy',
    title: 'IT Consulting & Strategy',
    description:
      'Strategic guidance to align technology investments with business goals for maximum ROI.',
    shortDescription:
      'Accelerate digital success with strategic insights and 24/7 operational excellence.',
    fullDescription:
      'RamInfosys empowers enterprises with a dual approach: expert IT consulting to align technology with business goals and fully managed IT services to ensure performance, reliability, and scalability.',
    icon: 'lucide:users',
    image: '../images/services/consulting.jpg',
    bannerImage: '../images/services/consulting-1.jpg',
    featuresImage: '../images/services/consulting-2.jpg',
    sections: [
      {
        title: 'What We Deliver',
        content:
          'From high-level digital strategy to hands-on operational management, our services help drive innovation, eliminate inefficiencies, and maintain seamless operations across your IT landscape.'
      }
    ],
    benefits: [
      {
        title: 'Strategic IT Consulting',
        description: 'Roadmap development tailored to your business KPIs',
        icon: 'lucide:map'
      },
      {
        title: 'Gap Analysis',
        description:
          'Digital maturity assessments to identify improvement areas',
        icon: 'lucide:search'
      },
      {
        title: 'Technology Enablement',
        description: 'Cloud, DevOps, and automation implementation',
        icon: 'lucide:rocket'
      },
      {
        title: 'Vendor-Neutral Advisory',
        description:
          'Independent technology recommendations based on your needs',
        icon: 'lucide:shield'
      }
    ],
    impacts: [
      {
        title: 'IT Resource Utilization',
        description: 'Improvement in efficiency of IT resources',
        value: '30-45%'
      },
      {
        title: 'Support Ticket Reduction',
        description: 'Decrease in support issues through proactive maintenance',
        value: '60%'
      },
      {
        title: 'System Uptime',
        description: 'Ensuring continuous operational availability',
        value: '99.9%'
      },
      {
        title: 'ROI Acceleration',
        description:
          'Faster return on IT investments aligned with business goals'
      }
    ]
  },
  {
    color: 'text-indigo-600',
    category: 'Infrastructure',
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description:
      'Comprehensive IT management to keep your systems running smoothly and efficiently.',
    shortDescription:
      'Comprehensive IT management to keep your systems running smoothly and efficiently.',
    fullDescription:
      'Leverage our fully managed IT services to ensure performance, reliability, and scalability across your IT landscape.',
    icon: 'lucide:settings',
    image: '../images/services/it-services.jpg',
    bannerImage: '../images/services/it-services-1.jpg',
    featuresImage: '../images/services/it-services-2.jpg',
    benefits: [
      {
        title: 'Risk Monitoring',
        description: '24x7 infrastructure monitoring and incident resolution',
        icon: 'lucide:eye'
      },
      {
        title: 'scalable Infrastructure',
        description:
          'Predictable, scalable service models for any business size',
        icon: 'lucide:bar-chart'
      },
      {
        title: 'Zero Downtime',
        description: 'Proactive maintenance to prevent downtime',
        icon: 'lucide:trending-up'
      },
      {
        title: 'Continuous Optimization',
        description: 'Continuous system updates and performance optimization',
        icon: 'lucide:database'
      }
    ],
    impacts: [
      {
        title: 'Decision Speed',
        description: 'Improvement in time to make data-driven decisions',
        value: '25-35%'
      },
      {
        title: 'Revenue Growth',
        description: 'Increase through more intelligent targeting',
        value: '20%'
      },
      {
        title: 'System Uptime',
        description: 'Ensuring continuous operational availability',
        value: '99.9%'
      },
      {
        title: 'ROI Acceleration',
        description:
          'Faster return on IT investments aligned with business goals'
      }
    ]
  },
  {
    color: 'text-amber-600',
    category: 'Infrastructure',
    id: 'cyber-security',
    title: 'Cyber Security',
    description:
      'Protect your digital assets with comprehensive security strategies and advanced threat detection.',
    shortDescription:
      'Guard your business against evolving cyber threats with multi-layered security frameworks.',
    fullDescription:
      'We deploy multi-layered security frameworks to safeguard your infrastructure, applications, and data from internal and external threats.',
    icon: 'lucide:shield',
    image: '../images/services/cyber-security.jpg',
    bannerImage: '../images/services/cyber-security-1.jpg',
    featuresImage: '../images/services/cyber-security-2.jpg',
    benefits: [
      {
        title: 'Threat Detection',
        description:
          'Proactive identification and response to security incidents',
        icon: 'lucide:search'
      },
      {
        title: 'Comprehensive Protection',
        description: 'Endpoint, email, and network security solutions',
        icon: 'lucide:lock'
      },
      {
        title: 'Data Security',
        description: 'Encryption and identity management systems',
        icon: 'lucide:key'
      },
      {
        title: 'Compliance',
        description: 'Adherence to GDPR, HIPAA, and ISO standards',
        icon: 'lucide:check-circle'
      }
    ],
    impacts: [
      {
        title: 'Threat Exposure',
        description: 'Reduction in security vulnerabilities',
        value: '90%'
      },
      {
        title: 'Data Breaches',
        description: 'No security incidents after implementation',
        value: 'Zero',
        label: true
      }
    ]
  },
  {
    color: 'text-red-600',
    category: 'Infrastructure',
    id: 'security-management',
    title: 'Security Management',
    description:
      'Comprehensive security oversight to identify and mitigate potential threats.',
    shortDescription: 'Holistic oversight to secure your IT ecosystem',
    fullDescription:
      'We offer end-to-end security governance—from vulnerability assessments to compliance audits—ensuring that your security posture evolves with emerging risks.',
    icon: 'lucide:lock',
    image: '../images/services/security.jpg',
    bannerImage: '../images/services/security-1.jpg',
    featuresImage: '../images/services/security-2.jpg',
    benefits: [
      {
        title: 'Risk Monitoring',
        description:
          'Continuous assessment of security threats and vulnerabilities',
        icon: 'lucide:activity'
      },
      {
        title: 'Policy Management',
        description: 'Development and enforcement of security protocols',
        icon: 'lucide:file-text'
      },
      {
        title: 'Access Control',
        description: 'Privileged account management and authorization systems',
        icon: 'lucide:user-check'
      },
      {
        title: 'Security Audits',
        description: 'Regular assessments and threat simulations',
        icon: 'lucide:clipboard-check'
      }
    ],
    impacts: [
      {
        title: 'Security Audit Scores',
        description: 'Improvement in compliance and security ratings',
        value: '35%'
      },
      {
        title: 'Incident Response',
        description: 'Decrease in time to address security events',
        value: '50%'
      }
    ]
  },
  {
    color: 'text-purple-600',
    category: 'Product',
    id: 'digital-experience-platforms',
    title: 'Digital Experience Platforms (DXP)',
    description:
      'Create seamless, omnichannel experiences that engage customers across all digital touchpoints.',
    shortDescription:
      'Deliver connected, personalized experiences across channels',
    fullDescription:
      'We build and integrate digital experience platforms that unify content, data, and customer interactions across web, mobile, and other digital touchpoints.',
    icon: 'lucide:smartphone',
    image: '../images/services/digital.jpg',
    bannerImage: '../images/services/digital-1.jpg',
    featuresImage: '../images/services/digital-2.jpg',
    benefits: [
      {
        title: 'Omnichannel Delivery',
        description: 'Consistent content across all digital platforms',
        icon: 'lucide:layout'
      },
      {
        title: 'Personalization',
        description:
          'Tailored experiences based on user behavior and preferences',
        icon: 'lucide:user'
      },
      {
        title: 'System Integration',
        description: 'Seamless connection with CRM, CMS, and analytics tools',
        icon: 'lucide:git-merge'
      },
      {
        title: 'Scalable Frameworks',
        description: 'Flexible architecture for rapid content updates',
        icon: 'lucide:expand'
      }
    ],
    impacts: [
      {
        title: 'User Engagement',
        description: 'Increase in interaction with digital platforms',
        value: '60%'
      },
      {
        title: 'Customer Retention',
        description: 'Improvement in customer loyalty and repeat business',
        value: '25%'
      }
    ]
  },
  {
    color: 'text-green-600',
    category: 'Product',
    id: 'helpdesk-support',
    title: 'Helpdesk Support',
    description:
      'Responsive technical assistance to resolve issues quickly and minimize downtime.',
    shortDescription: 'Fast, friendly, and effective IT assistance',
    fullDescription:
      'Our dedicated helpdesk ensures your employees stay productive by quickly resolving technical issues—backed by SLAs and real-time tracking.',
    icon: 'lucide:headphones',
    image: '../images/services/support.jpg',
    bannerImage: '../images/services/support-1.jpg',
    featuresImage: '../images/services/support-2.jpg',
    benefits: [
      {
        title: 'Multi-channel Support',
        description: 'Assistance via email, phone, and chat platforms',
        icon: 'lucide:message-circle'
      },
      {
        title: 'Tiered Support',
        description: 'Structured escalation process for complex issues',
        icon: 'lucide:layers'
      },
      {
        title: 'Issue Tracking',
        description: 'Comprehensive monitoring of resolution progress',
        icon: 'lucide:check-square'
      },
      {
        title: 'Self-Service Portals',
        description: 'Knowledge bases and tools for common problems',
        icon: 'lucide:book-open'
      }
    ],
    impacts: [
      {
        title: 'Resolution Time',
        description: 'Reduction in average time to fix technical issues',
        value: '40%'
      },
      {
        title: 'User Satisfaction',
        description: 'Increase in employee satisfaction with IT support',
        value: '30%'
      }
    ]
  }
]
