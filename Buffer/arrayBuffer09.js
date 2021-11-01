console.log(Int8Array.of(127, 126, 125).map((x) => 2 * x));
//2 * 127 = 254  溢出，值為 -128+127-1 = -2
//2 * 126 = 252  溢出，值為 -128+125-1 = -4
//2 * 125 = 250  溢出，值為 -128+123-1 = -6

//Int8Array(3) [ -2, -4, -6 ]

console.log(Int16Array.from(Int8Array.of(127, 126, 125), (x) => 2 * x));
//2 * 127 = 254  沒有溢出，值為 254
//2 * 126 = 252  沒有溢出，值為 252
//2 * 125 = 250  沒有溢出，值為 250

//Int16Array(3)[(254, 252, 250)];

const ui8 = Uint8Array.of(128, 1, 2);
console.log(ui8); //Uint8Array(3) [ 128, 1, 2 ]
const i8 = Int8Array.from(ui8);
console.log(i8 instanceof Int8Array); // true
console.log(i8); //Int8Array(3) [ -128, 1, 2 ]

console.log(ui8.buffer == i8.buffer); //false
