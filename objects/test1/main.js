









var f = [];

var g = function (a, b) {

  f.push((function () {
    var result = a * b;
    return result;
  }(a, b))); // [4]

};

var result = g(2, 2);
console.log(f); // [4]


function Person(name, age) {
  this.name = name;
  this.age = age;

  this.info = function () {
    console.log(this.name + ' is ' + this.age + ' years old.');
  };
}
Person.prototype.noise = 'Hello';
var me = new Person('jason', 20);

console.log(me);  // Person { name: 'jason', age: 20, info: [Function] }
console.log(me.info());  // jason is 20 years old.
console.log(me instanceof Person); // true

for (var prop in me) {
 console.log(prop + ' : ' + me[prop]);
}

/*
RESULT
name : jason
age : 20
 info : function (){
console.log(this.name + ' is ' + this.age + ' years old.');
}
*/

console.log(me.hasOwnProperty('name')); //true
console.log(me.hasOwnProperty('noise')); //false as its a prototype





/**************function Factory *************** */

/****************decorator pattern**************** */

