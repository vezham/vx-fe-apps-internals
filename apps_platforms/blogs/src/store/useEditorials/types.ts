import { CollectionPost } from '@vx/shared-types'

type Editorial = {
  id: string
  api_handle: string
  label: string
  articles: CollectionPost[]
}

type Editorials = Editorial[]

type RQEditorials = object

interface RQGetEditorial extends RQEditorials {
  api_handle: string
}

export type { Editorial, Editorials, RQEditorials, RQGetEditorial }
