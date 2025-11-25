import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React from 'react'

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Link
} from '@vx-oss/react'

import { useResources } from '../../../store/useResources'
import { ContactusCompProps, useContactusProps } from './types'

const Contactus = React.forwardRef<HTMLDivElement, ContactusCompProps>(
  (props, ref) => {
    const {
      getBaseProps,
      getLeftColumnProps,
      getLeftColumnLinkProps,
      getLeftColumnTitleProps,
      getLeftColumnDescriptionProps,
      getRightColumnProps,
      getCardsContainerProps,
      getCardColumnProps,
      getCardProps,
      getCardBodyProps,
      getCardTitleProps,
      getCardDescriptionProps,
      getCardFooterProps,
      getCardButtonProps
    } = useContactusProps({
      ...props,
      ref
    })

    const router = useRouter()

    const { data: contact1 } = useResources.cardlist1({})
    const { data: contact2 } = useResources.cardlist2({})

    const contactCards1 = contact1 ?? []
    const contactCards2 = contact2 ?? []

    return (
      <div {...getBaseProps()}>
        {/* Left Column (Sticky) */}
        <div {...getLeftColumnProps()}>
          <div>
            <p {...getLeftColumnTitleProps()}>Resources</p>
            <p {...getLeftColumnDescriptionProps()}>
              Get in touch with the right people. We're here to help 24/7 with
              any stage of your business journey.
            </p>
            <div className="mt-4 text-center">
              <Button
                variant="flat"
                className="w-full"
                onPress={() => router.navigate({ to: '/vezham/resources' })}
                endContent={
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}>
                    <Icon icon="lucide:arrow-right" />
                  </motion.div>
                }>
                Explore
              </Button>
            </div>
          </div>

          <div>
            <Accordion defaultExpandedKeys={['1']}>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What is Help Center?">
                Self-service support system that provides assistance to users.
                It can be found inside one’s app and include how-to articles,
                frequently asked questions, video tutorials, and more. The
                primary purpose of a help center is to provide users with
                on-demand support in an effort to create a positive customer
                experience.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Why Support ?">
                We offer a full range of support options that provide
                flexibility for customers who need dedicated resources to manage
                their support requests.
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Right Column (Scrollable cards) */}
        <div {...getRightColumnProps()}>
          <div {...getCardsContainerProps()}>
            <div {...getCardColumnProps()}>
              {contactCards1.map((card, index) => (
                <Card
                  key={index}
                  {...getCardProps({
                    backgroundUrl: card.url
                  })}>
                  <CardBody {...getCardBodyProps()}>
                    <h3 {...getCardTitleProps()}>{card.title}</h3>
                    <p {...getCardDescriptionProps()}>{card.description}</p>
                  </CardBody>
                  <CardFooter {...getCardFooterProps()}>
                    <Button
                      {...getCardButtonProps({ color: card.color })}
                      variant="flat">
                      {card.button}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Second Split - 4 Cards */}
            <div {...getCardColumnProps()}>
              {contactCards2.map((card, index) => (
                <Card
                  key={index}
                  {...getCardProps({
                    backgroundUrl: card.url
                  })}>
                  <CardBody {...getCardBodyProps()}>
                    <h3 {...getCardTitleProps()}>{card.title}</h3>
                    <p {...getCardDescriptionProps()}>{card.description}</p>
                  </CardBody>
                  <CardFooter {...getCardFooterProps()}>
                    <Button
                      {...getCardButtonProps({ color: card.color })}
                      variant="flat">
                      {card.button}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
)

Contactus.displayName = 'Contactus'

export { Contactus }
