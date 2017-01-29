'use strict';
//create an array


var fruits = ['Apple', 'Banana'];

var msgArray = [];
msgArray[0] = 'Hello';

var array = new Array('Hello');

var another = Array.of(1, 2, 3);

var b = arrayMaker({7:1}, {2:3});

function arrayMaker(n) {
  console.log(n);
  if (n !== typeof Array) {
    return Array.prototype.slice.call(arguments);
  }
}




console.log(fruits.length);
console.log(msgArray);
console.log(array);
console.log(another);
console.log(b);