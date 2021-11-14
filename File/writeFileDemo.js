const fs = require("fs");

// const utf8string = "->😃🧒🏼üčē<-";
const utf8string = "😍"; //<Buffer 3d d8 0d de>
const utf16buffer = Buffer.from(`\ufeff${utf8string}`, "utf16le");
console.log("utf16buffer", utf16buffer); //<Buffer ff fe 3d d8 0d de>

const utf16buffer2 = Buffer.from(utf8string, "latin1");
//因為 latin1(ISO-8859-1) 只會用 1 byte 來編碼，所以超過的部分會自動去掉，因此只保留低位的 3d 與 0d
console.log("utf16buffer 2", utf16buffer2); //<Buffer 3d 0d>
console.log(utf16buffer2.toString("latin1")); //=

const utf16buffer3 = Buffer.from("S0ZD", "base64"); //KFC
console.log("utf16buffer 3", utf16buffer3); //<Buffer 4b 46 43>
console.log(utf16buffer3.toString("base64")); //S0ZD

const utf16buffer4 = Buffer.from("믯䮿", "utf16le");
console.log("utf16buffer 4", utf16buffer4); //<Buffer ef bb bf 4b>
console.log(utf16buffer4.toString("utf16le")); //믯䮿
console.log(utf16buffer4.toString("utf8")); //K

const utf16buffer5 = Buffer.from("믯䮿", "latin1");
console.log("utf16buffer 5", utf16buffer5); //<Buffer ef bf>
console.log(utf16buffer5.toString("latin1")); //ï¿

const utf16buffer6 = Buffer.from("믯䮿", "utf8");
console.log("utf16buffer 6", utf16buffer6); //<Buffer eb af af e4 ae bf>
console.log(utf16buffer6.toString("utf8")); //믯䮿

const utf16buffer7 = Buffer.from("4b46", "hex");
console.log("utf16buffer 7", utf16buffer7); //<Buffer 4b 46>
console.log(utf16buffer7.toString("hex")); //4b46

// fs.writeFile("./docs/test.txt", utf16buffer6, function (err) {
//   console.log("test.txt writing done");
// });

// fs.writeFile("./docs/smileFace_utf16le.txt", "S0Y=", "base64", function (err) {
//   console.log("smileFace_utf16le.txt writing done");
// });

// fs.readFile("./docs/test.txt", function (err, data) {
//   console.log("test.txt", data);
// });

// console.log(Uint8Array.prototype.isPrototypeOf(Buffer.prototype));
