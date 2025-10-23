import { Outlet, createLazyFileRoute } from '@tanstack/react-router'

import { AppContent } from '../../../pages/explore'

export const Route = createLazyFileRoute('/apps/explore/')({
  component: () => <AppContent />
})
