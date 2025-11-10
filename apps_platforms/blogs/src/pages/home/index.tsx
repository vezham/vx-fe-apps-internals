import { PlatformLayout } from '@vezham/layouts'

import { ByCollections } from '../../components/by-collections'
import { FeaturedCards } from '../../components/featured-cards'
import { HeroSection } from '../../components/hero-section'
import { Trending } from '../../components/trending'
import { SectionContainer } from '../../layout/section-container'

const home = () => {
  return (
    <PlatformLayout>
      <HeroSection />
      <FeaturedCards />
      <SectionContainer>
        <ByCollections />
        <Trending />
      </SectionContainer>
    </PlatformLayout>
  )
}

export default home
