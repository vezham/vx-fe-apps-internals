import { Personalize } from './types'

export const personalizationsData: Personalize[] = [
  {
    cards: {
      welcome_message: {
        __type: 'welcome_message',
        title: 'Flexible and affordable.',
        subtitle: 'Scales with your business.',
        cover: {
          __type: 'cover',
          type: 'image',
          alt_text: 'Paper bag poster',
          url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80'
        },
        actions: {
          submit: {
            label: ''
          },
          trial: {
            placeholder: ''
          }
        }
      }
    }
  }
]
