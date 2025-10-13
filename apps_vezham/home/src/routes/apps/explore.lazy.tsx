import { createLazyFileRoute } from '@tanstack/react-router'

import { AppContent } from '../../pages/apps'

export const Route = createLazyFileRoute('/apps/explore')({
  component: () => <AppContent />
})
