
var secondtime, thirdtime, last;


var addthreenumbers = function ( a, b, c ) {

    return function(b){

       return function(c) {

           return a + b + c;
           
       };
    };
};

function print() {

    document.getElementById("demo").innerHTML = last;
} 

secondtime = addthreenumbers(4);
thirdtime = secondtime(4);
last = thirdtime(4);
print();


