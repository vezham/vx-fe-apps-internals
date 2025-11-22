import { personalizationsData, pricingData } from './data'
import { Personalize, PricingData, RQPersonalize, RQPricing } from './types'

const Pricing = {
  list: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  },

  pricelist: async (rq: RQPricing): Promise<PricingData> => {
    return Promise.resolve(pricingData)
  }
}

export { Pricing }
