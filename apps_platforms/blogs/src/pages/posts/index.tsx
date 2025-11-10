import { PlatformLayout } from '@vezham/layouts'

import { Header as PostHeader } from '../../components/posts/header'
import { Post } from '../../components/posts/post'
import { RelatedPosts } from '../../components/posts/related-posts'

const Page = () => (
  <PlatformLayout>
    <PostHeader />
    <Post />
    <RelatedPosts />
  </PlatformLayout>
)

export default Page
