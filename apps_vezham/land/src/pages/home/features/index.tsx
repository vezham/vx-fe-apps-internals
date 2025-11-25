import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'
import Marquee from 'react-fast-marquee'

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  ScrollShadow
} from '@vx-oss/react'

import { usePersonalize } from '../../../store/useHomeSection'
import { FeaturesCompProps, useFeaturesProps } from './types'

const Features = React.forwardRef<HTMLDivElement, FeaturesCompProps>(
  (props, ref) => {
    const {
      getBaseProps,
      getBackgroundProps,
      getHeaderProps,
      getFeatureTagProps,
      getTitleProps,
      getSubtitleProps,
      getMarqueeContainerProps,
      getScrollShadowProps,
      getMarqueeProps,
      getButtonContainerProps,
      getButtonProps,
      getButtonIconProps,
      getFeatureCardProps,
      getFeatureImageProps,
      getFeatureCardHeaderProps,
      getFeatureCategoryProps,
      getFeatureNameProps,
      getFeatureDescriptionProps,
      getFeatureCardFooterProps,
      getFeatureButtonProps
    } = useFeaturesProps({
      ...props,
      ref
    })

    const { data: personal } = usePersonalize.list({})
    const navigation = personal?.navItems ?? []
    const router = useRouter()

    const navItemsWithSubItems = navigation.filter(
      nav => nav.subItems && nav.subItems.length > 0
    )

    interface FeatureCardProps {
      subitem: any
    }

    const FeatureCard = ({ subitem }: FeatureCardProps) => {
      const item = subitem.Items[0]
      const [hovered, setHovered] = useState(false)

      return (
        <Card
          {...getFeatureCardProps()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <Image
            alt={item.name}
            {...getFeatureImageProps()}
            src={item.detailedItems[0].image}
          />

          <CardHeader {...getFeatureCardHeaderProps()}>
            <p {...getFeatureCategoryProps()}>{subitem.title}</p>
            <h4 {...getFeatureNameProps()}>{item.name}</h4>
            <p {...getFeatureDescriptionProps()}>{item.description}</p>
          </CardHeader>

          <CardFooter
            {...getFeatureCardFooterProps({
              isHovered: hovered
            })}>
            <Button
              {...getFeatureButtonProps()}
              onPress={() => router.navigate({ to: '/vezham/products' })}>
              View
            </Button>
          </CardFooter>
        </Card>
      )
    }

    return (
      <div
        style={{
          backgroundImage: `url("https://www.zoho.com/books/images/home/features/spotlight-bg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div {...getBaseProps()}>
          <div {...getHeaderProps()}>
            <p {...getFeatureTagProps()}>FEATURES</p>
            <div>
              <p {...getTitleProps()}>Products that power growth</p>
              <p {...getSubtitleProps()}>Enrich your plan with more features</p>
            </div>
          </div>

          <div {...getMarqueeContainerProps()}>
            <ScrollShadow {...getScrollShadowProps()}>
              <Marquee {...getMarqueeProps()}>
                {navItemsWithSubItems.map(nav =>
                  nav.subItems?.map(
                    (subitem, index) =>
                      // Only render if subitem has Items and at least one item
                      subitem.Items &&
                      subitem.Items.length > 0 && (
                        <FeatureCard
                          key={`${subitem.title}-${index}`}
                          subitem={subitem}
                        />
                      )
                  )
                )}
              </Marquee>
            </ScrollShadow>
          </div>

          <div {...getButtonContainerProps()}>
            <Button
              {...getButtonProps()}
              onPress={() => router.navigate({ to: '/vezham/products' })}
              endContent={
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}>
                  <Icon {...getButtonIconProps()} icon="lucide:arrow-right" />
                </motion.div>
              }>
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    )
  }
)

Features.displayName = 'Features'

export { Features }
