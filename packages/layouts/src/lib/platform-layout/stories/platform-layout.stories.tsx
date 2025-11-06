import { Meta } from '@storybook/react'

import { AutoLayout } from '../../v-auto-layout/src'
import { PlatformLayout } from '../src'

export default {
  title: 'Layouts/Platform/Layout',
  tags: ['!autodocs'],
  component: PlatformLayout,
  argTypes: {}
} as Meta<typeof PlatformLayout>

const defaultProps = {}

const Template = (props: any) => {
  return (
    <PlatformLayout
      {...props}
      className="border-success bg-stripes stripes-default border">
      <AutoLayout className="grid grid-cols-3 gap-4 text-center font-mono text-sm leading-6 font-bold text-white">
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          01
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          02
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          03
        </div>
        <div className="bg-primary text-primary-foreground col-span-2 rounded-lg p-4 shadow-lg">
          04
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          05
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          06
        </div>
        <div className="bg-primary text-primary-foreground col-span-2 rounded-lg p-4 shadow-lg">
          07
        </div>
        <div className="bg-warning text-warning-foreground rounded-lg p-4">
          08
        </div>
        <div className="bg-warning text-warning-foreground rounded-lg p-4">
          09
        </div>
        <div className="bg-warning text-warning-foreground rounded-lg p-4">
          10
        </div>
      </AutoLayout>
    </PlatformLayout>
  )
}

export const Preview = {
  render: Template,
  args: {
    ...defaultProps
  }
}
