import { IAM } from '@vezham/contracts'
import { useAxios } from '@vezham/hooks'

import { RQDiscovery, TopTrends } from './types'

const getTrends = '/blogs/discovery/top-trending'

const trends = {
  list: async (rq: RQDiscovery): Promise<TopTrends> => {
    return useAxios.get(getTrends, IAM.RQConfigBDC)
  }
}

export { trends }
