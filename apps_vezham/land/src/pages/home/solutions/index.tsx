import React, { useState } from 'react'

import {
  Button,
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@vx-oss/react'

import { SolutionsCompProps, useSolutionsProps } from './types'

const Solutions = React.forwardRef<HTMLDivElement, SolutionsCompProps>(
  (props, ref) => {
    const {
      getBaseProps,
      getHeroSectionProps,
      getHeroTagProps,
      getHeroTitleProps,
      getHeroDescriptionProps,
      getCardsGridProps,
      getCardProps,
      getCardIconProps,
      getCardTitleProps,
      getCardDescriptionProps,
      getCardButtonProps,
      getModalProps,
      getModalContentProps,
      getModalHeaderProps,
      getModalBodyProps,
      getModalSectionProps,
      getModalSectionTitleProps,
      getModalListProps,
      getModalListItemProps,
      getModalListItemTextProps,
      getModalFooterProps,
      getModalCloseButtonProps
    } = useSolutionsProps({
      ...props,
      ref
    })

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalContent, setModalContent] = useState<
      'enterprise' | 'startup' | null
    >(null)
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    const openModal = (type: 'enterprise' | 'startup') => {
      setModalContent(type)
      onOpen()
    }

    const StartupLogo: React.FC<{ className?: string }> = ({ className }) => (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden>
        <circle
          cx="36"
          cy="36"
          r="34"
          fill="#fff"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <path
          d="M22 40c2-6 9-11 14-11s12 5 14 11"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="33" y="18" width="6" height="12" rx="2" fill="#F59E0B" />
        <circle cx="36" cy="36" r="4" fill="#EF4444" />
      </svg>
    )

    const EnterpriseLogo: React.FC<{ className?: string }> = ({
      className
    }) => (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden>
        <rect x="2" y="10" width="68" height="44" rx="6" fill="#0F172A" />
        <rect
          x="8"
          y="16"
          width="22"
          height="14"
          rx="2"
          fill="#fff"
          opacity="0.12"
        />
        <rect
          x="8"
          y="34"
          width="40"
          height="8"
          rx="2"
          fill="#fff"
          opacity="0.08"
        />
        <rect
          x="32"
          y="16"
          width="32"
          height="26"
          rx="2"
          fill="#fff"
          opacity="0.06"
        />
        <g transform="translate(10,14)">
          <rect x="0" y="0" width="6" height="6" rx="1" fill="#A78BFA" />
          <rect x="8" y="0" width="6" height="6" rx="1" fill="#60A5FA" />
          <rect x="16" y="0" width="6" height="6" rx="1" fill="#34D399" />
        </g>
      </svg>
    )

    return (
      <div {...getBaseProps()}>
        {/* Hero Section */}
        <header {...getHeroSectionProps()}>
          <p {...getHeroTagProps()}>SOLUTIONS</p>
          <h1 {...getHeroTitleProps()}>For Every Business</h1>
          <p {...getHeroDescriptionProps()}>
            Tailored solutions for Enterprises and Startups to grow efficiently.
          </p>
        </header>

        {/* Cards */}
        <div {...getCardsGridProps()}>
          {/* Enterprises Card */}
          <Card {...getCardProps({ type: 'enterprise' })}>
            <EnterpriseLogo {...getCardIconProps()} />
            <h2 {...getCardTitleProps()}>Enterprises</h2>
            <p {...getCardDescriptionProps()}>
              Scalable solutions for mid-market businesses to manage complex
              operations with automation and compliance.
            </p>
            <Button
              {...getCardButtonProps({ type: 'enterprise' })}
              onPress={() => openModal('enterprise')}>
              Learn More
            </Button>
          </Card>

          {/* Startups Card */}
          <Card {...getCardProps({ type: 'startup' })}>
            <StartupLogo {...getCardIconProps()} />
            <h2 {...getCardTitleProps()}>Startups</h2>
            <p {...getCardDescriptionProps()}>
              Simple, fast and affordable tools to help early-stage teams grow
              with efficiency.
            </p>
            <Button
              {...getCardButtonProps({ type: 'startup' })}
              onPress={() => openModal('startup')}>
              Learn More
            </Button>
          </Card>
        </div>

        {/* Modal */}
        <Modal {...getModalProps()} isOpen={isOpen} onClose={onClose}>
          <ModalContent {...getModalContentProps()}>
            {onClose => (
              <>
                <ModalHeader {...getModalHeaderProps()}>
                  {modalContent === 'enterprise'
                    ? 'Enterprise Solutions'
                    : 'Startup Solutions'}
                </ModalHeader>

                <ModalBody {...getModalBodyProps()}>
                  {/* ================= ENTERPRISE CONTENT ================= */}
                  {modalContent === 'enterprise' && (
                    <div {...getModalSectionProps()}>
                      <p>
                        Mid-market businesses face increasing financial
                        complexity as they scale. Our enterprise-grade solution
                        helps you streamline accounting, automate processes, and
                        stay fully compliant.
                      </p>

                      <h3 {...getModalSectionTitleProps()}>
                        Key Enterprise Features
                      </h3>
                      <ul {...getModalListProps()}>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Scalable Financial Infrastructure:</b> Manage
                            multi-entity accounting, high transaction volumes,
                            cost centers, and departments.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Advanced Automation:</b> Eliminate manual tasks
                            with automated workflows, invoicing, approvals, and
                            reconciliation.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Bank Reconciliation at Scale:</b> Sync and
                            reconcile multiple bank accounts with anomaly
                            detection.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Regulatory & Tax Compliance:</b> GST, TDS, audit
                            trails, statutory reports, and governance controls.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Budgeting & Forecasting:</b> Track budgets, plan
                            financials, and analyze variances.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Custom Integrations & APIs:</b> Connect CRM, ERP,
                            HRMS, and BI tools.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Enterprise Security:</b> Encryption, role-based
                            access, backups, and audit logs.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Dedicated Support:</b> Priority onboarding, SLAs,
                            migration, and training.
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* ================= STARTUP CONTENT ================= */}
                  {modalContent === 'startup' && (
                    <div {...getModalSectionProps()}>
                      <p>
                        Startups need speed, flexibility, and efficiency. Our
                        startup-ready tools help small teams manage finances
                        with ease and stay focused on growth.
                      </p>

                      <h3 {...getModalSectionTitleProps()}>
                        Key Startup Features
                      </h3>
                      <ul {...getModalListProps()}>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Simple Accounting for Small Teams:</b> Invoices,
                            expenses, payments, inventory — all simplified.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Automation Built-In:</b> Automated reminders,
                            invoicing, reconciliation, and workflows.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>GST-Ready:</b> Automatically compute taxes,
                            generate reports, and stay compliant.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Real-Time Financial Insights:</b> Revenue,
                            cashflow, burn rate, and profitability dashboards.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Multi-User Collaboration:</b> Add accountants,
                            co-founders, and teammates with permission control.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Affordable Plans:</b> Pricing built specifically
                            for small businesses.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Templates & Workflows:</b> Approvals, payroll,
                            vendor management, and more.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Integrations:</b> Payment gateways, CRMs,
                            marketplaces, and productivity tools.
                          </span>
                        </li>
                        <li {...getModalListItemProps()}>
                          <span {...getModalListItemTextProps()}>
                            <b>Grow Without Migration:</b> Start small and scale
                            seamlessly as your business grows.
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}
                </ModalBody>

                <ModalFooter {...getModalFooterProps()}>
                  <Button {...getModalCloseButtonProps()} onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    )
  }
)

Solutions.displayName = 'Solutions'

export { Solutions }
