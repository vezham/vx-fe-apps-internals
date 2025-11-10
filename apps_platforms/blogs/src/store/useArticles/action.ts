// import { IAM } from '@vx/contracts';
// import { useAxios } from '@vx/hooks';
import { postData, singlePostData } from './data'
import { Article, RQArticlesCollection, RQListArticle } from './types'

// const articlesCollection = '/blogs/collections/:api_handle/posts'
// const article = '/blogs/posts/:slug'

const articles = {
  // list: async (rq: RQArticlesCollection): Promise<Article[]> => {
  //   return useAxios.get(
  //     articlesCollection.replace(':api_handle', rq.api_handle),
  //     IAM.RQConfigBDC
  //   )
  // },
  // get: async (rq: RQListArticle): Promise<Article> => {
  //   return useAxios.get(article.replace(':slug', rq.slug), IAM.RQConfigBDC)
  // }

  list: async (rq: RQArticlesCollection): Promise<Article[]> => {
    return Promise.resolve(postData)
  },
  get: async (rq: RQListArticle): Promise<Article> => {
    const posts = singlePostData.find(c => c.slug === rq.slug)
    if (!posts) throw new Error(`Post "${rq.slug}" not found`)
    return Promise.resolve(posts)
  }
}

export { articles }
