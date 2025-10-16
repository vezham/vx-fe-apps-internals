import { createLazyFileRoute } from '@tanstack/react-router'

import { AppDetailPage } from '../../components/appExplore-1/appDetailPage'

export const Route = createLazyFileRoute('/apps/$appsId')({
  component: () => <AppDetailPage />
})
