import { PlatformLayout } from '@vezham/layouts'

import { Header as EditorialsHeader } from '../../components/editorials/header'
import { RelatedPosts } from '../../components/editorials/related-posts'

const Page = () => (
  <PlatformLayout>
    <EditorialsHeader />
    <RelatedPosts />
  </PlatformLayout>
)

export default Page
