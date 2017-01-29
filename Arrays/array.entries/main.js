'use strict';

var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}

console.log(a);  //unchanged [ 'a', 'b', 'c' ]

/*RETURNS 

[ 0, 'a' ]
[ 1, 'b' ]
[ 2, 'c' ]

*/