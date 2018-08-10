'use strict'
module.exports = function (ms) {
  if (typeof ms !== 'number' || Number.isNaN(ms)) {
    throw new TypeError('Expected a number')
  }
  var sign = ms < 0 ? '-' : ''
  var abs = Math.abs(ms)
  var h = Math.floor(abs / 3600000)
  var m = ('0' + Math.floor(abs / 60000) % 60).slice(-2)
  var s = ('0' + Math.floor(abs / 1000) % 60).slice(-2)
  return sign + h + ':' + m + ':' + s
}
