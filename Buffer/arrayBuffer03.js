var buffer = new ArrayBuffer(4);
var uInt8View = new Uint8Array(buffer);
uInt8View[0] = 2;
uInt8View[1] = 1;
uInt8View[2] = 3;
uInt8View[3] = 7;

//[0x02, 0x01, 0x03, 0x07]
console.log(uInt8View); //Uint8Array(4) [ 2, 1, 3, 7 ]

const uInt16View = new Uint16Array(buffer);

//因為電腦是 little-endian，所以前兩個 bytes 的值為 0x0102 (258)
//後兩個 bytes 的值為 0x0703 (1795)

if (uInt16View[0] === 0x0102) {
  console.log("Yes, it's little-endian"); // Yes, it's little-endian
}

uInt16View[0] = 255; // bytes 變為 [0xFF, 0x00, 0x03, 0x07]
console.log(uInt16View);

uInt16View[0] = 0xff05; // bytes 變為 [0x05, 0xFF, 0x03, 0x07]
uInt16View[1] = 0x0210; // bytes 變為 [0x05, 0xFF, 0x10, 0x02]

console.log(uInt8View); //[5, 255, 16, 2]]
