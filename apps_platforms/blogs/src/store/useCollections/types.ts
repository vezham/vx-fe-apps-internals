import { Collection, Collections } from '@vx/shared-types'

type RQCollections = object

interface RQGetCollection extends RQCollections {
  api_handle: string
}

export type { Collection, Collections }
export type { RQCollections, RQGetCollection }
