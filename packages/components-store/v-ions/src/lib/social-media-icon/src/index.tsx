// import {
//   AppIcon,
//   QuestionMarkIcon,
//   SmFacebookIcon,
//   SmInstagramIcon,
//   SmLinkedinIcon,
//   SmMailIcon,
//   SmTwitterIcon,
//   SmWhatsappIcon
// } from '@vezham/icons'
// import { Platform } from '@vx/shared-types'
// import { forwardRef } from '@vezham/react-utils'
// import { Props, useProps } from './types'
// const config: { [x: Platform]: any } = {
//   mail: SmMailIcon,
//   linkedin: SmLinkedinIcon,
//   x: SmTwitterIcon,
//   twitter: SmTwitterIcon,
//   facebook: SmFacebookIcon,
//   instagram: SmInstagramIcon,
//   whatsapp: SmWhatsappIcon,
//   clipboard: AppIcon,
//   share_link: AppIcon
// }
// const SocialMediaIcon = forwardRef<'div', Props>((props, ref) => {
//   const { getBaseProps, handler } = useProps({
//     ...props,
//     ref
//   })
//   const Icon = config[handler.name] || QuestionMarkIcon
//   return <Icon {...getBaseProps()} />
// })
// SocialMediaIcon.displayName = 'SocialMediaIcon'
// export { SocialMediaIcon }
import {
  Copy,
  Facebook,
  HelpCircle,
  Instagram,
  Link,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter
} from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { Platform } from '@vx/shared-types'

import { Props, useProps } from './types'

const config: { [x: Platform]: any } = {
  mail: Mail,
  linkedin: Linkedin,
  x: Twitter,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: MessageCircle,
  clipboard: Copy,
  share_link: Link
}

const SocialMediaIcon = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps, handler } = useProps({
    ...props,
    ref
  })

  const Icon = config[handler.name] || HelpCircle

  return <Icon {...getBaseProps()} />
})

SocialMediaIcon.displayName = 'SocialMediaIcon'

export { SocialMediaIcon }
