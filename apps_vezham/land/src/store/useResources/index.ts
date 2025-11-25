import { useQuery } from '@tanstack/react-query'

import { Resource } from './action'
import { RQPersonalize, RQResources } from './types'

const CK_RESOURCES = 'resources'
const CK_RESOURCESHOME = 'resources_home'
const CK_RESOURCESLIST = 'resources_list1'
const CK_RESOURCESLIST2 = 'resources_list2'

const useResources = {
  list: (rq: RQResources) => {
    return useQuery({
      queryKey: [CK_RESOURCES, rq],
      queryFn: () => Resource.list(rq)
    })
  },
  homelist: (rq: RQPersonalize) => {
    return useQuery({
      queryKey: [CK_RESOURCESHOME, rq],
      queryFn: () => Resource.homelist(rq)
    })
  },
  cardlist1: (rq: RQResources) => {
    return useQuery({
      queryKey: [CK_RESOURCESLIST, rq],
      queryFn: () => Resource.cardlist1(rq)
    })
  },
  cardlist2: (rq: RQResources) => {
    return useQuery({
      queryKey: [CK_RESOURCESLIST2, rq],
      queryFn: () => Resource.cardlist2(rq)
    })
  }
}

export { useResources }
