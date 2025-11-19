import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../pages/signin'

export const Route = createLazyFileRoute('/login')({
  component: () => <Page />
})
