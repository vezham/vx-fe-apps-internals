import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { TextAreaProps } from '@vx-oss/react'

import { tvProps, tvSlots, tva } from './variant'

interface PromptSuggestion {
  id: string
  label: string
  icon: string
}

interface TabItem {
  key: string
  label: string
  icon?: string
  href?: string
  subItems?: Array<{
    key: string
    label: string
    description: string
    href: string
  }>
}

interface PromptInputAssetsProps {
  assets: string[]
  onRemoveAsset: (index: number) => void
}

interface PromptInputProps extends TextAreaProps {
  prompt: string
  setPrompt: React.Dispatch<React.SetStateAction<string>>
}

interface PromptSuggestionsProps {
  onSelect?: (suggestion: PromptSuggestion) => void
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const { as, id, ref, children, className, classNames, ...otherProps } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getResourcesBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.resourcesBase({
      class: cn(classNames?.resourcesBase, className)
    }),
    ...otherProps
  })

  const getResourcesTitleProps: PropGetter = () => ({
    className: slots.resourcesTitle({ class: classNames?.resourcesTitle })
  })

  const getTabProps: PropGetter = () => ({
    className: slots.tab({ class: classNames?.tab })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,

    getResourcesBaseProps,
    getResourcesTitleProps,

    getTabProps
  }
}

export { useProps }
export type {
  Props,
  PromptSuggestion,
  PromptInputAssetsProps,
  PromptInputProps,
  PromptSuggestionsProps
}
