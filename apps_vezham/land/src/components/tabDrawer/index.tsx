import { useRouter } from '@tanstack/react-router'

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

  return (
    <Drawer
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
