import { createLazyFileRoute } from '@tanstack/react-router'

import { AppDetailView } from '../../components/appExplore-1/appDetailPage'

export const Route = createLazyFileRoute('/apps/$appExploreId')({
  component: () => <AppDetailView key="appDetail-page" />
})
