const fs = require('fs');
const stream = require("stream");

const path = './docs/english_utf8_bom.txt';
// const path = './docs/doc03.txt';
const writePath = './docs/writeStream.txt';

let readStream = fs.createReadStream(path, {
    encoding: "utf16le"
});

let writeStream = fs.createWriteStream(writePath, {
    encoding: "utf16le"
});

readStream.on("open", (fd) => {
    console.log("open", fd);
}).on("data", (chunk) => {
    console.log(chunk);
    
    writeStream.write(chunk);
}).on("end", () => {
    console.log("Read end");
}).on("close", () => {
    console.log("Read close");
});

// writeStream.on("drain", (data) => {
//     console.log("drain",data.length);
// })

