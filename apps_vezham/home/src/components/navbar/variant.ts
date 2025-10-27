import { VariantProps, tv } from '@vezham/react-utils'

const navVariants = tv({
  slots: {
    container:
      'fixed left-0 z-50 w-full transition-all duration-300 ease-in-out',
    navbar: '',
    body: 'mx-auto flex items-center justify-between',
    logoWrapper: 'z-20 flex items-center',
    center: 'flex flex-1 justify-center',
    actions: 'flex items-center gap-2',
    overlay: 'fixed inset-0 z-10 transition-opacity duration-300',
    menu: 'fixed top-0 left-0 z-20 h-full w-full overflow-y-auto transition-all duration-300',
    menuScroll: 'scrollbar-hide max-h-[60vh] w-full overflow-y-auto pt-5',
    menuItemWrapper: 'mb-2 flex w-full flex-col gap-2 px-2',
    menuItem: 'bg-content1 rounded-medium px-4 py-4 shadow-xs',
    menuFooter: 'mt-4 flex w-full flex-col gap-4',
    iconChevron: 'text-default-500',
    title: 'text-foreground text-base font-medium',
    link: 'text-foreground text-base font-medium'
  },

  variants: {
    variant: {
      default: {},
      filled: {}
    },

    size: {
      sm: {
        body: 'px-2 py-1',
        menu: 'p-3'
      },
      md: {
        body: 'px-4 py-2',
        menu: 'p-4'
      },
      lg: {
        body: 'px-6 py-3',
        menu: 'p-6'
      }
    }
  },

  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

const dropdownVariants = tv({
  slots: {
    container: 'flex w-full items-start justify-center',
    innerWrapper: 'flex flex-col items-center justify-center gap-5',
    navList: 'relative flex flex-wrap items-center justify-center space-x-0',
    navButton:
      'group text-foreground-500 hover:text-foreground relative flex cursor-pointer items-center justify-center gap-1 px-3 py-1.5 text-sm transition-colors duration-300 sm:px-4',
    dropdownMenu: 'absolute top-full pt-2',
    menuContent:
      'bg-background border-divider max-h-[80vh] w-max max-w-[90vw] overflow-auto rounded-lg border p-4 shadow-lg',
    menuContentMore:
      'bg-background border-divider w-56 overflow-auto rounded-lg border p-2 shadow-lg',
    submenuWrapper: 'w-full min-w-[200px]',
    submenuTitle: 'text-foreground-500 mb-4 text-sm font-medium capitalize',
    submenuItem: 'group flex items-start space-y-3 space-x-3',
    submenuIcon:
      'border-divider text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors duration-300',
    submenuName: 'text-foreground text-sm font-medium',
    submenuDesc:
      'text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300',
    exploreAllWrapper: 'border-divider mt-2 border-t pt-2',
    exploreAllLink: 'group flex w-full items-center space-x-3',
    exploreAllIcon:
      'text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300',
    exploreAllName:
      'text-foreground-500 text-sm font-medium transition-colors duration-300',
    moreItemLink:
      'hover:bg-content2 flex items-center rounded-md px-3 py-2 transition-colors',
    moreItemLabel: 'text-sm font-medium'
  },

  variants: {
    variant: {
      default: {},
      subtle: {}
    },
    size: {
      sm: { navButton: 'px-2 py-1 text-xs' },
      md: { navButton: 'px-3 py-1.5 text-sm' },
      lg: { navButton: 'px-4 py-2 text-base' }
    }
  },

  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

const mobileNavOverlayVariants = tv({
  slots: {
    overlay: 'fixed inset-0 z-40'
  },

  variants: {
    variant: {
      light: { overlay: 'bg-white/30 backdrop-blur-sm' },
      dark: { overlay: 'bg-black/50 backdrop-blur-sm' },
      blur: { overlay: 'bg-transparent backdrop-blur-md' }
    },
    size: {
      sm: { overlay: 'backdrop-blur-sm' },
      md: { overlay: 'backdrop-blur-md' },
      lg: { overlay: 'backdrop-blur-lg' }
    }
  },

  defaultVariants: {
    variant: 'dark',
    size: 'md'
  }
})

const mobileNavOverlayAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
}

const mobileSubmenuVariants = tv({
  slots: {
    container: 'pl-4',
    section: 'mb-4',
    title: 'text-default-500 mb-2 text-xs font-bold',
    list: 'flex flex-col gap-3',
    link: 'hover:bg-default-100 dark:hover:bg-default-200/20 flex items-start gap-3 rounded-md p-2 transition-colors',
    iconWrapper:
      'bg-primary/10 flex h-7 w-7 items-center justify-center rounded-md',
    icon: 'text-primary',
    label: 'text-sm font-medium',
    description: 'text-default-500 text-xs',
    divider: 'border-divider mt-2 border-t pt-2'
  },

  variants: {
    theme: {
      light: {
        link: 'hover:bg-default-100',
        icon: 'text-primary'
      },
      dark: {
        link: 'hover:bg-default-200/20',
        icon: 'text-primary'
      }
    }
  },

  defaultVariants: {
    theme: 'light'
  }
})

const navbarVariants = {
  base: {
    wrapper: 'fixed inset-x-0 z-50 w-full transition-all duration-300',
    navBody:
      'max-w-8xl z-[60] mx-auto hidden flex-row items-center justify-between self-start rounded-full px-2 py-2 backdrop-blur-md backdrop-saturate-150 sm:px-4 lg:flex',
    navItems:
      'text-foreground-500 hover:text-foreground inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2',
    navItem: 'text-foreground-600 dark:text-foreground-400 relative px-4 py-2',
    mobileNav:
      'z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-2 py-2 lg:hidden rounded-full',
    mobileNavMenu:
      'bg-background dark:bg-content1 fixed inset-x-0 bottom-0 z-50 flex w-full flex-col items-start justify-start gap-4 overflow-y-auto rounded-t-lg px-4 py-8 shadow-lg max-h-[85vh]',
    mobileNavHeader: 'flex w-full flex-row items-center justify-between',
    mobileNavToggle: 'text-foreground dark:text-foreground',
    navbarLogo:
      'text-foreground relative z-20 flex items-center gap-2 px-1 py-1 text-sm font-normal sm:px-2',
    buttonBase:
      'flex cursor-pointer group transition-colors duration-200 items-center justify-center gap-1 text-center rounded-md font-medium'
  },
  variants: {
    navBody: {
      visible: 'bg-background/100 dark:bg-content1/100'
    },
    mobileNav: {
      visible: 'bg-background/60 dark:bg-content1/90'
    },
    navItemHover:
      'bg-content2 dark:bg-content2 absolute inset-0 h-full w-full rounded-full',
    button: {
      size: {
        sm: 'text-xs py-1 px-2',
        md: 'text-sm py-1.5 px-4',
        lg: 'text-sm py-2 px-5'
      },
      variant: {
        primary: 'bg-primary text-white shadow-sm hover:bg-primary-600',
        secondary:
          'bg-transparent text-foreground-500 hover:text-foreground dark:text-foreground-400 dark:hover:text-foreground',
        dark: 'bg-foreground text-background shadow-sm hover:bg-foreground-800',
        gradient:
          'bg-gradient-to-b from-primary-400 to-primary-600 text-white shadow-sm'
      }
    },
    navbarLogoHeight: {
      small: 'h-8',
      large: 'h-12'
    }
  },
  defaultVariants: {
    button: {
      variant: 'primary',
      size: 'md'
    }
  }
}

const themeSwitcherVariants = {
  base: {
    wrapper: 'flex items-center gap-2',
    switch: 'mx-1'
  },
  variants: {
    size: {
      sm: { wrapper: 'gap-1', switch: 'mx-0.5' },
      md: { wrapper: 'gap-2', switch: 'mx-1' },
      lg: { wrapper: 'gap-3', switch: 'mx-2' }
    },
    color: {
      light: { wrapper: '', switch: '' },
      dark: { wrapper: '', switch: '' }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'light'
  }
}

type navbarProps = VariantProps<typeof navVariants>
type dropdownProps = VariantProps<typeof dropdownVariants>
type mobOverlayProps = VariantProps<typeof mobileNavOverlayVariants>
type mobSubmenuProps = VariantProps<typeof mobileSubmenuVariants>
type resizeNavbarProps = VariantProps<typeof navbarVariants>
type themeSwitchProps = VariantProps<typeof themeSwitcherVariants>

type navSlots = keyof ReturnType<typeof navVariants>
type dropdownSlots = keyof ReturnType<typeof dropdownVariants>
type mobOverlaySlots = keyof ReturnType<typeof mobileNavOverlayVariants>
type mobSubmenuSlots = keyof ReturnType<typeof mobileSubmenuVariants>
type resizeNavbarSlots = keyof ReturnType<typeof navbarVariants>
type themeSwitchSlots = keyof ReturnType<typeof themeSwitcherVariants>

export {
  navVariants,
  dropdownVariants,
  mobileNavOverlayVariants,
  mobileNavOverlayAnimations,
  mobileSubmenuVariants,
  navbarVariants,
  themeSwitcherVariants
}
export type {
  navbarProps,
  navSlots,
  dropdownProps,
  dropdownSlots,
  mobOverlayProps,
  mobOverlaySlots,
  mobSubmenuProps,
  mobSubmenuSlots,
  resizeNavbarProps,
  resizeNavbarSlots,
  themeSwitchProps,
  themeSwitchSlots
}
