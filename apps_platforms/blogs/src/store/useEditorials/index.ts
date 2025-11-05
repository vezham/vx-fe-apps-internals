import { useQuery } from '@tanstack/react-query'

import { editorials } from './action'
import { RQEditorials, RQGetEditorial } from './types'

const CK_EDITORIALS = 'editorials'
const CK_EDITORIAL = 'editorial'

const useEditorials = {
  list: (rq: RQEditorials) =>
    useQuery({
      queryKey: [CK_EDITORIALS, rq],
      queryFn: () => editorials.list(rq)
    }),

  get: (rq: RQGetEditorial) =>
    useQuery({
      queryKey: [CK_EDITORIAL, rq.api_handle, rq],
      queryFn: () => editorials.get(rq)
    })
}

export { useEditorials }
