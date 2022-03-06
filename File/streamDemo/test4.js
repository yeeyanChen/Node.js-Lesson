function foo() {
  console.log("This doesn't happen");
}
foo.apply = function () {
  console.log("This happens instead.");
};
foo.apply(null); //This happens instead.
Function.prototype.apply.call(foo, null); //This doesn't happen

let fnBind = (func, arr) => Function.prototype.apply.bind(func, undefined, arr);

console.log(Function.prototype.apply.call(Math.floor, undefined, [1.75]));
console.log(fnBind(Math.floor, [1.75])());
