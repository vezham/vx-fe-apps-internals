type Avatars = {
  url: string
  color: string
  icon: string
}

export type Collection = {
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
