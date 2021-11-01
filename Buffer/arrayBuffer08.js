console.log("========= TypedArray.prototype.set ========");

const buf = new ArrayBuffer(3);
const uint8_1 = new Uint8Array(buf);

uint8_1[0] = 255;
uint8_1[1] = 257;
uint8_1[2] = 8;
console.log(uint8_1); //Uint8Array(3) [ 255, 1, 8 ]

const uint8_2 = new Uint8Array(8);
uint8_2.set(uint8_1, 2);

console.log(uint8_2); //Uint8Array(8) [ 0, 0, 255, 1, 8, 0, 0, 0]

console.log(uint8_2.buffer == uint8_1.buffer); //false

console.log("========= TypedArray.prototype.subarray ========");

const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

const uint8Copy = uint8.subarray(1, 3);
console.log(uint8Copy); //Uint8Array(2) [20, 30]

console.log(uint8Copy.buffer === uint8.buffer); //true

console.log("========= TypedArray.prototype.slice ========");

let ui8 = Uint8Array.of(0, 1, 2);
const ui8Copy = ui8.slice(-1);
console.log(ui8.buffer === ui8Copy.buffer); //false

console.log("=========  TypedArray.from 與 TypedArray.prototype.of ========");

const ui8_2 = Uint8Array.of(128, 1, 2);
console.log(ui8_2); //[128, 1, 2]

var ui16 = Int8Array.from(ui8_2);
console.log(ui16 instanceof Uint16Array); // true

console.log(ui16); //[-128, 1, 2]
