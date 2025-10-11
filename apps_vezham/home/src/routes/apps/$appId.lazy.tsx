import { createLazyFileRoute } from '@tanstack/react-router'

import { AppDetailPage } from '../../pages/apps/appDetailPage'

export const Route = createLazyFileRoute('/apps/$appId')({
  component: () => <AppDetailPage />
})
