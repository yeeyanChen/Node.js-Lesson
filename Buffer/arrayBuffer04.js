let arr32 = Uint32Array.of(0x12345678);
const arr8 = new Uint8Array(arr32.buffer);

console.log(arr8);
//[0x78, 0x56, 0x34, 0x12]

//最高位在最高記憶體位址 (因為是由 arr8[3] 去乘以 0x1000000)，代表 little endian
let num = arr8[0] + arr8[1] * 0x100 + arr8[2] * 0x10000 + arr8[3] * 0x1000000;

//最高位在最低記憶體位址 (因為是由 arr8[0] 去乘以 0x1000000)，代表 big endian
let num1 = arr8[0] * 0x1000000 + arr8[1] * 0x10000 + arr8[2] * 0x100 + arr8[3];

console.log(Int8Array.BYTES_PER_ELEMENT);
