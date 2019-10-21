// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return '' + obj;
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var first = '[';
    for (var i = 0; i < obj.length; i ++) {
      if (i === obj.length - 1) {
        first += stringifyJSON(obj[i]) + ']';
      } else {
        first += stringifyJSON(obj[i]) + ',';
      }
    }
    return first;
  } else if (obj instanceof Object) {
    var array = Object.keys(obj);
    if (array.length === 0) {
      return '{}';
    }
    var firstObj = '{';
    for (var i = 0; i < array.length; i ++) {
      if (obj[array[i]] === undefined || typeof obj[array[i]] === 'function') {
        return '{}';
      }
      if (i === array.length - 1) {
        firstObj += stringifyJSON(array[i]) + ':' + stringifyJSON(obj[array[i]]) + '}';
      } else {
        firstObj += stringifyJSON(array[i]) + ':' + stringifyJSON(obj[array[i]]) + ',';
      }
    }
    return firstObj;
  }
};
