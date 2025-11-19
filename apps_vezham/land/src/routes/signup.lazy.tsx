import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../pages/signup'

export const Route = createLazyFileRoute('/signup')({
  component: () => <Page />
})
