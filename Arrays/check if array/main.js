var check = [1, 2, 3];

var a = Array.isArray([1, 2, 3]);
var b = Array.isArray({
  foo: 123
});
var c = Array.isArray('foobar');
var d = Array.isArray(undefined);
var e = Array.isArray(check);

console.log(a); // true
console.log(b); // false
console.log(c); // false
console.log(d); // false
console.log(e); // true

var array = [1, 2, 3, 4, 5];

function checkIfArray(object) {
  'use strict';
  if (typeof object === 'string') {
    console.log('array it is NOT ');
  } else {
    console.log('array it is ');
  }

}

checkIfArray(array);

function checkIfArray(array) {
  'use strict';
  
  if (Object.prototype.toString.call(array) === '[object Array]') {
    console.log('array it is  ');
  } else {
    console.log('array it is Not ');
  }

}

var array2 = 'testing';
checkIfArray(array2);
var array3 = [1,2,3,4,5];
checkIfArray(array3);

console.log(typeof(array3));