import { useQuery } from '@tanstack/react-query'

import { Footers } from './action'
import { RQFooter } from './types'

const CK_FOOTER = 'footers'

const useFooters = {
  list: (rq: RQFooter) => {
    return useQuery({
      queryKey: [CK_FOOTER, rq],
      queryFn: () => Footers.list(rq)
    })
  }
}

export { useFooters }
