var array = [1, 2, 3, 4, 5, 6];
var array2 = [] ;
var result = array.slice(); // to copy an array to new array

console.log(array);
console.log(result);

for (var i = 0; i < array.length; ++i) {
  array2[i] = array[i];
}

console.log(array2);