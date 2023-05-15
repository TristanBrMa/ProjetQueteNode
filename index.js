const userInfo = require("./information");
var cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `hello ${userInfo.name}, so you are studying from ${userInfo.campus}`,
    e: "oO",
    T: "U ",
  })
);
