import { useQuery } from '@tanstack/react-query'

import { collections } from './action'
import { RQCollections, RQGetCollection } from './types'

const CK_COLLECTIONS = 'collections'
const CK_COLLECTIONS_LIST = 'collectionsList'

const useCollections = {
  list: (rq: RQCollections) => {
    return useQuery({
      queryKey: [CK_COLLECTIONS, rq],
      queryFn: () => collections.list(rq)
    })
  },
  get: (rq: RQGetCollection) => {
    return useQuery({
      queryKey: [CK_COLLECTIONS_LIST, rq.api_handle, rq],
      queryFn: () => collections.get(rq)
    })
  }
}

export { useCollections }
