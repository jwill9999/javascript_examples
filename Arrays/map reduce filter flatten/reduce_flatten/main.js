var numbers = [1, 2, 3, 4, 5, 6];

//REDUCE

var total = numbers.reduce((a, b) => {
  return a + b;
});
console.log("Total returned is : " + total);



//FLATTEN

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
},[]);

console.log(flattened);