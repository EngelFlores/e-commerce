module.exports = (array) => {
  const result = array.map((obj) => {
    if (obj.quantity <= 0) {
      obj.quantity = 'indisponivel'
    }
    return obj
  })
  return result
}
