// import { useNavigate, useParams } from '@tanstack/react-router'
// import { BreadcrumbItem, Breadcrumbs } from '@vx-oss/breadcrumbs'
// import { HomeIcon } from '@vezham/icons'
// import { SectionContainer } from '../../../layout/section-container'
// import { useEditorials } from '../../../store/useEditorials'
// const Header = () => {
//   const navigate = useNavigate()
//   const Editorials_id = useParams({
//     from: '/editorials/$editorials_id/',
//     select: params => params.editorials_id
//   })
//   const { data: editorials } = useEditorials.get({ api_handle: Editorials_id })
//   return (
//     <SectionContainer className="flex flex-col gap-4 pb-0">
//       <Breadcrumbs
//         separator="/"
//         itemClasses={{
//           separator: 'px-2'
//         }}>
//         <BreadcrumbItem
//           startContent={
//             <HomeIcon
//               size="sm"
//               hover_effect="glow"
//               onClick={() => {
//                 navigate({ to: '/' })
//               }}
//             />
//           }
//           children={''}
//         />
//         <BreadcrumbItem>{editorials?.label}</BreadcrumbItem>
//       </Breadcrumbs>
//     </SectionContainer>
//   )
// }
// export { Header }
import { useNavigate, useParams } from '@tanstack/react-router'
import { Home } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { BreadcrumbItem, Breadcrumbs } from '@vx-oss/breadcrumbs'

import { SectionContainer } from '../../../layout/section-container'
import { useEditorials } from '../../../store/useEditorials'
import { Props, useProps } from './types'

const Header = forwardRef<'div', Props>((props, ref) => {
  const navigate = useNavigate()
  const Editorials_id = useParams({
    from: '/editorials/$editorials_id/',
    select: params => params.editorials_id
  })
  const { data: editorials } = useEditorials.get({ api_handle: Editorials_id })

  const {
    getBaseProps,
    getBreadcrumbsProps,
    getHomeIconProps,
    onHomePress = () => navigate({ to: '/' })
  } = useProps({
    ...props,
    ref
  })

  return (
    <SectionContainer {...getBaseProps()}>
      <Breadcrumbs {...getBreadcrumbsProps()}>
        <BreadcrumbItem
          startContent={<Home {...getHomeIconProps()} onClick={onHomePress} />}
          children={''}
        />
        <BreadcrumbItem>{editorials?.label}</BreadcrumbItem>
      </Breadcrumbs>
    </SectionContainer>
  )
})

Header.displayName = 'Header'

export { Header }
