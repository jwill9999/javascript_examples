var object = {
  name: "Jason",
  age: 30
};

var result = JSON.stringify(object);
console.log(result); // {"name":"Jason","age":30}

var result1 = JSON.parse(result);
console.log(result1); // { name: 'Jason', age: 30 }