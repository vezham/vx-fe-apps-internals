'use client'

import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import React from 'react'

import { Accordion, AccordionItem, Button } from '@vx-oss/react'

import { FAQsCompProps, useFAQsProps } from './types'

const FAQs = React.forwardRef<HTMLDivElement, FAQsCompProps>((props, ref) => {
  const {
    getBaseProps,
    getContainerProps,
    getTitleProps,
    getMobileTitleProps,
    getDesktopTitleProps,
    getAccordionProps,
    getAccordionItemProps,
    getAccordionIndicatorProps
  } = useFAQsProps({
    ...props,
    ref
  })

  const defaultFaqs = [
    {
      title: 'What is Vezham?',
      content:
        'Strong presence in IT Services and IT Consulting. Our company is built with individuals who are passionate, highly qualified, and experienced professionals who believe in developing true partnerships. We provide exceptional services with a passion that creates tremendous value for our customers.'
    },
    {
      title: 'Why Choose us?',
      content:
        'Transparent pricing, Professional & Experienced, Reliable & Trustable.'
    },
    {
      title: 'Can I use Vezham for my freelance projects?',
      content:
        'Yes, you can use vezham for your freelance projects. You can purchase the Freelancer License from our website.'
    },
    {
      title: 'What is your refund policy?',
      content:
        'We do not provide refunds. However, we can help you with any issues you may have.'
    },
    {
      title: 'Can I cancel my subscription?',
      content: 'Yes, you can cancel and renew your subscription at any time.'
    }
  ]

  const faqs = props.faqs || defaultFaqs
  const router = useRouter()

  return (
    <section {...getBaseProps()}>
      <div {...getContainerProps()}>
        <h2 {...getTitleProps()}>
          <span {...getMobileTitleProps()}>FAQs</span>
          <span {...getDesktopTitleProps()}>Frequently asked questions</span>
        </h2>
        <div>
          <Button
            disableAnimation
            endContent={<Icon icon="lucide:chevron-right" width={24} />}
            size="md"
            variant="shadow"
            onPress={() =>
              router.navigate({ to: '/vezham/resources/support' })
            }>
            Support Desk
          </Button>
        </div>
        <Accordion
          {...getAccordionProps()}
          items={faqs}
          selectionMode="multiple"
          variant="splitted">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              {...getAccordionItemProps()}
              indicator={
                <Icon
                  {...getAccordionIndicatorProps()}
                  icon="solar:alt-arrow-down-linear"
                />
              }
              title={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
})

FAQs.displayName = 'FAQs'

export { FAQs }
