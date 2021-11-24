// const { add } = require("./calculator");
// const { add1 } = require("./calcu");
// // console.log(add);

// // console.log(subtract(5, 4));

// console.log(add(1, 2));

let a = 10;
console.log(this); //{}
console.log(this == globalThis); //false
console.log(this == global); //false
console.log(this == module.exports); //true
console.log(this == exports); //true

(function QQ() {
  console.log("call QQ");
  console.log(this == globalThis); //true
  console.log(this == global); //true
  console.log(globalThis);
})();
