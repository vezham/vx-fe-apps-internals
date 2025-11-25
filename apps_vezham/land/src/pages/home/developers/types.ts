import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { DevelopersTvProps, DevelopersTvSlots, developersTva } from './variant'

interface FeatureItem {
  icon: string
  title: string
  subtitle: string
}

interface DevelopersCompProps
  extends DevelopersTvProps,
    HTMLHeroUIProps<'section'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<DevelopersTvSlots>
  features?: FeatureItem[]
  githubUrl?: string
  githubText?: string
}

const useDevelopersProps = (originalProps: DevelopersCompProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    developersTva.variantKeys
  )

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    features,
    githubUrl = 'https://github.com',
    githubText = 'See GitHub repository',
    ...otherProps
  } = props

  const Component = as || 'section'
  const domRef = useDOMRef(ref)
  const slots = developersTva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getContainerProps: PropGetter = () => ({
    className: slots.container({ class: classNames?.container })
  })

  const getTitleProps: PropGetter = () => ({
    className: slots.title({ class: classNames?.title })
  })

  const getGitHubLinkProps: PropGetter = () => ({
    className: slots.githubLink({ class: classNames?.githubLink })
  })

  const getGitHubIconProps: PropGetter = () => ({
    className: slots.githubIcon({ class: classNames?.githubIcon })
  })

  const getGitHubTextProps: PropGetter = () => ({
    className: slots.githubText({ class: classNames?.githubText })
  })

  const getFeaturesGridProps: PropGetter = () => ({
    className: slots.featuresGrid({ class: classNames?.featuresGrid })
  })

  const getFeatureItemProps: PropGetter = () => ({
    className: slots.featureItem({ class: classNames?.featureItem })
  })

  const getFeatureIconProps: PropGetter = () => ({
    className: slots.featureIcon({ class: classNames?.featureIcon })
  })

  const getFeatureTitleProps: PropGetter = () => ({
    className: slots.featureTitle({ class: classNames?.featureTitle })
  })

  const getFeatureSubtitleProps: PropGetter = () => ({
    className: slots.featureSubtitle({ class: classNames?.featureSubtitle })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getContainerProps,
    getTitleProps,
    getGitHubLinkProps,
    getGitHubIconProps,
    getGitHubTextProps,
    getFeaturesGridProps,
    getFeatureItemProps,
    getFeatureIconProps,
    getFeatureTitleProps,
    getFeatureSubtitleProps,
    features,
    githubUrl,
    githubText
  }
}

export { useDevelopersProps }
export type { DevelopersCompProps, FeatureItem }
