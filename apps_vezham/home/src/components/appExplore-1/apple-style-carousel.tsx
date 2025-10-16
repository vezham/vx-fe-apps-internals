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
  category: string
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
      <div className="flex items-center justify-end gap-4 pr-4 pb-4">
        <div className="flex gap-6">
          <Button
            isIconOnly
            variant="light"
            onPress={scrollLeft}
            isDisabled={!canScrollLeft}
            className={`z-10 ${canScrollLeft ? 'bg-default-500/30' : ''}`}
            radius="full">
            <Icon icon="lucide:arrow-left" className="h-6 w-6" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            onPress={scrollRight}
            isDisabled={!canScrollRight}
            className={`z-10 ${canScrollRight ? 'bg-default-500/30' : ''}`}
            radius="full">
            <Icon icon="lucide:arrow-right" className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
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
              to: '/apps/$appsId',
              params: { appsId: targetId }
            })
          }

          return (
            <motion.div
              key={index}
              className="group relative z-10 flex h-[30rem] w-[18rem] flex-none snap-start flex-col items-start justify-start overflow-hidden rounded-3xl transition-transform duration-300 lg:h-[40rem] lg:w-96"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1.5rem'
              }}>
              {/* gradient overlay */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25), transparent)'
                }}
              />

              {/* content */}
              <div className="relative z-40 flex h-full w-full flex-col p-8">
                <p className="mb-3 text-left text-sm font-medium text-white md:text-base">
                  {item.category}
                </p>

                {/* icon + title */}
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`rounded-lg p-2 backdrop-blur-md ${
                      item.color || 'bg-white/20'
                    }`}>
                    <Icon icon={item.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="max-w-xs text-left text-xl font-semibold text-white md:text-3xl">
                    {item.title}
                  </div>
                </div>

                {/* description */}
                <p className="text-md mb-5 text-white md:text-xl">
                  {item.description}
                </p>

                {/* buttons */}
                <div className="mb-auto flex items-center gap-4">
                  <button
                    onClick={item.onPress}
                    className="rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-black hover:bg-white">
                    Open
                  </button>
                  <button
                    onClick={handleViewDetails}
                    className="hover:text-primary flex items-center text-sm text-white">
                    Learn more
                    <Icon
                      icon="lucide:chevron-right"
                      className="ml-1"
                      width={16}
                    />
                  </button>
                </div>

                {/* footer label */}
                <div className="absolute bottom-8 left-8 z-50 flex flex-col items-start">
                  <p className="text-sm font-medium text-white/90">Apps</p>
                  <p className="text-md font-semibold text-white/90">
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
