//find index of an array item

    var fruits = ["Strawberry", "Banana", "Mango"]

    var pos = fruits.indexOf('Banana');

    console.log(pos);
    // 1

//Then remove item only by index(Banana at pos 1)

    var removedItem = fruits.splice(pos, 1); // this is how to remove an item,

    console.log(removedItem);
    //return [ 'Banana' ]