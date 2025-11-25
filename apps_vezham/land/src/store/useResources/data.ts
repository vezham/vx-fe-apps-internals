import { CardProps, Personalize, Resources } from './types'

export const resourceData: Resources = {
  promptsuggest: [
    {
      id: 'ticket-raising',
      label: 'Ticket Raising',
      icon: 'solar:document-add-outline'
    },
    {
      id: 'brainstorm',
      label: 'Brainstorm',
      icon: 'solar:lightbulb-linear'
    },
    {
      id: 'info',
      label: 'Info',
      icon: 'solar:info-circle-linear'
    },
    {
      id: 'make-plan',
      label: 'Make a plan',
      icon: 'solar:checklist-linear'
    },
    {
      id: 'raise-queries',
      label: 'Raise Queries',
      icon: 'solar:info-circle-linear'
    }
  ],

  tabs: [
    {
      key: 'help-center',
      label: 'Help center',
      icon: 'solar:info-circle-linear'
    },
    {
      key: 'support-plans',
      label: 'Support Plans',
      icon: 'solar:handshake-linear'
    }
  ]
}

export const personalizationsData: Personalize[] = [
  {
    cards: {
      welcome_message: {
        __type: 'welcome_message',
        super_title: 'Welcome to Resource Center',
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
            href: '/vezham/resources/support'
          },
          trial: {
            placeholder: 'Book your Trial',
            href: '#'
          }
        }
      }
    }
  }
]

export const contactcards1: CardProps[] = [
  {
    title: 'Get The Help You Need',
    description:
      'Get personalized answers in the Vezham Help Center or Chat with us for more support.',
    button: 'Get help',
    color: 'danger' as const,
    url: 'https://heroui.com/images/card-example-4.jpeg'
  },
  {
    title: 'Come Work with Us',
    description:
      'Check out available career opportunities and shape the future of the web.',
    button: 'Explore Now',
    url: 'https://heroui.com/images/card-example-3.jpeg',
    color: 'primary' as const
  },
  {
    title: 'Users community',
    description:
      'Grow your web dev or design agency by earning rewards for creating with Vezham.',
    button: 'Learn more',
    url: 'https://img.heroui.chat/image/dashboard?w=600&h=400&u=crm-dashboard',
    color: 'secondary' as const
  }
]

export const contactcards2: CardProps[] = [
  {
    title: 'Discover Enterprise Solutions',
    description:
      'Get in touch to find out about exclusive plans tailor-made for your brand.',
    button: 'Contact support',
    url: 'https://heroui.com/images/card-example-2.jpeg',
    color: 'success' as const
  },
  {
    title: 'Documentation',
    description:
      'Reach out about exciting partnerships and business development opportunities.',
    button: 'Get in touch',
    url: 'https://heroui.com/images/card-example-6.jpeg',
    color: 'default' as const
  },
  {
    title: "FAQ's",
    description:
      'Become a reseller and maximize your offering to your SMB customers.',
    button: 'Learn more',
    url: 'https://vezham.com/img/AboutUs.bbd5631b.jpg',
    color: 'secondary' as const
  },
  {
    title: 'Join the Affiliate Program',
    description: 'Promote Wix on your website and earn commission.',
    button: 'Read more',
    url: 'https://buildfire.com/wp-content/uploads/2025/09/build-easily.png',
    color: 'warning' as const
  }
]
