const buf = new ArrayBuffer(32);

const dataView = new DataView(buf);

console.log(dataView.getUint8(0));

console.log(buf.byteLength); //32 bytes

const newBuf = buf.slice(0, 3);

console.log(newBuf);

console.log("=====================");

//RangeError: start offset of Int16Array should be a multiple of 2
// var buffer = new ArrayBuffer(8);
// var i16 = new Int16Array(buffer, 1, 1);
// console.log(i16);

var x = new Int8Array([255, 1, 5]);
console.log(x.buffer);
var y = new Int8Array(x.buffer);

x[0] = 100;
console.log(y);
