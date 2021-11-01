/**
 * 溢出
 *
 *
 * */

console.log("========= Int8Array ========");
let int8 = new Int8Array(1);
int8[0] = 128;
console.log(int8[0]); // -128

int8[0] = 129;
console.log(int8[0]); // -127

console.log("========= Uint8Array ========");

let uint8 = new Uint8Array(1);
uint8[0] = 256; //100000000  (9 位)
console.log(uint8[0]); //0

uint8[0] = -1; //11111111
console.log(uint8[0]); //255

console.log("========= Uint8ClampedArray ========");

let uint8C = new Uint8ClampedArray(1);
uint8C[0] = 256; //100000000  (9 位)
console.log(uint8C[0]); //255

uint8C[0] = -1; //11111111
console.log(uint8C[0]); //0

console.log("================");

var a = new Float32Array(64);
var b = new Uint8Array(a.buffer);

console.log(a.buffer == b.buffer);

console.log("================");

const buffer = new ArrayBuffer(8);
const uint8Arr = new Uint8Array(buffer);

// Copy the values into the array starting at index 3
uint8Arr.set([1, 2, 3], 3);

//

console.log(uint8Arr);
// expected output: Uint8Array [0, 0, 0, 1, 2, 3, 0, 0]
