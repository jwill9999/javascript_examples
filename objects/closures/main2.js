/***********************
 * pushing a function into 
 * an array
 *  
 * ********************/

var a = [];

var b = function () {
  a.push(function () {
    return a * b;
  });

};

b();
console.log(a); // [ [Function] ]

/*****************************
 * 
 * closure example 2
 * 
 ********************************/

var d = [];

var e = function (a, b) {

  d.push(function (a, b) {
    return a * b;
  });

};

var result = e(2, 2);
console.log(result); // undefined as function not run its just pushed a function to array
console.log(d); // [ [Function] ]

/***********************************
 * closures using IIFE
 *  
 ***************************************/

var f = [];

var g = function (a, b) {

  f.push((function () {
    var result = a * b;
    return result;
  }(a, b))); // [4]

};

var result = g(2, 2);
console.log(f); // [4]