const fs = require("fs");
// fs.rm("./test1", { recursive: false }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("test1 is removed");
// });

fs.rmdir("./test1", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("test1 is removed");
});
