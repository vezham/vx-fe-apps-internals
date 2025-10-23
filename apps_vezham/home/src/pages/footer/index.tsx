import { Component } from '../../components/footer'
import { footerNavigation } from '../../components/footer/data'

const Footer = () => {
  return (
    <>
      {/* Other page content */}
      <Component footerNavigation={footerNavigation} />
    </>
  )
}

export { Footer }
