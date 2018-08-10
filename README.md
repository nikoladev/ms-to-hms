# ms-to-hms

> Tiny module that takes milliseconds and outputs as h:mm:ss `5025000` → `'1:23:45'`

## Install

```sh
npm install ms-to-hms
```

## Usage

```js
const msToHms = require('ms-to-hms')

msToHms(0)         // '0:00:00'
msToHms(-654321)   // '-0:10:54'
msToHms(123456789) // '34:17:36'
```

## API

### `msToHms(ms)`

Convert milliseconds into formatted time string.

#### Parameters

* `ms` Time in milliseconds. Can be either positive or negative.
    * Type: `number`
    * Note: the function will throw if `ms` is  a `NaN` or anything but a `number`.

## License

MIT
