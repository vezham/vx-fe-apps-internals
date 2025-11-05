import { Meta } from '@storybook/react'

import { Text } from '../src'
import { tva } from '../src/variant'

export default {
  title: 'V Atoms/Text',
  component: Text,
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof Text>

const defaultProps = {
  ...tva.defaultVariants,
  content: 'Hello World!...'
}

export const Default = {
  args: {
    ...defaultProps
  }
}
