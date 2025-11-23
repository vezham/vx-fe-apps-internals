import { useQuery } from '@tanstack/react-query'

import { Support } from './action'
import { RQPersonalize, RQSupport } from './types'

const CK_SUPPORT = 'support'

const CK_RESOURCESHOME = 'support_home'

const useSupport = {
  list: (rq: RQSupport) => {
    return useQuery({
      queryKey: [CK_SUPPORT, rq],
      queryFn: () => Support.list(rq)
    })
  },
  homelist: (rq: RQPersonalize) => {
    return useQuery({
      queryKey: [CK_RESOURCESHOME, rq],
      queryFn: () => Support.homelist(rq)
    })
  }
}

export { useSupport }
