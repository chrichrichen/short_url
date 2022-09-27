const code = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const max_index = 61
const min_index = 0

module.exports = (shortenURL_Length)=>{
  let result=""
  for (let i = 0; i < shortenURL_Length; i++) {
    const randomIndex = Math.floor(Math.random()* (max_index - min_index + 1)+ min_index)
    const shorturlCode = code[randomIndex]
    result += shorturlCode
  }
  return result
}