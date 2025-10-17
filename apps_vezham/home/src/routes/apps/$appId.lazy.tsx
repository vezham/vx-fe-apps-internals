import { createLazyFileRoute } from '@tanstack/react-router'

import { AppDetailPage } from '../../components/appExplore/appDetailPage'

export const Route = createLazyFileRoute('/apps/$appId')({
  component: () => <AppDetailPage key="appDetail-page" />
})
