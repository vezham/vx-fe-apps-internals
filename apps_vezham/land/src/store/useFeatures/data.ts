import { Category, CategoryContent } from './types'
import { Personalize } from './types'

export const categories: Category[] = [
  {
    id: 'features',
    name: 'Features',
    subcategories: [
      {
        id: 'all-features',
        name: 'All Features',
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
      },
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

export const personalizationsData: Personalize[] = [
  {
    cards: {
      welcome_message: {
        __type: 'welcome_message',
        super_title: 'All the features',
        title: 'you will need in an accounting software',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
        },
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
    }
  }
]
