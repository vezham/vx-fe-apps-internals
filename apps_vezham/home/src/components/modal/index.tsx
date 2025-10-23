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

import type { AppDetailModalProps } from './types'
import { styles } from './variant'

export const AppDetailModal: React.FC<AppDetailModalProps> = ({
  isOpen,
  onClose,
  app,
  navigatePath
}) => {
  const router = useRouter()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (!app) return null

  const handleViewDetails = () => {
    onClose()
    const normalizedPath = navigatePath.startsWith('/')
      ? navigatePath
      : `${navigatePath}`
    router.navigate({ to: `${normalizedPath}/${app.id}` })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      scrollBehavior="inside"
      backdrop="blur"
      classNames={{ base: styles.modalBase }}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className={styles.header}>
              <div className={styles.headerInner}>
                <Image
                  src={app.icon}
                  className={`${app.iconColor} ${styles.icon}`}
                />
                <h3 className={styles.title}>{app.title}</h3>
              </div>
            </ModalHeader>

            <ModalBody className={styles.body}>
              <div className={styles.columns}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={app.image}
                      alt={app.title}
                      className={styles.mainImage}
                    />
                  </div>
                  <p className={styles.description}>
                    {app.detailedDescription}
                  </p>

                  <div className={styles.builtBySection}>
                    <img
                      src={
                        isDark
                          ? 'https://static.cdn.vezham.com/images/logo-white.png'
                          : 'https://static.cdn.vezham.com/images/logo-black.png'
                      }
                      alt="Vezham Logo"
                      className={styles.logo}
                    />
                    <span>Built by Vezham</span>
                    <Icon
                      icon="lucide:check-circle"
                      className={styles.freeIcon}
                      width={16}
                    />
                    <span>Free</span>
                  </div>

                  <Button
                    color="primary"
                    fullWidth
                    className={styles.signInButton}>
                    Sign in to install
                  </Button>

                  {/* Works With */}
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Works with</h3>
                    <div className={styles.sectionContent}>
                      <div className={styles.featureItem}>
                        <Icon
                          className={styles.inboxIcon}
                          icon="lucide:inbox"
                          width={16}
                        />
                        <span>Inbox</span>
                      </div>
                      <div className={styles.subText}>
                        Add to conversation details
                      </div>
                    </div>
                  </div>

                  {/* Automations */}
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Automations</h3>
                    <div className={styles.subText}>
                      Use as follow up actions
                    </div>
                  </div>

                  {/* Categories */}
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Categories</h3>
                    <div className={styles.categories}>
                      <div className={styles.categoryItem}>
                        Conversation management
                      </div>
                      <div className={styles.categoryItem}>
                        Issue tracking & ticketing
                      </div>
                      <div className={styles.categoryItem}>
                        For Support Agents
                      </div>
                    </div>
                  </div>

                  {/* Terms & Policy */}
                  <div className={styles.section}>
                    <div className={styles.terms}>
                      <a href="#" className={styles.link}>
                        Terms of service
                      </a>
                      <a href="#" className={styles.link}>
                        Privacy policy
                      </a>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="faded"
                    color="primary"
                    onPress={handleViewDetails}
                    className={styles.viewDetailsButton}
                    fullWidth
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
                <div className={styles.rightColumn}>
                  {/* Features */}
                  <h3 className={styles.sectionHeader}>Our Features</h3>
                  <div className={styles.featuresGrid}>
                    {app.features?.slice(0, 4).map((feature, index) => (
                      <div key={index} className={styles.featureItemWrapper}>
                        <div className={styles.featureIconWrapper}>
                          <Icon
                            icon={feature.icon}
                            className={styles.featureIcon}
                            width={20}
                          />
                        </div>
                        <div>
                          <h4 className={styles.featureTitle}>
                            {feature.title}
                          </h4>
                          <p className={styles.featureDescription}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  {app.metrics?.length ? (
                    <>
                      <h3 className={styles.sectionHeader}>Results</h3>
                      <div className={styles.featuresGrid}>
                        {app.metrics.map((metric, index) => (
                          <div
                            key={index}
                            className={styles.featureItemWrapper}>
                            <div className={styles.metricWrapper}>
                              <svg
                                className={styles.metricSvg}
                                viewBox="0 0 36 36">
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className={styles.metricBg}
                                  strokeWidth={2}
                                />
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className={styles.metricFg}
                                  strokeWidth={2}
                                  strokeDasharray={`${(2 * Math.PI * 16 * metric.value) / 100} ${2 * Math.PI * 16}`}
                                  strokeDashoffset="0"
                                  transform="rotate(-90 18 18)"
                                />
                                <text
                                  x="18"
                                  y="18"
                                  dominantBaseline="middle"
                                  textAnchor="middle"
                                  className={styles.metricText}>
                                  {metric.value}%
                                </text>
                              </svg>
                            </div>
                            <div>
                              <h4 className={styles.featureTitle}>
                                {metric.title}
                              </h4>
                              <p className={styles.featureDescription}>
                                {metric.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {/* Images Grid */}
                  <div className={styles.imagesGrid}>
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

export default AppDetailModal
