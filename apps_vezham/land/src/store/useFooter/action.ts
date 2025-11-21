import { footerNavigation } from './data'
import { FooterNavigation, RQFooter } from './types'

const Footers = {
  list: async (rq: RQFooter): Promise<FooterNavigation> => {
    return Promise.resolve(footerNavigation)
  }
}

export { Footers }
