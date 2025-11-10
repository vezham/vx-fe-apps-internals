import { Article } from '@vx/shared-types'

type Editorial = {
  __type: string
  '-id': string
  id: string
  api_handle: string
  label: string
  articles: Article[]
}

type Editorials = Editorial[]

type RQEditorials = object

interface RQGetEditorial extends RQEditorials {
  id?: string
  api_handle?: string
}

export type { Editorial, Editorials, RQEditorials, RQGetEditorial }
