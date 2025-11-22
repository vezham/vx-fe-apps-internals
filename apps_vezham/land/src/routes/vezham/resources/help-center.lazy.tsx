import { createLazyFileRoute } from '@tanstack/react-router'

import { HelpCenter } from '../../../components/appResources/help-center'

export const Route = createLazyFileRoute('/vezham/resources/help-center')({
  component: () => <HelpCenter />
})
