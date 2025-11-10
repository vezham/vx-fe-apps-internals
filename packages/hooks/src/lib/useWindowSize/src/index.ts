import { useEffect, useState } from 'react'

import { useDebounceCallback } from '../../useDebounceCallback/src'
import { useEventListener } from '../../useEventListener/src'
import { Vdevice, WindowSize } from './types'

/**
 * Hook options.
 * @template InitializeWithValue - If `true` (default), the hook will initialize reading the window size. In SSR, you should set it to `false`, returning `undefined` initially.
 */
type UseWindowSizeOptions<InitializeWithValue extends boolean | undefined> = {
  /**
   * If `true` (default), the hook will initialize reading the window size. In SSR, you should set it to `false`, returning `undefined` initially.
   * @default true
   */
  initializeWithValue: InitializeWithValue
  /**
   * The delay in milliseconds before the state is updated (disabled by default for retro-compatibility).
   * @default undefined
   */
  debounceDelay?: number
}

const IS_SERVER = typeof window === 'undefined'

// SSR version of useWindowSize.
function useWindowSize(options: UseWindowSizeOptions<false>): WindowSize
// CSR version of useWindowSize.
function useWindowSize(
  options?: Partial<UseWindowSizeOptions<true>>
): WindowSize<number>
/**
 * Custom hook that tracks the size of the window.
 * @param {?UseWindowSizeOptions} [options] - The options for customizing the behavior of the hook (optional).
 * @returns {object} An object containing the width and height of the window.
 * @public
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-window-size)
 * @example
 * ```tsx
 * const { width = 0, height = 0 } = useWindowSize();
 * console.log(`Window size: ${width} x ${height}`);
 * ```
 */
function useWindowSize(
  options: Partial<UseWindowSizeOptions<boolean>> = {}
): WindowSize | WindowSize<number> {
  let { initializeWithValue = true } = options
  if (IS_SERVER) {
    initializeWithValue = false
  }

  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    return {
      width: undefined,
      height: undefined
    }
  })

  const debouncedSetWindowSize = useDebounceCallback(
    setWindowSize,
    options.debounceDelay
  )

  function handleSize() {
    const setSize = options.debounceDelay
      ? debouncedSetWindowSize
      : setWindowSize

    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEventListener('resize', handleSize)

  // Set size at the first client-side load
  useEffect(() => {
    handleSize()
  }, [])

  return windowSize
}

type SpecProps = {
  width: {
    min: number
    max: number
  }
  height: {
    min: number
    max: number
  }
  vdevice?: Vdevice
}

/* suresh/NOTE: device based spec */
const spec: { [key in string]: SpecProps } = {
  /* suresh/NOTE: iPhone 15 device size */
  iphone_15: { width: { min: 850, max: 854 }, height: { min: 390, max: 395 } },
  /* suresh/NOTE: Iphone 14 pro max device size */
  iphone_14_pro_max: {
    width: { min: 925, max: 935 },
    height: { min: 427, max: 435 }
  },
  /* suresh/NOTE: Iphone 12 pro device size */
  iphone_12_pro: {
    width: { min: 840, max: 845 },
    height: { min: 388, max: 392 }
  },
  /* suresh/NOTE: iPhone 13 Mini device size */
  iphone_13_mini: {
    width: { min: 810, max: 815 },
    height: { min: 370, max: 377 }
  },
  /* suresh/NOTE: iPhone SE 2022 device size */
  iphone_se_22: {
    width: { min: 664, max: 668 },
    height: { min: 370, max: 377 }
  },
  /* suresh/NOTE: Iphone XR device size */
  iphone_xr: { width: { min: 894, max: 898 }, height: { min: 410, max: 417 } },
  /* suresh/NOTE: Google Pixel 6 Pro device size */
  gpixel_6_pro: {
    width: { min: 890, max: 895 },
    height: { min: 408, max: 415 }
  },
  /* suresh/NOTE: Google Pixel 4 XL device size */
  gpixel_4xl: { width: { min: 865, max: 972 }, height: { min: 408, max: 415 } },
  /* suresh/NOTE: Pixel 3 Xl device size */
  gpixel_3xl: { width: { min: 784, max: 788 }, height: { min: 390, max: 395 } },
  /* suresh/NOTE: Samsung Galaxy S22 device size */
  sam_galaxy_s22: {
    width: { min: 778, max: 783 },
    height: { min: 357, max: 365 }
  },
  /* suresh/NOTE: Samsung Galaxy S22 Plus device size */
  sam_galaxy_s22_plus: {
    width: { min: 830, max: 835 },
    height: { min: 380, max: 387 }
  },
  /* suresh/NOTE: Samsung Galaxy S22 Ultra device size */
  sam_galaxy_s22_ultra: {
    width: { min: 820, max: 825 },
    height: { min: 380, max: 387 }
  },
  /* suresh/NOTE: Samsung Galaxy S21 device size */
  sam_galaxy_s21: {
    width: { min: 798, max: 805 },
    height: { min: 358, max: 365 }
  },
  /* suresh/NOTE: Samsung Galaxy S21 Plus device size */
  sam_galaxy_s21_plus: {
    width: { min: 850, max: 857 },
    height: { min: 380, max: 387 }
  },
  /* suresh/NOTE: Samsung Galaxy s20 Ultra device size */
  sam_galaxy_s20_ultra: {
    width: { min: 910, max: 918 },
    height: { min: 408, max: 415 }
  },
  /* suresh/NOTE: Nokia N9 device size */
  nokia_n9: { width: { min: 853, max: 855 }, height: { min: 478, max: 482 } }
}

const getSpec = () => ({ width: window.innerWidth, height: window.innerHeight })

const validateSpec = ({ width, height }: SpecProps) => {
  const { width: w, height: h } = getSpec()
  return width.min <= w && width.max >= w && height.min <= h && height.max >= h
}

const GetDevice = () => {
  for (const key of Object.keys(spec)) {
    const config = spec[key]
    if (validateSpec(config))
      return config.vdevice || Vdevice.MOBILE_LANDSCAPE_XL
  }

  // wjdlz/NOTE: for global spec
  const { width, height } = getSpec(),
    portrait = height >= width

  if (width <= 320) {
    return Vdevice.MINI_MOBILE
  } else if (width <= 480 && width >= 320) {
    return Vdevice.MOBILE_PORTRAIT
  } else if (width <= 767 && width >= 481) {
    return Vdevice.MOBILE_LANDSCAPE
  } else if (width <= 1024 && width >= 768) {
    return portrait ? Vdevice.TAB_PORTRAIT : Vdevice.TAB_LANDSCAPE
  } else if (width <= 1280 && width >= 1025) {
    return Vdevice.LAPTOP
  } else if (width >= 1281) {
    return Vdevice.DESKTOP
  }
  return Vdevice.DESKTOP
}

export { GetDevice, useWindowSize, Vdevice }
