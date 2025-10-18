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
        name: 'E-Commerce',
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
        id: 'apple',
        title: 'Apple Tv',
        description:
          'Subscribe to premium channels, streaming services, Apple TV+ and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/tv_chiclet__ferr96ys58qe_xlarge_2x.png',
        iconColor: 'text-green-500',
        detailedDescription:
          'Our Subscribe to premium channels, streaming services, Apple TV+ and more empowers sales teams to streamline operations, enhance customer relationships, and make data-driven decisions through innovative digital transformation. Track leads, manage contacts, and close deals more efficiently.',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/tv_bg__dbiy5mcaqxea_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
            description:
              'Open to security vulnerabilities in aging IT environments'
          }
        ],
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
        id: 'applemusic',
        title: 'Apple Music',
        description:
          'Play over 100 million songs and 30,000 playlists ad-free across your devices, get personalised recommendations and immerse yourself in lossless and Spatial Audio.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/music_chiclet__exy1t5wu2zki_xlarge.png',
        iconColor: 'text-blue-500',
        detailedDescription:
          'Play over 100 million songs and 30,000 playlists ad-free across your devices, get personalised recommendations and immerse yourself in lossless and Spatial Audio.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/music_bg__d2ssg7rps0ya_xlarge.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
            description:
              'Open to security vulnerabilities in aging IT environments'
          }
        ],
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
        id: 'applearcade',
        title: 'Apple Arcade',
        description:
          'Enjoy unlimited access to 200+ games with no ads or in-app purchases across all your Apple devices. Subscribe and enjoy with your entire family.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/arcade_chiclet__bexahhvxmb4y_xlarge.png',
        iconColor: 'text-blue-500',
        detailedDescription:
          'Enjoy unlimited access to 200+ games with no ads or in-app purchases across all your Apple devices. Subscribe and enjoy with your entire family.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/arcade_bg__ehsmlvjqlg2u_xlarge.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
            description:
              'Open to security vulnerabilities in aging IT environments'
          }
        ],
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
        id: 'applemusicclassical',
        title: 'Apple  Classical',
        description:
          'Discover over 5 million tracks and a powerful search built specifically for classical music. All included with an Apple Music subscription.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/music_classical_chiclet__e8bn9ava95qq_xlarge.png',
        iconColor: 'text-pink-500',
        detailedDescription:
          'Discover over 5 million tracks and a powerful search built specifically for classical music. All included with an Apple Music subscription.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/music_classical_bg__ezbwlqoj80q6_xlarge.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
            description:
              'Open to security vulnerabilities in aging IT environments'
          }
        ],
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
        id: 'applepodcasts',
        title: 'Apple Podcasts',

        description:
          'Listen to millions of shows, from big names to independent publishers, and get access to premium content with subscriptions.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/podcasts_chiclet__faovcb48n5ua_xlarge.png',
        iconColor: 'text-purple-500',
        detailedDescription:
          'Listen to millions of shows, from big names to independent publishers, and get access to premium content with subscriptions.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/podcasts_bg__dfk2zkahk8uq_xlarge.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'applebooks',
        title: 'Apple Books',
        description:
          'Discover books online or offline — including classics and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/books_chiclet__f93jz5f4tmmy_xlarge.png',
        iconColor: 'text-green-500',
        detailedDescription:
          'Discover books online or offline — including classics and more.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/books_bg__cmcq731s3pw2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
    title: 'New',
    apps: [
      {
        id: 'vitals',
        title: 'Vitals',
        description:
          'Wear your Apple Watch to sleep to better understand your daily health status and receive notifications if any of your metrics are outside your typical range.6',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/vitals_chiclet__f0xsst775qa2_xlarge.png',
        iconColor: 'text-black',
        detailedDescription:
          'Wear your Apple Watch to sleep to better understand your daily health status and receive notifications if any of your metrics are outside your typical range.6',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/vitals_bg__5pygtlfh7o26_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'applehealth',
        title: 'Apple Health',
        description:
          'Organise and access your health and fitness data in one secure, central place — and share your information with those you trust.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/health_chiclet__ff5zpcq1nze6_xlarge.png',
        iconColor: 'text-green-500',
        detailedDescription:
          'Organise and access your health and fitness data in one secure, central place — and share your information with those you trust.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/health_bg__fefaj499xryy_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'fitness',
        title: 'Fitness',
        description: 'View and share your fitness and activity details.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/fitness_chiclet__bydfahurlj6q_xlarge.png',
        iconColor: 'text-blue-500',
        detailedDescription:
          'View and share your fitness and activity details.',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/fitness_bg__cacuddw3n22q_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'workout',
        title: 'Workout',
        description:
          'Track your workout sessions, set specific goals, view advanced metrics, and receive updates like pace alerts and goal progress along the way.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/workout_chiclet__dnlj4uiqlz6u_xlarge.png',
        iconColor: 'text-pink-500',
        detailedDescription:
          'Track your workout sessions, set specific goals, view advanced metrics, and receive updates like pace alerts and goal progress along the way.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/workout_bg__b2s36r6bda2u_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'sleep',
        title: 'Sleep',
        description:
          'Meet your sleep goals — including getting enough sleep, getting to bed on time and even creating a bedtime routine.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/sleep_chiclet__bsnmi9idnib6_xlarge.png',
        iconColor: 'text-orange-500',
        detailedDescription:
          'Meet your sleep goals — including getting enough sleep, getting to bed on time and even creating a bedtime routine.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/sleep_bg__dxy1qfeff48y_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'mindfulness',
        title: 'Mindfulness',
        description:
          'Improve your well-being by logging your state of mind and practicing deep breathing during guided sessions.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/mindfulness_chiclet__gbtomjgedviy_xlarge.png',
        iconColor: 'text-blue-500',
        detailedDescription:
          'Improve your well-being by logging your state of mind and practicing deep breathing during guided sessions.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/mindfulness_bg__cr5bsd7b1xiu_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'passwords',
        title: 'Passwords',
        description:
          'Easily access your passwords, passkeys and other credentials in one place. Quickly sign in with AutoFill, get alerts for compromised accounts and sync on the go.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/passwords_chiclet__e0zkdjy9tqye_xlarge.png',
        iconColor: 'text-yellow-500',
        detailedDescription:
          'Easily access your passwords, passkeys and other credentials in one place. Quickly sign in with AutoFill, get alerts for compromised accounts and sync on the go.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/passwords_bg__gin2d8t3p1ui_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'safari',
        title: 'Safari',
        description:
          'njoy the Internet with blazing-fast speed, optimised battery life and powerful privacy protections built right in.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/safari_chiclet__ervigamv5qye_xlarge.png',
        iconColor: 'text-yellow-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/safari_bg__ccegus8jih9e_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'maps',
        title: 'Maps',
        description:
          'Get around with ease using multi-stop routing, voice-guided navigation and real-time traffic conditions — all with your privacy protected.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/maps_chiclet__b825c0yhl64i_xlarge.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/maps_bg__cu7g9d28ddg2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'weather',
        title: 'Weather',
        description:
          'Check current and forecasted weather at a glance. View precipitation, air quality and wind conditions. And stay notified of severe local weather.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/weather_chiclet__85gxx6e7lnmm_xlarge.png',
        iconColor: 'text-orange-500',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/weather_bg__dhkuy7pxpugm_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'findmy',
        title: 'Find My',
        description:
          'Track items with AirTag, share your location with friends and family, and find your devices — even if they’re offline.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/find_my_chiclet__dkvz0535bjwy_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/find_my_bg__3svhbvmavde6_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'translate',
        title: 'Translate',
        description:
          'Translate voice and text, have a conversation between languages or translate text in photos.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/translate_chiclet__glboej28ciq2_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/translate_bg__duvmu57ovsq6_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      }
    ]
  },
  'support-teams': {
    title: 'Support Teams',
    apps: [
      {
        id: 'notes',
        title: 'Notes',
        description:
          'Jot down short or long notes — anytime, anywhere. You can add checklists, images, drawings, links, scanned documents and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/notes_chiclet__clow1nl1x7bm_xlarge.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/notes_bg__8mndkoaputu6_xlarge_2x.jpg',
        footerItems: ['Mac', 'iPhone', 'iMac']
      },
      {
        id: 'finder',
        title: 'Finder',
        description:
          'Search, browse and organise files stored on your Mac, iCloud Drive, external drives and other cloud providers. Save favourites, batch rename files, collaborate and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/finder_chiclet__cc9vmms3qady_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/finder_bg__corgdpfyztw2_xlarge_2x.jpg',
        footerItems: ['Mac', 'iPhone', 'iMac']
      },
      {
        id: 'pages',
        title: 'Pages',
        description:
          'Collaborate on documents in real time with powerful design tools. Customise fonts, personalise text styles and add beautiful graphics.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/pages_chiclet__ch6gvzxvajrm_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/pages_bg__giy3dxe5olay_xlarge_2x.jpg',
        footerItems: ['Mac', 'iPhone', 'iMac']
      },
      {
        id: 'numbers',
        title: 'Numbers',
        description:
          'Create stellar spreadsheets and enter data on the go with forms. Collaborate with others, visualise your data and choose from hundreds of powerful functions.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/numbers_chiclet__z8rm4rnfj42a_xlarge.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/numbers_bg__e6clggpam3wy_xlarge_2x.jpg',
        footerItems: ['Mac', 'iPhone', 'iMac']
      },
      {
        id: 'files',
        title: 'Files',
        description:
          'Browse, locate and organise files stored on your device, iCloud Drive, external drives and other cloud providers. Use tags and recents to keep items at your fingertips.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/files_chiclet__csi48qoljj8m_xlarge.png',
        iconColor: 'text-purple-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/files_bg__d7u8mhmrbo02_xlarge_2x.jpg',
        footerItems: ['Mac', 'iPhone', 'iMac']
      },
      {
        id: 'shortcuts',
        title: 'Shortcuts',
        description:
          'Create custom automations or choose from hundreds of built-in actions in your favourite apps to help you accomplish everyday tasks using Siri or a simple tap.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/shortcuts_chiclet__dexircp9ahm6_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/shortcuts_bg__c6cppk49ikwi_xlarge_2x.jpg',
        footerItems: ['Mac', 'iPhone', 'iMac']
      }
    ]
  },

  // Categories
  sales: {
    title: 'Sales',
    apps: [
      {
        id: 'phone',
        title: 'Phone',
        description:
          'Make and receive phone calls, including on Mac and iPad when your iPhone is nearby.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/phone_chiclet__f1brppw3aqy6_xlarge.png',
        iconColor: 'text-blue-500',
        // Add detailed information
        detailedDescription:
          'Make and receive phone calls, including on Mac and iPad when your iPhone is nearby.',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/phone_bg__cxedli9m3yc2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'messages',
        title: 'Messages',
        description:
          'Send end-to-end encrypted messages from any Apple device and express yourself using text effects, emoji and sticker Tapbacks, and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/messages_chiclet__f8bzind6fdqy_xlarge.png',
        iconColor: 'text-green-500',
        // Add detailed information
        detailedDescription:
          'Send end-to-end encrypted messages from any Apple device and express yourself using text effects, emoji and sticker Tapbacks, and more.',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/messages_bg__fbdw60yaz9qy_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'facetime',
        title: 'Facetime',
        description:
          'Connect with friends and family on video or audio calls. And share your screen or use SharePlay to listen to music together, watch TV and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/facetime_chiclet__dkfd0tacahua_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/facetime_bg__f6jkxmeyuua2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'mail',
        title: 'Mail',
        description:
          'Access email from iCloud, Gmail, Exchange, Yahoo, Outlook and other providers in one place — and enjoy powerful productivity features.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/mail_chiclet__s40xvfy4twyu_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/mail_bg__bc785xyf5l9u_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'contacts',
        title: 'Contacts',
        description:
          'Manage contacts and keep their information up to date across your devices and accounts. And customise how you appear to others with Contact Posters.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/contacts_chiclet__bfsq7qs1ptjm_xlarge.png',
        iconColor: 'text-orange-500',
        image:
          'https://www.apple.com/in/apps/images/overview/apps/tier1/bg/contacts_bg__bhsamcn0o0c2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'walkie-talkie',
        title: 'Walkie-Talkie',
        description:
          'Get in touch with other Apple Watch users in just a tap. You can control your availability and decide when you can be contacted.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/walkie_talkie_chiclet__dbuyb9ra48sy_xlarge.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/walkie_talkie_bg__bqaxmk1cyr5y_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      }
    ]
  },
  marketing: {
    title: 'Marketing',
    apps: [
      {
        id: 'photos',
        title: 'Photos',
        description:
          'Browse, edit and share your amazing photos and videos. And use intelligent, personalised features that help you find, enjoy and share your best shots.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/photos_chiclet__cs6rufbxntqq_xlarge.png',
        iconColor: 'text-red-500',
        // Add detailed information
        detailedDescription:
          'Our Campaigns platform helps you create, send, and analyze email marketing campaigns that drive engagement and conversions. With powerful segmentation, beautiful templates, and detailed analytics.',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/photos_bg__ms16z7ivnyye_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac '],
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
        id: 'camera',
        title: 'Camera',
        description:
          'Take stunning photos and videos with true-to‑life colour in any situation — from everyday snapshots to studio-quality portraits.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/camera_chiclet__durqmihra2s2_xlarge.png',
        iconColor: 'text-yellow-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/camera_bg__c6m5k4dggw6e_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'garage-band',
        title: 'Garage Band',
        description:
          'Make music with ease — using a fully equipped music creation studio, a complete Sound Library that includes instruments and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/garageband_chiclet__d3ng9hjlxdiu_xlarge.png',
        iconColor: 'text-orange-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/garageband_bg__fa0kyvfwgdua_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'imovie',
        title: 'iMovie',
        description:
          'Create memorable cinema-quality videos with intuitive editing tools and storyboard options for Hollywood-style trailers and movies.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/imovie_chiclet__embecerqsn2a_xlarge.png',
        iconColor: 'text-purple-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/imovie_bg__dershya9pcae_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'logicpro',
        title: 'Logic Pro for iPad',
        description:
          'Experience a complete collection of sophisticated creative tools for professional songwriting, beat making, editing and mixing — designed entirely for touch.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/logic_pro_ipad_chiclet__ffn3y2bee7m2_xlarge.png',
        iconColor: 'text-red-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/logic_pro_ipad_bg__gygw5xn2rb6m_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'clips',
        title: 'Clips',
        description:
          'Capture joyful moments, add Memoji and amazing augmented reality effects, then share it all with friends, family or the world.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/clips_chiclet__ci5oaty0xas2_xlarge.png',
        iconColor: 'text-yellow-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/clips_bg__c5n8lybrc42u_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      }
    ]
  },
  'e-commerce': {
    title: 'E-commerce',
    apps: [
      {
        id: 'mainstage',
        title: 'Mainstage',
        description:
          'Turn your Mac into a musical instrument, voice processor or guitar rig for studio-level sound onstage — without any extra equipment.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/mainstage_chiclet__gfjm8nlipr6m_xlarge.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/mainstage_bg__eg1efye61ewm_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'journal',
        title: 'Journal',
        description:
          'Reflect on everyday moments and life’s special events using inspiration from private, personalised suggestions — and include your photos, videos and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/journal_chiclet__fd4r6x6g12my_xlarge.png',
        iconColor: 'text-purple-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/journal_bg__fsmzvvexile2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'airplay',
        title: 'AirPlay',
        description:
          'Share videos, photos, music and more from Apple devices to Apple TV, Mac, your favourite speakers and popular smart TVs.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/airplay_chiclet__fumkechuax6q_xlarge.png',
        iconColor: 'text-orange-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/airplay_bg__fmlchz3w1jyy_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'reality',
        title: 'Augumented Reality',
        description:
          'Experience the world’s largest augmented reality platform, with millions of AR‑enabled devices and thousands of AR apps.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/ar_chiclet__decotk2jkay6_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/ar_bg__ey4tycitk9yu_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'siri',
        title: 'Siri',
        description:
          'Simplify and accelerate everyday tasks with the help of the most private intelligent assistant.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/siri_chiclet__fuvctveekday_xlarge.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/siri_bg__f5cxl7davnqm_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'icloud',
        title: 'iCloud',
        description:
          'Keep your photos, files, notes and more safely backed up and available wherever you are. Upgrade to iCloud+ for premium features and more storage.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier1/chiclets/icloud_chiclet__gf9x6hrim466_xlarge.png',
        iconColor: 'text-purple-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/icloud_bg__fht6d0dw7rue_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      }
    ]
  },
  service: {
    title: 'Service',
    apps: [
      {
        id: 'support',
        title: 'Apple Support',
        description:
          'Work seamlessly across Apple devices. Start a task on one device and finish on another. And even use them together with Continuity Camera, Universal Control and more.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier2/apple_support_chiclet__djopgez3aj6u_large_2x.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/icloud_bg__fht6d0dw7rue_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'configurator',
        title: 'Apple Configurator',
        description: 'Remote support and screen sharing solution.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier2/apple_configurator_chiclet__fsp84ajqxvau_large_2x.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/podcasts_bg__dfk2zkahk8uq_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'classroom',
        title: 'Classroom',
        description: 'Connect for seamless support',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier2/classroom_chiclet__fvo7mm281mum_large_2x.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/books_bg__cmcq731s3pw2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      }
    ]
  },
  finance: {
    title: 'Finance',
    apps: [
      {
        id: 'alarm',
        title: 'Alarm',
        description: 'Accounting software for growing businesses.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier2/alarms_chiclet__f7i6s8kcggmu_large_2x.png',
        iconColor: 'text-green-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/books_bg__cmcq731s3pw2_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'store',
        title: 'App store',
        description: 'Create and send professional invoices.',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier2/apple_developer_chiclet__cw2x17fztgeq_large_2x.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/icloud_bg__fht6d0dw7rue_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      },
      {
        id: 'calculator',
        title: 'Calculator',
        description: 'View customer payment details and subscription status',
        icon: 'https://www.apple.com/v/apps/e/images/overview/apps/tier2/calculator_chiclet__f35da2cpbm6a_large_2x.png',
        iconColor: 'text-blue-500',
        image:
          'https://www.apple.com/v/apps/e/images/overview/apps/tier1/bg/logic_pro_ipad_bg__gygw5xn2rb6m_xlarge_2x.jpg',
        footerItems: ['Mac, ', 'iPhone, ', 'iMac ']
      }
    ]
  }
}
