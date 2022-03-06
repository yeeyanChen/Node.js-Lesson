console.log(Buffer.from([0xe2, 0x82, 0xac]).toString()); //€

const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder(NaN);
console.log(decoder.encoding);

console.log(decoder.write(Buffer.from([0xe2]))); //
console.log(decoder.write(Buffer.from([0x82]))); //
console.log(decoder.end(Buffer.from([0xac]))); //€

const cent = Buffer.from([0xe6, 0x88, 0x91]);
console.log(decoder.write(cent)); //我
console.log(decoder.end()); //
