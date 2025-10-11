import { createLazyFileRoute } from '@tanstack/react-router'

import { AppContent } from '../../components/appExplore'

export const Route = createLazyFileRoute('/apps/explore')({
  component: () => <AppContent />
})
