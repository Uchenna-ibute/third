module.exports = function (str) {
  str = str.toLowerCase()
  let v =str.split('').reverse().join('')
  return v
}
