export default {
  subContent (val) {
    console.log(val)
    return val.substring(1, val.length - 1)
  },
  getMonth () {
    let today = new Date()
    return today.getMonth() + 1
  }
}
