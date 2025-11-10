import { PwaHeroSection } from '@vezham/layouts'

import { QuickSearch } from '@vx/v-atoms'

import { usePersonalize } from '../../store/usePersonalize'

const HeroSection = () => {
  const { data: personal } = usePersonalize.list({})

  return (
    <PwaHeroSection {...personal?.cards?.welcome_message}>
      <QuickSearch />
    </PwaHeroSection>
  )
}

export { HeroSection }
