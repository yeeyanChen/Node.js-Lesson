const fs = require("fs");
const fsPromises = require("fs/promises");

(async () => {
  let promise;
  try {
    promise = await fsPromises.open("./yeeyans.txt");
    const status = await promise.stat("./yeeyans.txt");
    console.log(status);
    promise.close();
  } catch (e) {
    console.log(e);
  }
})();

// fs.open("yeeyan.txt", "w", (err, fd) => {
//   if (err) {
//     if (err.code === "EEXIST") {
//       console.error("myfile already exists");
//       return;
//     }
//   } else {
//     console.log(fd);
//   }
// });
