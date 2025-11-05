import { IAM } from '@vx/contracts'
import { useAxios } from '@vx/hooks'
import { Personalize } from '@vx/shared-types'
import { defineServerEnv } from '@vx/system-utils'

import { RQPersonalize } from './types'

const getPersonalize = `${defineServerEnv()}/api/blogs/personalizations`

const Personal = {
  list: async (rq: RQPersonalize): Promise<Personalize> => {
    return useAxios.get(getPersonalize, IAM.RQConfigBDC)
  }
}

export { Personal }
