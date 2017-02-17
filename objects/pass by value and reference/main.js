
/***************by value******************* */
/*
ALL PRIMATIVES
When you reference a value to equal another value
You are in effect creating a new memory space and you
are not referencing the same memory as the first
 */

var a = 10;
var b;

b = a;
console.log(a); //10
console.log(b); //10
a = 2;
console.log(a); //2
console.log(b); //10


/*******************by Reference********************* */
/*
ALL OBJECTS
When you reference an objects value to equal another value
You are in effect pointing to the same space in memory 
 */

var c = {
  name: "john"
};
var d;
console.log(c); // { name: 'john' }
d = c;
console.log(d); // { name: 'john' }

c.name = "Jane";
console.log(c); // { name: 'Jane' }
console.log(d); // { name: 'Jane' }

/*
Here we pass object d into the function and change
its name property. Because D and c are objects and they
are looking at the same reference in memory there values
will both change as object d is updated */

function greet(obj) {
  obj.name = "Mary";
}

greet(d);
console.log(d); //{ name: 'Mary' }
console.log(c); //{ name: 'Mary' }

/*
However if we use the equals operator to set a value we
are creating a new memory space and therefore they will not be
referencing the same memory space
*/

c = {
  name: "Jim"
};
console.log(c); // { name: 'Jim' }
console.log(d); // { name: 'Mary'}
