import { useQuery } from '@tanstack/react-query'

import { HelpCenter } from './action'
import { RQHelpCenter } from './types'

const CK_HELPCENTER = 'helpcenter'

const useHelpCenter = {
  list: (rq: RQHelpCenter) => {
    console.log(HelpCenter.list(rq))
    return useQuery({
      queryKey: [CK_HELPCENTER, rq],
      queryFn: () => HelpCenter.list(rq)
    })
  }
}

export { useHelpCenter }
