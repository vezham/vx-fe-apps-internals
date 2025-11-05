/* eslint-disable  @typescript-eslint/no-namespace */ // @wjdlz/ESFIX
export type VAspectRatio =
  | '_23'
  | '_32'
  | 'square'
  | 'sd'
  | 'hd'
  | 'digital'
  | 'imax_film'
  | 'imax_digital'

export namespace VAspectRatio {
  export function toNumber(config: VAspectRatio): number {
    switch (config) {
      case '_23':
        return 2 / 3
      case '_32':
        return 3 / 2
      case 'square':
        return 1 / 1
      case 'sd':
        return 4 / 3
      case 'hd':
        return 16 / 9
      case 'digital':
        return 21 / 9
      case 'imax_film':
        return 14 / 10
      case 'imax_digital':
        return 19 / 10
    }
  }
}
