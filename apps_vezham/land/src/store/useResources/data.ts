import { Personalize, Resources } from './types'

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
