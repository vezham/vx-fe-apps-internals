// import { IAM } from '@vx/contracts';
// import { useAxios } from '@vx/hooks';
import { collectionData } from './data'
import {
  Collection,
  Collections,
  RQCollections,
  RQGetCollection
} from './types'

// const listCollections = '/blogs/collections'
// const getCollections = '/blogs/collections/:api_handle'

const collections = {
  // list: async (rq: RQCollections): Promise<Collections> => {
  //   return useAxios.get(listCollections, IAM.RQConfigBDC)
  // },
  // get: async (rq: RQGetCollection): Promise<Collection> => {
  //   return useAxios.get(
  //     getCollections.replace(':api_handle', rq.api_handle),
  //     IAM.RQConfigBDC
  //   )
  // }

  list: async (_rq: RQCollections): Promise<Collections> => {
    return Promise.resolve(collectionData)
  },
  get: async (rq: RQGetCollection): Promise<Collection> => {
    console.log('Searching for api_handle:', rq.api_handle)
    const collect = collectionData.find(c => c.api_handle === rq.api_handle)
    if (!collect) {
      console.log(
        'Available api_handles:',
        collectionData.map(c => c.api_handle)
      )
      throw new Error(`Collection with api_handle "${rq.api_handle}" not found`)
    }
    return Promise.resolve(collect)
  }
}

export { collections }
