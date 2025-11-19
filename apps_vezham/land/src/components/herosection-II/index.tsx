import { Link } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'

import { Button, Chip } from '@vx-oss/react'

import { Props, useProps } from './types'

const HomeSection = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getTitleProps,
    getSubTitleProps,
    getSuperTitleProps,
    getWrapperProps,
    getDescriptionProps,
    getFooterProps,
    getContentProps,
    children,
    actions,
    super_title,
    title,
    subtitle,
    chip_label,
    description,
    cover
  } = useProps({
    ...props,
    ref
  })

  const CheckIcon = () => {
    return (
      <svg
        fill="none"
        height={16}
        viewBox="0 0 24 24"
        width={16}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <Component
      {...getBaseProps()}
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.8)
    ), url("${cover?.url}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div {...getWrapperProps()}>
        <div {...getContentProps()}>
          <p {...getSuperTitleProps()}>{super_title}</p>

          <p {...getTitleProps()}>{title}</p>
          <p {...getSubTitleProps()}>{subtitle}</p>

          <p {...getDescriptionProps()}>{description}</p>
        </div>

        <div {...getFooterProps()}>
          {/* Show only if placeholder exists */}
          {actions?.trial?.placeholder && (
            <Button as={Link} href="/signup" color="warning">
              {actions.trial.placeholder}
            </Button>
          )}

          {/* Show only if label exists */}
          {actions?.submit?.label && (
            <Button color="default" variant="faded">
              {actions.submit.label}
            </Button>
          )}
        </div>
      </div>
    </Component>
  )
})

HomeSection.displayName = 'HomeSection'

export { HomeSection }
