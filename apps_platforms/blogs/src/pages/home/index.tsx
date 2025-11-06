import { PlatformLayout } from '@vezham/layouts'

import { ByCollections } from '../../components/by-collections'
import { FeaturedCards } from '../../components/featured-cards'
import { HeroSection } from '../../components/hero-section'
import { SectionContainer } from '../../layout/section-container'

const home = () => {
  return (
    <PlatformLayout>
      <HeroSection />
      <FeaturedCards />
      <SectionContainer>
        <ByCollections />
      </SectionContainer>
    </PlatformLayout>
  )
}

export default home
