
//The forEach() method executes a provided function once for each array element.

function foreach(array) {
  array = array;
  var a = "";
  array.forEach(function (element, index) {
    a += "forEach Index : " + index + " : Element : " + element + '\n';
  });
  return a;
}


module.exports.foreach = foreach;