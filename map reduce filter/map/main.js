var animals = [
    { name: "Jason", species:"rabitt"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"dog"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"cat"},
    { name: "Thomas", species:"cat"}
]


/******************************************
***Map method with callback function****
******************************************/

var names = animals.map(function(animals){
    return animals.name;
});

/********************************************
*********  for loop method  *****************
********************************************/

/*

var names = [];
for(var i = 0 ; i < animals.length; i++){
    names.push(animals[i].name)
    }


*/
console.log(names);



/****************************************************************
*****************************************************************

Map calls a provided callback function once for each element in
an array, in order, and constructs a new array from the results. 

returned 

["Jason", "Jessica", "Jacky", "Luke", "Junior", "Thomas"]
0
:
"Jason"
1
:
"Jessica"
2
:
"Jacky"
3
:
"Luke"
4
:
"Junior"
5
:
"Thomas"
length
:
6

******************************************************************
*****************************************************************/