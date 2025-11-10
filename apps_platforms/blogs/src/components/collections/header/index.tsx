// import { useNavigate, useParams } from '@tanstack/react-router'
// import { useScrollTo } from '@vx/hooks'
// import { HomeIcon } from '@vezham/icons'
// import { BreadcrumbItem, Breadcrumbs } from '@vx-oss/breadcrumbs'
// import { SectionContainer } from '../../../layout/section-container'
// import { useCollections } from '../../../store/useCollections'
// const Header = () => {
//   const navigate = useNavigate()
//   const { byId } = useScrollTo()
//   const Collection_id = useParams({
//     from: '/collections/$collection_id/',
//     select: params => params.collection_id
//   })
//   const { data: collections } = useCollections.get({
//     api_handle: Collection_id
//   })
//   return (
//     <SectionContainer className="pb-10">
//       <Breadcrumbs>
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
//         <BreadcrumbItem onPress={() => byId('by-collections')}>
//           Collections
//         </BreadcrumbItem>
//         <BreadcrumbItem> {collections?.name} </BreadcrumbItem>
//       </Breadcrumbs>
//     </SectionContainer>
//   )
// }
// export { Header }
import { useParams, useRouter } from '@tanstack/react-router'
import { Home } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { BreadcrumbItem, Breadcrumbs } from '@vx-oss/breadcrumbs'

import { useScrollTo } from '@vx/hooks'

import { SectionContainer } from '../../../layout/section-container'
import { useCollections } from '../../../store/useCollections'
import { Props, useProps } from './types'

const Header = forwardRef<'div', Props>((props, ref) => {
  const router = useRouter()
  const { byId } = useScrollTo()
  const Collection_id = useParams({
    from: '/collections/$collection_id/',
    select: params => params.collection_id
  })
  const { data: collections } = useCollections.get({
    api_handle: Collection_id
  })

  const { getBaseProps, getBreadcrumbsProps, getHomeIconProps } = useProps({
    ...props,
    ref
  })

  return (
    <SectionContainer {...getBaseProps()}>
      <Breadcrumbs {...getBreadcrumbsProps()}>
        <BreadcrumbItem
          startContent={
            <Home
              {...getHomeIconProps()}
              onClick={() => {
                router.navigate({ to: '/' })
              }}
            />
          }
          children={''}
        />
        <BreadcrumbItem onPress={() => byId('by-collections')}>
          Collections
        </BreadcrumbItem>
        <BreadcrumbItem> {collections?.name} </BreadcrumbItem>
      </Breadcrumbs>
    </SectionContainer>
  )
})

Header.displayName = 'Header'

export { Header }
