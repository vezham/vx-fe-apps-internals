import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/vezham/features/')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/vezham/features/"!</div>
}
