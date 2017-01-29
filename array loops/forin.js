
var numb3 = function (array) {

  //REMEMBER to set variable to empty string object.
  var x = "";

  //for in loop
  for (var i in array) {

    //each value is stored each time an += array[i]      
    x += "for in loop number : " + array[i] + '\n';

  }
  //we return its stored value x to the function that sent it
  return x;
};



module.exports.numb3 = numb3;