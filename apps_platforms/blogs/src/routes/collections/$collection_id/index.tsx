import { createFileRoute } from '@tanstack/react-router'

import Page from '../../../pages/collections'

export const Route = createFileRoute('/collections/$collection_id/')({
  component: RouteComponent
})

function RouteComponent() {
  return <Page />
}
