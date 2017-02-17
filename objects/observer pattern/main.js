/**************observer pattern********************** */

var Observable = function () {

  this.subscribers = [];
};

Observable.prototype = {
  subscribe: function (subscriber) {
    this.subscribers.push(subscriber);
  },
  unsubscribe: function (unsubscriber) {
    for (var i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === unsubscriber) {
        this.subscribers.splice(i, 1);
        return unsubscriber.name;
      }
    }
  },
  publish: function (data) {
    for (var i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].recievedData(data);
    }
  }
};

var Person1 = {
  name: 'person1',
  recievedData: function (data) {
    console.log(this.name + ' recieved your data : ' + data);
  }
};

var Person2 = {
  name: 'person2',
  recievedData: function (data) {
    console.log(this.name + ' recieved your data : ' + data);
  }
};

var observable = new Observable();

observable.subscribe(Person1);
observable.subscribe(Person2);

observable.publish('The value of Gold is now $80'); // both recieved person1 recieved your data : The value of Gold is now $80 //person1 recieved your data : The value of Gold is now $80

console.log('This person unsubscribed ' + observable.unsubscribe(Person1)); //This person unsubscribed person1