import { Article, Articles } from '@vx/shared-types'

type RQArticle = object

interface RQArticlesCollection extends RQArticle {
  api_handle: string
}

interface RQListArticle extends RQArticle {
  slug: string
}

export type { Article, Articles, RQArticlesCollection, RQListArticle }
