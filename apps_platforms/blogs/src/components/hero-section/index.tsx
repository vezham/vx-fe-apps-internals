import { PwaHeroSection } from '@vezham/layouts'

import { QuickSearch } from '@vx/v-atoms'

import { usePersonalize } from '../../store/usePersonalize'

const HeroSection = () => {
  const { data: personal } = usePersonalize.list({})

  return (
    <PwaHeroSection
      {...personal?.cards?.welcome_message}
      title_size="md"
      spacer="lg"
      bg_effect="faded">
      <QuickSearch />
    </PwaHeroSection>
  )
}

export { HeroSection }
