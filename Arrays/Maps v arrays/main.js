var array = [[1,2],[3,4]];

var myMap = new Map(array);

console.log(myMap);
console.log(myMap.size); //2


var mapIter = myMap.entries();

for(var i of mapIter){
  console.log(i);
}

// [ 1, 2 ]
// [ 3, 4 ]

var mapIters = myMap.keys();

for(var i of mapIters){
  console.log(i);
}
// 1, 3

myMap.set(10,20);
console.log(myMap); // Map { 1 => 2, 3 => 4, 10 => 20 }