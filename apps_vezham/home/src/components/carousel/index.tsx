import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
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
  CardProps
} from './types'
import { styles } from './variant'

export const AppleStyleCarousel = forwardRef<
  AppleStyleCarouselRef,
  AppleStyleCarouselProps
>(({ items, initialScroll = 0, navigateBasePath }, ref) => {
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
    <div className={styles.container}>
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className={styles.scrollContainer}
        style={{
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        {items.map((item, index) => {
          const targetId = item.id || item.app?.id

          const handleViewDetails = () => {
            if (!targetId) return

            const normalizedPath = navigateBasePath.startsWith('/')
              ? navigateBasePath
              : ''

            router.navigate({
              to: `${normalizedPath}/$appExploreId`,
              params: { appExploreId: targetId }
            })
          }

          return (
            <motion.div key={index} className={styles.card}>
              <div className={styles.overlay} />
              <div className={styles.contentWrapper}>
                <div className={styles.headerWrapper}>
                  <Image src={item.icon} className="h-18 w-18" />
                  <h3 className={styles.headerTitle}>{item.title}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>

                <div className={styles.buttonGroup}>
                  <button onClick={item.onPress} className={styles.openButton}>
                    Open
                  </button>
                  <button
                    onClick={handleViewDetails}
                    className={styles.learnMoreButton}>
                    Learn more{' '}
                    <Icon
                      icon="lucide:chevron-right"
                      className="ml-1"
                      width={15}
                    />
                  </button>
                </div>

                <div className={styles.footerWrapper}>
                  <p className={styles.footerTitle}>Compatibility</p>
                  <p className={styles.footerIcons}>
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
                className={styles.mainImage}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
})

AppleStyleCarousel.displayName = 'AppleStyleCarousel'
