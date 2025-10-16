import { createLazyFileRoute } from '@tanstack/react-router'

import { AppContent } from '../../pages/apps/explore-1'

export const Route = createLazyFileRoute('/apps/explore-1')({
  component: () => <AppContent />
})
