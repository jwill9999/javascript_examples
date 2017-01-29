var a = ['A', 'B', 'C'];
a.join();      
a.join(', ');  
a.join(' + '); 
a.join('');    

console.log(a.join());        //A,B,C

console.log(a.join(',  '));   //A,  B,  C

console.log(a.join(' + '));   //A + B + C

console.log(a.join('  '));    //A  B  C

console.log(a.join(' -  '));  //A -  B -  C



