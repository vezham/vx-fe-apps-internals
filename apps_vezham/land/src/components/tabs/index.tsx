import { forwardRef } from '@vezham/react-utils'

import { Tab, Tabs } from '@vx-oss/react'

import { Props, useProps } from './types'

const NavbarTabs = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    getTabListProps,
    getTabProps,
    items = [],
    selectedTab = '',
    onSelectionChange,
    onTabClick,
    color = 'primary'
  } = useProps({
    ...props,
    ref
  })

  return (
    <div>
      <Tabs
        aria-label="Navbar Tabs"
        radius="full"
        color={color}
        selectedKey={selectedTab}
        onSelectionChange={onSelectionChange}
        classNames={{
          base: getBaseProps().className,
          tabList: getTabListProps().className,
          tab: getTabProps().className
        }}>
        {items.map(item => (
          <Tab
            key={item.key}
            title={item.label}
            onClick={() => onTabClick?.(item)}
          />
        ))}
      </Tabs>
    </div>
  )
})

NavbarTabs.displayName = 'NavbarTabs'

export { NavbarTabs }
