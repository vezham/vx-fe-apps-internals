import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import { Image } from '@vx-oss/react'

import { AppDetail } from './types'

interface CardProps {
  id?: string
  title: string
  icon: string
  color?: string
  description: string
  image: string
  content?: React.ReactNode
  app?: AppDetail | null
  onPress?: () => void
}

export interface AppleStyleCarouselRef {
  scrollLeft: () => void
  scrollRight: () => void
  canScrollLeft: boolean
  canScrollRight: boolean
}

export const AppleStyleCarousel = forwardRef<
  AppleStyleCarouselRef,
  { items: CardProps[]; initialScroll?: number }
>(({ items, initialScroll = 0 }, ref) => {
  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      setTimeout(checkScrollability, 400)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      setTimeout(checkScrollability, 400)
    }
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
    <div className="relative w-full">
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className="flex w-full cursor-pointer snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6"
        style={{
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        {items.map((item, index) => {
          const handleViewDetails = () => {
            const targetId = item.id || item.app?.id
            if (!targetId) return
            router.navigate({
              to: '/apps/$appExploreId',
              params: { appExploreId: targetId }
            })
          }

          return (
            <motion.div
              key={index}
              className="group relative z-10 flex h-[30rem] w-[18rem] flex-none snap-start flex-col items-start justify-start overflow-hidden rounded-3xl transition-transform duration-300 lg:h-[40rem] lg:w-96">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/90 via-black/25 to-transparent" />
              <div
                className="relative z-40 flex h-full w-full flex-col pt-[25px] pr-[19px] pb-[435px] pl-[25px]"
                style={{
                  fontFamily:
                    'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
                }}>
                <div className="ml-[-11px] flex items-center">
                  <Image src={item.icon} className="h-18 w-18" />
                  <h3
                    className="text-[21px] text-white md:text-[24px] lg:text-[28px]"
                    style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                </div>

                <p
                  className="mb-3 text-[14px] text-white md:text-[17px]"
                  style={{ fontWeight: 400 }}>
                  {item.description}
                </p>

                <div className="mb-auto flex items-center gap-4">
                  <button
                    onClick={item.onPress}
                    className="cursor-pointer rounded-full bg-white/90 px-2.5 py-0.75 text-[12px] font-medium text-black hover:bg-white">
                    Open
                  </button>
                  <button
                    onClick={handleViewDetails}
                    className="hover:text-primary flex cursor-pointer items-center text-[14px] text-white">
                    Learn more
                    <Icon
                      icon="lucide:chevron-right"
                      className="ml-1"
                      width={15}
                    />
                  </button>
                </div>

                <div className="absolute bottom-[25px] z-50 flex flex-col items-start">
                  <p className="text-[14px] font-semibold text-white/90">
                    Compatibility
                  </p>
                  <p
                    className="text-[14px] text-white/90"
                    style={{ fontWeight: 400 }}>
                    {item.app?.footerItems}
                  </p>
                </div>
              </div>

              <Image
                removeWrapper
                src={item.image}
                alt={item.title}
                className="absolute inset-0 z-10 h-full w-full transform bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
})
AppleStyleCarousel.displayName = 'AppleStyleCarousel'
