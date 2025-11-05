import { IAM } from '@vx/contracts'
import { useAxios } from '@vx/hooks'

import { Editorial, Editorials, RQEditorials, RQGetEditorial } from './types'

const listEditorials = '/blogs/editorials'
const getEditorials = '/blogs/editorials/:api_handle'

const editorials = {
  list: async (rq: RQEditorials): Promise<Editorials> => {
    return useAxios.get(listEditorials, IAM.RQConfigBDC)
  },
  get: async (rq: RQGetEditorial): Promise<Editorial> => {
    return useAxios.get(
      getEditorials.replace(':api_handle', rq.api_handle),
      IAM.RQConfigBDC
    )
  }
}

export { editorials }
