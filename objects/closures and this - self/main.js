var c = {
  name: "Testing",
  log: function () {
    var self = this;
    self.name = "Updated";
    console.log(self);

    var setName = function (name) {
      self.name = name;
      console.log(self);

    };
    setName("Peter");
    console.log(self);
  },

};

c.log();