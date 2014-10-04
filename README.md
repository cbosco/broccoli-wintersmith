# broccoli-wintersmith

Allow you to manage your [Wintersmith](http://wintersmith.io/)-generated static site from a [Broccoli]() Brocfile.


## Usage

Your plugin can be used in `Brocfile.js` like so:

```js
var wintersmith = require('broccoli-wintersmith');
var wintersmithPublicOutput = 'wintersmith-site';

wintersmithPublicOutput = wintersmith(wintersmithPublicOutput, {
    config: '/full/path/to/wintersmith-site/config.json')
});
```

See the example directory for a working basic Wintersmith site.