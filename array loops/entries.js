/*a.entries()*/

var a = ['a', 'b', 'c'];
var iterator  = a.entries();

for(var i of iterator) {
  
  console.log(i);
}

/*arr.keys();*/

var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

for(var i of iterator) {
  
  console.log(i);
}

var a = ['w', 'y', 'k', 'o', 'p']; 
var iterator = a.values();

console.log(iterator.next().value); // w 
console.log(iterator.next().value); // y 
console.log(iterator.next().value); // k 
console.log(iterator.next().value); // o 
console.log(iterator.next().value); // p