var a = [2, 9, 9]; 
var b= ['a','b','c','d'];
console.log(a.indexOf(9)); // 1 
console.log(a.indexOf(7)); // -1 === does not exist
console.log(b.indexOf('d'));  // 3

if (a.indexOf(7) === -1) {
  // element doesn't exist in array
  console.log('item does not exist');
}

/*
find all the elements indexof that are the same 
*/

var positions = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var index = array.indexOf(element);
while (index !== -1) {
  positions.push(index);
  index = array.indexOf(element, index + 1);
}
console.log(positions);
// [0, 2, 4]


/*
check if element exists in array and if not add it
*/

function updateShoppingList (shoppingList, item) {
    if (shoppingList.indexOf(item) === -1) {
        shoppingList.unshift(item);
        console.log('New shoppingList item added is : ' + item);
    } else if (shoppingList.indexOf(item) !== -1) {
        console.log(item + ' already exists in the shoppingList.');
    }
}

var shoppingList = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateShoppingList(shoppingList , 'Milk'); 
// New shoppingList is : [ 'Milk', 'potato', 'tomato', 'chillies', 'green-pepper' ]
updateShoppingList(shoppingList , 'Milk'); 
// Milk already exists in the shoppingList.
console.log(shoppingList);

var items = ['milk', 'bread', 'sugar'];

function checkForProduct(item){
    'use strict';
    if (items.indexOf(item) === -1) {
  // element doesn't exist in array
  console.log('item does not exist');
} else {

console.log('item is in your list');

}
}

checkForProduct('socks');
checkForProduct('milk');

