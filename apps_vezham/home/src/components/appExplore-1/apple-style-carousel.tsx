import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import { Button, Image } from '@vx-oss/react'

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

export const AppleStyleCarousel: React.FC<{
  items: CardProps[]
  initialScroll?: number
}> = ({ items, initialScroll = 0 }) => {
  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full">
      {/* Controls */}
      <div className="flex items-center justify-end gap-4 pb-4">
        <div className="flex gap-6">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`z-10 flex h-[36px] w-[36px] items-center justify-center rounded-full ${canScrollLeft ? 'bg-default-500/30' : ''}`}>
            <Icon icon="lucide:chevron-left" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`z-10 flex h-[36px] w-[36px] items-center justify-center rounded-full ${canScrollRight ? 'bg-default-500/30' : ''}`}>
            <Icon icon="lucide:chevron-right" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className="flex w-full cursor-pointer snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
        style={{
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        {items.map((item, index) => {
          const handleViewDetails = () => {
            const targetId = item.id || item.app?.id
            if (!targetId) {
              console.warn(
                'Cannot navigate: App ID missing for item:',
                item.title
              )
              return
            }
            router.navigate({
              to: '/apps/$appExploreId',
              params: { appExploreId: targetId }
            })
            console.log(targetId)
          }

          return (
            <motion.div
              key={index}
              className="group relative z-10 flex h-[30rem] w-[18rem] flex-none snap-start flex-col items-start justify-start overflow-hidden rounded-3xl transition-transform duration-300 lg:h-[40rem] lg:w-96">
              {/* gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full" />

              {/* content */}
              <div
                className="relative z-40 flex h-full w-full flex-col p-6"
                style={{
                  fontFamily:
                    'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
                }}>
                <div className="mb-3 flex items-center gap-3">
                  <div className={`rounded-lg backdrop-blur-md ${item.color}`}>
                    <Image src={item.icon} className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="max-w-xs text-left text-[21px] font-semibold text-white md:text-[24px] lg:text-[28px]">
                    {item.title}
                  </h3>
                </div>

                {/* description */}
                <p className="mb-3 text-[14px] text-white md:text-[17px]">
                  {item.description}
                </p>

                {/* buttons */}
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

                {/* footer label */}
                <div className="absolute bottom-8 left-8 z-50 flex flex-col items-start">
                  <p className="text-[14px] font-semibold text-white/90">
                    Apps
                  </p>
                  <p className="text-[14px] font-medium text-white/90">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* image (hover zoom works) */}
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
}
