import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useScrollTo } from '../src'

describe('useScrollTo', () => {
  it('should initialize', () => {
    const { result } = renderHook(() => useScrollTo())

    expect(result.current.value).not.toBeTruthy()
  })
})
