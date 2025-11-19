import { useQuery } from '@tanstack/react-query'

import { Features } from './action'
import { RQFeatures, RQPersonalize } from './types'

const CK_FEATURES = 'features'
const CK_FEATURES_SIDEBAR = 'features-sidebar'
const CK_FEATURES_CONTENT = 'features-content'

const useFeatures = {
  sidebarlist: (rq: RQFeatures) => {
    return useQuery({
      queryKey: [CK_FEATURES_SIDEBAR, rq],
      queryFn: () => Features.sidebarlist(rq)
    })
  },

  contentlist: (rq: RQFeatures) => {
    return useQuery({
      queryKey: [CK_FEATURES_CONTENT, rq],
      queryFn: () => Features.contentlist(rq)
    })
  },

  list: (rq: RQPersonalize) => {
    console.log(Features.list(rq))
    return useQuery({
      queryKey: [CK_FEATURES, rq],
      queryFn: () => Features.list(rq)
    })
  }
}

export { useFeatures }
