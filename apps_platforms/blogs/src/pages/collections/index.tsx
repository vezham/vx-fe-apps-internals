import { PlatformLayout } from '@vezham/layouts'

import { ByCollections } from '../../components/by-collections'
import { Header as CollectionHeader } from '../../components/collections/header'
import { RelatedPosts } from '../../components/collections/related-posts'
import { SectionContainer } from '../../layout/section-container'

const Page = () => (
  <PlatformLayout>
    <CollectionHeader />
    <RelatedPosts />
    <SectionContainer className="pt-0">
      <ByCollections />
    </SectionContainer>
  </PlatformLayout>
)

export default Page
