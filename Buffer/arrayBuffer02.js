const buf = new ArrayBuffer(16);

const in32 = new Int32Array(buf);

for (let i = 0; i < in32.length; i++) {
  in32[i] = i * 2;
}

console.log(in32);
//Int32Array(4) [0, 2, 4, 6]

const in16 = new Int16Array(buf);
console.log(in16);
/*
    little-endian:
        Int16Array(8) [0, 0, 2, 0, 4, 0, 6, 0]

    big-endian:
        Int16Array(8) [0, 0, 0, 2, 0, 4, 0, 6]
*/
