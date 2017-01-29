var numb2 = require('./forloop').numb2;
var numb3 = require('./forin').numb3;
var foreach = require('./foreach').foreach;
var array1 = [1, 2, 3, 4, 5, 6, ];
var a, b, c;


/****************************FUNCTION THREE*******************************************/

/*write function using id and innerHTML*/

function write(text) {
      try {
            if (typeof text !== "string") {
                  console.log("Error : Not a string");
                  throw {
                        message: "The following error occured : ",
                        decription: "Not a string",

                  };
            } else {
                  console.log(text + '------------------------------------------------------------');
                  //document.getElementById("demo").innerHTML = ;
            }
      } catch (e) {
            console.log(e.message + " " + e.decription);
            //document.getElementById("demo").innerHTML = e.message + " " + e.decription;
      }

}


a = numb3(array1); //forin
write(a);
b = foreach(array1); //foreach
write(b);
c = numb2(array1); //forloop
write(c);




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