import { useQuery } from '@tanstack/react-query'

import { articles } from './action'
import { RQArticlesCollection, RQListArticle } from './types'

const ARTICLES = 'articles'
const ARTICLE = 'article'

const useArticles = {
  list: (rq: RQArticlesCollection) => {
    return useQuery({
      queryKey: [ARTICLES, rq.api_handle, rq],
      queryFn: () => articles.list(rq)
    })
  },
  get: (rq: RQListArticle) => {
    return useQuery({
      queryKey: [ARTICLE, rq.slug, rq],
      queryFn: () => articles.get(rq)
    })
  }
}

export { useArticles }
