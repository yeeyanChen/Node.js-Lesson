const { Buffer } = require('buffer');

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// Shares memory with `arr`.
const buf = Buffer.from(arr.buffer);

console.log(buf);  // <Buffer 88 13 a0 0f> 

// Changing the original Uint16Array changes the Buffer also.
arr[1] = 6000;

console.log(buf);  // <Buffer 88 13 70 17>