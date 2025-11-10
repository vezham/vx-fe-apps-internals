import { GetDevice } from '../../useWindowSize/src'
import { Vdevice } from '../../useWindowSize/src/types'

interface useOutput {
  toTop: () => void
  toNextPage: () => void
  byId: (id: string, offset?: boolean) => void
  byIdOffSet: (id: string) => void
  // byRef: (ref: HTMLDivElement | null) => void
}

function useScrollTo(): useOutput {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toNextPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  const byId = (id = '', offset = true) => {
    const el = document.getElementById(id) as HTMLElement
    let block: ScrollLogicalPosition = 'start'

    // wjdlz/NOTE: PATCH for static header offset
    if (offset) {
      const device = GetDevice()
      block =
        device === Vdevice.MINI_MOBILE || device === Vdevice.MOBILE_PORTRAIT
          ? 'start'
          : 'center'
    }

    el?.scrollIntoView({
      behavior: 'smooth',
      block
    })
  }

  const byIdOffSet = (id = '') => {
    const el = document.getElementById(id) as HTMLElement

    const header_offset = 75

    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = el.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - header_offset

    window.scroll({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return { toTop, toNextPage, byId, byIdOffSet }
}

export { useScrollTo }
