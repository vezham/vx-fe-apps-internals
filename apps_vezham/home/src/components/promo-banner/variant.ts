export const styles = {
  banner: {
    base: 'relative z-30 mx-4 mb-4 rounded-lg px-6 py-2.5 shadow-sm',
    variant: {
      primary: 'from-primary-100 to-primary-50 bg-gradient-to-r',
      secondary: 'from-secondary-100 to-secondary-50 bg-gradient-to-r',
      danger: 'from-danger-100 to-danger-50 bg-gradient-to-r'
    }
  },
  content:
    'mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 text-sm sm:text-base',
  text: 'text-foreground font-medium',
  link: 'text-primary font-semibold hover:underline',
  closeButton:
    'text-foreground-500 hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2',
  closeIcon: 'h-4 w-4'
}
