// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here
  var results = [];

  var helper = function (node) {
    var final = node.className.split(' ');
    if (final.indexOf(className) >= 0) {
      results.push(node);
    }
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.children.length; i++) {
        helper(node.children[i]);
      }
    }
  };

  helper(document.body);
  return results;
};
