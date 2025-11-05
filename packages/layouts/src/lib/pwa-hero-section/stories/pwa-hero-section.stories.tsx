import { Meta } from '@storybook/react'

import { Button } from '@vezham/button'

import { PwaHeroSection } from '../src'

export default {
  title: 'Layouts/PwaHeroSection',
  tags: ['!autodocs'],
  component: PwaHeroSection,
  argTypes: {}
} as Meta<typeof PwaHeroSection>

const defaultProps = {}

const Template = (props: any) => {
  const data = {
    // super_title: (
    //   <div className="hidden sm:mb-8 sm:flex sm:justify-center">
    //     <div className="vc-text text-primary-foreground ring-default-foreground/10 hover:ring-default-foreground/20 relative rounded-full px-3 py-1 text-sm leading-6 ring-1">
    //       Announcing our next round of funding.{' '}
    //       <a href="#" className="vc-text text-primary-foreground font-semibold">
    //         <span className="absolute inset-0" aria-hidden="true" />
    //         Read more <span aria-hidden="true">&rarr;</span>
    //       </a>
    //     </div>
    //   </div>
    // ),
    super_title: "What's New",
    title: 'Latest Updates',
    description:
      'All the latest Features, Fixes & Improvements straight from the team.'
  }

  return (
    <PwaHeroSection
      {...data}
      {...props}
      // super_title={<AppIcon size="xl" />}
      // description={
      //   <>
      //     <p className="mt-4 text-lg text-default-600 dark:text-default-400">
      //       Well not quite <em>anything</em>, like you can't build a spaceship
      //       with it. But you can definitely build the website for the
      //       spaceship —{' '}
      //       <Link
      //         href="/showcase/nasa"
      //         className="border-b border-sky-300 font-semibold text-gray-900 hover:border-b-2 dark:border-sky-400 dark:text-white">
      //         NASA did
      //       </Link>
      //       .
      //     </p>
      //   </>
      // }
      bg_effect="faded">
      <Button variant="solid" radius="lg" color="primary">
        Release Notes
      </Button>
      <Button variant="faded" radius="lg">
        Roadmap
      </Button>
    </PwaHeroSection>
  )
}

export const Preview = {
  render: Template,
  args: {
    ...defaultProps
  }
}
