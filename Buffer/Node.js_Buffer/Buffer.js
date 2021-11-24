// console.log(globalThis.Buffer);
let buffer = Buffer.from([65, 66, 67]);
console.log(buffer);
console.log(buffer.toString());

let buffer_loveFace = Buffer.from([0x3d, 0xd8, 0x0d, 0xde]);
console.log("buffer_loveFace", buffer_loveFace.toString("utf16le"));

const loveFace = "😍"; //<Buffer 3d d8 0d de>
const buffer_loveFace2 = Buffer.from(`\ufeff${loveFace}`, "utf16le");
console.log("buffer_loveFace2", buffer_loveFace2.toString("utf16le")); //<Buffer ff fe 3d d8 0d de>
