import { IAM } from '@vezham/contracts'
import { useAxios } from '@vezham/hooks'

import {
  Collection,
  Collections,
  RQCollections,
  RQGetCollection
} from './types'

const listCollections = '/blogs/collections'
const getCollections = '/blogs/collections/:api_handle'

const collections = {
  list: async (rq: RQCollections): Promise<Collections> => {
    return useAxios.get(listCollections, IAM.RQConfigBDC)
  },
  get: async (rq: RQGetCollection): Promise<Collection> => {
    return useAxios.get(
      getCollections.replace(':api_handle', rq.api_handle),
      IAM.RQConfigBDC
    )
  }
}

export { collections }
