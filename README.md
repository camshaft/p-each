p-each
======

concurrent each for node/component

Installation
------------

### npm

```sh
$ npm install p-each
```

### component

```sh
$ component install camshaft/p-each
```

Usage
-----

When calling `p-each` an instance of [batch](https://github.com/visionmedia/batch) is returned.

```js
var each = require('p-each');

var arr = [1, 2, 3, 4, 5];

each(arr, function(num, fn) {
  fn(null, num * num);
}).end(function(err, squared) {

});
```
