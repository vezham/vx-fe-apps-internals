// import { useRouter } from '@tanstack/react-router'
// import { forwardRef } from '@vezham/react-utils'
// import {
//   Drawer,
//   DrawerBody,
//   DrawerContent,
//   DrawerHeader,
//   Link
// } from '@vx-oss/react'
// import { Props, useProps } from './types'
// const TabDrawer = forwardRef<'div', Props>((props, ref) => {
//   const {
//     getBaseProps,
//     getDrawerContentProps,
//     getDrawerHeaderProps,
//     getDrawerBodyProps,
//     getSubItemProps,
//     getSubItemTitleProps,
//     getSubItemDescriptionProps,
//     isOpen,
//     onOpenChange,
//     placement = 'bottom',
//     activeItem,
//     onClose
//   } = useProps({
//     ...props,
//     ref
//   })
//   const router = useRouter()
//   return (
//     <Drawer
//       isOpen={isOpen}
//       placement={placement}
//       backdrop="opaque"
//       size="xs"
//       {...getBaseProps()}
//       onOpenChange={onOpenChange}>
//       <DrawerContent>
//         {close => (
//           <div
//             {...getDrawerContentProps()}
//             onMouseLeave={() => onClose?.() || close()}>
//             <DrawerHeader {...getDrawerHeaderProps()}>
//               <Link
//                 isExternal
//                 showAnchorIcon
//                 color="foreground"
//                 onPress={() => router.navigate({ to: activeItem?.href })}>
//                 {activeItem?.label}
//               </Link>
//             </DrawerHeader>
//             <DrawerBody {...getDrawerBodyProps()}>
//               {activeItem?.subItems &&  activeItem?.subItems?.map(sub => (
//                 <a key={sub.key} href={sub.href} {...getSubItemProps()}>
//                   <p {...getSubItemTitleProps()}>{sub.label}</p>
//                   <p {...getSubItemDescriptionProps()}>{sub.description}</p>
//                 </a>
//               ))}
//             </DrawerBody>
//           </div>
//         )}
//       </DrawerContent>
//     </Drawer>
//   )
// })
// TabDrawer.displayName = 'TabDrawer'
// export { TabDrawer }
import { useLocation, useRouter } from '@tanstack/react-router'
import { div } from 'framer-motion/client'
import { useEffect } from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Link
} from '@vx-oss/react'

import { Props, useProps } from './types'

const TabDrawer = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getDrawerContentProps,
    getDrawerHeaderProps,
    getDrawerBodyProps,
    getSubItemProps,
    getSubItemTitleProps,
    getSubItemDescriptionProps,
    isOpen,
    onOpenChange,
    placement = 'bottom',
    activeItem,
    onClose
  } = useProps({
    ...props,
    ref
  })

  const router = useRouter()
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    onOpenChange?.(false)
  }, [pathname]) // close drawer when URL changes

  useEffect(() => {
    if (
      isOpen &&
      activeItem &&
      (!activeItem.subItems || activeItem.subItems.length === 0)
    ) {
      onOpenChange?.(false)

      if (activeItem.href) {
        router.navigate({ to: activeItem.href })
      }
    }
  }, [isOpen, activeItem, onOpenChange, router])

  if (!activeItem?.subItems || activeItem.subItems.length === 0) {
    return null
  }

  return (
    <Drawer
      key={`drawer-${activeItem?.key}-${activeItem?.subItems?.length}`} // Force re-render on data change
      isOpen={isOpen}
      placement={placement}
      backdrop="opaque"
      size="xs"
      {...getBaseProps()}
      onOpenChange={onOpenChange}>
      <DrawerContent>
        {close => (
          <div
            {...getDrawerContentProps()}
            onMouseLeave={() => onClose?.() || close()}>
            <DrawerHeader {...getDrawerHeaderProps()}>
              <Link
                isExternal
                showAnchorIcon
                color="foreground"
                onPress={() => router.navigate({ to: activeItem?.href })}>
                {activeItem?.label}
              </Link>
            </DrawerHeader>

            <DrawerBody {...getDrawerBodyProps()}>
              {activeItem?.subItems?.map(sub => (
                <a key={sub.key} href={sub.href} {...getSubItemProps()}>
                  <p {...getSubItemTitleProps()}>{sub.label}</p>
                  <p {...getSubItemDescriptionProps()}>{sub.description}</p>
                </a>
              ))}
            </DrawerBody>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  )
})

TabDrawer.displayName = 'TabDrawer'

export { TabDrawer }
