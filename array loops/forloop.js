/***********************ALTERNATIVE for loop METHOD FUNCTION TWO*********************************/

/* for loop which takes an array as an argument passed from other function.*/

function numb2(array) {

      //remember to set variable to emptystring object      
      var x = "";
      

      for (var i = 0; i < array.length; i++) {

      x += "for loop number : " + array[i] + "\n";

      }
      return x; // returm the variable to function that requested it
}

module.exports.numb2 = numb2;
