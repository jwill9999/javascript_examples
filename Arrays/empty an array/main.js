var array = [1,2,3,4,5];
var array2 = array;

array = [];

console.log(array);
console.log(array2);

/********************************************************************** */

var array3 = [1,2,3,4,5];
var array4 = array3;
array3.length = 0;
console.log(array3);
console.log(array4);

/************************************************************************* */

var array5 = [1,2,3,4,5];
array5.splice(0,array5.length);
console.log(array5);

/**************************************************************************** */

var array6 = [1,2,3,4,5];
console.log(array6);

function emptyArray(array){
  'use strict';

    while(array.length){

     array6.pop();
}

}
emptyArray(array6);

console.log(array6);