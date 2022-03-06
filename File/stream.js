const fs = require("fs");
const { Readable, Writable } = require("stream");
const readStream = fs.createReadStream("./docs/doc03.txt", {
  // encoding: "utf8"
  highWaterMark: 64 * 1024,
  // fs: {
  //   open() {
  //     console.log("open");
  //   }
  // }
});

// console.log(readStream instanceof Readable);

// const writeStream = fs.createWriteStream("./docs/doc04.txt");
// console.log(writeStream instanceof Writable);

// readStream.pipe(writeStream)

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  // console.log(chunk)
  console.log(chunk.length);
  // writeStream.write("\nNEW CHUNK\n");
  // writeStream.write(chunk);
});
