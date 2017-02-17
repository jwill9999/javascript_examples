'use strict';

/*
Global names variable
*/

var names = ['Zero', 'one', 'two', 'three'];

function digit_names(n) {
  return names[n];
}

console.log(digit_names(3));

/*
This issue is everytime the function is called 
we have to create a new array in memory which is
inefficient.
*/

function digit_name(n) {
  var names = ['Zero', 'one', 'two', 'three'];
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments, [2]));
  return names[n];
}

console.log(digit_name(0, 1, 2, 3));


/*
Closure in action. Here we ar involking the function with
an IIFI and then returning the function and assighning it 
to the variable. Then when the variable is invoked the 
function returns its value
*/

var digit__name = (function digit_name() {
  var names = ['Zero', 'one', 'two', 'three'];
  return function (n) {

    return names[n];

  };
}());
console.log(digit__name);

console.log(digit__name(3));


/********************************************** */

var add = (function () {

  return function (a) {


    return a * 2;

  };

}());

console.log(add(7));