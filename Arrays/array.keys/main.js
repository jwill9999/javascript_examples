'use strict';

var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

for (let i of iterator){          // 0 1 2
  console.log(i);
}

for (let i in arr){               // 0 1 2
  console.log(i);
}