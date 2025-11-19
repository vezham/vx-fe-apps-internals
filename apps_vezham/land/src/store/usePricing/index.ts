import { useQuery } from '@tanstack/react-query'

import { Pricing } from './action'
import { RQPersonalize } from './types'

const CK_PRICING = 'pricing'

const usePricing = {
  list: (rq: RQPersonalize) => {
    console.log(Pricing.list(rq))
    return useQuery({
      queryKey: [CK_PRICING, rq],
      queryFn: () => Pricing.list(rq)
    })
  }
}

export { usePricing }
