function Test() {}

console.log(
  Test[Symbol.hasInstance] === Function.prototype[Symbol.hasInstance]
);

class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
  static name() {
    return "Array1";
  }
}

console.log([] instanceof Array1);
console.log(
  Array1[Symbol.hasInstance] === Function.prototype[Symbol.hasInstance]
); //false

let FunctionPrototypeSymbolHasInstance = (fn, ...arg) =>
  Function.prototype[Symbol.hasInstance].call(fn, ...arg);

console.log(FunctionPrototypeSymbolHasInstance(Array1, []));
