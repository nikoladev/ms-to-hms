const tape = require('tape')
const msToHms = require('./index.js')

tape('Valid numbers', (test) => {
  const numbers = [
    [ 0, '0:00:00' ],
    [ -0, '0:00:00' ],
    [ 999, '0:00:00' ],
    [ 1000, '0:00:01' ],
    [ -999, '-0:00:00' ],
    [ -1000, '-0:00:01' ],
    [ 59999, '0:00:59' ],
    [ 60000, '0:01:00' ],
    [ -59999, '-0:00:59' ],
    [ -60000, '-0:01:00' ],
    [ 3599999, '0:59:59' ],
    [ 3600000, '1:00:00' ],
    [ -3599999, '-0:59:59' ],
    [ -3600000, '-1:00:00' ],
    [ 35999999, '9:59:59' ],
    [ 36000000, '10:00:00' ],
    [ -35999999, '-9:59:59' ],
    [ -36000000, '-10:00:00' ],
    [ 86399999, '23:59:59' ],
    [ 86400000, '24:00:00' ],
    [ 123456789, '34:17:36' ],
    [ -123456789, '-34:17:36' ],
    [ 445401000, '123:43:21' ],
    [ -445401000, '-123:43:21' ],
  ]
  numbers.forEach(([ number, expected ]) => {
    test.equal(
      msToHms(number),
      expected,
      `# ${number} --> ${expected}`
    )
  })

  test.end()
})

tape('Should throw', (test) => {
  const incorrect = [
    '1',
    '',
    'a',
    true,
    false,
    {},
    [],
    null,
    undefined,
    NaN,
  ]
  incorrect.forEach((notNumber) => {
    const msg = (notNumber === undefined || Number.isNaN(notNumber))
      ? `${notNumber}`
      : JSON.stringify(notNumber)
    test.throws(
      () => msToHms(notNumber),
      msg
    )
  })
  test.end()
})
