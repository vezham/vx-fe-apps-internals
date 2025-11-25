import { NotFoundRoute } from '@tanstack/react-router'

import { Route } from './__root'

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => Route,
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-default-600 mt-2">
        The page you are looking for does not exist.
      </p>
    </div>
  )
}
