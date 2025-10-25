import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import { Image } from '@vx-oss/react'

import {
  AppleStyleCarouselProps,
  AppleStyleCarouselRef,
  useProps
} from './types'

export const AppleStyleCarousel = forwardRef<
  AppleStyleCarouselRef,
  AppleStyleCarouselProps
>((props, ref) => {
  const {
    items,
    initialScroll = 0,
    navigateBasePath,
    getBaseProps,
    getScrollContainerProps,
    getCardProps,
    getOverlayProps,
    getContentWrapperProps,
    getHeaderWrapperProps,
    getHeaderTitleProps,
    getDescriptionProps,
    getButtonGroupProps,
    getOpenButtonProps,
    getLearnMoreButtonProps,
    getFooterWrapperProps,
    getFooterTitleProps,
    getFooterIconsProps,
    getMainImageProps
  } = useProps(props)

  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2)
  }

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    setTimeout(checkScrollability, 400)
  }

  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    setTimeout(checkScrollability, 400)
  }

  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  useImperativeHandle(ref, () => ({
    scrollLeft,
    scrollRight,
    canScrollLeft,
    canScrollRight
  }))

  return (
    <div {...getBaseProps()}>
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        {...getScrollContainerProps()}>
        {items.map((item, index) => {
          const targetId = item.id || item.app?.id

          const handleViewDetails = () => {
            if (!targetId) return

            const normalizedPath = navigateBasePath.startsWith('/')
              ? navigateBasePath
              : `/${navigateBasePath}`

            router.navigate({
              to: `${normalizedPath}/$appExploreId`,
              params: { appExploreId: targetId }
            })
          }

          return (
            <motion.div key={index} {...getCardProps()}>
              <div {...getOverlayProps()} />
              <div {...getContentWrapperProps()}>
                <div {...getHeaderWrapperProps()}>
                  <Image src={item.icon} className="h-18 w-18" />
                  <h3 {...getHeaderTitleProps()}>{item.title}</h3>
                </div>

                <p {...getDescriptionProps()}>{item.description}</p>

                <div {...getButtonGroupProps()}>
                  <button onClick={item.onPress} {...getOpenButtonProps()}>
                    Open
                  </button>
                  <button
                    onClick={handleViewDetails}
                    {...getLearnMoreButtonProps()}>
                    Learn more{' '}
                    <Icon
                      icon="lucide:chevron-right"
                      className="ml-1"
                      width={15}
                    />
                  </button>
                </div>

                <div {...getFooterWrapperProps()}>
                  <p {...getFooterTitleProps()}>Compatibility</p>
                  <p {...getFooterIconsProps()}>
                    {item.app?.footerItems?.map((iconName, idx) => (
                      <Icon
                        key={idx}
                        icon={iconName.icon}
                        className="h-6 w-6"
                      />
                    ))}
                  </p>
                </div>
              </div>

              <Image
                removeWrapper
                src={item.image}
                alt={item.title}
                {...getMainImageProps()}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
})

AppleStyleCarousel.displayName = 'AppleStyleCarousel'
