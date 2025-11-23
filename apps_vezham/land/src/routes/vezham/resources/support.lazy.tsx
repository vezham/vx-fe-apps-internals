import { createLazyFileRoute } from '@tanstack/react-router'

import { SupportComp } from '../../../pages/support'

export const Route = createLazyFileRoute('/vezham/resources/support')({
  component: () => <SupportComp />
})
