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

  const getSuggestionsBaseProps: PropGetter = () => ({
    className: slots.suggestionsBase({ class: classNames?.suggestionsBase })
  })

  const getSuggestionButtonProps: PropGetter = () => ({
    className: slots.suggestionButton({ class: classNames?.suggestionButton })
  })

  const getSuggestionButtonIconProps: PropGetter = () => ({
    className: slots.suggestionButtonIcon({
      class: classNames?.suggestionButtonIcon
    })
  })

  const getPromptInputFullLineBaseProps: PropGetter = () => ({
    className: slots.promptInputFullLineBase({
      class: classNames?.promptInputFullLineBase
    })
  })

  const getAssetsContainerProps: PropGetter = (hasAssets: boolean) => ({
    className: slots.assetsContainer({
      class: cn(
        hasAssets && slots.assetsContainerWithAssets(),
        classNames?.assetsContainer
      )
    })
  })

  const getInputWrapperProps: PropGetter = () => ({
    className: slots.inputWrapper({ class: classNames?.inputWrapper })
  })

  const getInputProps: PropGetter = () => ({
    className: slots.input({ class: classNames?.input })
  })

  const getInnerWrapperProps: PropGetter = () => ({
    className: slots.innerWrapper({ class: classNames?.innerWrapper })
  })

  const getBottomBarProps: PropGetter = () => ({
    className: slots.bottomBar({ class: classNames?.bottomBar })
  })

  const getFileButtonProps: PropGetter = () => ({
    className: slots.fileButton({ class: classNames?.fileButton })
  })

  const getSubmitButtonProps: PropGetter = () => ({
    className: slots.submitButton({ class: classNames?.submitButton })
  })

  const getSubmitButtonIconProps: PropGetter = (isEnabled: boolean) => ({
    className: slots.submitButtonIcon({
      class: cn(
        isEnabled ? slots.submitButtonEnabled() : slots.submitButtonDisabled(),
        classNames?.submitButtonIcon
      )
    })
  })

  const getBadgeProps: PropGetter = () => ({
    className: slots.badge({ class: classNames?.badge })
  })

  const getBadgeButtonProps: PropGetter = () => ({
    className: slots.badgeButton({ class: classNames?.badgeButton })
  })

  const getImageProps: PropGetter = () => ({
    className: slots.image({ class: classNames?.image })
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
    getSuggestionsBaseProps,
    getSuggestionButtonProps,
    getSuggestionButtonIconProps,
    getPromptInputFullLineBaseProps,
    getAssetsContainerProps,
    getInputWrapperProps,
    getInputProps,
    getInnerWrapperProps,
    getBottomBarProps,
    getFileButtonProps,
    getSubmitButtonProps,
    getSubmitButtonIconProps,
    getBadgeProps,
    getBadgeButtonProps,
    getImageProps,
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
