        /********************
         constructor function
        **********************/

var Person = function (firstName, lastName){

    this.firstName = firstName || "default";
    this.lastName = lastName || "default";

};

/*****************************************
        Prototype inheritance
 *****************************************/

Person.prototype.fullName = function () {

    var msg;

    msg = this.firstName + " " + this.lastName;
    console.log(msg);
    //document.getElementById("demo").innerHTML = msg;

};

//new person created from Person Constructor
var person1 = new Person("Jason", "Williams");
var person2 = new Person();

//prototype fullName() function SHARED NOT COPIED with person object through prototype chain.
person1.fullName(); 

//when no arguments are passed such as firstNmae it adds default value as set in constructor above.
person2.fullName();