const stream = require("stream");

const readableStream = new stream.Readable({
  read(size) {
    console.log("reading", size);

    readableStream.push("hi!");
    // readableStream.push("ho!");
    // readableStream.push("KFC");
  },
});
readableStream.pause();
// console.log( readableStream._readableState );
readableStream.on("readable", () => {
  console.log(readableStream.read());
});

// const writableStream = new stream.Writable({
//   write(chunk, encoding, next) {
//     console.log(chunk.toString());
//     console.log("======================");
//     next();
//   },
// });

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   console.log("======================");
//   next()
// };

// process.stdin.pipe(writableStream)
// readableStream.pipe(writableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// readableStream.on("end", () => {
//   console.log("read end");
// });

// readableStream._destroy = (err) => {
//     console.log("destroyed");
// }

// readableStream.push(null);
