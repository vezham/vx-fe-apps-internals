import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Text } from '../src'

describe('Text', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<Text />)

    expect(baseElement).toBeTruthy()
  })

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>()

    render(<Text ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})
