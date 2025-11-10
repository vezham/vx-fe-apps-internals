// import { IAM } from '@vx/contracts'
// import { useAxios } from '@vx/hooks'
import { trendingData } from './data'
import { RQDiscovery, TopTrends } from './types'

// const getTrends = '/blogs/discovery/top-trending'

const trends = {
  // list: async (rq: RQDiscovery): Promise<TopTrends> => {
  //   return useAxios.get(getTrends, IAM.RQConfigBDC)
  // }

  list: async (_rq: RQDiscovery): Promise<TopTrends> => {
    return Promise.resolve(trendingData)
  }
}

export { trends }
