/************Singleton pattern************** */

function Hero(name){
  console.log(typeof Hero.instance)
  if(typeof Hero.instance === "object"){  // small object not Object
    return Hero.instance;
  }
  this.name = name;
  Hero.instance = this;
  return this;
}

var derek = Hero('Derek');
console.log(derek.name);  // Derek

var bill = Hero('Bill');
console.log(bill.name);  // Derek as only one can be created 