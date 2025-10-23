import { createLazyFileRoute } from '@tanstack/react-router'

import { AppExploreContent } from '../../../pages/explore-1'

export const Route = createLazyFileRoute('/apps/explore-1/')({
  component: () => <AppExploreContent />
})
