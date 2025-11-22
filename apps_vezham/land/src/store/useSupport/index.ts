import { useQuery } from '@tanstack/react-query'

import { Support } from './action'
import { RQSupport } from './types'

const CK_SUPPORT = 'pricing'

const useSupport = {
  list: (rq: RQSupport) => {
    return useQuery({
      queryKey: [CK_SUPPORT, rq],
      queryFn: () => Support.list(rq)
    })
  }
}

export { useSupport }
