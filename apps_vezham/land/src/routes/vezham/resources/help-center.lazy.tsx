import { createLazyFileRoute } from '@tanstack/react-router'

import { HelpComp } from '../../../pages/help-center'

export const Route = createLazyFileRoute('/vezham/resources/help-center')({
  component: () => <HelpComp />
})
