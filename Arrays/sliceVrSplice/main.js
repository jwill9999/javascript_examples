/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected 
from begin to end (end not included). The original array will not be modified.

arr.slice()
arr.slice(begin)
arr.slice(begin, end)
*/


var a = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a.slice(1, 3);
console.log(sliced); // it removes ['one', 'two'] creates a new array
console.log(a); // remains untouched 

/*
Splice
The splice() method changes the content of an array by removing existing elements and/or adding new elements.


array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)

*/
var spliced = names.splice(1,3);
console.log(spliced); // it removes  [ 'john', 'peter', 'karen' ] and leaves ['jason'];
console.log(names); // array now only contains remaining elements
names.splice(1,0, 'billy');
console.log(names); // [ 'jason', 'billy' ]


var array4 = ['a','b','c'];

var a = array4.indexOf('b');
console.log(a); // 1
array4.splice(1,1);
console.log(array4);




