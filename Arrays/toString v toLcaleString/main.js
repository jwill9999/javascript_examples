var number = 1337;
var date = new Date();
var myArr = [number, date, 'foo'];

var str = myArr.toString(); 
var strs = myArr.toLocaleString(); 

console.log(str); //1337,Sun Jan 29 2017 22:20:22 GMT+0000 (GMT),foo
console.log(strs); // 1337,1/29/2017, 10:20:22 PM,foo   // if run in a German (de-DE) locale with timezone Europe/Berlin