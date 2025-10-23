// components/footer/footer.data.ts
import { Icon } from '@iconify/react'
import React from 'react'

import type { FooterNavigation, SocialIconProps } from './types'

export const footerNavigation: FooterNavigation = {
  services: [
    { name: 'Branding', href: '#' },
    { name: 'Market Research', href: '#' },
    { name: 'Cloud Transformation', href: '#' },
    { name: 'IT Consulting', href: '#' },
    { name: 'Software Development', href: '#' },
    { name: 'Data Analysis & AI', href: '#' },
    { name: 'Cybersecurity', href: '#' },
    { name: 'E-commerce Solutions', href: '#' }
  ],

  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Webinars', href: '#' }
  ],

  aboutUs: [
    { name: 'Our Story', href: '#' },
    { name: 'Why Choose Us', href: '#stats' },
    { name: 'Clients', href: '#our-clients' },
    { name: 'Latest News', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Media Enquiries', href: '#' },
    { name: 'Collaborations', href: '#' },
    { name: 'Contact Us', href: '/contact' }
  ],

  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'User Agreement', href: '#' }
  ],

  // ✅ Fixed `social` section
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:linkedin" />
      )
    },
    {
      name: 'X',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="prime:twitter" />
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:facebook" />
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:instagram" />
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:github" />
      )
    }
  ]
}
