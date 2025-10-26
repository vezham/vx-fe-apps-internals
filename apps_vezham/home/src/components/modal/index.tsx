import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import React from 'react'

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader
} from '@vx-oss/react'
import { useTheme } from '@vx-oss/use-theme'

import { Props, useProps } from './types'

const AppDetailModal: React.FC<Props> = props => {
  const {
    app,
    onClose,
    navigatePath,
    getModalProps,
    getHeaderProps,
    getHeaderInnerProps,
    getIconProps,
    getTitleProps,
    getBodyProps,
    getColumnsProps,
    getLeftColumnProps,
    getRightColumnProps,
    getImageWrapperProps,
    getMainImageProps,
    getDescriptionProps,
    getBuiltByProps,
    getLogoProps,
    getFreeIconProps,
    getSectionProps,
    getSectionTitleProps,
    getSectionContentProps,
    getFeatureItemProps,
    getSubTextProps,
    getCategoriesProps,
    getCategoryItemProps,
    getTermsProps,
    getLinkProps,
    getViewDetailsButtonProps,
    getSectionHeaderProps,
    getFeaturesGridProps,
    getFeatureItemWrapperProps,
    getFeatureIconWrapperProps,
    getFeatureIconProps,
    getFeatureTitleProps,
    getFeatureDescriptionProps,
    getMetricWrapperProps,
    getMetricSvgProps,
    getMetricBgProps,
    getMetricFgProps,
    getMetricTextProps,
    getImagesGridProps
  } = useProps(props)

  const router = useRouter()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (!app) return null

  const handleViewDetails = () => {
    onClose()
    const normalizedPath = navigatePath.startsWith('/')
      ? navigatePath
      : `/${navigatePath}`
    router.navigate({ to: `${normalizedPath}/${app.id}` })
  }

  return (
    <Modal
      {...getModalProps()}
      size="4xl"
      scrollBehavior="inside"
      backdrop="blur">
      <ModalContent>
        {() => (
          <>
            <ModalHeader {...getHeaderProps()}>
              <div {...getHeaderInnerProps()}>
                {app.icon.startsWith('https') ? (
                  <Image src={app.icon} alt={app.title} {...getIconProps()} />
                ) : (
                  <Icon
                    icon={app.icon}
                    className={app.iconColor}
                    {...getIconProps()}
                  />
                )}
                <h3 {...getTitleProps()}>{app.title}</h3>
              </div>
            </ModalHeader>

            <ModalBody {...getBodyProps()}>
              <div {...getColumnsProps()}>
                {/* Left Column */}
                <div {...getLeftColumnProps()}>
                  <div {...getImageWrapperProps()}>
                    <Image
                      src={app.image}
                      alt={app.title}
                      {...getMainImageProps()}
                    />
                  </div>

                  <p {...getDescriptionProps()}>{app.detailedDescription}</p>

                  <div {...getBuiltByProps()}>
                    <img
                      src={
                        isDark
                          ? 'https://static.cdn.vezham.com/images/logo-white.png'
                          : 'https://static.cdn.vezham.com/images/logo-black.png'
                      }
                      alt="Vezham Logo"
                      {...getLogoProps()}
                    />
                    <span>Built by Vezham</span>
                    <Icon icon="lucide:check-circle" {...getFreeIconProps()} />
                    <span>Free</span>
                  </div>

                  <Button
                    color="primary"
                    fullWidth
                    {...getViewDetailsButtonProps()}>
                    Sign in to install
                  </Button>

                  {/* Works With */}
                  <div {...getSectionProps()}>
                    <h3 {...getSectionTitleProps()}>Works with</h3>
                    <div {...getSectionContentProps()}>
                      <div {...getFeatureItemProps()}>
                        <Icon icon="lucide:inbox" {...getIconProps()} />
                        <span>Inbox</span>
                      </div>
                      <div {...getSubTextProps()}>
                        Add to conversation details
                      </div>
                    </div>
                  </div>

                  {/* Automations */}
                  <div {...getSectionProps()}>
                    <h3 {...getSectionTitleProps()}>Automations</h3>
                    <div {...getSubTextProps()}>Use as follow up actions</div>
                  </div>

                  {/* Categories */}
                  <div {...getSectionProps()}>
                    <h3 {...getSectionTitleProps()}>Categories</h3>
                    <div {...getCategoriesProps()}>
                      <div {...getCategoryItemProps()}>
                        Conversation management
                      </div>
                      <div {...getCategoryItemProps()}>
                        Issue tracking & ticketing
                      </div>
                      <div {...getCategoryItemProps()}>For Support Agents</div>
                    </div>
                  </div>

                  {/* Terms & Policy */}
                  <div {...getSectionProps()}>
                    <div {...getTermsProps()}>
                      <a href="#" {...getLinkProps()}>
                        Terms of service
                      </a>
                      <a href="#" {...getLinkProps()}>
                        Privacy policy
                      </a>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="faded"
                    color="primary"
                    onPress={handleViewDetails}
                    fullWidth
                    {...getViewDetailsButtonProps()}
                    endContent={
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}>
                        <Icon
                          icon="lucide:arrow-right"
                          width={18}
                          height={18}
                        />
                      </motion.div>
                    }>
                    View Details
                  </Button>
                </div>

                {/* Right Column */}
                <div {...getRightColumnProps()}>
                  <h3 {...getSectionHeaderProps()}>Our Features</h3>
                  <div {...getFeaturesGridProps()}>
                    {app.features?.slice(0, 4).map((feature, index) => (
                      <div key={index} {...getFeatureItemWrapperProps()}>
                        <div {...getFeatureIconWrapperProps()}>
                          <Icon
                            icon={feature.icon}
                            {...getFeatureIconProps()}
                          />
                        </div>
                        <div>
                          <h4 {...getFeatureTitleProps()}>{feature.title}</h4>
                          <p {...getFeatureDescriptionProps()}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  {app.metrics?.length ? (
                    <>
                      <h3 {...getSectionHeaderProps()}>Results</h3>
                      <div {...getFeaturesGridProps()}>
                        {app.metrics.map((metric, index) => (
                          <div key={index} {...getFeatureItemWrapperProps()}>
                            <div {...getMetricWrapperProps()}>
                              <svg viewBox="0 0 36 36" {...getMetricSvgProps()}>
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  {...getMetricBgProps()}
                                />
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  {...getMetricFgProps()}
                                  strokeDasharray={`${(2 * Math.PI * 16 * metric.value) / 100} ${
                                    2 * Math.PI * 16
                                  }`}
                                  transform="rotate(-90 18 18)"
                                />
                                <text x="8" y="22" {...getMetricTextProps()}>
                                  {metric.value}%
                                </text>
                              </svg>
                            </div>
                            <div>
                              <h4 {...getFeatureTitleProps()}>
                                {metric.title}
                              </h4>
                              <p {...getFeatureDescriptionProps()}>
                                {metric.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {/* Images Grid */}
                  <div {...getImagesGridProps()}>
                    {[1, 2, 3, 4].map(item => (
                      <div
                        key={item}
                        className="w-full overflow-hidden rounded-md">
                        <Image
                          src={`https://img.heroui.chat/image/dashboard?w=800&h=400&u=app-screen-${item}`}
                          alt={`${app.title} screenshot ${item}`}
                          className="h-full w-full object-cover"
                          radius="md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export { AppDetailModal }
