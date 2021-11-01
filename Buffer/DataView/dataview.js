const buffer = new ArrayBuffer(24);

let i8 = new Int8Array(buffer);

i8[0] = 128; //10000000
i8[1] = 20; //00010100
i8[2] = 100; //01100100
i8[3] = 10; //00001010
i8[4] = 66; //01000010

console.log(i8);
/*
Int8Array(24) [
  -128, 20, 100, 10, 66, 0, 0,
     0,  0,   0,  0,  0, 0, 0,
     0,  0,   0,  0,  0, 0, 0,
     0,  0,   0
]
*/

let dv = new DataView(buffer);

/**
 * Big-endian
 */
//從第 1 個 byte 讀取一個 8 位無符號整數
let v1_big = dv.getUint8(0);

//從第 2 個 byte 讀取一個 16 位無符號整數
let v2_big = dv.getUint16(1);

//從第 4 個 byte 讀取一個 16 位無符號整數
let v3_big = dv.getUint16(3);

console.log(v1_big); //128
console.log(v2_big); //20 * 2**8 + 100 = 5220
console.log(v3_big); //10 * 2**8 + 66 = 2626

/**
 * Little-endian
 */
//從第 1 個 byte 讀取一個 8 位無符號整數
let v1_little = dv.getUint8(0, true);

//從第 2 個 byte 讀取一個 16 位無符號整數
let v2_little = dv.getUint16(1, true);

//從第 4 個 byte 讀取一個 16 位無符號整數
let v3_little = dv.getUint16(3, true);

console.log(v1_little); //128
console.log(v2_little); //100 * 2**8 + 20 = 25620
console.log(v3_little); //66 * 2**8 + 10 = 16906

dv.setUint16(5, 25, false); //00000000 00011001
//因為是 big-endian，所以 會以 00000000 00011001 順序分別放入 第 6 個 與 第 7 個 byte 中

console.log(i8[5]); //0
console.log(i8[6]); //25

console.log(i8);

var littleEndian = (function () {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true); // 00000001 00000000
  let i8 = new Int8Array(buffer);
  console.log(i8); //Int8Array(2) [ 0, 1 ]
  let i16 = new Int16Array(buffer);
  return i16[0] === 256; //little-endian
  // return i16[0] === 1;  //big-endian
})();

console.log("Is little-endian? ", littleEndian);
