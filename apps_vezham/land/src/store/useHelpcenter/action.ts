import { helpCenterData } from './data'
import { HelpCenterProps, RQHelpCenter } from './types'

const HelpCenter = {
  list: async (rq: RQHelpCenter): Promise<HelpCenterProps> => {
    return Promise.resolve(helpCenterData)
  }
}

export { HelpCenter }
