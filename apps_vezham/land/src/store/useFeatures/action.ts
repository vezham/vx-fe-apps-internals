import { categories, categoryContents, personalizationsData } from './data'
import {
  Category,
  CategoryContent,
  Personalize,
  RQFeatures,
  RQPersonalize
} from './types'

const Features = {
  sidebarlist: async (rq: RQFeatures): Promise<Category[]> => {
    return Promise.resolve(categories)
  },

  contentlist: async (rq: RQFeatures): Promise<CategoryContent> => {
    return Promise.resolve(categoryContents)
  },

  list: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { Features }
