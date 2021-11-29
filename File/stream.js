const fs = require("fs");
const { Readable, Writable } = require( "stream" );
const readStream = fs.createReadStream("./docs/doc03.txt", {
  // encoding: "utf8"
  //highWaterMark: 64*1024
});
console.log(readStream instanceof Readable);
console.log(global.ReadableStream);
// console.log(Readable);
// console.log(ReadStream);

const writeStream = fs.createWriteStream("./docs/doc04.txt");
console.log(readStream instanceof Writable);


// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk)
//   console.log(chunk.length);
//   // writeStream.write("\nNEW CHUNK\n");
//   // writeStream.write(chunk);
// });
