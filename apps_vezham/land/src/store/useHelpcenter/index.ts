import { useQuery } from '@tanstack/react-query'

import { HelpCenter } from './action'
import { RQHelpCenter, RQPersonalize } from './types'

const CK_HELPCENTER = 'helpcenter'
const CK_HELPCENTERHOME = 'helpcenter_home'

const useHelpCenter = {
  list: (rq: RQHelpCenter) => {
    return useQuery({
      queryKey: [CK_HELPCENTER, rq],
      queryFn: () => HelpCenter.list(rq)
    })
  },
  homelist: (rq: RQPersonalize) => {
    return useQuery({
      queryKey: [CK_HELPCENTERHOME, rq],
      queryFn: () => HelpCenter.homelist(rq)
    })
  }
}

export { useHelpCenter }
