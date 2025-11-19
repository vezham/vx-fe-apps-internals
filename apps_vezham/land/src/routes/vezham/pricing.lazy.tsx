import { createLazyFileRoute } from '@tanstack/react-router'

import { Pricing } from '../../pages/pricing'

export const Route = createLazyFileRoute('/vezham/pricing')({
  component: () => <Pricing />
})
