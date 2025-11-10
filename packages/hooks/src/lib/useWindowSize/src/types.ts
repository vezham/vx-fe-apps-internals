/**
 * Represent the dimension of the window.
 * @template T - The type of the dimension (number or undefined).
 */
export type WindowSize<T extends number | undefined = number | undefined> = {
  /** The width of the window. */
  width: T
  /** The height of the window. */
  height: T
}

export enum Vdevice {
  // WATCH = 'watch',
  MINI_MOBILE = 'mob-sm',
  MOBILE_PORTRAIT = 'mob',
  MOBILE_LANDSCAPE = 'mob-l',
  MOBILE_LANDSCAPE_XL = 'mob-xl',
  TAB_PORTRAIT = 'tab',
  TAB_LANDSCAPE = 'tab-l',
  LAPTOP = 'lap',
  DESKTOP = 'desk'
  // TV = 'tv'
}
