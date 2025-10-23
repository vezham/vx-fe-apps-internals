import { createLazyFileRoute } from '@tanstack/react-router'

import { AppDetailPage } from '../../../components/appExplore/appDetailPage'

export const Route = createLazyFileRoute('/apps/explore/$exploreId')({
  component: () => <AppDetailPage key="appDetail-explore" />
})
