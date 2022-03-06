const CustomWritable = require("./CustomWritable");
const data = ["first element", "second element", "last element"];
const writable = new CustomWritable({ highWaterMark: data[0].length });
// const written = writable.write(data[0]);

// for (let d of data) {
//   writeData(d);
// }

// writable.write(data[1]);
// writable.write(data[2]);
// console.log(written);

// writable.on("drain", () => {
//   console.log("drain event");
// });
for (let i = 0; i < data.length; i++) {
  let written = writable.write(data[i]);
  if (written) continue;
  let x = true;
  writable.once("drain", () => {});
  // (async function drainEvent() {
  //   await (() =>
  //     new Promise((resolve, reject) => {
  //       writable.once("drain", () => {});
  //       resolve();
  //     }))();
  // })();
}

// if (!writable.write(data[0])) {
//   writable.once("drain", () => {
//     console.log("drain event 1");
//     if (!writable.write(data[1])) {
//       writable.once("drain", () => {
//         console.log("drain event 2");
//         if (!writable.write(data[2])) {
//           writable.once("drain", () => {
//             console.log("drain event 3");
//           });

//           writable.once("finish", () => {
//             console.log("finish");
//           });
//         }
//       });
//     }
//   });
// }

// console.log(Buffer.isEncoding("utf8"));
// console.log(Buffer.isEncoding("ascii"));
// console.log(Buffer.isEncoding("base64"));

// let meBuffer = Buffer.from("我", "utf8");
// console.log(meBuffer.length); // 3
// console.log(meBuffer.byteLength); //3
