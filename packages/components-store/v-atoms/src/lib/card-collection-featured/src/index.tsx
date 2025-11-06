// import { forwardRef } from '@vezham/react-utils'
// import { LinkIcon } from '@vezham/shared-icons-pack'
// import { Avatar } from '@vx-oss/avatar'
// import { Card, CardBody } from '@vx-oss/card'
// import './index.less'
// import { Props, useProps } from './types'
// const CardCollectionFeatured = forwardRef<'div', Props>((props, ref) => {
//   const {
//     Component,
//     getBaseProps,
//     getWrapperProps,
//     features,
//     getHeaderProps,
//     getBodyProps,
//     getIconProps,
//     getTitleProps,
//     getDescriptionProps,
//     handleClick
//   } = useProps({
//     ...props,
//     ref
//   })
//   return (
//     <Component {...getBaseProps()}>
//       {features.map(
//         (
//           { avatar, name, description, target = '', api_handle = '' },
//           index
//         ) => (
//           <Card
//             {...getWrapperProps()}
//             shadow="sm"
//             key={`${name}_${index}`}
//             isPressable={!!api_handle}
//             onPress={() => handleClick(api_handle, target)}>
//             <CardBody {...getBodyProps()}>
//               <div {...getHeaderProps()}>
//                 <div {...getIconProps()}>
//                   <p {...getTitleProps()}>{name}</p>
//                   {target !== '' && <LinkIcon height={18} width={18} />}
//                 </div>
//                 <Avatar
//                   className={`bg-${avatar?.color}-200`}
//                   src={avatar?.url}
//                   name={avatar?.icon}
//                 />
//               </div>
//               {description ? (
//                 <p {...getDescriptionProps()}>{description}</p>
//               ) : null}
//             </CardBody>
//           </Card>
//         )
//       )}
//     </Component>
//   )
// })
// CardCollectionFeatured.displayName = 'CardCollectionFeatured'
// export { CardCollectionFeatured }
import { Link } from 'lucide-react'

import { forwardRef } from '@vezham/react-utils'

import { Avatar } from '@vx-oss/avatar'
import { Card, CardBody } from '@vx-oss/card'

import { Props, useProps } from './types'

const CardCollectionFeatured = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    features,
    getHeaderProps,
    getBodyProps,
    getIconProps,
    getTitleProps,
    getDescriptionProps,
    handleClick
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {features.map((collection, index) => (
        <Card
          {...getWrapperProps()}
          key={`${collection.name}_${index}`}
          isPressable={!!collection.api_handle}
          onPress={() =>
            handleClick(collection.api_handle, collection.target, collection)
          }>
          <CardBody {...getBodyProps()}>
            <div {...getHeaderProps()}>
              <div {...getIconProps()}>
                <p {...getTitleProps()}>{collection.name}</p>
                {collection.target !== '' && <Link className="h-4 w-4" />}
              </div>
              <Avatar
                className={`bg-${collection.avatar?.color}-200`}
                src={collection.avatar?.url}
                name={collection.avatar?.icon}
              />
            </div>
            {collection.description ? (
              <p {...getDescriptionProps()}>{collection.description}</p>
            ) : null}
          </CardBody>
        </Card>
      ))}
    </Component>
  )
})

CardCollectionFeatured.displayName = 'CardCollectionFeatured'

export { CardCollectionFeatured }
