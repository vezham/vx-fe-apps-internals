import { useQuery } from '@tanstack/react-query'

import { Shortcut } from './action'
import { RQShortcut } from './types'

const CK_SHORTCUT = 'shortcut'

const useShortcut = {
  list: (rq: RQShortcut) => {
    return useQuery({
      queryKey: [CK_SHORTCUT, rq],
      queryFn: () => Shortcut.list(rq)
    })
  }
}

export { useShortcut }
