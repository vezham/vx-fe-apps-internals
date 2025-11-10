type Avatars = {
  __type: string
  url?: string
  color?: string
  icon?: string
}

export type Collection = {
  __type: string
  '-id': string
  id: string
  api_handle: string
  target: string
  name: string
  description: string
  avatar: Avatars
  author_ids: string[]
  article_count: string
  updated_at: string
  updated_by: string
}

export type Collections = Collection[]
