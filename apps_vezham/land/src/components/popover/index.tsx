import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React from 'react'

import {
  Button,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@vx-oss/react'

import { shortcuts } from '../../store/useShortcut/data'
import { ShortcutCompProps, useShortcutProps } from './types'

const Shortcut = React.forwardRef<HTMLDivElement, ShortcutCompProps>(
  (props, ref) => {
    const { onOpen, ...otherProps } = props

    const { getBaseProps, getPopoverInnerProps, getShortcutListProps } =
      useShortcutProps({
        shortcuts,
        ...otherProps,
        ref
      })

    const router = useRouter()
    const [open, setOpen] = React.useState(false)

    const handleItemClick = (item: { title?: string; href?: string }) => {
      setOpen(false)
      if (item.href) {
        setTimeout(() => {
          router.navigate({ to: item.href })
        }, 20)
      } else {
        onOpen?.()
      }
    }

    return (
      <div {...getBaseProps()}>
        <Popover
          placement="right-start"
          backdrop="opaque"
          isOpen={open}
          onOpenChange={(next: boolean) => setOpen(next)}>
          <PopoverTrigger>
            <Button
              variant="flat"
              color="primary"
              isIconOnly
              onPress={() => setOpen(prev => !prev)}
              className="rounded-r-none"
              endContent={
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Icon icon="lucide:arrow-left" />
                </motion.div>
              }
            />
          </PopoverTrigger>

          <PopoverContent>
            <div {...getPopoverInnerProps()}>
              {(shortcuts ?? []).map((item, idx) => (
                <Link
                  {...getShortcutListProps()}
                  underline="hover"
                  color="foreground"
                  key={idx}
                  onPress={() => handleItemClick(item)}>
                  {item.title}
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)

Shortcut.displayName = 'Shortcut'

export { Shortcut }
