const { Readable, Writable, Duplex } = require("stream");

let duplex = new Duplex();

console.log(duplex instanceof Readable); //true
console.log(duplex instanceof Writable); //true

console.log(Duplex.prototype.__proto__ === Readable.prototype); //true
console.log(Duplex.prototype.__proto__ === Writable.prototype); //false
