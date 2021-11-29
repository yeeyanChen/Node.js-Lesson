const buffer = require('buffer')
let uint8 = new Uint8Array(1);

uint8[0] = 256; //100000000
console.log(uint8[0]); //0

uint8[0] = -1; //11111111
console.log(uint8[0]); //255


let buf = Buffer.alloc(5);
console.log(buf);     // <Buffer 00 00 00 00 00>
buf.fill('䙋', 1, 3, "utf16le")
console.log(buf);     // <Buffer 00 4b 46 00 00>
console.log(buf.toString("utf16le"));   //䬀F

const buf1 = Buffer.alloc(3, 'S0ZD', 'base64');
console.log(buf1);
console.log(buf1.toString());

const buf2 = Buffer.alloc(2, '䙋', 'utf16le');
console.log(buf2);
console.log(buf2.toString());

const buf3 = Buffer.allocUnsafe(10);
console.log(buffer.kMaxLength);
console.log(buffer.constants.MAX_LENGTH);


let size = 4*1024*1024*1024;
const buf4 = Buffer.alloc(size);



console.log(buffer.constants.MAX_STRING_LENGTH);  //536870888  (2**29-24 差不多為 512 MB)



const str = '\u00bd + \u00bc = \u00be';
console.log(`${str}: ${str.length} characters, ` +
            `${Buffer.byteLength(str, 'utf8')} bytes`);

console.log(Buffer.byteLength('\u00bd', 'utf8'));  //2
console.log(Buffer.byteLength('我', 'utf8'));  //3
console.log(Buffer.byteLength('我', 'utf16le'));  //2


let _1_2Buffer = Buffer.from("\u00bd", 'utf8');
console.log(_1_2Buffer);   //<Buffer c2 bd>
console.log(_1_2Buffer.byteLength); //2

let meBuffer = Buffer.from("我", 'utf16le');
console.log(meBuffer);   //<Buffer e6 88 91>
console.log(meBuffer.byteLength); //3


console.log(Buffer.allocUnsafe(10000))