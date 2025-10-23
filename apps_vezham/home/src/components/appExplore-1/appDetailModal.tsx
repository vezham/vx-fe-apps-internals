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

import { AppDetail } from './types'

interface AppDetailModalProps {
  isOpen: boolean
  onClose: () => void
  app: AppDetail | null
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({
  isOpen,
  onClose,
  app
}) => {
  const router = useRouter()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (!app) return null

  const handleViewDetails = () => {
    onClose()
    router.navigate({ to: `/apps/explore-1/${app.id}` })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      scrollBehavior="inside"
      backdrop="blur"
      classNames={{
        base: 'bg-content1'
      }}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <Image src={app.icon} className={`${app.iconColor} h-8 w-8`} />
                <h3 className="text-xl font-semibold">{app.title}</h3>
              </div>
            </ModalHeader>
            <ModalBody className="pb-6">
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Left Column - App Information */}
                <div className="md:w-1/3">
                  {/* Description */}
                  <div className="mb-6">
                    <div className="mb-6 flex h-30 items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src={app.image}
                        alt={app.title}
                        className="h-full w-full"
                      />
                    </div>
                    <p className="text-foreground-500 text-sm leading-relaxed">
                      {app.detailedDescription}
                    </p>
                  </div>
                  {/* Built By & Subscription */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="text-default-600 flex items-center gap-2 text-sm">
                      {isDark ? (
                        <img
                          src="https://static.cdn.vezham.com/images/logo-white.png"
                          alt="Vezham Logo"
                          className="h-5 w-auto"
                        />
                      ) : (
                        <img
                          src="https://static.cdn.vezham.com/images/logo-black.png"
                          alt="Vezham Logo"
                          className="h-5 w-auto"
                        />
                      )}
                      <span>Built by Vezham</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon
                        icon="lucide:check-circle"
                        className="text-success"
                        width={16}
                      />
                      <span>Free</span>
                    </div>
                  </div>

                  {/* Sign In Button */}
                  <div className="mb-6">
                    <Button color="primary" fullWidth className="font-medium">
                      Sign in to install
                    </Button>
                  </div>

                  {/* Works with */}
                  <div className="mb-4">
                    <h3 className="text-foreground-500 mb-2 text-sm font-semibold">
                      Works with
                    </h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon className="mt-1" icon="lucide:inbox" width={16} />
                        <span>Inbox</span>
                      </div>
                      <div className="text-default-500 text-sm">
                        Add to conversation details
                      </div>
                    </div>
                  </div>

                  {/* Automations */}
                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-semibold">Automations</h3>
                    <div className="text-default-500 text-sm">
                      Use as follow up actions
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="text-foreground-500 mb-2 text-sm font-semibold">
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-default-100 rounded-md px-3 py-1 text-sm">
                        Conversation management
                      </div>
                      <div className="bg-default-100 rounded-md px-3 py-1 text-sm">
                        Issue tracking & ticketing
                      </div>
                      <div className="bg-default-100 rounded-md px-3 py-1 text-sm">
                        For Support Agents
                      </div>
                    </div>
                  </div>

                  {/* Terms & Policy */}
                  <div className="mb-6">
                    <div className="text-default-500 flex flex-col gap-1 text-sm">
                      <a href="#" className="underline">
                        Terms of service
                      </a>
                      <a href="#" className="underline">
                        Privacy policy
                      </a>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div>
                    <Button
                      variant="faded"
                      color="primary"
                      onPress={handleViewDetails}
                      className="font-medium"
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
                </div>

                {/* Right Column - Features & Results */}
                <div className="md:w-2/3">
                  {/* Features */}
                  <h3 className="mb-4 text-xl font-bold">Our Features</h3>
                  <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {app.features?.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-md">
                            <Icon
                              icon={feature.icon}
                              className="text-primary"
                              width={20}
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-foreground text-md mb-1 font-semibold">
                            {feature.title}
                          </h4>
                          <p className="text-foreground-500 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  {app.metrics && app.metrics.length > 0 && (
                    <>
                      <h3 className="mb-4 text-xl font-bold">Results</h3>
                      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {app.metrics.map((metric, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="relative h-16 w-16 flex-shrink-0 p-2">
                              <svg
                                className="h-full w-full"
                                viewBox="0 0 36 36">
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className="stroke-default-200"
                                  strokeWidth="2"
                                />
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className="stroke-primary"
                                  strokeWidth="2"
                                  strokeDasharray={`${(2 * Math.PI * 16 * metric.value) / 100} ${2 * Math.PI * 16}`}
                                  strokeDashoffset="0"
                                  transform="rotate(-90 18 18)"
                                />
                                <text
                                  x="18"
                                  y="18"
                                  dominantBaseline="middle"
                                  textAnchor="middle"
                                  className="fill-foreground text-xs font-bold">
                                  {metric.value}%
                                </text>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-foreground mb-1 font-semibold">
                                {metric.title}
                              </h4>
                              <p className="text-default-500 text-sm">
                                {metric.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Images Grid */}
                  <div className="space-y-4">
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
