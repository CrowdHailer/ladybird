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