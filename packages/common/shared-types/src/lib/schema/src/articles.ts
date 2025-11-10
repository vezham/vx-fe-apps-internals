import { Authors, Block, Tags, coverType } from './personalize'

export type singleArticle = {
  id?: string
  slug: string
  url: string
  title: string
  article_count: number
  published_at: string
  read_time?: number
  author_ids: string[]
}

export type Article = {
  id: string
  collection_id?: string
  slug: string
  url: string
  title: string
  description: string
  blocks: Block[]
  cover: coverType
  tags: Tags[]
  authors: Authors[]
  published_at: string
  read_time?: number
  related_article_ids: string[]
}

export interface Articles {
  id?: string
  api_handle: string
  url: string
  name: string
  description: string
  article_count: number
  author_ids: string[]
  authors: Authors[]
  tags: Tags[]
  articles: singleArticle[]
  section_ids: string[]
  updated_at: string
  read_time?: number
  updated_by: string
}
