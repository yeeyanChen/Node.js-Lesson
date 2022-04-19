const CustomReadable = require("./CustomReadable");
process.env.NODE_DEBUG = "stream";
console.log("pid", process.pid);

let data = "Hello~ My name is yeeyan.ch";
// let data = "믯䮿";
let readable = new CustomReadable(data, { highWaterMark: 5, encoding: "utf8" });

console.log(readable._readableState.encoding); //utf8
console.log(readable._readableState.defaultEncoding); //utf8
// const utf16buffer3 = Buffer.from("S0ZD", "base64"); //KFC
// console.log("utf16buffer 3", utf16buffer3); //<Buffer 4b 46 43>
// console.log(utf16buffer3.byteLength);
// console.log(utf16buffer3.length);

// readable.on("data", (chunk) => {
//   console.log("data -> ", chunk);
// });

readable.on("readable", function () {
  let read = readable.read();
  console.log("->", read);
  console.log("amount", read?.length);
});

setTimeout(function () {
  console.log(readable.read());
}, 2000);

readable.on("end", function () {
  console.log("end~~~");
});

// readable.on("data", (chunk) => {
//   console.log("flowing data", chunk); //K
// });

// let a = -1;
// function debuglog(fn) {
//   let b = 100;
//   fn();
// }

// debuglog(() => {
//   console.log(b);
// });

// console.log(process.stderr.hasColors());

// process.stderr.write("ddd🌭");

// const util = require("util");

// let debug = util.debuglog("stream", (fn) => {
//   debug = fn;
// });

// debug("maybeReadMore read 0");
