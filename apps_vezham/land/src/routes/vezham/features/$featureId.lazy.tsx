import { createLazyFileRoute } from '@tanstack/react-router'

import { AppDetailPage } from '../../../components/appFeatures/appDetailPage'

export const Route = createLazyFileRoute('/vezham/features/$featureId')({
  component: () => <AppDetailPage key="appDetail-explore" />
})
