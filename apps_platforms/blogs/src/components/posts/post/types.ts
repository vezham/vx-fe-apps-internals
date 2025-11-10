import {
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Author {
  name: string[]
  image_url: string[]
  company: string
  designation: string
}

interface Tag {
  id: string
  name: string
  color: string
}

interface Article {
  title: string
  description: string
  cover: {
    alt_text: string
    url: string
  }
  tags: Tag[]
  authors: Array<{
    name: string
    avatar: {
      url: string
    }
  }>
  blocks: Array<{
    text: string
  }>
}

interface Props extends tvProps, v0xdsHTMLProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  slugId?: string
  article?: Article
  platforms?: string[]
  ratio?: number
  onTagClick?: (tag: Tag) => void
  onHomePress?: () => void
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    slugId,
    article,
    platforms = [
      'linkedin',
      'twitter',
      'facebook',
      'instagram',
      'whatsapp',
      'mail'
    ],
    ratio = 16 / 8,
    onTagClick,
    onHomePress,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getImageProps: PropGetter = () => ({
    className: slots.image({ class: classNames?.image })
  })

  const getContentProps: PropGetter = () => ({
    className: slots.content({ class: classNames?.content })
  })

  const getFooterWrapperProps: PropGetter = () => ({
    className: slots.footerWrapper({ class: classNames?.footerWrapper })
  })

  const getTagsContainerProps: PropGetter = () => ({
    className: slots.tagsContainer({ class: classNames?.tagsContainer })
  })

  const getChipProps: PropGetter = () => ({
    className: slots.chip({ class: classNames?.chip })
  })

  const getDividerProps: PropGetter = () => ({
    className: slots.divider({ class: classNames?.divider })
  })

  const getPeopleVcardProps: PropGetter = () => ({
    className: slots.peopleVcard({ class: classNames?.peopleVcard })
  })

  const getFeedbackRatingProps: PropGetter = () => ({
    className: slots.feedbackRating({ class: classNames?.feedbackRating })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getImageProps,
    getContentProps,
    getFooterWrapperProps,
    getTagsContainerProps,
    getChipProps,
    getDividerProps,
    getPeopleVcardProps,
    getFeedbackRatingProps,
    slugId,
    article,
    platforms,
    ratio,
    onTagClick,
    onHomePress
  }
}

export { useProps }
export type { Props, Author, Tag, Article }
