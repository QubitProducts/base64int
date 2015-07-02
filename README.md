Base64 Int
----------

Pure JS integer to/from base64 converter compatible with IE7+, Opera, Firefox, Chrome and Safari. Outputs a base64 string that can be stored in cookies, useful for compressing numbers.

#### How to install
```bash
npm install base64int
```

_Example_
```javascript
var base64int = require('base64int');

base64int.encode(123456);
// returns "eJA"

base64int.decode('eJA');
// returns 123456
```
