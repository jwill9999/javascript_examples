function list() {
  return Array.prototype.slice.call(arguments);
}

var result = list(1,2,3);
console.log(result);

// results [ 1, 2, 3 ]