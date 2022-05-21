const fs = require("fs");
const stream = require("stream");

const path = "./docs/english_utf8_bom.txt";
// const path = './docs/doc03.txt';
const writePath = "./docs/writeStream.txt";

let readStream = fs.createReadStream(path, {
  encoding: "utf16le",
});

let writeStream = fs.createWriteStream(writePath, {
  encoding: "utf16le",
  autoClose: false,
  //   emitClose: false,
});

readStream
  .on("open", (fd) => {
    console.log("open", fd);
  })
  .on("data", (chunk) => {
    console.log(chunk);

    writeStream.write(chunk);
  })
  .on("end", () => {
    console.log("Read end");
    writeStream.end();
  })
  .on("close", () => {
    console.log("Read close");
    writeStream.destroy(); //如果 autoClose 為 true，那在觸發 error 或是 finish event 時，就會自動關閉 file descriptor，所以就不需要這行
  });

writeStream.on("finish", () => {
  console.log("Write finish");
});

writeStream.on("close", () => {
  console.log("Write close");
});

// writeStream.on("drain", (data) => {
//     console.log("drain",data.length);
// })
