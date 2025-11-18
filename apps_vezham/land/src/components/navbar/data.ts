import { NavbarItem, TabItem } from './types'

export const items: TabItem[] = [
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
    label: 'Integrations',
    key: 'integrations',
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
    label: 'Profile',
    key: 'profile',
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
    label: 'Contact',
    key: 'contact',
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
  }
]

export const navItems: NavbarItem[] = [
  {
    label: 'Features',
    key: 'features',
    href: '#'
  },
  {
    label: 'Customers',
    key: 'customers',
    href: '#'
  },
  {
    label: 'Integrations',
    key: 'integrations',
    href: '#'
  },
  {
    label: 'Profile',
    key: 'profile',
    href: '#'
  },
  {
    label: 'Contact',
    key: 'contact',
    href: '#'
  }
]
