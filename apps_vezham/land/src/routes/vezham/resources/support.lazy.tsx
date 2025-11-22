import { createLazyFileRoute } from '@tanstack/react-router'

import { Support } from '../../../components/appResources/support'

export const Route = createLazyFileRoute('/vezham/resources/support')({
  component: () => <Support />
})
