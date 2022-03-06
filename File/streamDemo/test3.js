class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
  static name() {
    return "Array1";
  }
}
let n = "name";

console.log([] instanceof Array1); // true

console.log(Array1[Symbol.hasInstance]([])); // true
console.log(Array1.name()); // Array1
console.log(Array1[n]()); // Array1

let ob = {
  a: 1,
  b: 2,
};

let { a: a1, b: b1 } = ob;
console.log(a1, b1);

console.log(Array1[Symbol.hasInstance].__proto__ == Function.prototype); //true

function Person() {}

console.log(Function.__proto__ === Function.prototype);

function callMethod() {
  method(1, 2, 3);
}

function method(a, b, c) {
  console.log(arguments.callee);
  console.log(arguments.callee.caller);
  console.log(method.caller);
}

callMethod();

console.log(method.length);

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}

console.log(factorial(4)); //24

const { [Symbol.hasInstance]: FunctionPrototypeSymbolHasInstance } =
  Function.prototype;

console.log(FunctionPrototypeSymbolHasInstance.length);
