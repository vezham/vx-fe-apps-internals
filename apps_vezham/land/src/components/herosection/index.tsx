import { Link, useRouter } from '@tanstack/react-router'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import React from 'react'

import { forwardRef } from '@vezham/react-utils'

import {
  Button,
  Checkbox,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
  useDraggable
} from '@vx-oss/react'

import { useShortcut } from '../../store/useShortcut'
import { Shortcut } from '../popover'
import { Props, useProps } from './types'

const HomeSection = forwardRef<'div', Props>((props, ref) => {
  const { data: shortcuts } = useShortcut.list({})
  const {
    Component,
    getBaseProps,
    getTitleProps,
    getSuperTitleProps,
    getWrapperProps,
    getDescriptionProps,
    getFooterProps,
    getContentProps,
    children,
    actions,
    super_title,
    title,
    chip_label,
    description,
    cover
  } = useProps({
    ...props,
    ref
  })

  const CheckIcon = () => {
    return (
      <svg
        fill="none"
        height={16}
        viewBox="0 0 24 24"
        width={16}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const MailIcon = props => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}>
        <path
          d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const router = useRouter()
  const targetRef = React.useRef(null)
  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen })

  return (
    <>
      <Component
        {...getBaseProps()}
        style={{
          backgroundImage: `url("${cover?.url}")`
        }}>
        <div {...getWrapperProps()}>
          <div>
            <Chip
              color="default"
              variant="solid"
              startContent={
                <div className="text-warning">
                  <CheckIcon />
                </div>
              }>
              {chip_label}
            </Chip>
          </div>

          <div {...getContentProps()}>
            <LazyMotion features={domAnimation}>
              <m.div
                animate="kick"
                exit="auto"
                initial="auto"
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut'
                }}
                variants={{
                  auto: { width: 'auto' },
                  kick: { width: 'auto' }
                }}>
                <AnimatePresence mode="wait">
                  <m.div
                    key="hero-section-title"
                    animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                    initial={{
                      filter: 'blur(16px)',
                      opacity: 0,
                      x: 15 + 1 * 2
                    }}
                    transition={{
                      bounce: 0,
                      delay: 0.01 * 10,
                      duration: 0.8 + 0.1 * 8,
                      type: 'spring'
                    }}>
                    <p {...getSuperTitleProps()}>{super_title}</p>
                    <p {...getTitleProps()}>{title}</p>
                  </m.div>

                  <m.div
                    key="hero-section-description"
                    animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                    initial={{
                      filter: 'blur(16px)',
                      opacity: 0,
                      x: 15 + 1 * 3
                    }}
                    transition={{
                      bounce: 0,
                      delay: 0.01 * 30,
                      duration: 0.8 + 0.1 * 9,
                      type: 'spring'
                    }}>
                    <p {...getDescriptionProps()}>{description}</p>
                  </m.div>
                  <m.div
                    key="hero-section-buttons"
                    animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                    initial={{
                      filter: 'blur(16px)',
                      opacity: 0,
                      x: 15 + 1 * 4
                    }}
                    transition={{
                      bounce: 0,
                      delay: 0.01 * 50,
                      duration: 0.8 + 0.1 * 10,
                      type: 'spring'
                    }}>
                    <div {...getFooterProps()}>
                      {actions?.trial?.placeholder && (
                        <Button
                          as={Link}
                          href={actions?.trial?.href}
                          color="warning">
                          {actions.trial.placeholder}
                        </Button>
                      )}

                      {actions?.submit?.label && (
                        <Button
                          color="default"
                          variant="faded"
                          onClick={() => {
                            if (actions?.submit?.href) {
                              router.navigate({ to: actions.submit.href })
                            } else {
                              onOpen()
                            }
                          }}>
                          {actions.submit.label}
                        </Button>
                      )}
                    </div>
                  </m.div>
                </AnimatePresence>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </Component>
      <div>
        <Shortcut onOpen={onOpen} shortcuts={shortcuts} />
      </div>
      <Modal
        ref={targetRef}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        placement="top-center"
        scrollBehavior="inside"
        size="sm"
        classNames={{
          backdrop:
            'bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20'
        }}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader {...moveProps} className="flex flex-col gap-1">
                Request Demo
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                <Input
                  label="Company Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <MailIcon className="text-default-400 pointer-events-none shrink-0 text-2xl" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  label="Phone"
                  placeholder="Enter your number"
                  variant="bordered"
                />
                <Input
                  label="Country"
                  placeholder="Enter your country"
                  variant="bordered"
                />
                <Textarea />

                <div className="flex justify-between px-1 py-2">
                  <Checkbox
                    classNames={{
                      label: 'text-small'
                    }}>
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="w-full" color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
})

HomeSection.displayName = 'HomeSection'

export { HomeSection }
