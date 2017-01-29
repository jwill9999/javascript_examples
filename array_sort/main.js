var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
var numbers = numbers.sort();
console.log('__________________________________________________________________');
console.log(numbers);
/*RESULTS

[ 1, 12, 2, 23, 234, 33, 5, 7, 77, 99 ]

*/

var numbers2 = [1, 12, 2 ,23,77,7,33,5,99,234,];
var numbers3 = numbers2.sort((a, b) => {
   return a - b;
});
console.log('__________________________________________________________________');
console.log(numbers3);

/*RESULTS

[ 1, 2, 5, 7, 12, 23, 33, 77, 99, 234 ]

*/

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('__________________________________________________________________');
console.log('__________________________________________________________________');
console.log('Base arrays');
console.log(stringArray);
console.log(numericStringArray);
console.log(numberArray);
console.log(mixedNumericArray);
console.log('__________________________________________________________________');
console.log('__________________________________________________________________');
console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());
console.log('__________________________________________________________________');
console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));
console.log('__________________________________________________________________');
console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));
console.log('__________________________________________________________________');
console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
console.log('__________________________________________________________________');