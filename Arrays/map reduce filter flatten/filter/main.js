var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
];


// /******************************************
// ***filter method with callback function****
// ******************************************/

var dogs = animals.filter(function(animals){
    return animals.species === "dog";
});


console.log(dogs);


/****************************************************************
*****************************************************************

Both methods return two objects. This will be the two dog items.
it returns items which respond to TRUE in this case dog. 

returned 

[Object, Object]

Objectname: "Jessica"species: "dog" 
Objectname: "Jacky"species: "dog"


******************************************************************
*****************************************************************/

