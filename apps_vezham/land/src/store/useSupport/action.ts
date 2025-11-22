import { support } from './data'
import { RQSupport, supportData } from './types'

const Support = {
  list: async (rq: RQSupport): Promise<supportData> => {
    return Promise.resolve(support)
  }
}

export { Support }
