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
    return '\n'+ animals.name + " is a " + animals.species;
});
names = names.toString();
console.log(names);



/*RESULTS

        Jason is a rabitt,
        Jessica is a dog,
        Jacky is a dog,
        Luke is a fish,
        Junior is a cat,
        Thomas is a cat
*/