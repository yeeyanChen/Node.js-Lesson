var resolvePromise;

this.promise = new Promise(function promiseExecutor(resolve) {
  resolvePromise = resolve;
});

console.log(resolvePromise.toString());

let buf = Buffer.from("믯䮿", "utf16le");
console.log(buf); //<Buffer ef bb bf 4b>
console.log(buf.byteLength); //4
console.log(buf.toString());

function hello(...args) {
  let { 1: elem } = args;
  console.log(elem);
}
hello(10, 100);

let arr = ["a", "b"];

let { 1: arr2 } = arr;
console.log(arr2);
