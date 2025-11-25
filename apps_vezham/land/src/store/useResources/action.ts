import {
  contactcards1,
  contactcards2,
  personalizationsData,
  resourceData
} from './data'
import {
  CardProps,
  Personalize,
  RQPersonalize,
  RQResources,
  Resources
} from './types'

const Resource = {
  list: async (rq: RQResources): Promise<Resources> => {
    return Promise.resolve(resourceData)
  },

  homelist: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  },
  cardlist1: async (rq: RQResources): Promise<CardProps[]> => {
    return Promise.resolve(contactcards1)
  },
  cardlist2: async (rq: RQResources): Promise<CardProps[]> => {
    return Promise.resolve(contactcards2)
  }
}

export { Resource }
