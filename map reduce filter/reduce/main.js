var numbers = [1, 2, 3, 4, 5, 6];

var total = numbers.reduce((a, b) => {
  return a + b;
});
console.log("Total returned is : " + total);