import { JSX } from 'react/jsx-runtime'

import { Trends } from '@vx/shared-types'

type TopTrends = {
  map(arg0: (trend: any, index: any) => JSX.Element): import('react').ReactNode
  data: Trends[]
}

type RQDiscovery = object

export type { Trends }
export type { RQDiscovery, TopTrends }
