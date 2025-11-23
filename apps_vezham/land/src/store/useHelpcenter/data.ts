import { HelpCenterProps, Personalize } from './types'

export const helpCenterData: HelpCenterProps = {
  faqs: [
    {
      title: 'What is Help center?',
      content:
        'Help center is a full-fledged knowledge base solution powered with AI to help customers get instant answers. You can have yourcompany.help center website where customers can use AI search and also deploy an AI chat widget to your website to support customers in a conversational way.'
    },
    {
      title: 'Why should I use help center?',
      content:
        'Next step towards helping customers faster. Reduce resolution times and deflect repetative support tickets. This saves you a lot of time and money.'
    },
    {
      title: 'How to customize the Help Center ?',
      content:
        'In just a few easy steps, you can customize the Help Center platform which allows your customers to find answers for their queries by going through your articles and forums or by raising a ticket directly from the page. You can set colors, add custom sections and widgets to keep your customers engaged with the right content in the right place.'
    },
    {
      title: 'What is your refund policy?',
      content:
        'We do not provide refunds. However, we can help you with any issues you may have.'
    },
    {
      title: 'Can I cancel my subscription?',
      content: 'Yes, you can cancel and renew your subscription at any time.'
    }
  ],
  reviews: [
    {
      user: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 5,
      title: 'Great product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Jane Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258ab4e29066708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 4,
      title: 'Fantastic product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Robert Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29066708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 3,
      title: 'Beautiful product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Mark Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258a14e29066708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 2,
      title: 'Average product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Frank Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29526708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 1,
      title: 'Disappointing product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Zoe Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29926708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 5,
      title: 'Great product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Bob Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29b26708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 4,
      title: 'Good product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Francis Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258b14e29326708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 3,
      title: 'Average product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Milan Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29326708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 2,
      title: 'Bad product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    },
    {
      user: {
        name: 'Kicha Doe',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29326708c'
      },
      createdAt: '2021-08-01T12:00:00.000Z',
      rating: 5,
      title: 'Bad product',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
    }
  ],
  features: [
    {
      key: 'accounts-center',
      title: 'Accounts Centre',
      icon: 'solar:mask-happly-linear',
      descriptions: [
        'Manage connected experiences such as logging in across your accounts',
        'Change account settings such as your contact information',
        'Ad preferences and payments across your accounts'
      ]
    },
    {
      key: 'global-scope',
      title: 'Global scope Experiments',
      icon: 'solar:magic-stick-3-linear',
      descriptions: [
        'Manage any different connected experiences across these accounts',
        'Allows user to provide follow-up corrections',
        'Trained to decline inappropriate requests'
      ]
    },
    {
      key: 'policy',
      title: 'Policy & Safety Limitations',
      icon: 'solar:shield-warning-outline',
      descriptions: [
        'May occasionally generate incorrect information',
        'May occasionally produce harmful instructions or biased information.',
        'Limited knowledge of world and events after April 2023'
      ]
    }
  ],
  helpDesk: [
    {
      title: 'What is Help Center?',
      description:
        'A help center is a self-service support system that provides assistance to users. Help centers can be found inside one’s app and include how-to articles, frequently asked questions, video tutorials, and more.',
      subdescription:
        'The primary purpose of a help center is to provide users with on-demand support in an effort to create a positive customer experience.'
    },
    {
      title: 'Why is Help Center important?',
      description:
        'For any SaaS product, creating a seamless customer experience is a top priority. However, the latter cannot be achieved without a robust help center in place. Help centers provide many benefits than you may realize, some of these are:',
      subdescription:
        'Help centers provide quick answers to any questions users may have. This reduces the frustration of finding answers elsewhere and waiting to connect.',
      lists: [
        'Reduces customer support workload and costs',
        'Improves customer satisfaction',
        'Lowers customer churn',
        'Provides valuable insights'
      ]
    }
  ]
}

export const personalizationsData: Personalize[] = [
  {
    cards: {
      welcome_message: {
        __type: 'welcome_message',
        super_title: 'Welcome to Help Center',
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
