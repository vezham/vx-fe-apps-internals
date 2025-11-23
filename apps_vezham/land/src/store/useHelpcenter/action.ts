import { helpCenterData, personalizationsData } from './data'
import {
  HelpCenterProps,
  Personalize,
  RQHelpCenter,
  RQPersonalize
} from './types'

const HelpCenter = {
  list: async (rq: RQHelpCenter): Promise<HelpCenterProps> => {
    return Promise.resolve(helpCenterData)
  },
  homelist: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { HelpCenter }
