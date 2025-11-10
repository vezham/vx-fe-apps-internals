// import { IAM } from '@vx/contracts'
// import { useAxios } from '@vx/hooks'
import { Personalize } from '@vx/shared-types'

import { personalizationsData } from './data'
import { RQPersonalize } from './types'

// const getPersonalize = '/blogs/personalizations'

const Personal = {
  // list: async (rq: RQPersonalize): Promise<Personalize> => {
  //   return useAxios.get(getPersonalize, IAM.RQConfigBDC)
  // }

  list: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { Personal }
