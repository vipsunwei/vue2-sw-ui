export const oneOf = (value, values) => {
  for (let i = 0, len = values.length; i < len; i++) {
    if (value === values[i]) {
      return true
    }
  }
  return false
}
