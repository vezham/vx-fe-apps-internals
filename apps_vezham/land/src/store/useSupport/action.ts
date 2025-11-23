import { personalizationsData, support } from './data'
import { Personalize, RQPersonalize, RQSupport, supportData } from './types'

const Support = {
  list: async (rq: RQSupport): Promise<supportData> => {
    return Promise.resolve(support)
  },
  homelist: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { Support }
