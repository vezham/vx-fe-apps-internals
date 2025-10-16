import { createLazyFileRoute } from '@tanstack/react-router'

import { Books } from '../../pages/books'

export const Route = createLazyFileRoute('/apps/vezham-books')({
  component: () => <Books />
})
