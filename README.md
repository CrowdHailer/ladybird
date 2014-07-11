Ladybird
========

#### String interpolation for Javascript

This library add string interpolation based on sprintf, with the aim of futher string functionality to follow. Functionality is curried.

### Dependencies

[cumin.js](https://github.com/CrowdHailer/cuminjs)

### Installation

Ladybird is available on bower. To install run

```
$ bower install ladybird --save
```

### Use

Add ladybird to your page through use of a script tag

```
<script type="text/javascript" src="path/to/src/ladybird.js"></script>
```

Interpolation is declare with string skeleton first. `interpolate(<skeleton>)(<content>)`

```js
var frame = ladybird('eats %(food)');
frame({food: 'aphids'})
  => 'eats aphids'
```

For further examples e.g number and defaults view spec files.


simple string interpolation library

useful links
http://javascript.crockford.com/remedial.html
https://github.com/alexei/sprintf.js
https://github.com/zsong/kiwi
http://zetcode.com/lang/python/strings/
https://docs.python.org/2/library/stdtypes.html#string-formatting
http://en.wikipedia.org/wiki/Printf_format_string#1990s:_PHP.2C_Python

// String interpolations

function interpolate(s) {
  var i = 0;
  return function(args){
    return s.replace(/%(?:\(([^)]+)\))?([%diouxXeEfFgGcrs])/g, function (match, v, t) {
      if (t == "%") return "%";
      return args[v || i++];
    });
  };
}