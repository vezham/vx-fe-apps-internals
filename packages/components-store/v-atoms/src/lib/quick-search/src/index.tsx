// import { useState } from 'react'
// import { SearchIcon } from '@vezham/icons'
// import { forwardRef } from '@vezham/react-utils'
// import { Button } from '@vx-oss/react'
// import { Kbd } from '@vx-oss/react'
// import { Props, useProps } from './types'
// const QuickSearch = forwardRef<'div', Props>((props, ref) => {
//   const { Component, getBaseProps, label } = useProps({
//     ...props,
//     ref
//   })
//   const [commandKey, setCommandKey] = useState<'ctrl' | 'command'>('command')
//   const handleOpenCmdk = () => {
//     // cmdkStore.onOpen()
//   }
//   return (
//     <Component {...getBaseProps()}>
//       <Button
//         aria-label="Quick search"
//         className="text-default-400 bg-default-100 w-full text-sm font-normal sm:w-96"
//         startContent={
//           <SearchIcon
//             size="md"
//             classNames={{
//               base: 'pointer-events-none flex-shrink-0 text-base',
//               icon: '!fill-default-400'
//             }}
//           />
//         }
//         endContent={
//           <Kbd
//             className="text-default-400 gap-1"
//             color="transparent"
//             radius="none"
//             shadow="none"
//             title="Command"
//             keys={['command']}>
//             K
//           </Kbd>
//         }
//         onPress={handleOpenCmdk}>
//         <div className="w-full text-left">{label}</div>
//       </Button>
//     </Component>
//   )
// })
// QuickSearch.displayName = 'QuickSearch'
// export { QuickSearch }
import { Search } from 'lucide-react'
import { useState } from 'react'

import { forwardRef } from '@vezham/react-utils'

import { Button } from '@vx-oss/react'
import { Kbd } from '@vx-oss/react'

import { Props, useProps } from './types'

const QuickSearch = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, label } = useProps({
    ...props,
    ref
  })

  const [commandKey, setCommandKey] = useState<'ctrl' | 'command'>('command')
  const handleOpenCmdk = () => {
    // cmdkStore.onOpen()
  }

  return (
    <Component {...getBaseProps()}>
      <Button
        aria-label="Quick search"
        className="text-default-400 bg-default-100 w-full text-sm font-normal sm:w-96"
        startContent={
          <Search
            size={20}
            className="text-default-400 pointer-events-none flex-shrink-0 text-base"
          />
        }
        endContent={
          <Kbd
            className="text-default-400 gap-1"
            color="transparent"
            radius="none"
            shadow="none"
            title="Command"
            keys={['command']}>
            K
          </Kbd>
        }
        onPress={handleOpenCmdk}>
        <div className="w-full text-left">{label}</div>
      </Button>
    </Component>
  )
})

QuickSearch.displayName = 'QuickSearch'

export { QuickSearch }
