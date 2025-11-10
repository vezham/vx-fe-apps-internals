import { createFileRoute } from '@tanstack/react-router'

import Page from '../../../pages/editorials'

export const Route = createFileRoute('/editorials/$editorials_id/')({
  component: RouteComponent
})

function RouteComponent() {
  return <Page />
}
