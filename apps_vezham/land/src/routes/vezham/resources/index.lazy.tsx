import { createLazyFileRoute } from '@tanstack/react-router'

import { Resources } from '../../../pages/resources'

export const Route = createLazyFileRoute('/vezham/resources/')({
  component: () => <Resources />
})
