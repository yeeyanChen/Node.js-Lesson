const fs = require('fs');
const stream = require("stream");

const path = './docs/english_utf8_bom.txt';
// const path = './docs/doc03.txt';

let readStream = fs.createReadStream(path, {
    // encoding: "utf16le"
    autoClose: false
});
console.log(readStream instanceof fs.ReadStream);  //true

readStream.on("open", (fd) => {
    console.log("open", fd);
}).on("data", (chunk) => {
    console.log(chunk.length);
    readStream.close();
}).on("end", () => {
    console.log("Read end");
}).on("close", () => {
    console.log("Read close");
});
