
//The forEach() method executes a provided function once for each array element.
var a, array = ['cat', 'dog', 'rabbit'];
function foreach(array) {
  'use strict';
  array = array;
  a = "";
  array.forEach(function (element, index) {
    a += "forEach Index : " + index + " : Element : " + element + '\n';
  });
  return a;
}

foreach(array);
console.log(a);
module.exports.foreach = foreach;