export const navVariants = {
  base: {
    exploreAllWrapper: 'flex items-center gap-2 p-2 rounded hover:bg-gray-100',
    exploreAllText: 'flex-1'
  },
  variants: {
    exploreAllLink:
      'flex items-center gap-2 w-full text-gray-700 hover:text-gray-900',
    exploreAllIcon: 'flex-none',
    exploreAllNameMore: 'text-sm font-medium'
  },
  navbar: {
    container: 'w-full',
    body: 'flex justify-between items-center max-w-full mx-auto px-4 py-2',
    logoWrapper: 'z-20 flex items-center'
  },
  mobile: {
    overlay: 'fixed inset-0 bg-black bg-opacity-30 z-10',
    menu: 'fixed top-0 left-0 w-full h-full bg-white z-20 overflow-y-auto'
  }
}

export const dropdownVariants = {
  base: {
    container: 'flex w-full items-start justify-center',
    innerWrapper: 'flex flex-col items-center justify-center gap-5',
    navList: 'relative flex flex-wrap items-center justify-center space-x-0',
    navButton:
      'group text-foreground-500 hover:text-foreground relative flex cursor-pointer items-center justify-center gap-1 px-3 py-1.5 text-sm whitespace-nowrap transition-colors duration-300 sm:px-4',
    hoverBg: 'bg-primary/10 absolute inset-0 size-full rounded-full',
    dropdownMenu: 'dropdown-menu absolute top-full pt-2',
    menuContent:
      'bg-background border-divider max-h-[80vh] w-max max-w-[90vw] overflow-auto rounded-lg border p-4 shadow-lg',
    menuContentMore:
      'bg-background border-divider w-56 overflow-auto rounded-lg border p-2 shadow-lg',
    submenuTextWrapper: 'leading-5',
    exploreAllWrapper: 'border-divider mt-2 border-t pt-2',
    exploreAllText: 'leading-5',
    moreItemLink:
      'hover:bg-content2 flex items-center rounded-md px-3 py-2 transition-colors',
    moreItemLabel: 'text-sm font-medium'
  },

  variants: {
    navButtonHoverBg: 'bg-primary/10 absolute inset-0 size-full rounded-full',
    submenuTitle: 'text-foreground-500 mb-4 text-sm font-medium capitalize',
    submenuItem: 'group flex items-start space-x-3',
    submenuIcon:
      'border-divider text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors duration-300',
    submenuName: 'text-foreground text-sm font-medium',
    submenuDesc:
      'text-foreground-500 group-hover:text-foreground text-xs transition-colors duration-300',
    exploreAllLink: 'group flex w-full items-center space-x-3',
    exploreAllIcon:
      'text-foreground group-hover:bg-content2 flex size-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300',
    exploreAllName: 'text-foreground text-sm font-medium',
    exploreAllNameMore: 'text-foreground-500 text-sm font-medium',
    moreButtonIcon: 'h-4 w-4 transition-transform duration-300'
  },

  animations: {
    dropdown: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.2 }
    },
    hoverBg: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 }
    }
  }
}

export const mobileNavOverlayVariants = {
  base: {
    overlay: 'fixed inset-0 z-40'
  },

  variants: {
    variant: {
      light: 'bg-white/30 backdrop-blur-sm',
      dark: 'bg-black/50 backdrop-blur-sm',
      blur: 'bg-transparent backdrop-blur-md'
    }
  },

  animations: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  }
}

export const mobileSubmenuVariants = {
  base: {
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
  }
}

export const navbarVariants = {
  base: {
    wrapper: 'fixed inset-x-0 z-50 w-full transition-all duration-300',
    navBody:
      'max-w-8xl z-[60] mx-auto hidden flex-row items-center justify-between self-start rounded-full px-2 py-2 backdrop-blur-md backdrop-saturate-150 sm:px-4 lg:flex',
    navItems:
      'text-foreground-500 hover:text-foreground inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2',
    navItem: 'text-foreground-600 dark:text-foreground-400 relative px-4 py-2',
    mobileNav:
      'z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-2 py-2 lg:hidden',
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
  slots: [
    'wrapper',
    'navBody',
    'navItems',
    'navItem',
    'mobileNav',
    'mobileNavMenu',
    'mobileNavHeader',
    'mobileNavToggle',
    'navbarLogo',
    'buttonBase'
  ]
}

export const themeSwitcherVariants = {
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
  }
}
