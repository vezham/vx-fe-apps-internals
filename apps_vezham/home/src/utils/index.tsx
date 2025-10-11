export const getProgressColor = (value: string) => {
  const no = parseInt(value)
  if (no <= 25) {
    return 'danger'
  } else if (no <= 50) {
    return 'warning'
  } else if (no <= 75) {
    return 'primary'
  }
  return 'success'
}
