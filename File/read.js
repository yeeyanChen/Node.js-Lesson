function foo() {
  console.log("This doesn't happen");
}
foo.apply = function () {
  console.log("This happens instead.");
};
// foo.apply(null); //This happens instead.
// Function.prototype.apply = function () {
//   console.log("Fuck you");
// };

// Function.prototype.apply.call(foo, null); //This doesn't happen

let newFn = (func) => func.bind(func);

let bindFn = newFn(foo);
bindFn();

console.log(globalThis.primordials);
