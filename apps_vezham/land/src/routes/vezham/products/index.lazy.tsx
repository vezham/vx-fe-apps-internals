import { createLazyFileRoute } from '@tanstack/react-router'

import { Products } from '../../../pages/products'

export const Route = createLazyFileRoute('/vezham/products/')({
  component: () => <Products />
})
