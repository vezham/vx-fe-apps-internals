import { ReactNode } from 'react'

export interface Menu {
  id?: string
  className?: string
  icon: ReactNode
  label: string
  onClick?: () => void
}

export interface MenuProps {
  selected?: string
  data: Menu[]
}
