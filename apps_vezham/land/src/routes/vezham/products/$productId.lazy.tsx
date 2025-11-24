import { createLazyFileRoute } from '@tanstack/react-router'

import { ProductView } from '../../../components/appProductDetail'

export const Route = createLazyFileRoute('/vezham/products/$productId')({
  component: () => <ProductView />
})
