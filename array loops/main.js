/****************************FUNCTION THREE*******************************************/

/*write function using id and innerHTML*/

var write = function(text) {
      try {
            if (typeof text !== "string") {
                  console.log("Error : Not a string");
                  throw {
                        message: "The following error occured : ",
                        decription: "Not a string",

                  };
            } else {
                  document.getElementById("demo").innerHTML = text;
            }
      } catch (e) {
            document.getElementById("demo").innerHTML = e.message + " " + e.decription;
      }

};

/****************************FUNCTION TWO***********************************************/

var numb2 = function(array) {

      //REMEMBER to set variable to empty string object.
      var x = "";

      //for in loop
      for (var i in array) {

            //each value is stored each time an += array[i]      
            x += "This is number : " + array[i] + "<br>";

      }
      //we return its stored value x to the function that sent it
      return x;
};


/****************************FUNCTION ONE***********************************************/
/*IIFE which takes an array and passes it around (Immediate invocted function expression)*/
(function myFunction() {
      var x, text;

      x = ["a", "b", "c", "d", 5, 6, 7, 8, 9];

      /*we pass array(x) to numb2 function with x.
      x is returned after the array function loops
      through it and we set the returned value to text*/
      text = numb2(x);

      /*We the send the result(text) to the print function*/
      write(text);
}());



/***********************ALTERNATIVE METHOD FUNCTION TWO*********************************/

/* for loop which takes an array as an argument passed from other function.*/

/*var numb2 = function(array) {

      //remember to set variable to emptystring object      
      var x = "";

      for (var i = 0; i < array.length; i++) {

      x += "This is number : " + array[i] + "<br>";

      }
      return x; // returm the variable to function that requested it
};*/


/*
1.This example takes three functions
2.The first passes its array value to function numb2 so it 
  can loop over each value and prepare it to be printed to screen.
3.The numb2 function recieves the array and loops through it.
  It the palces each value on a new line and adds a string to it.
4.The result is returned to the original function by the return key word.
5.This return value numb2(x) stores its result in var text.
6.Var text is then passed to the write function.
7.The write function takes this value and prints to div with id "demo"
*/