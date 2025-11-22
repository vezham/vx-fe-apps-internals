import { personalizationsData, resourceData } from './data'
import { Personalize, RQPersonalize, RQResources, Resources } from './types'

const Resource = {
  list: async (rq: RQResources): Promise<Resources> => {
    return Promise.resolve(resourceData)
  },

  homelist: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { Resource }
