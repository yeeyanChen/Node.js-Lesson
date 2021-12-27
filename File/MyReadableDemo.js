const MyReadable = require("./MyReadable");
const data = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];
const readable = new MyReadable(data, { objectMode: true, highWaterMark: 2 });
console.log(readable.readableFlowing); // null

// readable.pause();
// console.log("data 出來 2!", readable.read());
// console.log("data 出來 2!!", readable.read());
// console.log("data 出來 2!!!", readable.read());

// console.log(readable.readableFlowing); // true

// readable.on("readable", () => {
//   // console.log("拿資料囉");
//   // setTimeout(function () {
//   // console.log("-----------------------------");
//   console.log("read 出來", readable.read());
//   // console.log("read 完了啦幹~");
//   // console.log("-----------------------------");
//   // }, 5000);
// });

// console.log("pause 嗎?", readable.isPaused());
// console.log("flowing 嗎?", readable._readableState.flowing);

readable.on("data", (chunk) => {
  console.log("data 出來", chunk);
  // readable.pause();
});

readable.pause();

// console.log("length 嗎?", readable._readableState.reading);

// console.log("pause 2 嗎?", readable.isPaused());
// console.log("flowing 2 嗎?", readable._readableState.flowing);

console.log(readable.readableFlowing); // false
readable.on("end", () => console.log("No more data!"));
readable.on("close", () => console.log("Closed!"));
