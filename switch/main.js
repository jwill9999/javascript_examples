
/*IIFE switch statement*/ 

(function day () {
var day;

/**********************************************************************************************
  takes new date object with get date method which returns a current day as a number index(0-6)
  this is passed down the stack till the number is found
  once number found it returns the value which is equal to a day
  the break key word throws you out of the statement
  case = getDate(returned value numb) 0-6
  if day is = 2
  day = "tuesday" and this will be returned
  if day is = 6
  day = "Saturday" and this will be returned
***********************************************************************************************/
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}

/*the inner html is written to the P tag with an id of "demo" with day as its variable*/

document.getElementById("demo").innerHTML = "Today is " + day;

}());