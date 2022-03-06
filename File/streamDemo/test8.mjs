// const stream = require("stream");

import * as stream from "stream";

const readableStream = new stream.Readable({
  read() {},
});
const writableStream = new stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

readableStream.pipe(writableStream);

readableStream.push("hi!");
readableStream.push("ho!");

readableStream.on("close", () => {
  console.log("FuCK");
  writableStream.end();
});
writableStream.on("close", () => {
  console.log("ended");
});

readableStream.destroy();
