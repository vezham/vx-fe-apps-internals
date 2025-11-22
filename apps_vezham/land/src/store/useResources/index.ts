import { useQuery } from '@tanstack/react-query'

import { Resource } from './action'
import { RQPersonalize, RQResources } from './types'

const CK_RESOURCES = 'resources'
const CK_RESOURCESHOME = 'resources_home'

const useResources = {
  list: (rq: RQResources) => {
    console.log(Resource.list(rq))
    return useQuery({
      queryKey: [CK_RESOURCES, rq],
      queryFn: () => Resource.list(rq)
    })
  },
  homelist: (rq: RQPersonalize) => {
    console.log(Resource.homelist(rq))
    return useQuery({
      queryKey: [CK_RESOURCESHOME, rq],
      queryFn: () => Resource.homelist(rq)
    })
  }
}

export { useResources }
