import { createLazyFileRoute } from '@tanstack/react-router'

import { Features } from '../../../pages/features'

export const Route = createLazyFileRoute('/vezham/features/')({
  component: () => <Features />
})
