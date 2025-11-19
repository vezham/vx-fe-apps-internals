import { personalizationsData } from './data'
import { Personalize, RQPersonalize } from './types'

const Pricing = {
  list: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { Pricing }
