import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vitest } from 'vitest'

import { useWindowSize } from '../src'

const windowResize = (dimension: 'width' | 'height', value: number): void => {
  if (dimension === 'width') {
    window.innerWidth = value
  }

  if (dimension === 'height') {
    window.innerHeight = value
  }

  window.dispatchEvent(new Event('resize'))
}

describe('useWindowSize', () => {
  beforeEach(() => {
    vitest.clearAllMocks()
    vitest.useFakeTimers() // Mock timers

    // Set the initial window size
    windowResize('width', 1920)
    windowResize('height', 1080)
  })

  it('should initialize', () => {
    const { result } = renderHook(() => useWindowSize())
    const { height, width } = result.current
    expect(typeof height).toBe('number')
    expect(typeof width).toBe('number')
    expect(result.current.width).toBe(1920)
    expect(result.current.height).toBe(1080)
  })

  it('should return the corresponding height', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      windowResize('height', 420)
    })

    expect(result.current.height).toBe(420)

    act(() => {
      windowResize('height', 2196)
    })

    expect(result.current.height).toBe(2196)
  })

  it('should return the corresponding width', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      windowResize('width', 420)
    })

    expect(result.current.width).toBe(420)

    act(() => {
      windowResize('width', 2196)
    })

    expect(result.current.width).toBe(2196)
  })

  it('should debounce the callback', () => {
    const { result } = renderHook(() => useWindowSize({ debounceDelay: 100 }))

    expect(result.current.width).toBe(1920)
    expect(result.current.height).toBe(1080)

    act(() => {
      windowResize('width', 2196)
      windowResize('height', 2196)
    })

    // Don't changed yet
    expect(result.current.width).toBe(1920)
    expect(result.current.height).toBe(1080)

    act(() => {
      vitest.advanceTimersByTime(200)
    })

    expect(result.current.width).toBe(2196)
    expect(result.current.height).toBe(2196)
  })
})
