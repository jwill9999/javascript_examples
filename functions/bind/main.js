
/*******************************************************************************************
Creates a new function which, when called, has its this set to the provided value, 
with a given sequence of arguments preceding any provided when the new function was called.
********************************************************************************************/

function add(a,b){
  return a + b;
}


//we call the function and store value
var one = add(2,2);
console.log(one);


//we bind the add function to secondAddFunction which now can act like add()
var secondAddFunction = add.bind(null);
console.log(secondAddFunction);  // this just returns a function bound to add


//we see that this new addd function works the same as a copy
var two = secondAddFunction(10,3);
console.log(two);


//but add still works as it did originally
var three = add(10,3);
console.log(three);