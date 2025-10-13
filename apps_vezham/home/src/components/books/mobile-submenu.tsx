import { Icon } from '@iconify/react'
import React from 'react'

import { Link } from '@vx-oss/react'

import { MenuSection } from './data'

interface MobileSubmenuProps {
  sections: MenuSection[]
}

export default function MobileSubmenu({ sections }: MobileSubmenuProps) {
  return (
    <div className="pl-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          {section.title && (
            <p className="text-default-500 mb-2 text-xs font-bold">
              {section.title}
            </p>
          )}
          <div className="flex flex-col gap-3">
            {section.items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href || '#'}
                className="hover:bg-default-100 dark:hover:bg-default-200/20 flex items-start gap-3 rounded-md p-2 transition-colors">
                <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-md">
                  <Icon
                    className="text-primary"
                    icon={item.icon.replace('heroui', 'lucide')}
                    width={20}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  {item.description && (
                    <p className="text-default-500 text-xs">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
