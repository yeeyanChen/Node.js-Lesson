const stream = require("stream");
const readableStream = new stream.Readable();

let arr = ["hi!", "ho!", "KFC"];
let i = 0;
readableStream._read = () => {
  console.log("reading");
  if (i < arr.length) readableStream.push(arr[i++]);
};

readableStream.on("readable", () => {
  console.log(readableStream.read());
});
