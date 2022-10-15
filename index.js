console.log("hello")
exports.fun = function() {
    console.log("This is a message from the demo package");
  }
const {fun}=require('./');
console.log(fun());
