const getIndex = (salt: string | number, limit: number): number => {
  let value = 0
  if (typeof salt == 'string') {
    value = salt.length
  } else {
    value = salt
  }

  const count =
    value
      .toString()
      .split('')
      .reduce((a, c) => {
        a += parseInt(c)
        return a
      }, 0) || 0
  return count >= limit ? getIndex(count, limit) : count
}

export { getIndex }
