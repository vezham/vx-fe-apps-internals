import { createFileRoute } from '@tanstack/react-router'

import Page from '../../../pages/posts'

export const Route = createFileRoute('/posts/$slug/')({
  component: RouteComponent
})

function RouteComponent() {
  return <Page />
}
