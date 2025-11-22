import { useQuery } from '@tanstack/react-query'

import { Pricing } from './action'
import { RQPersonalize, RQPricing } from './types'

const CK_PRICING = 'pricing'
const CK_PRICELIST = 'pricelist'

const usePricing = {
  list: (rq: RQPersonalize) => {
    return useQuery({
      queryKey: [CK_PRICING, rq],
      queryFn: () => Pricing.list(rq)
    })
  },

  pricelist: (rq: RQPricing) => {
    return useQuery({
      queryKey: [CK_PRICELIST, rq],
      queryFn: () => Pricing.pricelist(rq)
    })
  }
}

export { usePricing }
