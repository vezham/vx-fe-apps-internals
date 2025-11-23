import { shortcuts } from './data'
import { RQShortcut, ShortcutInfo } from './types'

const Shortcut = {
  list: async (rq: RQShortcut): Promise<ShortcutInfo> => {
    return Promise.resolve(shortcuts[0])
  }
}

export { Shortcut }
